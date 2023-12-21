import { useForm } from "react-hook-form";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const DashboardContent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axios = useAxios();
  const { user } = useAuth();

  const { data: allTask = [],refetch } = useQuery({
    queryKey: ["alltask", user],
    queryFn: () =>
      axios.get(`/alltask?email=${user?.email}`).then((res) => res.data),
  });

  const onSubmit = (data) => {
    const task = {
      title: data.title,
      dedline: data.dedline,
      priority: data.priority,
      descriptions: data.descriptions,
      status: "to-do",
      email: user?.email,
    };
    axios.post("/alltask", task).then(() => {
        refetch()
      toast("Add Task Sucessfully", {
        icon: "👏",
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    });
  };



  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-3">
          <div className="w-full">
            <label htmlFor="title" className="font-medium">
              Title
            </label>
            <br />
            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="Title"
              className="border-2 border-black px-2 py-1 w-full"
            />
            {errors.title && <span>This field is required</span>}
          </div>
          <div className="w-full">
            <label htmlFor="dedline" className="font-medium">
              Dedline
            </label>
            <br />
            <input
              {...register("dedline", { required: true })}
              type="date"
              className="border-2 border-black px-2 py-1 w-full"
            />
            {errors.dedline && <span>This field is required</span>}
          </div>
          <div className="w-full">
            <label htmlFor="priority" className="font-medium">
              Priority
            </label>
            <br />
            <select
              {...register("priority", { required: true })}
              name=""
              id=""
              className="border-2 border-black px-2 py-1 w-full"
            >
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">high</option>
            </select>
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="descriptions" className="font-medium">
            Descriptions
          </label>
          <br />
          <textarea
            {...register("descriptions", { required: true })}
            className="border-2 border-black px-2 py-1 w-full"
            name="descriptions"
            id=""
            rows="2"
          ></textarea>
          {errors.descriptions && <span>This field is required</span>}
        </div>
        <input
          type="submit"
          value="Add Task"
          className="bg-gray-800 px-7 py-2.5 text-white font-normal cursor-pointer"
        />
      </form>
      <div className="grid grid-cols-3 gap-4 mt-5">
        <div>
          <h1 className="text-2xl font-semibold">TO-DO</h1>
          <div className="border-2 border-black">
            {allTask?.map((task) => (
              <div key={task?._id} className="border-blue-600 border-2 m-2 p-2">
                <h1 className="text-xl font-medium">{task?.title}</h1>
                <p className="text-sm leading-4">{task?.descriptions}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold uppercase">ongoing</h1>
        </div>
        <div>
          <h1 className="text-2xl font-semibold uppercase">completed</h1>
        </div>
      </div>
    </>
  );
};

export default DashboardContent;
