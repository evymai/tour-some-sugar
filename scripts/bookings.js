import { getBookings, getBands, getVenues } from "./database.js";

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()

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
    let html = "<section class=booking__card>"

    for (const booking of bookings) {
        const venue = findVenue(booking, venues)
        const band = findBand(booking, bands)
debugger
        html += `<p data-type="booking">${band.name} is playing at the ${venue.name} on ${booking.date}</p>`
    }

    html += "</section>"

    return html
}