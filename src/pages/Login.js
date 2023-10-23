import React, { useState, useEffect, useRef } from 'react';
import { config } from '../config';
import { loginAPI } from '../Functions/authUtils';
import Loading from '../Components/Loading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ImgUrl = `${config.IMAGE_URL}branding/`;

const Login = (props) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const sliderImageList = [`${ImgUrl}slider1.jpg`, `${ImgUrl}slider2.jpg`, `${ImgUrl}slider3.jpg`];
  const [sliderImage, setSliderImage] = useState(`${ImgUrl}slider3.jpg`);
  const [currentImageIndex, setCurrentImageIndex] = useState(2);
  const [loading, setLoading] = useState(false);
  const loginButtonRef = useRef(null);
  const passwordRef = useRef(null);
  const usernameRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextImageIndex = (currentImageIndex + 1) % sliderImageList.length;
      setSliderImage(sliderImageList[nextImageIndex]);
      setCurrentImageIndex(nextImageIndex);
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleLogin = async () => {
    if (formData.username && formData.password) {
      try {
        setLoading(true);
        const response = await loginAPI({
          Username: formData.username,
          Password: formData.password,
        });
        const { code, message, result, data } = response;
        if (code === 200) {
          toast.success('Login successful', {position: 'top-right',autoClose: 2000});

          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('udt', JSON.stringify(data))
          props.setIsLoggedIn('true');
          
        } else {
          localStorage.clear();
          toast.error(message,{position: 'top-right',autoClose: 2000});
        }
      } catch (error) {
        toast.error('An error occurred during login: ' + error.message, {position: 'top-right',autoClose: 3000});
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Image (2/3 of the left side) */}
        <div className="hidden bg-cover md:block  w-2/3 bg-white h-screen">
          <img
            src={sliderImage}
            alt="logo"
            className="w-full h-full object-fit transition-opacity translate-x-0 duration-1000"
          />
        </div>

        {/* Login Form (1/3 of the right side) */}
        <div className="w-full p-4 md:p-16 md:w-1/3 h-screen flex flex-wrap items-center justify-center bg-white dark:bg-gray-700 rounded-lg  mx-4">

          <form className='w-full'>
            <div className="text-center">
              <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">RTS CLOUD</h2>
              <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="text-sm text-gray-600 dark:text-gray-200">
                Username
              </label>
              <input
                type="text"
                id="username"
                tabIndex="1"
                ref={usernameRef}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                    passwordRef.current.focus();
                  }
                }}
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">
                Password
              </label>
              <input
                type="password"
                id="password"
                tabIndex="2"
                ref={passwordRef}
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                    loginButtonRef.current.click();
                  }
                }}
              />
            </div>
            <button
              type="button"
              ref={loginButtonRef}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              onClick={handleLogin}
            >
              Login
            </button>
            <p className="mt-4 text-sm text-right text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline cursor-pointer">Forgot password?</p>
            <p className="mt-6 text-sm text-center text-gray-400">Don't have an account yet? <a href="/#" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;