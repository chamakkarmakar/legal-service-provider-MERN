import React, { useEffect, useState } from 'react'

const Banner = () => {
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
    <div className="w-full mt-[-60px] h-screen bg-no-repeat bg-cover bg-center" style={{ backgroundImage: images[current] }}>
      <div className="w-full h-full bg-opacity-50 bg-black flex justify-center items-center">
        {/* Optional content inside the carousel */}
        <h1 className="text-white text-4xl">Welcome to Our Carousel</h1>
      </div>
    </div>
  )
}

export default Banner
