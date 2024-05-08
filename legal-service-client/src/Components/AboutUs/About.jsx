import React from 'react'

const About = () => {
  return (
    <div className='w-3/4 mx-auto my-40'>
      <div className="flex justify-between items-center">
       <div className='w-1/2'>
       <img src="https://img.freepik.com/free-photo/photorealistic-lawyer-environment_23-2151152267.jpg?t=st=1714042964~exp=1714046564~hmac=c26478797dc21468fc66e830081fa1f7cd1bf5013f87df164768446ffebf4f96&w=360" alt="" />
       </div>
        <div className='w-3/4 mx-auto px-10'>
            <p className='mb-10'>About Us</p>
            <h2 className='text-5xl mb-5 font-serif'>Gives Your Mind a New Way of Thinking</h2>
            <em className='my-5 text-slate-600 text-lg'>“Notaries connect you with people all around the globe.”</em>
            <p className='my-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque hic dolore, natus ullam asperiores dolorem facere optio odio autem ipsa, neque corrupti soluta suscipit exercitationem error sed culpa impedit dolor.</p>
            <button className='py-3 px-8 border border-slate-950 text-dark text-lg  hover:bg-amber-800 hover:border-amber-700 hover:text-white'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default About
