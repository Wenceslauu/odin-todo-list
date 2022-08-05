import './style.css'
import * as persistent from './persistent-data'
import * as data from './data'
import * as header from './header'
import * as sidebar from './sidebar'
import * as maincontent from './maincontent'
import * as modal from './modal'

console.log(localStorage)

persistent.retrieveStorage()

header.loadHeader()

sidebar.loadSidebar()

maincontent.loadMainContent()

modal.loadModals()

sidebar.handleProjectAdding()

maincontent.loadTasks(data.projectHolder.projectList[0])

maincontent.handleTaskAdding(data.projectHolder.projectList[0])

sidebar.loadProjectList(data.projectHolder)


