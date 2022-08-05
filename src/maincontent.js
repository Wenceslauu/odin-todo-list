import { populateStorage } from "./persistent-data"
import { projectHolder } from "./data"
import { loadProjectList } from "./sidebar"
import { openModal, populateModal } from "./modal"

const body = document.querySelector('body')
const mainContent = document.createElement('div')
const addTaskBtn = document.createElement('button')

const loadMainContent = () => {
    mainContent.classList.add('main-content')
    body.append(mainContent)
}

const wipe = () => {
    mainContent.innerHTML = ''
}

const loadTasks = project => {
    if (!project) {
        return
    }

    wipe()

    const h1 = document.createElement('h1')
    h1.textContent = `${project.title}`
    mainContent.append(h1)

    const tasksContainer = document.createElement('div')
    tasksContainer.classList.add('tasks-container')
    mainContent.append(tasksContainer)
    
    for (let i = 0; i < project.taskList.length; i++) {
        const task = document.createElement('div')
        task.classList.add('task')

        const h1 = document.createElement('h1')
        h1.textContent = `${project.taskList[i].title}`
        task.append(h1)

        const descriptionP = document.createElement('p')
        descriptionP.textContent = `${project.taskList[i].description}`
        task.append(descriptionP)

        const dueDateP = document.createElement('p')
        dueDateP.textContent = `${project.taskList[i].dueDate}`
        task.append(dueDateP)

        const priorityP = document.createElement('p')
        priorityP.textContent = `${project.taskList[i].priority}`
        task.append(priorityP)

        const removeTaskBtn = document.createElement('button')
        removeTaskBtn.textContent = 'X'
        task.append(removeTaskBtn)

        removeTaskBtn.addEventListener('click', () => {
            project.taskList.splice(i, 1)
            loadTasks(project)
            populateStorage()
        })

        tasksContainer.append(task)
    }

    addTaskBtn.textContent = 'Add Task'
    tasksContainer.append(addTaskBtn)

    const removeProjectBtn = document.createElement('button')
    mainContent.append(removeProjectBtn)

    const deleteIcon = document.createElement('img')
    deleteIcon.setAttribute('src', '../src/delete.png')
    removeProjectBtn.append(deleteIcon)

    const index = projectHolder.projectList.indexOf(project)

    removeProjectBtn.addEventListener('click', () => {
        projectHolder.projectList.splice(index, 1)
        wipe()
        loadProjectList(projectHolder)
        populateStorage()
    })
}

const handleTaskAdding = project => {
    if (!project) {
        return
    }

    addTaskBtn.addEventListener('click', () => {
        openModal()
        populateModal('addtask', project)
    })
}

export { loadMainContent, loadTasks, handleTaskAdding, wipe }