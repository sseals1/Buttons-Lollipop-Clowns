const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/booking`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.booking = serviceRequests
            }
        )
}

const applicationState = {
    booking: []
    
    
}






export const getRequests = () => {
    return applicationState.booking.map(booking => ({ ...booking }))
}

export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
        
    }


    return fetch(`${API}/booking`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })

}

const mainContainer = document.querySelector("#container")


export const deleteRequest = (id) => {
    return fetch(`${API}/booking/${id}`, { 
        method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}