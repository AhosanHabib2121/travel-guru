import Navbar from "../../components/header/Navbar";

const Destination = () => {
    return (
        <div className="hero items-start min-h-screen bg-image px-28">
            <Navbar/>
            <div className="mt-48 grid grid-cols-1 items-center lg:grid-cols-2  items-center  justify-items-end text-white gap-5">
                {/* content area */}
                <div className=''>
                    <h2 className=' font-bebas  text-7xl '>Cox's bazar</h2>
                    <p className=' text-base mb-5'>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                </div>
                {/* booking area */}
                <div className=' items-end'>
                    <div className="card w-96 bg-base-100 rounded">
                        <div className="card-body p-4 ">
                            <form  className="space-y-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Origin</span>
                                    </label>
                                    <input type="text" placeholder="Dhaka" className="input bg-slate-200 text-black" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Destination</span>
                                    </label>
                                    <input type="text" placeholder="Cox’s Bazar" className="input bg-slate-200 text-black" required />
                                </div>
                                <div className=" grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Form</span>
                                        </label>
                                        <input type="date" placeholder="Cox’s Bazar" className="input bg-slate-200 text-black" required />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">To</span>
                                        </label>
                                        <input type="date" placeholder="Cox’s Bazar" className="input bg-slate-200 text-black" required />
                                    </div>
                                </div>
                                                            
                                <div className="form-control mt-6">
                                    <button className="btn hover:bg-[#d98908] bg-[#F9A51A] w-full normal-case text-base font-medium ">Start Booking</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
    );
};

export default Destination;