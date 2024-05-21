import React from 'react'

const Prices = () => {
    return (
        <div className='bg-zinc-300 mt-20 pb-32 pt-20'>
            <div className="w-10/12 mx-auto">

                <div className='text-center md:w-4/5 w-full mx-auto pb-20 font-serif'>
                    <p className='text-amber-600 text-md'>Pricing Plan</p>
                    <h2 className='md:text-5xl text-3xl'>We offer You a Unique Approach</h2>
                </div>

                <div className='grid md:grid-cols-3 grid-cols-1 gap-14'>

                    <div className='text-center border border-slate-400 py-12 transition-all ease-linear hover:border-amber-800'>
                        <h3 className='text-lg font-mono mb-5'>Basic Offer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <h2 className='my-5'>$ <span className='text-4xl font-serif'>240</span>/month</h2>
                        <ul className='my-5'>
                            <li>Free Consultation</li>
                            <li>Discount Service</li>
                            <li>Template Document</li>
                            <li>24/7 full support</li>
                        </ul>
                       <div className="mt-20">
                       <button className='py-3 px-24 border hover:border-slate-950 hover:bg-transparent transition-all ease-in-out hover:text-slate-950 text-lg bg-amber-800 border-amber-700 text-white'>Get Started</button>
                       </div>
                    </div>
                   <div className='text-center border border-slate-400 py-12 bg-blue-700 text-white transition-all ease-linear hover:border-amber-800'>
                        <h3 className='text-lg font-mono mb-5'>Regular Offer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <h2 className='my-5'>$ <span className='text-4xl font-serif'>240</span>/month</h2>
                        <ul className='my-5'>
                            <li>Free Consultation</li>
                            <li>Discount Service</li>
                            <li>Template Document</li>
                            <li>24/7 full support</li>
                        </ul>
                       <div className="mt-20">
                       <button className='py-3 px-24 border hover:border-slate-950 hover:bg-transparent transition-all ease-in-out text-lg bg-amber-800 border-amber-700 text-white'>Get Started</button>
                       </div>
                    </div>
                    <div className='text-center border border-slate-400 py-12 transition-all ease-linear hover:border-amber-800'>
                        <h3 className='text-lg font-mono mb-5'>Premium Offer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <h2 className='my-5'>$ <span className='text-4xl font-serif'>240</span>/month</h2>
                        <ul className='my-5'>
                            <li>Free Consultation</li>
                            <li>Discount Service</li>
                            <li>Template Document</li>
                            <li>24/7 full support</li>
                        </ul>
                       <div className="mt-20">
                       <button className='py-3 px-24 border hover:border-slate-950 hover:bg-transparent transition-all ease-in-out hover:text-slate-950 text-lg bg-amber-800 border-amber-700 text-white'>Get Started</button>
                       </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Prices
