import { BandsHTML } from "./bands.js"
import { BookingsHTML } from "./bookings.js"
import { VenuesHTML } from "./venues.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour Some Sugar On Me</h1>
<article class="bookings">
    <h2>Bookings</h2>
    ${BookingsHTML()}
</article>
<article class="details">
    <section class="detail--column list details__venues">
        <h2>Venues</h2>
        ${VenuesHTML()}
    </section>
    <section class="detail--column list details__bands">
        <h2>Bands</h2>
        ${BandsHTML()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML
