import React, { useEffect, useState } from 'react'
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi"; 
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    let [scroll, setScroll] = useState(false);
    const menuItems = [
        {
            menu: 'home',
            url: '/home'
        },
        {
            menu: 'about',
            url: '/about'
        },
        {
            menu: 'service',
            url: '/service'
        },
        {
            menu: 'contact',
            url: '/contact'
        },
        {
            menu: 'login',
            url: '/login'
        }
    ]

    const handleOnScroll = () => {
        const isScrolled = window.scrollY > 0;
         setScroll(isScrolled);
         // console.log(scroll);
       }
       useEffect(() => {
         window.addEventListener('scroll', handleOnScroll);
     
         // Remove scroll event listener when the component unmounts
         return () => {
           window.removeEventListener('scroll', handleOnScroll);
         };
     
       }, [])


    return (
        <div className="sticky top-0 max-w-full">
      <div className={`py-3 ${scroll ? 'bg-sky-800' : 'bg-transparent'}`}>
        <nav className="flex justify-between items-center w-full">
          <div className='md:w-1/5 w-4/5 md:mx-10 mx-5 transition-all duration-150 ease-linear delay-75 flex items-center'>
            {/* <img src={logo} alt="" className='w-1/6' /> */}
            <h1 className='md:text-3xl text-white text-2xl text-center block font-semibold text-dark font-style mx-2'>Attorney@Law</h1>
          </div>

          <div className="md:w-96 w-full md:mx-10 mx-0 ">

            <div className={`w-full flex md:flex-row flex-col md:justify-between justify-center items-center md:z-auto z-[-1] md:shadow-none shadow-xl md:bg-transparent md:py-0 py-2 md:static duration-300 delay-150 transition-all ease-linear absolute left-0 right-0 
            ${open ? 'top-14' : '-top-80'}`}>
              {
                menuItems.map(item =>
                  <Link key={item.menu}
                    onClick={() => setOpen(!open)}
                    to={item.url}
                    className='text-white text-center md:w-auto w-full md:mt-0 mt-3 font-bold capitalize px-3 py-1 rounded hover:shadow-sm'
                  >{item.menu}</Link>
                )
              }
            </div>

          </div>
          <div className='md:hidden block mx-5'>
            <button onClick={() => setOpen(!open)}>
              {
                !open ? <HiOutlineMenu className='w-6 h-6 text-sky-700' /> : <HiOutlineX className='w-6 h-6 text-sky-700' />
              }
            </button>
          </div>


        </nav>
      </div>
    </div>
    )
}

export default NavBar
