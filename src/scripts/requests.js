import { getRequests, deleteRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")



mainContainer.addEventListener("click", 
click => {
    if (click.target.id.startsWith("Delete--")) {
        const [, requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))

    }
})


export const Requests = () => {
    const requests = getRequests()

    const convertRequestToListElement = (eachResultOfMap) => {
        return `<li>${eachResultOfMap.description}   <button class="deleteButton" id="Delete--${eachResultOfMap.id}">Delete</button></li>`
    }

    let html = `
        <ul>
            ${requests.map(convertRequestToListElement).join("")}
        </ul>
    `

    return html
}

