const initState = []
const TaskManager = (state = initState, action) => {
    switch (action.type) {
        case "ADD-TASK":
            return [...state, action.task]
        case "CLEAR-TASK":
            return []
        case "DELETE-TASK":
            let arr = DeleteTask(state, action.id)
            return [...arr]
        default:
            return state
    }
}

const DeleteTask = (state, id) => {
    state.splice(id, 1);
    return state;
}

export default TaskManager