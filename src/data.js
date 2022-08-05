const task = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority }
}

const project = title => {
    let taskList = []
    const addTask = newTask => {
        taskList.push(newTask)
    }
    return { title, taskList, addTask }
}

const projectHolder = (() => {
    let projectList = []
    const addProject = newProject => {
        projectList.push(newProject)
    }

    return { projectList, addProject }
})()

export { task, project, projectHolder }