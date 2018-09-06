
//declare variable equal to an empty array
let shopArr = []
//declare variable that gets element from html by id
let elTable = document.getElementById('shops-table')
//declare variable that gets the form from html by id
let elForm = document.getElementById('shop-form')

//create an object constructor
let Shop = function(name, location, openTime, closeTime, avgCookie, minCust, maxCust)
{
    this.name = name
    this.location = location
    this.openTime = openTime
    this.closeTime = closeTime
    this.avgCookie = avgCookie
    this.minCust = minCust
    this.maxCust = maxCust
    this.totalHours = this.closeTime - this.openTime
    this.dailyCookieTotal = 0
    this.hourlyCookieAvgArray = []
    this.hourlyCookieAvg = function() {
        return Math.round(Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust) * avgCookie
    }
}
//instantiate new instances of Shop constructor
let ShopOne = new Shop('You scream banana', 'DC', 10, 19, 3.7, 11, 38)
let ShopTwo = new Shop('Fro-ban', 'DC', 10, 19, 1.2, 3, 24)
let ShopThree = new Shop('Icy ban-bans', 'Maryland', 10, 19, 2, 23, 65)
let ShopFour = new Shop('Nanner nogurt', 'Virginia', 10, 19, 5, 20, 28)
let ShopFive = new Shop('Anana-bay ogurt-yay', 'Virginia', 10, 19, 3, 2, 16)

//push instances of Shop to shopArr
shopArr.push(ShopOne,ShopTwo,ShopThree,ShopFour,ShopFive)
console.log(shopArr)

//define a function that will display the header row for the table
function displayTableHeader() {
    //create a row to contain table head elements
    let elRow = document.createElement('tr')
    //set class attribute to header row called header-row
    elRow.setAttribute('class', 'header-row')
    //append the header row to the table
    elTable.appendChild(elRow)
    //append the new table header element to the head row
    let elNameHeader = document.createElement('th')
    elNameHeader.setAttribute('id','header-one')
    elRow.appendChild(elNameHeader)
    //set inner HMTL of head element to string 'Shop Name'
    elNameHeader.innerHTML = 'Shop Name'
    //create and loop through open hours
    for (let i = 10; i < (19); i++) {
        let elTableHeader = document.createElement('th')
        //append newly created table head element to the table head row
        elRow.appendChild(elTableHeader)
        //set inner HTML of the table head to the hour
        elTableHeader.innerHTML = i + ':00'
    }
    let elTotalHeader = document.createElement('th')
    elRow.appendChild(elTotalHeader)
    elTotalHeader.innerHTML = 'Total'
}
//define a function that takes each shop's property hourlyCookieAvg and adds one for each hour 0 to 8
function displayCookieAvg(shop) {
    //create row for first shop
    let elRow = document.createElement('tr')
    //append row to table
    elTable.appendChild(elRow)
    //create new row head element for school name
    let elRowHeader = document.createElement('th')
    //append row header to the second row
    elRow.appendChild(elRowHeader)
    //set elRowHeader to have value of shop.name
    elRowHeader.innerHTML = shop.name
    //loop through each hour of sales
    for(let i = 0; i < ShopOne.totalHours; i ++) {
        //declare variable result and have it invoke hourlyCookieAvg on Shop
        let result = shop.hourlyCookieAvg()
        //create table data element
        let elTableData = document.createElement('td')
        //append table data element to row
        elRow.appendChild(elTableData)
        //set table data element to result
        elTableData.innerHTML = Math.round(result*100/100)
        //add each result to property dailyCookieTotal
        console.log(shop.dailyCookieTotal += result)
        //add each dailyCookieTotal to an array called dailyCookieTotalArray
        shop.hourlyCookieAvgArray.push(result)
    }
    let elTotalTableData = document.createElement('th')
    elRow.appendChild(elTotalTableData)
    console.log(elTotalTableData.innerHTML = Math.round(shop.dailyCookieTotal*100)/100)
}

//define function to display footer with total cookies per hour for each hour
function displayFooter() {
    //create row for footer
    let elFooterRow = document.createElement('tr')
    //append footer row to table
    elTable.appendChild(elFooterRow)
    //append th to footer row
    let elFooterTitle = document.createElement('th')
    //append footer title to footer row
    elFooterRow.appendChild(elFooterTitle)
    elFooterTitle.setAttribute('class', 'footer')
    //display text in footer title
    elFooterTitle.innerHTML = 'Total'
    // declare a variable that will store daily total for all shops
    let businessTotal = 0
    for(let i = 0; i < ShopOne.totalHours; i ++) {
        //declare variable for hourly sales across all shops
        let hourlyBusinessTotal = 0
        for(let j=0; j< shopArr.length; j++){
            hourlyBusinessTotal += shopArr[j].hourlyCookieAvgArray[i]
            console.log('inner loop', shopArr[j].name, j)
        }
        console.log('outer loop', i)
        let elFooterData = document.createElement('th')
        //append th to footer row
        elFooterRow.appendChild(elFooterData)
        //set inner html to hourlyBusinessTotal
        elFooterData.innerHTML = Math.round(hourlyBusinessTotal*100/100)
        //add hourlyBusinessTotal to value of businessTotal
        businessTotal += hourlyBusinessTotal
    }
    console.log(businessTotal)
    //create new th that will contain total business for all shops
    let elBusinessTotalFooter = document.createElement('th')
    elFooterRow.appendChild(elBusinessTotalFooter)
    elBusinessTotalFooter.innerHTML = Math.round(businessTotal*100)/100
}
//declare variable called newShopName and assign it value of name input
let newShopName = elForm.newShopName
let cookiesPerHour = elForm.cookiesPerHour

//define function called createNewShop to let user create new school with the form
function createNewShop(event){
    //prevent default method of page refresh
    event.preventDefault()
    //remove previous footer row
    console.log(elTable.childNodes)
    elTable.removeChild(elTable.childNodes[elTable.childNodes.length -1])
    //declare var called newShop with a new instantiated object of Shop and assign it the user-inputted name
    let newShop = new Shop(newShopName.value,'Cherry Hill', 10, 19, cookiesPerHour.value,10,100)
    //add newShop to shopArr
    shopArr.push(newShop)
    //invoke displayCookieAvg
    displayCookieAvg(newShop)
    //invoke displayFooter after adding the new instance/ row
    displayFooter()
}

//attach event listener to form to listen for submit event and run createNewShop function
elForm.addEventListener('submit', createNewShop)
//define a function to populate table
function populateTable(){
    //invoke displayTableHeader
    displayTableHeader()
    for (let i =0; i < shopArr.length; i++ ) {
        displayCookieAvg(shopArr[i])
    }
    displayFooter()
}
populateTable()

