// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    let newDrivers = [drivers[0], drivers[1]]
    return newDrivers
}

function returnLastTwoDrivers(drivers) {
    let newDrivers = [drivers[2], drivers[3]]
    return newDrivers
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = function(fareMultiplier) {
    return function(num1) {
        return fareMultiplier * num1
    }
}

let fareDoubler = createFareMultiplier(2)
let fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, num) {
    return num(drivers)
}