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
const getUserName = function () {
    return JSON.parse(localStorage.getItem('userName') || null);
}
const storeUserName = function (userName) {
    localStorage.setItem('userName', JSON.stringify(userName));
}
const initShowNameForm = function () {
    if (!localStorage.getItem("firstVisit")) {
        localStorage.setItem("firstVisit", true);
        return true;
    } else {
        return false;
    }
}
export default getTasks;
export { storeTasks, getUserName, storeUserName, initShowNameForm };