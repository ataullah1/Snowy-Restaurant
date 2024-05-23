import useAuth from '../../../Hooks/useAuth';

const DashboardHome = () => {
  const { userDta } = useAuth();
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-neutral-900 text-[32px] font-semibold font-['Cinzel']">
        Hi, {userDta.displayName}. Welcome Back!
      </h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="w-full h-[150px] bg-gradient-to-r from-fuchsia-500 to-fuchsia-100 rounded-lg" />
        <div className="w-full h-[150px] bg-gradient-to-r from-orange-400 to-amber-100 rounded-lg" />
        <div className="w-full h-[150px] bg-gradient-to-r from-pink-500 to-pink-200 rounded-lg" />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-[469px] bg-orange-100 border-r-2 border-orange-400" />
        <div className="w-full md:w-1/2 h-[469px] bg-yellow-100" />
      </div>
    </div>
  );
};

export default DashboardHome;
