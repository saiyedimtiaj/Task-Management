import banner from '../../assets/her_micronet.jpg'

const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center py-14 justify-between">
            <div className='lg:flex-1'>
                <h1 className="text-4xl mb-2 font-semibold">Empower Your Productivity with TaskHub</h1>
                <p>Welcome to TaskHub, your ultimate destination for seamless task management. Elevate your efficiency, collaborate effortlessly, and achieve your goals with our intuitive platform.</p>
                <button className='mt-3 bg-[#D88531] text-white px-5 py-3 rounded-md font-medium'>Let’s Explore</button>
            </div>
            <div className='lg:flex-1'>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;