import React from 'react';

const Features = () => {
    return (
        <div id='features'>
            {/* Features section */}
            <h2 className="text-5xl mt-16 mb-8 text-center font-bold text-gray-700">Our Special <span className="text-orange-300">Features</span></h2>
            <section className="max-w-7xl mx-auto py-4 sm:px-0 lg:px-0 grid lg:grid-cols-2 gap-5 my-20">
            
                <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="flex bg-white-200 shadow-lg rounded-2xl px-0">
                    <img className="p-1 w-20 h-20" src="/public/image 12.png" alt=""/>
                    <div className="p-2 space-y-2">
                        <h1 className="font-bold">Find the Perfect Food</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, aut.</p>
                    </div>
                </div>
                
                    <img data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="w-100 mx-auto rounded-2xl bg-white-200 row-span-3" src="/public/pizza1.jpg" alt=""/>
                

                <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="flex bg-white-200 shadow-lg rounded-2xl p-2">
                    <img className="p-1 w-20 h-20" src="/public/image 13.png" alt=""/>
                    <div className="p-2 space-y-2">
                        <h2 className="font-bold">Find the Perfect Food</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, aut.</p>
                    </div>
                </div>

                <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="flex bg-white-200 shadow-lg rounded-2xl p-2">
                    <img className="p-1 w-20 h-20" src="public/image 14.png" alt=""/>
                    <div className="p-2 space-y-2">
                        <h2 className="font-bold">Find the Perfect Food</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, aut.</p>
                    </div>
                </div>

            </section>
            
        </div>
    );
};

export default Features;