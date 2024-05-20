import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Register() {
  const [errPass, setErrPass] = useState(false);
  const [imgErr, setImgErr] = useState(null);
  const [eye, setEye] = useState(false);
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
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`,
        fromImg
      );
      const imgUrl = data.data.display_url;
      const allDta = { name, email, password, imgUrl };
      console.log(allDta);
    } catch (error) {
      console.log(error);
    }
    // reset();
  };
  console.log(errors);

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
            <input
              className="w-full"
              type="file"
              placeholder="Name"
              {...register('photo', { required: true })}
            />
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
          <input
            className="w-full bg-yellow-600 text-white py-2 font-semibold hover:bg-yellow-700 cursor-pointer duration-200"
            value="Sign Up"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}
