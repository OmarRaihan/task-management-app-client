import "../ToDo/ToDo.css";
import edit from "../../../images/icons8-edit.svg";
import trash from "../../../images/icons8-trash.svg";
import useTasks from "../../Hooks/useTasks";
import { useNavigate } from "react-router-dom";

const ToDo = ({ task, isReload, setIsReload }) => {
  const { _id, name, description } = task;
  const [tasks, setTasks] = useTasks();
  const navigate = useNavigate();

  const navigateToCompleteTask = (_id) =>{
    navigate(`/completed/${_id}`)
  }

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      console.log("deleted", id);
      const url = `https://flannel-keener-57467.herokuapp.com/task/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted");
            const remaining = tasks.filter((task) => tasks.id !== id);
            setTasks(remaining);
          }
        });
    }
    window.location.reload();
  };

  return (
    <div className="container mx-auto todo-list">
      <div className="mt-4">
        <div className="flex justify-center items-center">
          {/* Completed Task Button */}
          <div className="mr-3" onClick={() =>navigateToCompleteTask(_id)}>
            <input type="radio" name="radio" className="radio border-4 border-slate-900 border-opacity-60" />
          </div>

          {/* Card */}
          <div className="card w-full bg-slate-300 shadow-xl rounded-lg">
            <div className="flex justify-between px-4 py-6 items-center">
              <div>
                <h4 className="text-lg font-bold text-slate-600">{name}</h4>
                <p className="text-slate-700">{description}</p>
              </div>

              {/* Edit & Delete Btn */}
              <div className="flex gap-3">
                <div>
                  <img className="h-10 bg-slate-400 p-2 rounded-full" src={edit} alt="" />
                </div>

                <div onClick={() => handleDelete(task._id)}>
                  <img className="h-10 bg-slate-400 p-2 rounded-full" src={trash} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
