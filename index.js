// Code your solution in this file!
const returnFirstTwoDrivers = function (arrOfDrivers){
    return arrOfDrivers.slice(0, 2)

}

const returnLastTwoDrivers = function (arrOfDrivers){
    return arrOfDrivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(givenValue) {
    return function(value) {
        return givenValue * value
    }
}

const fareDoubler = function(fares) {
    return fares * 2

}

const fareTripler = function(fare) {
    return fare * 3
}

const selectDifferentDrivers = function (arrayOfDrivers, returnDrivers) {

return returnDrivers(arrayOfDrivers)
    
}
    