export const add = (task) => ({
    type: "ADD-TASK",
    task
})
export const deletetask = (id) => ({
    type: "DELETE-TASK",
    id
})
export const clear = () => ({
    type: "CLEAR-TASK"
})