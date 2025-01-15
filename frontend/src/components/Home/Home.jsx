import React, { useContext } from 'react'
import { Context } from '../../main'
import { Link, Navigate } from 'react-router-dom'
import HeroSection from './HeroSection';
import PopularCategories from './PopularCategories'

const Home = () => {
  const {isAuthorized} = useContext(Context);
  if(!isAuthorized){
   return <Navigate to={'/login'}/>
  }
  
  return (
    <>
    <div className="frontpage flex">
    <div className="left ml-4 w-3/5">
     <div className=" w-3/4  ml-20 mt-6 ">
      <h1 className="text-7xl font-medium leading-snug">Unlock Your </h1>
      <h1 className="text-7xl font-medium leading-snug "><span className='text-pink-400'> Career</span>
      <span className='text-pink-400'> Potential </span>
       With Pravasi</h1>
      </div>
      <div className="mt-2 ml-20 w-3/4 font-medium text-gray-500">
        Discover Opporutunities,Connect with Employers, and Elevate Your Professional Journey
      </div>
      <div className="mt-5 ml-20 ">
        <input className="bg-gray-100 rounded-full p-2 w-80" type="text" placeholder="Enter your Email" />
        <Link to={"/job/getall"}><button type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Get Started</button></Link>
      </div>
      <div className="ml-20 mt-4 ">
        <p className="font-medium text-gray-700">Several companies are opening vacanies here</p>
        <div className="flex ">
       <img className="mt-4" src="logos_triangle.png" width={270} alt="" />
        </div>
      </div>
    </div>
    <div className="mr-28 mt-14">
      <img className="rounded-lg" src="/opentowork.png" width={650} alt="" />
    </div>
   </div>

  <HeroSection/>

   <div className="secondpage mt-20 leading-relaxed">
    <div className="text-center">
      <h1 className="text-4xl font-semibold">Join Pravasi Path Today and Experience</h1>
      <h1 className="text-4xl font-semibold text-pink-500">The Power of Number</h1>
    </div>
    <div  className="percentagebox flex mx-28 mt-12">
     <div className="flex">
      <div className="line w-1 h-20 bg-blue-400"></div>
      <div className="mx-4">
        <h1 className="text-2xl font-semibold">95%</h1>
        <p className="font-medium">Pravasi Path users find job matches tailored to their skills and aspirations</p>
      </div>
     </div>
     <div className="flex ">
     <div className="line w-1 h-20 bg-blue-400"></div>
     <div className="mx-4">
        <h1 className="text-2xl font-semibold">98%</h1>
        <p className="font-medium">report a smoother application process compared to other job portals</p>
      </div>
     </div>
     <div className="flex">
     <div className="line w-1 h-20 bg-blue-400"></div>
     <div className="mx-4">
        <h1 className="text-2xl font-semibold">95%</h1>
        <p className="font-medium">connect with top employers and advance their careers through Pravasi Path</p>
      </div>
     </div>
    </div>
   </div>

   <div className="whyus mt-20">
    <h1 className="text-4xl font-semibold leading-snug text-center" >Why <span className="text-pink-500">Pravasi Path?</span></h1>
    <div className="boxes grid grid-cols-2 gap-6 mx-24 mt-12">
     <div className="box h-auto bg-gray-100 rounded-lg ">
      <img className="m-auto my-12" src="/opentowork.png" width={300} alt="" />
     <h1 className="text-4xl font-semibold leading-snug text-center" >Tailored Job Matches</h1>
     <p className="mt-4 mx-8 font-medium text-gray-700 mb-12">Our advanced algorithms ensure personalized job recommedations based on you unique profile,skills and preferences</p>
     </div>
     <div className="box h-auto bg-gray-100 rounded-lg ">
      <img className="m-auto my-12" src="/opentowork.png" width={300} alt="" />
     <h1 className="text-4xl font-semibold leading-snug text-center" >Streamlined Application Process</h1>
     <p className="mt-4 mx-8 font-medium text-gray-700 mb-12">Apply to multiple jobs effortlessly with our user-friendly interface, saving you time and increasing your chances of landing that dream position</p>
     </div>
     <div className="box h-auto bg-gray-100 rounded-lg ">
      <img className="m-auto my-12" src="/opentowork.png" width={300} alt="" />
     <h1 className="text-4xl font-semibold leading-snug text-center" >Professional Growth Resources</h1>
     <p className="mt-4 mx-8 font-medium text-gray-700 mb-12">Access a wealth of resources,from career advice articles to skill development courses, designed to boost your professional growth and success</p>
     </div>
     <div className="box h-auto bg-gray-100 rounded-lg ">
      <img className="m-auto my-12" src="/opentowork.png" width={300} alt="" />
     <h1 className="text-4xl font-semibold leading-snug text-center" >Connect with Top Employer</h1>
     <p className="mt-4 mx-8 font-medium text-gray-700 mb-12">Pravasi Path collaborates with leading companies across industries, providing you exclusive access to career opportunities with reputable organizations </p>
     </div>
    </div>
   </div>
   <PopularCategories/>
  </>
  )
}

export default Home