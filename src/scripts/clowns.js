import { sendRequest } from "./dataAccess.js"
import { ServiceForm } from "./ServiceForm.js"
import { Requests } from "./Requests.js"

export const clowns = () => {
    return `
        <h1>Buttons and Lolipop Clowns</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Requests()}
        </section>
    `
}

