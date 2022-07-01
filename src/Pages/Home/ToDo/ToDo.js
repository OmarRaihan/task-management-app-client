import "../ToDo/ToDo.css";

const ToDo = ({ task }) => {
  const { id, name, description } = task;

  return (
    <div className="container mx-auto todo-list">
      <div className="mt-4">
        <div className="flex justify-center items-center">
          <div className="card w-full bg-slate-300 shadow-xl rounded-lg">
            <div className="card-body">
              <h4 className="text-lg font-bold">{name}</h4>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
