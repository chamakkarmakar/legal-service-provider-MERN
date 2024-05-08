import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';

const Banner = () => {
  let [scroll, setScroll] = useState(false);

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

  const images = [
    "url('https://img.freepik.com/free-photo/front-view-blurry-lawyer-working_23-2151202431.jpg?t=st=1713864888~exp=1713868488~hmac=d606039a655ed3ad5dffd0f3a43bc429a6862554f9141d95f2eeca9ec97e2b6f&w=740')",
    "url('https://img.freepik.com/premium-photo/scales-justice-books-gavel-books-scales-justice_980226-17320.jpg?w=740')",
    "url('https://img.freepik.com/free-photo/photorealistic-lawyer-environment_23-2151152254.jpg?t=st=1713865297~exp=1713868897~hmac=2a821935d2faa64cc4611a0673f3a8fcb8b3cf0d923c1407cf6a59eb1b4cc612&w=740')"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const next = (current + 1) % images.length;
    const id = setTimeout(() => setCurrent(next), 7000); // Change image every 5 seconds
    return () => clearTimeout(id);
  }, [current]);


  return (
    <div className="w-full mt-[-60px] h-full bg-no-repeat bg-cover bg-center font-serif" style={{ backgroundImage: images[current] }}>
      <div className="w-full h-full bg-opacity-50 bg-indigo-900 flex flex-col justify-center items-center">
        <div className="text-white md:mt-64 mt-52 md:w-3/4 w-full text-center">
          <h1 className="md:text-6xl text-3xl font-semibold md:px-0 px-2">Don't Hesitate in Choosing the Right Notary</h1>
          <p className='py-3 md:px-20 px-10 md:text-lg text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis commodi voluptatum officia expedita reprehenderit, nesciunt dolor ipsum vel sit.</p>

          <div className="flex md:w-1/2 w-full mx-auto justify-around  items-center">
            <button className='py-3 px-8 bg-white text-slate-950 md:text-lg text-sm hover:bg-amber-800 hover:border-amber-700 hover:text-white'>Get Started</button>
            <button className='py-3 px-8 border border-slate-950 text-white md:text-lg text-sm hover:bg-amber-800 hover:border-amber-700'>Contact Us</button>
          </div>

        </div>

        <div className='mt-40 mb-20 text-white w-3/4 mx-auto grid md:grid-cols-4 grid-cols-2 gap-10'>
          <div>
            <h2 className='text-7xl'>
           {scroll ?  <CountUp
              start={0}
              end={26}
              duration={5}
              delay={1}
            ></CountUp> : ''}+</h2>
            <p className='text-lg mt-4'>Years Experience</p>
          </div>
          <div>
            <h2 className='text-7xl'>
           {scroll ?  <CountUp
              start={910}
              end={940}
              duration={5}
              delay={1}
            ></CountUp> : ""}+</h2>
            <p className='text-lg mt-4'>Trusted Clients</p>
          </div>
          <div>
            <h2 className='text-7xl'>
           {scroll ?  <CountUp
              start={55}
              end={85}
              duration={5}
              delay={1}
            ></CountUp> : ''}+</h2>
            <p className='text-lg mt-4'>Award Winning</p>
          </div>
          <div>
            <h2 className='text-7xl'>
           {scroll ?  <CountUp
              start={240}
              end={270}
              duration={5}
              delay={1}
            ></CountUp> : ''}+</h2>
            <p className='text-lg mt-4'>Experts Staffs</p>
          </div>
         
        </div>

      </div>
    </div>
  )
}

export default Banner
