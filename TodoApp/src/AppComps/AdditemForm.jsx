export default function AdditemForm({ onSubmit, task, setTask }) {
  return (
    <>
      <form className='add-task-frm' onSubmit={onSubmit}>
        <div className='input-row'>
          <input
            type='text'
            placeholder='Add a task...'
            value={task}
            onChange={e => {
              setTask(e.target.value);
            }}
          />
        </div>
      </form>
    </>
  );
}
