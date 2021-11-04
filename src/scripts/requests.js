import { getRequests, deleteRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")



mainContainer.addEventListener("click", 
click => {
    if (click.target.id.startsWith("Deny--")) {
        const [, requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))

    }
})


export const Requests = () => {
    const requests = getRequests()

    const convertRequestToListElement = (eachResultOfMap) => {
        return `<li>
        --${eachResultOfMap.address}  
        -- budget:$${eachResultOfMap.budget} 
        --${eachResultOfMap.reservationDate}
        --${eachResultOfMap.duration}
        <button class="deleteButton" id="Deny-- ${eachResultOfMap.id}">Deny</button> 
        </li>`
    }

    let html = `
        <ul>
            ${requests.map(convertRequestToListElement).join("")}
        </ul>
    `

    return html
}

