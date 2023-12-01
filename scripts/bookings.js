import { getBookings, getBands, getVenues } from "./database.js";

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "booking") {
            for (const band of bands) {
                if (parseInt(itemClicked.dataset.bandid) === band.id) {
                    window.alert(`${band.name}\n${band.genre}\nDebuted on ${band.debut}\n${band.members} members`)
                }
            }
        }
        
    }
)
document.addEventListener(
    "click",
    (clickEvent) => {
        debugger
        const itemClicked = clickEvent.target
        let bandsList = ``
        if (itemClicked.dataset.type === "venue") {
            for (const booking of bookings) {
                if (parseInt(itemClicked.dataset.id) === booking.venueId) {
                    for (const band of bands) {
                        if (booking.bandId === band.id) {
                            bandsList += `${band.name}\n`
                        }
                    }
                }
            }
            window.alert(`${bandsList}`)
        }
    }
)
document.addEventListener(
    "click",
    (clickEvent) => {
        debugger
        const itemClicked = clickEvent.target
        let venuesList = ``
        if (itemClicked.dataset.type === "band") {
            for (const booking of bookings) {
                if (parseInt(itemClicked.dataset.id) === booking.bandId) {
                    for (const venue of venues) {
                        if (booking.venueId === venue.id) {
                            venuesList += `${venue.name}\n`
                        }
                    }
                }
            }
            window.alert(`${venuesList}`)
        }
    }
)

//find the band for a booking
const findBand = (booking, allBands) => {
    let bookedBand = null
    
    for (const band of bands) {
        if (band.id === booking.bandId) {
            bookedBand = band
        }
    }
    return bookedBand
}

//find the venue for a booking
const findVenue = (booking, allVenues) => {
    let bookedVenue = null
    
    for (const venue of venues) {
        if (venue.id === booking.venueId) {
            bookedVenue = venue
        }
    }
    return bookedVenue
}

export const BookingsHTML = () => {
    let html = `<section class="booking__card">`

    for (const booking of bookings) {
        const venue = findVenue(booking, venues)
        const band = findBand(booking, bands)

        html += `<p data-type="booking"
        data-id="${booking.id}" data-bandid="${booking.bandId}"
        >${band.name} is playing at the ${venue.name} on ${booking.date}</p>`
    }

    html += "</section>"

    return html
}