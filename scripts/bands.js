const database = {
    bands: [{
        id: 1,
        name: "Wanna One",
        members: 11,
        genre: "k-pop",
        debut: "August 7, 2017"
    }, {
        id: 2,
        name: "NCT 127",
        members: 10,
        genre: "k-pop",
        debut: "July 7, 2016"
    }, {
        id: 3,
        name: "Eric Nam",
        members: 1,
        genre: "pop",
        debut: "January 23, 2013"
    }, { 
        id: 4,
        name: "Twice",
        members: 9,
        genre: "k-pop",
        debut: "October 20, 2015"
    }, { 
        id: 5,
        name: "P1Harmony",
        members: 6,
        genre: "kpop",
        debut: "October 28, 2020"
    }, { 
        id: 6,
        name: "NCT Dream",
        members: 7,
        genre: "k-pop",
        debut: "August 25, 2016"
    }, { 
        id: 7,
        name: "MAMAMOO",
        members: 4,
        genre: "k-pop",
        debut: "June 18, 2014"
    }, { 
        id: 8,
        name: "Dreamcatcher",
        members: 7,
        genre: "k-rock",
        debut: "January 13, 2017"
    }, { 
        id: 9,
        name: "AB6IX",
        members: 4,
        genre: "k-pop",
        debut: "May 22, 2019"
    }, { 
        id: 10,
        name: "Purple Kiss",
        members: 6,
        genre: "k-pop",
        debut: "November 18, 2022"
    }, { 
        id: 11,
        name: "Jeremy Zucker",
        members: 1,
        genre: "pop",
        debut: "October 30, 2015"
        }, {
        id: 12,
        name: "Tiffany Day",
        members: 1,
        genre: "bedroom pop",
        debut: "December 23, 2015"
    }],
    venues: [{
        id: 1,
        name: "Cobb Energy Performing Arts",
        address: "2800 Cobb Galleria Pkwy, Atlanta, GA 30339",
        size: 10000,
        capacity: 2750
    }, {
        id: 2,
        name: "Coco-Cola Roxy",
        address: "800 Battery Ave SE #500, Atlanta, GA 30339",
        size: 53000,
        capacity: 3600
    }, {
        id: 3,
        name: "The Basement East",
        address: "917 Woodland St, Nashville, TN 37206",
        size: 5000,
        capacity: 400
    }, {
        id: 4,
        name: "State Farm Arena",
        address: "1 State Farm Dr, Atlanta, GA 30303",
        size: 680000,
        capacity: 15590
    }, {
        id: 5,
        name: "Cannery Ballroom",
        address: "1 Cannery Row, Nashville, TN 37203",
        size: 10000,
        capacity: 1000
    }, {
        id:6,
        name: "Grand Ole Opry",
        address: "600 Opry Mills Dr, Nashville, TN 37214",
        size: 101000,
        capacity: 4400
    }, {
        id: 7,
        name: "Bridgestone Arena",
        address: "",
        size: 1000000,
        capacity: 20000
    }, {
        id: 8,
        name: "Truist Park",
        address: "755 Battery Ave SE, Atlanta, GA 30339",
        size: 1100000,
        capacity: 41500
    }, {
        id: 9,
        name: "Marathon Music Works",
        address: "1402 Clinton St, Nashville, TN 37203",
        size: 14000,
        capacity: 1500
    }, {
        id: 10,
        name: "The Masquerade",
        address: "50 Lower Alabama Street #110, Atlanta, GA 30303",
        size: 30000,
        capacity: 1500
    }, {
        id: 11,
        name: "Riverside Revival",
        address: "1600 Riverside Dr, Nashville, TN 37216",
        size: 2500,
        capacity: 400
    }], 
    bookings: [{
        id: 1,
        bandId: 1,
        venueId: 1,
        date: "01.02.2018"
    }, {
        id: 2,
        bandId: 2,
        venueId: 2,
        date: "04.26.2019"
    }, {
        id: 3,
        bandId: 3,
        venueId: 3,
        date: "02.10.2020"
    }, {
        id: 4,
        bandId: 4,
        venueId: 4,
        date: "02.24.2022"
    }, {
        id: 5,
        bandId: 3,
        venueId: 5,
        date: "03.03.2022"
    }, {
        id: 6,
        bandId: 5,
        venueId: 6,
        date: "02.12.2023"
    }, {
        id: 7,
        bandId: 6,
        venueId:4,
        date: "04.09.2023"
    }, {
        id: 8,
        bandId: 7,
        venueId: 7,
        date: "05.22.2023"
    }, {
        id: 9,
        bandId: 4,
        venueId: 8,
        date: "07.09.2023"
    }, {
        id: 10,
        bandId: 8,
        venueId: 6,
        date: "09.10.2023"
    }, {
        id: 11,
        bandId: 3,
        venueId: 9,
        date: "09.17.2023"
    }, {
        id: 12,
        bandId: 12,
        venueId: 9,
        date: "09.17.2023"
    },{
        id: 13,
        bandId: 12,
        venueId: 11,
        date: "09.17.2023"
    }, {
        id: 14,
        bandId: 11,
        venueId: 9,
        date: "11.01.2023"
    },{
        id: 15,
        bandId: 9,
        venueId: 10,
        date: "11.07.2023"
    }, {
        id: 16,
        bandId: 10,
        venueId: 11,
        date: "11.12.2023"
    }]
}
