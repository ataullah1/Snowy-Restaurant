import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Register() {
  const [errPass, setErrPass] = useState(false);
  const [eye, setEye] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setErrPass(false);
    if (data.Password !== data.Confirm_Password) {
      setErrPass(true);
      return;
    }
    const name = data.Name;
    const email = data.Email;
    const password = data.Password;
    const allDta = { name, email, password };
    console.log(allDta);
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
              type="text"
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
