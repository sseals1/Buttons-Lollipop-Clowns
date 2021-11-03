import { sendRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click",
 clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userDescription = document.querySelector("input[name='duration']").value
        const userAddress = document.querySelector("input[name='address']").value
        const userBudget = document.querySelector("input[name='attendance']").value
        const userDate = document.querySelector("input[name='reservation']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            description: userDescription,
            address: userAddress,
            budget: userBudget,
            reservationDate: userDate
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})


export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="duration">Duration /hrs</label>
            <input type="text" name="duration" class="input" />
        </div>
        <div class="field">
            <label class="label" for="address">Address</label>
            <input type="text" name="address" class="input" />
        </div>
        <div class="field">
            <label class="label" for="attendance">Child Attendance</label>
            <input type="number" name="attendance" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservation">Reservation Date</label>
            <input type="date" name="reservation" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}

