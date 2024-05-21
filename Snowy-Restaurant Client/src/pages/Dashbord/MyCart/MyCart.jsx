import { FaTrash } from 'react-icons/fa';
import Heading from '../../../components/Heading/Heading';
import useCarts from '../../../Hooks/useCarts';
import useAxios from '../../../Hooks/useAxios';
// import { ImSpinner6 } from 'react-icons/im';

const MyCart = () => {
  const axioss = useAxios();
  const [carts] = useCarts();
  const totalPrice = carts.reduce((total, current) => total + current.price, 0);
  // console.log(myCart);
  const handleDelete = async (id) => {
    const { data } = await axioss.delete(`/carts-delete${id}`);
    console.log(data);
  };
  return (
    <div>
      <div className="-mt-28">
        <Heading text="---My Cart---" hed="WANNA ADD MORE?" />
      </div>{' '}
      <div className="max-w-[992px] mx-auto bg-white p-6 rounded-md">
        <div className="text-neutral-900 text-[32px] font-bold font-['Cinzel'] flex items-center justify-between mb-5">
          <h1>Total orders: {carts.length}</h1>
          <h1>total price: ${totalPrice}</h1>
          <button className="text-lg px-6 bg-[#D1A054] py-2 rounded-md text-white hover:bg-[#a97c37]">
            Pay
          </button>
        </div>

        <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="uppercase bg-[#D1A054] text-white text-base font-semibold font-['Inter']">
              <tr className="text-center">
                <th className="px-4"></th>
                <th className="px-4">ITEM IMAGE</th>
                <th className="px-4 ">ITEM NAME</th>

                <th className="px-4">PRICE</th>
                <th className="px-4 w-28 py-7 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((dta, i) => (
                <tr key={dta._id}>
                  <td className="border-r text-center">{i + 1}</td>
                  <td className="border-r py-5 min-w-44">
                    <div
                      className="w-[120px] mx-auto h-[75px] bg-zinc-300 bg-center bg-cover bg-no-repeat"
                      style={{ backgroundImage: `url(${dta.image})` }}
                    ></div>
                  </td>
                  <td className="border-r text-center text-neutral-500 text-base font-normal font-['Inter'] min-w-52">
                    {dta.name}
                  </td>
                  <td className="border-r text-center text-neutral-500 text-base font-normal font-['Inter'] min-w-20">
                    ${dta.price}
                  </td>
                  <td className="border-r text-center">
                    <button
                      onClick={() => handleDelete(dta._id)}
                      className="w-[50px] h-[50px] bg-red-700 hover:bg-red-800 duration-150 rounded-[5px] text-2xl flex items-center justify-center text-white mx-auto"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
