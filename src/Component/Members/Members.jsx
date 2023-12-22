import { PiStudentBold } from "react-icons/pi";
import { SiAffinitydesigner } from "react-icons/si";
import { BsBank } from "react-icons/bs";

const Members = () => {  
    return (
        <div className="my-14">
            <h1 className="text-3xl font-semibold">Who Can Benefit from Our Task Management Platform?</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-5">
                <div className="bg-[#E3DEFC] px-6 py-4 rounded-lg space-y-3">
                    <p className="text-6xl"><PiStudentBold/></p>
                    <h1 className="text-2xl font-bold">Students and Researchers</h1>
                    <p className="text-justify">Students and researchers can organize study schedules, manage research tasks, and collaborate with peers. Our platform is designed to adapt to various academic and research needs, fostering a conducive environment for learning and discovery.</p>
                </div>
                <div className="bg-[#DFFDEC] px-6 py-4 rounded-lg space-y-3">
                    <p className="text-6xl"><SiAffinitydesigner/></p>
                    <h1 className="text-2xl font-bold">Designers and Creatives</h1>
                    <p className="text-justify">Designers and creatives can visually plan their tasks, set milestones, and showcase their work progress. Our platform supports file sharing and visual project timelines, making it an ideal tool for creative projects.</p>
                </div>
                <div className="bg-[#FCEEDF] px-6 py-4 rounded-lg space-y-3">
                    <p className="text-6xl"><BsBank/></p>
                    <h1 className="text-2xl font-bold">Bankers and Finance Professionals</h1>
                    <p className="text-justify">For bankers and finance professionals, managing deadlines and ensuring compliance is critical. Our task management platform provides robust tools to track financial tasks, meet deadlines, and maintain regulatory compliance effortlessly.</p>
                </div>
            </div>
        </div>
    );
};

export default Members;