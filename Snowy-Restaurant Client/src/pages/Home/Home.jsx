import { Helmet } from 'react-helmet-async';
import Banner from '../../components/Banner/Banner';
import CategorisSlider from '../../components/CategorisSlider/CategorisSlider';
import ChefRecommendsSec from '../../components/ChefRecommends/ChefRecommendsSec';
import ContactNo from '../../components/ContactNo/ContactNo';
import FromOurMenu from '../../components/FromOurMenu/FromOurMenu';
import Heading from '../../components/Heading/Heading';
import MiddleBanner from '../../components/MiddleBanner/MiddleBanner';
import MiddleBanner2 from '../../components/MiddleBanner2.jsx/MiddleBanner2';
import Testimonial from '../../components/Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Restaurant</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner />
      <div className="w-10/12 mx-auto">
        <Heading text="---From 11:00am to 10:00pm---" hed="ORDER ONLINE" />
        <CategorisSlider />
        <MiddleBanner />
        <Heading text="---Check it out---" hed="FROM OUR MENUs" />
        <FromOurMenu />
        <ContactNo />
        <Heading text="---Should Try---" hed="CHEF RECOMMENDS" />
        <ChefRecommendsSec />
      </div>
      <MiddleBanner2 />

      <div className="w-10/12 mx-auto">
        <Heading text="---What Our Clients Say---" hed="TESTIMONIALS" />
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
