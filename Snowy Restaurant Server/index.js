const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 3000;

// Middleware ==============
app.use(cors());
app.use(express.json());

// MongoDB URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.htex290.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const usersCollection = client.db('restaurantDB').collection('users');
    const menuCollection = client.db('restaurantDB').collection('menu');
    const reviewCollection = client.db('restaurantDB').collection('reviews');
    const cartCollection = client.db('restaurantDB').collection('carts');

    // Jwt related api
    app.post('/jwt', async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.TOKEN_SEC, {
        expiresIn: '1d',
      });
      res.send({ token });
    });

    // Veryfy token middleware =====
    const verifyToken = (req, res, next) => {
      console.log('inside verify token ', req.headers.authorization);
      if (!req.headers.authorization) {
        return res.status(401).send({ message: 'unauthorized access' });
      }
      const token = req.headers.authorization.split(' ')[1];
      jwt.verify(token, process.env.TOKEN_SEC, (err, decoded) => {
        if (err) {
          return res.status(401).send({ message: 'unauthorized access' });
        }
        req.decoded = decoded;
        next();
      });
    };

    // VerifyAdmin middleware
    const verifyAdmin = async (req, res, next) => {
      const email = req.decoded.email;
      const query = { userEmail: email };
      const result = await usersCollection.findOne(query);
      const isAdmin = result?.role !== 'admin';
      if (isAdmin) {
        return res.status(403).send({ message: 'Forbidden access' });
      }
      next();
    };

    app.post('/users', async (req, res) => {
      const user = req.body;
      const query = { userEmail: user.userEmail };
      const existingUser = await usersCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: 'User Allready Exists', insertedId: null });
      }
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });
    app.get('/users', verifyToken, verifyAdmin, async (req, res) => {
      // const authoriz = req.headers;
      // console.log(authoriz);
      const result = await usersCollection.find().toArray();
      res.send(result);
    });
    // Check Admin
    app.get('/user/admin/:email', verifyToken, async (req, res) => {
      const email = req.params.email;
      // console.log('user admin email :::: ', email);
      console.log('request ddecoded  :::: ', req.decoded.email);

      if (email !== req.decoded.email) {
        return res.status(403).send({ message: 'Forbidden access' });
      }
      const query = { userEmail: email };
      const userAdmin = await usersCollection.findOne(query);
      // console.log('admin user::: ', userAdmin.role);
      let admin = false;
      if (userAdmin) {
        admin = userAdmin?.role === 'admin';
      }
      res.send({ admin });
    });

    app.delete('/user/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = usersCollection.deleteOne(query);
      res.send(result);
    });
    app.patch('/user/admin/:id', async (req, res) => {
      const id = req.params.id;
      const flter = { _id: new ObjectId(id) };
      const doc = {
        $set: {
          role: 'admin',
        },
      };
      const result = usersCollection.updateOne(flter, doc);
      res.send(result);
    });

    app.get('/menu', async (req, res) => {
      const result = await menuCollection.find().toArray();
      res.send(result);
    });

    app.get('/reviews', async (req, res) => {
      const result = await reviewCollection.find().toArray();
      res.send(result);
    });
    // Cart data get
    app.get('/carts', async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const result = await cartCollection.find(query).toArray();
      res.send(result);
    });
    // Cart data delete
    app.delete('/carts-delete:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });
    // // My Cart data get
    // app.get('/my-carts', async (req, res) => {
    //   const email = req.query.email;
    //   const query = { email: email };
    //   const result = await cartCollection.find(query).toArray();
    //   res.send(result);
    // });
    // Cart adding method
    app.post('/carts', async (req, res) => {
      const cartItem = req.body;
      // console.log(cartItem);
      const result = await cartCollection.insertOne(cartItem);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
