import { Link, useNavigate } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc'
import image from '../../assets/Developer activity-bro.png'
import useAuth from "../../Hooks/useAuth";

const Login = () => {
    const {login} = useAuth();
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        login(email,password)
        .then(()=>{
            navigate('/')
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    
    return (
        <div className="container mx-auto px-5 my-7 flex items-center justify-center lg:flex-row flex-col gap-8">
          <div className="">
            <h1 className="text-5xl font-semibold ">
              Hey there! <br /> Welcome back
            </h1>
            <img
              className="lg:h-[400px]"
              src={image}
              alt=""
            />
          </div>
          <div className="flex-1 max-w-sm bg-[#f0eded] px-7 py-6 rounded-lg">
            <h1 className="text-3xl font-bold mb-5">Sign In</h1>
            <form onSubmit={handleLogin}>
              <label className="font-bold " htmlFor="email">
                Your Email
              </label>{" "}
              <br />
              <input
                type="email"
                required
                name="email"
                className="py-2 px-3 mb-3 mt-1 w-full rounded-sm"
                placeholder="Enter email here..."
              />
              <label className="font-bold " htmlFor="email">
                Password
              </label>{" "}
              <br />
              <input
                type="password"
                name="password"
                required
                className="py-2 px-3 mt-1 w-full rounded-sm"
                placeholder="Enter Password here..."
              />
              <input
                type="submit"
                value="Sign In"
                className="w-full py-3 rounded bg-green-600 font-medium mt-5 text-white cursor-pointer text-lg"
              />
            </form>
            <p className="my-2 text-center font-medium">or</p>
            <button className="w-full flex items-center justify-center gap-2 py-3 rounded border-black border font-medium cursor-pointer text-lg">
              <p className="text-2xl">
                <FcGoogle />
              </p>
              <p>Sign in with Google</p>
            </button>
            <p className="font-bold mt-1">
              Dont have any Account?
              <Link to="/register" className="text-red-600">
                Register
              </Link>
            </p>
          </div>
        </div>
    );
};

export default Login;