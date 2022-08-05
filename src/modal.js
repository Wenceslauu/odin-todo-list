import { populateStorage } from "./persistent-data"
import { project, task, projectHolder } from "./data"
import { loadProjectList } from "./sidebar"
import { loadTasks } from "./maincontent"

const body = document.querySelector('body')
const modal = document.createElement('div')
const overlay = document.createElement('div')

const openModal = () => {
    modal.classList.add('active')
    overlay.classList.add('active')
}

const closeModal = () => {
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

const loadModals = () => {
    modal.classList.add('modal')
    body.append(modal)

    overlay.classList.add('overlay')
    body.append(overlay)

    overlay.addEventListener('click', () => {
        closeModal()
    })
}

const populateModal = (type, currentProject) => {
    modal.innerHTML = ''

    const h1 = document.createElement('h1')
    modal.append(h1)

    const forms = document.createElement('form')
    modal.append(forms)

    const titleLabel = document.createElement('label')
    titleLabel.setAttribute('for', 'project-title')
    titleLabel.textContent = 'Title'
    forms.append(titleLabel)

    const titleInput = document.createElement('input')
    titleInput.setAttribute('name', 'title')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('autocomplete', 'off')
    titleInput.setAttribute('minlength', '1')
    titleInput.setAttribute('maxlength', '15')
    titleInput.setAttribute('required', '')
    forms.append(titleInput)

    const submit = document.createElement('button')
    submit.setAttribute('type', 'submit')
    submit.textContent = 'Submit'

    if (type === 'addproject') {
        h1.textContent = 'Add a Project'

        titleLabel.setAttribute('for', 'project-title')

        titleInput.setAttribute('id', 'project-title')

        forms.append(submit)

        forms.addEventListener('submit', e => {
            e.preventDefault()
            const formData = new FormData(e.target);
            const formProps = Object.fromEntries(formData);

            projectHolder.addProject(project(`${formProps.title}`))
            populateStorage()
            closeModal()
            loadProjectList(projectHolder)
            forms.reset()
        })
    } else if (type === 'addtask') {
        h1.textContent = 'Add a task'

        titleLabel.setAttribute('for', 'task-title')

        titleInput.setAttribute('id', 'task-title')

        const descriptionLabel = document.createElement('label')
        descriptionLabel.setAttribute('for', 'task-description')
        descriptionLabel.textContent = 'Description'
        forms.append(descriptionLabel)

        const descriptionInput = document.createElement('textarea')
        descriptionInput.setAttribute('name', 'description')
        descriptionInput.setAttribute('id', 'task-description')
        descriptionInput.setAttribute('rows', '4')
        descriptionInput.setAttribute('cols', '20')
        descriptionInput.setAttribute('required', '')
        forms.append(descriptionInput)

        const dueDateLabel = document.createElement('label')
        dueDateLabel.setAttribute('for', 'task-duedate')
        dueDateLabel.textContent = 'Due Date'
        forms.append(dueDateLabel)

        const dueDateInput = document.createElement('input')
        dueDateInput.setAttribute('name', 'duedate')
        dueDateInput.setAttribute('id', 'task-duedate')
        dueDateInput.setAttribute('type', 'date')
        dueDateInput.setAttribute('required', '')
        forms.append(dueDateInput)

        const priorityLabel = document.createElement('label')
        priorityLabel.setAttribute('for', 'task-priority')
        priorityLabel.textContent = 'Priority'
        forms.append(priorityLabel)

        const priorityInput = document.createElement('input')
        priorityInput.setAttribute('name', 'priority')
        priorityInput.setAttribute('id', 'task-priority')
        priorityInput.setAttribute('type', 'number')
        priorityInput.setAttribute('min', '1')
        priorityInput.setAttribute('max', '10')
        priorityInput.setAttribute('required', '')
        forms.append(priorityInput)

        forms.append(submit)

        let dueDateValue = ''

        document.getElementById("task-duedate").addEventListener("change", function() {
            dueDateValue = this.value;
        }); 

        forms.addEventListener('submit', e => {
            e.preventDefault()
            const formData = new FormData(e.target);
            const formProps = Object.fromEntries(formData);

            currentProject.addTask(task(formProps.title, formProps.description, dueDateValue, formProps.priority))
            populateStorage()
            closeModal()
            loadTasks(currentProject)
            forms.reset()
        })
    }
}

export { loadModals, populateModal, openModal, closeModal }