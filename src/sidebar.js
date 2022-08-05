import { project } from "./data"
import { loadTasks, handleTaskAdding } from "./maincontent"
import { openModal, populateModal } from "./modal"

const body = document.querySelector('body')
const projectsContainer = document.createElement('ul')
const addProjectBtn = document.createElement('button')

const loadSidebar = () => {
    const sidebar = document.createElement('div')
    sidebar.classList.add('sidebar')
    body.append(sidebar)

    const h1 = document.createElement('h1')
    h1.textContent = 'Projects'
    sidebar.append(h1)

    projectsContainer.classList.add('projects-container')
    sidebar.append(projectsContainer)

    addProjectBtn.textContent = 'Add Project'
    sidebar.append(addProjectBtn)
}

const loadProjectList = projectHolder => {
    projectsContainer.innerHTML = ''

    for (let i = 0; i < projectHolder.projectList.length; i++) {
        const project = document.createElement('li')
        project.textContent = `${projectHolder.projectList[i].title}`
        projectsContainer.append(project)

        project.addEventListener('click', () => {
            loadTasks(projectHolder.projectList[i])
            handleTaskAdding(projectHolder.projectList[i]) 
        })
    }
}

const handleProjectAdding = () => {
    addProjectBtn.addEventListener('click', () => {
        openModal()
        populateModal('addproject')
    })
}

export { loadSidebar, loadProjectList, handleProjectAdding }