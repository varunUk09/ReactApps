export default function Task(props) {
  return (
    <div className={`taskgroup ${props.taskcompleted ? "completed" : ""}`}>
      <span>{props.taskName}</span>
      <div className='taskgroup_btn-grp'>
        <button
          onClick={() => {
            props.deleteTask(props.taskid);
          }}
          className='deletebtn'>
          <i className='fa-solid fa-trash' style={{ color: "#ffffff" }}></i>
        </button>
        <button
          onClick={() => {
            props.completedTask(props.taskid);
          }}
          className='donebtn'>
          <i className='fa-solid fa-check' style={{ color: "#ffffff" }}></i>
        </button>
      </div>
    </div>
  );
}
