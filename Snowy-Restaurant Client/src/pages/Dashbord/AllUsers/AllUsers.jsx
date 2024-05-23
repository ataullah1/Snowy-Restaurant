import { FaTrashAlt } from 'react-icons/fa';
import { TiGroup } from 'react-icons/ti';
import Heading from '../../../components/Heading/Heading';
import useAxios from '../../../Hooks/useAxios';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
// import { ImSpinner6 } from 'react-icons/im';

const AllUsers = () => {
  const axioss = useAxios();

  const { data = [], refetch } = useQuery({
    queryKey: ['all-users'],
    queryFn: async () => {
      const { data } = await axioss.get('/users');
      return data;
    },
  });

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axioss.delete(`/user/${id}`);
        console.log(data);
        refetch();
        toast.success('Successfully Deleted!');
      }
    });
  };
  return (
    <div>
      <div className="-mt-28">
        <Heading text="---My Cart---" hed="WANNA ADD MORE?" />
      </div>{' '}
      <div className="max-w-[992px] mx-auto bg-white p-6 rounded-md">
        <div className="text-neutral-900 text-[32px] font-bold font-['Cinzel'] flex items-center justify-between mb-5 uppercase">
          <h1>Total Users: {data.length}</h1>
        </div>

        <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="uppercase bg-[#D1A054] text-white text-base font-semibold font-['Inter']">
              <tr className="text-center">
                <th className="px-4"></th>
                <th className="px-4">Name</th>
                <th className="px-4 ">Email</th>

                <th className="px-4">Role</th>
                <th className="px-4 w-28 py-7 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((dta, i) => (
                <tr key={dta._id}>
                  <td className="border-r text-center">{i + 1}</td>
                  <td className="border-r py-5 text-center">{dta.userName}</td>
                  <td className="border-r text-center text-neutral-500 text-base font-normal font-['Inter'] min-w-52">
                    {dta.userEmail}
                  </td>
                  <td className="border-r text-center text-neutral-500 text-base font-normal font-['Inter'] min-w-20">
                    <button
                      onClick={() => handleAdim(dta._id)}
                      className="w-[50px] h-[50px] bg-[#D1A054] hover:bg-[#ac803e] duration-150 rounded-[5px] text-2xl flex items-center justify-center text-white mx-auto"
                    >
                      <TiGroup />
                    </button>
                  </td>
                  <td className="border-r text-center">
                    <button
                      onClick={() => handleDelete(dta._id)}
                      className="w-[50px] h-[50px] bg-red-700 hover:bg-red-800 duration-150 rounded-[5px] text-2xl flex items-center justify-center text-white mx-auto"
                    >
                      <FaTrashAlt />
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

export default AllUsers;
