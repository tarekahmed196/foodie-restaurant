import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack } from 'react-icons/bi';

const bannerData = [
    {
        id: 1,
        image: "/about1.jpg"
    },
    {
        id: 2,
        image: "/hero.jpg"
    },
    {
        id: 3,
        image: "/about1.jpg"
    },
]

const Slider = () => {
    return (
        <div className='relative text-white text-[10px] md:text-[20px] w-full  mx-auto' >
            <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                autoPlay={true}
                infiniteLoop={true}
                renderArrowPrev={(onClickHandler, hasPrev) => (
                    <div
                        onClick={onClickHandler}
                        className='absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-[#1F2937] z-10 flex items-center justify-center cursor-pointer hover:opacity-90 ' >
                        <BiArrowBack className='text-sm md:text-lg' />
                    </div>
                )
                }
                renderArrowNext={(onClickHandler, hasPrev) => (
                    <div
                        onClick={onClickHandler}
                        className='absolute right-0 bottom-0 w-[31px] md:w-[50px] h-[30px] md:h-[50px] bg-[#1F2937] z-10 flex items-center justify-center cursor-pointer hover:opacity-90 ' >
                        <BiArrowBack className='text-sm md:text-lg rotate-180' />
                    </div>
                )
                }
            >

                {
                    bannerData?.map((banner) => (
                        <div key={banner.id} >
                            <img src={banner.image} className=" h-[calc(100vh)] object-cover " />
                            <div className=' absolute bg-white text-primary left-0 bottom-[25px] uppercase cursor-pointer px-[10px] md:py[15px] py-[8px] md:py-[10px] hover:bg-[#1F2937] hover:text-white transition-colors ease-out ' >
                                Shop Now
                            </div>
                        </div>
                    ))
                }

                {/* <div>
                    <img src="/slide-1.png" className="aspect-[16/10] md:aspect-auto object-cover " />
                    <div className=' absolute bg-white text-primary left-0 bottom-[25px] uppercase cursor-pointer px-[10px] md:py[15px] py-[8px] md:py-[10px] hover:bg-[#1F2937] hover:text-white transition-colors ease-out ' >
                        Shop Now
                    </div>
                </div>
                <div>
                    <img src="/slide-2.png" className="aspect-[16/10] md:aspect-auto object-cover " />
                    <div className=' absolute bg-white text-primary left-0 bottom-[25px] uppercase cursor-pointer px-[10px] md:py[15px] py-[8px] md:py-[10px] hover:bg-[#1F2937] hover:text-white transition-colors ease-out ' >
                        Shop Now
                    </div>
                </div>
                <div>
                    <img src="/slide-3.png" className="aspect-[16/10] md:aspect-auto object-cover " />
                    <div className=' absolute bg-white text-primary left-0 bottom-[25px] uppercase cursor-pointer px-[10px] md:py[15px] py-[8px] md:py-[10px] hover:bg-[#1F2937] hover:text-white transition-colors ease-out ' >
                        Shop Now
                    </div>
                </div> */}
            </Carousel>
        </div>
    );
};

export default Slider;