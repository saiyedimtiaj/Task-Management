import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";


const Members = () => {
    const [users,setUsers] = useState([])
    const axios = useAxios()

    useEffect(()=>{
        axios.get('/users')
        .then(res=>{
            setUsers(res.data)
        })
    },[axios])
    return (
        <div className="my-14">
            <h1 className="text-3xl font-semibold">Take Control of Your Tasks with MICRONET</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-5">
                {
                    users.map((user)=><div className=" border-black border-2 rounded-md" key={user?._id}>
                        <img className="w-72 h-52" src={user?.image} alt="" />
                        <div className="px-4 py-3">
                            <h1 className="text-xl font-semibold mb-5">{user?.name}</h1>
                            <span className="text-sm text-white font-medium px-3  py-1 bg-blue-700 rounded-2xl">{user?.role}</span>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Members;