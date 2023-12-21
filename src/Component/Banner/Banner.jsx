import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import banner from '../../assets/her_micronet.jpg'

const Banner = () => {
    const {user} = useAuth()
    return (
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center py-14 justify-between">
            <div className='lg:flex-1'>
                <h1 className="text-4xl mb-2 font-semibold">Empower Your Productivity with TaskHub</h1>
                <p>Welcome to TaskHub, your ultimate destination for seamless task management. Elevate your efficiency, collaborate effortlessly, and achieve your goals with our intuitive platform.</p>
                {user ? <Link to='/dashboard'><button className='mt-3 bg-[#D88531] text-white px-5 py-3 rounded-md font-medium'>Let’s Explore</button></Link> : <Link to='/login'><button className='mt-3 bg-[#D88531] text-white px-5 py-3 rounded-md font-medium'>Let’s Explore</button></Link>}
            </div>
            <div className='lg:flex-1'>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;