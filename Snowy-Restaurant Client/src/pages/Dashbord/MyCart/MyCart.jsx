import { FaTrash } from 'react-icons/fa';
import Heading from '../../../components/Heading/Heading';

const MyCart = () => {
  return (
    <div>
      <Heading text="---My Cart---" hed="WANNA ADD MORE?" />
      <div className="max-w-[992px] mx-auto bg-white p-6 rounded-md">
        <div className="text-neutral-900 text-[32px] font-bold font-['Cinzel'] flex items-center justify-between mb-5">
          <h1>Total orders: 6</h1>
          <h1>total price: $88.2</h1>
          <button className="text-lg px-6 bg-[#D1A054] py-2 rounded-md text-white hover:bg-[#a97c37]">
            Pay
          </button>
        </div>

        <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="uppercase bg-[#D1A054] text-white text-base font-semibold font-['Inter']">
              <tr>
                <th className="px-4">ITEM IMAGE</th>
                <th className="px-4 ">ITEM NAME</th>

                <th className="px-4">PRICE</th>
                <th className="px-4 w-28 py-7 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
