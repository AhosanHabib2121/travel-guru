import Navbar from '../../components/header/Navbar';
import './Home.css'
import { BsArrowRight } from "react-icons/bs";
import image1 from "../../assets/images/Sajek.png"
import image2 from "../../assets/images/Sreemongol.png"
import image3 from "../../assets/images/sundorbon.png"



const Home = () => {

    return (
        <div className="hero items-start min-h-screen bg-image px-28">
            <Navbar/>
            <div className="mt-48 grid grid-cols-1 lg:grid-cols-5  text-white gap-5">
                {/* content area */}
                <div className='  col-span-2 mt-5'>
                    <h2 className=' font-bebas  text-7xl '>Cox's bazar</h2>
                    <p className=' text-base mb-5'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>

                    <div>
                        <button className=' flex  items-end gap-3 ite py-2 pl-4 pr-12 font-semibold rounded-md bg-[#F9A51A] text-black normal-case '>Booking
                            <BsArrowRight className=' text-lg 1'/>
                        </button>
                    </div>
                </div>
                {/* image (carousel) area */}
                <div className=' col-span-3'>
                    <div className="carousel carousel-center h-96  p-4 space-x-4  rounded-box">
                        <div className="carousel-item relative">
                            <img src={image1} className="rounded-box" />
                            <h2 className=' absolute bottom-6 font-bebas text-3xl px-5'>Sajek</h2>
                        </div> 
                            
                        <div className="carousel-item relative">
                            <img src={image2} className="rounded-box" />
                            <h2 className=' absolute bottom-6 font-bebas text-3xl px-5'>Sreemongol</h2>
                        </div> 
                            
                        <div className="carousel-item relative">
                            <img src={image3} className="rounded-box" />
                            <h2 className=' absolute bottom-6 font-bebas text-3xl px-5'>Sundorbon</h2>
                        </div> 
                    
                    </div>
                    <div className="flex gap-3">
                        <a href="#slide4" className="btn btn-circle btn-sm">❮</a> 
                        <a href="#slide2" className="btn btn-circle btn-sm  ">❯</a>
                    </div>
                </div>
            </div>
        </div>     
    );
};

export default Home;