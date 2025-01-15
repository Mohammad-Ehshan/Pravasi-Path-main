import React, { useContext, useState } from 'react';
import { Context } from '../../main';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/user/logout", { withCredentials: true });
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthorized(true);
    }
  };

  return (
    <>
      {isAuthorized && (
        <nav className='flex justify-between mx-8 ml-20 mt-6'>
          <Link to={"/"}>
            <div className="logo">
              <img className='h-12' src="logo.png" alt="logo" />
              {/* <span className='font-extrabold'>your dream job</span> */}
            </div>
          </Link>
          <div className="content">
            <ul className='flex gap-5 font-semibold'>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/job/getall"}>Jobs</Link></li>
              <li>
                <Link to={"/application/me"}>
                  {user && user.role === "Employer"
                    ? "Applicant's Application"
                    : "My Applications"
                  }
                </Link>
              </li>
              {user && user.role === "Employer" && (
                <>
                  <li>
                    <Link to={"/job/post"}>Post New Job</Link>
                  </li>
                  <li>
                    <Link to={"/job/me"}>View Your Job</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="signin flex gap-4 ">
            <button
              onClick={handleLogout}
              type="button"
              className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
              Sign out
            </button>
            <Link to={"/job/getall"}>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                Getting Started
              </button>
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
