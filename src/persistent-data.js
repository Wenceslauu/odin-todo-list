import { projectHolder } from './data'

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

function retrieveStorage() {
    if (storageAvailable('localStorage')) {
        let i = 0
        while (localStorage.getItem(`project${i + 1}`)) {
            projectHolder.projectList[i] = JSON.parse(localStorage.getItem(`project${i + 1}`))

            let j = 0
            while (localStorage.getItem(`task${i + 1}-${j + 1}`)) {
                projectHolder.projectList[i].taskList[j] = JSON.parse(localStorage.getItem(`task${i + 1}-${j + 1}`))

                j++
            }

            i++
        }
    } else {
        alert('localStorage is not available')
    }
}

function populateStorage() {
    localStorage.clear()

    if (storageAvailable('localStorage')) {
        for (let i = 0; i < projectHolder.projectList.length; i++) {
            localStorage.setItem(`project${i + 1}`, JSON.stringify(projectHolder.projectList[i]));

            if (projectHolder.projectList[i].taskList.length > 0) {
                for (let j = 0; j < projectHolder.projectList[i].taskList.length; j++) {
                    localStorage.setItem(`task${i + 1}-${j + 1}`, JSON.stringify(projectHolder.projectList[i].taskList[j]));
                }
            }   
        }
    } else {
        alert('localStorage is not available')
    }
}   

export { retrieveStorage, populateStorage }