const getTasks = function () {
    return JSON.parse(localStorage.getItem('todoItems') || '[]')
}
const storeTasks = function (todos) {
    localStorage.setItem('todoItems', JSON.stringify(todos));
}
export default getTasks;
export { storeTasks };