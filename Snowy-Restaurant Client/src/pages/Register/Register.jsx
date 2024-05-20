import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGithub } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { ImSpinner9 } from 'react-icons/im';
import { FcGoogle } from 'react-icons/fc';
import Loding from '../Loding/Loding';

export default function Register() {
  const [errPass, setErrPass] = useState(false);
  const [imgErr, setImgErr] = useState(null);
  const [eye, setEye] = useState(false);
  const naviget = useNavigate();
  const {
    emlPassRegister,
    gitHubLogin,
    googleLogin,
    userDta,
    profileUpdate,
    setLoading,
    isLoading,
  } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setImgErr(false);
    setErrPass(false);
    if (data.Password !== data.Confirm_Password) {
      setErrPass(true);
      return;
    }
    const photo = data.photo[0];
    if (photo.name === '' || photo.size === 0) {
      setImgErr(true);
      return;
    }
    const name = data.Name;
    const email = data.Email;
    const password = data.Password;

    const fromImg = new FormData();
    fromImg.append('image', photo);
    try {
      setLoading(true);
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`,
        fromImg
      );
      const imgUrl = data.data.display_url;
      // const allDta = { name, email, password, imgUrl };
      // console.log(allDta);
      const result = await emlPassRegister(email, password);
      console.log(result.user);
      // const jwtRequet = async () => {
      //   const { data } = await axiosSecu.post(`/jwt`, {
      //     email: result?.user?.email,
      //   });
      //   console.log('JWT Token,', data);
      // };
      // jwtRequet();
      // Update Profile
      await profileUpdate(name, imgUrl);
      Swal.fire({
        title: 'Good job!',
        text: 'Your account has been successfully created. Please Login Now.',
        icon: 'success',
      });

      reset();
      // naviget('/login');
      naviget(location?.state ? location.state : '/');
    } catch (error) {
      console.log(error);
      setLoading(false);
      Swal.fire({
        title: 'Oops...!',
        text: `Sorry, your account could not be Created ! "${error.message}"`,
        icon: 'error',
      });
    }
    // reset();
  };
  console.log(errors);

  // all Social Login
  const socialLogin = (socialLogin) => {
    socialLogin()
      .then((result) => {
        const user = result.user;
        // const jwtRequet = async () => {
        //   const { data } = await axiosSecu.post(`/jwt`, {
        //     email: user?.email,
        //   });
        //   console.log('JWT Token,', data);
        // };
        // jwtRequet();

        naviget(location?.state ? location.state : '/');
        console.log(user);
        Swal.fire({
          title: 'Good job!',
          text: 'Your account has been successfully logged in.',
          icon: 'success',
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoading(false);
        console.log(errorMessage);
        Swal.fire({
          title: 'Oops...!',
          text: 'Sorry, your account could not be logged in!',
          icon: 'error',
        });
      });
  };

  if (userDta) {
    return <Loding />;
  }
  return (
    <div className="w-10/12 mx-auto pt-28">
      <div className="w-full md:w-[500px] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div>
            <input
              className="w-full"
              type="text"
              placeholder="Name"
              {...register('Name', { required: true, maxLength: 20 })}
            />

            {errors.Name && (
              <span className="text-red-600">Please Input Your Name</span>
            )}
          </div>
          <div>
            <div className="relative">
              <label
                htmlFor="img"
                className={`absolute left-0 top-0 bg-slate-800 dark:bg-slate-400  dark:font-medium px-3 py-[9px] border-slate-400 dark:border-slate-100 text-base botder text-white dark:text-slate-800`}
              >
                Choose Profile
              </label>
              <input
                id="img"
                className="w-full border border-slate-800 pl-5"
                type="file"
                placeholder="Name"
                {...register('photo', { required: true })}
              />
            </div>
            {errors.photo && (
              <span className="text-red-600">Please Upload Your Photo</span>
            )}
            {imgErr && (
              <span className="text-red-600">Please Upload Your Photo</span>
            )}
          </div>
          <div>
            <input
              className="w-full"
              type="email"
              placeholder="Email"
              {...register('Email', {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              })}
            />
            {errors.Email?.type === 'required' && (
              <p className="text-red-600">Please Input Your Email.</p>
            )}
            {errors.Email?.type === 'pattern' && (
              <p className="text-red-600">Invalid Email</p>
            )}
          </div>
          <div>
            <div className="relative">
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xl cursor-pointer">
                {eye ? (
                  <span onClick={() => setEye(!eye)}>
                    <FaEyeSlash />
                  </span>
                ) : (
                  <span onClick={() => setEye(!eye)}>
                    <FaEye />
                  </span>
                )}
              </span>
              <input
                className="w-full"
                type={eye ? 'text' : 'password'}
                placeholder="Password"
                {...register('Password', {
                  required: true,
                  max: 20,
                  min: 6,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                })}
              />
            </div>
            {errors.Password?.type === 'required' && (
              <p className="text-red-600">Please Input a Password.</p>
            )}
            {errors.Password?.type === 'min' && (
              <p className="text-red-600">Password must be 6 word</p>
            )}
            {errors.Password?.type === 'max' && (
              <p className="text-red-600">Password must be less 20 word</p>
            )}
            {errors.Password?.type === 'pattern' && (
              <p className="text-red-600">
                Password must be uppercase, lowercase & number
              </p>
            )}
          </div>
          <div>
            <input
              className="w-full"
              type="password"
              placeholder="Confirm Password"
              {...register('Confirm_Password', { required: true })}
            />
            {errors.Confirm_Password?.type === 'required' && (
              <p className="text-red-600">Confirm Password.</p>
            )}
            {errPass && (
              <p className="text-red-600">Password is not matched!</p>
            )}
          </div>
          {/* <input
            className="w-full bg-yellow-600 text-white py-2 font-semibold hover:bg-yellow-700 cursor-pointer duration-200"
            value="Sign Up"
            type="submit"
          /> */}
          <button
            disabled={isLoading}
            className="w-full bg-yellow-600 text-white py-2 font-semibold hover:bg-yellow-700 cursor-pointer duration-200"
          >
            {isLoading ? (
              <ImSpinner9 className="animate-spin text-2xl mx-auto" />
            ) : (
              'Sign up'
            )}
          </button>
        </form>
        <p className="pt-3 text-slate-800 dark:text-slate-100">
          Already have an account?{' '}
          <Link to={'/login'} className="underline text-mClr">
            Login
          </Link>
        </p>
        <div>
          <div className="w-full relative h-5 my-5 flex items-center justify-center">
            <div className="h-[1px] w-full bg-yellow-600"></div>
            <span className="absolute px-3 font-medium text-gray-900 dark:text-slate-100 -translate-x-1/2 bg-white left-1/2 dark:bg-[#353b48]">
              or
            </span>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 xl:gap-3 w-full text-slate-900 dark:text-stone-100">
            <button
              disabled={isLoading}
              onClick={() => socialLogin(googleLogin)}
              className="py-2 px-1 w-full font-medium border hover:shadow-lg shadow-indigo-900/20 rounded-md flex items-center justify-center gap-1 border-mClr"
            >
              <span className=" text-2xl">
                <FcGoogle />
              </span>
              Login With Google
            </button>
            <button
              disabled={isLoading}
              onClick={() => socialLogin(gitHubLogin)}
              className="py-2 px-1 w-full font-medium border hover:shadow-lg shadow-blue-500/20 rounded-md  flex items-center justify-center gap-1 border-mClr"
            >
              <span className="text-mClr dark:text-white text-2xl">
                <FaGithub />
              </span>
              Login With Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
