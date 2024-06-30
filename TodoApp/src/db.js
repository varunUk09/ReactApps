const getTasks = function () {
    return JSON.parse(localStorage.getItem('todoItems') || '[]').map(function (item) {
        if (item && item.isEditing) {
            item.isEditing = false;
        }
        return item;
    })
}
const storeTasks = function (todos) {
    localStorage.setItem('todoItems', JSON.stringify(todos));
}
export default getTasks;
export { storeTasks };