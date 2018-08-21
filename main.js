
//declare variable equal to an empty variable
let shopArr = []
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
    this.hourlyCookieAvg = function() {
        return (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust) * avgCookie)
    }
}
//declare new variable and instantiate Shop function, pass Shop arguments
let ShopOne = new Shop('Krusty Krab', 'Seattle Center', 10, 17, 3.7, 11, 38)
let ShopTwo = new Shop('Historic Bites', 'SeaTac Airport', 10, 15, 1.2, 3, 24)
let ShopThree = new Shop('The modern crustacean', '1st and Pike', 10, 13, 6.3, 23, 65)
let ShopFour = new Shop('Simply crab cookies', 'Capitol Hill', 10, 13, 2.3, 20, 28)
let ShopFive = new Shop('Queen Crab', 'Alki', 10, 13, 4.6, 2, 16)


//push objects to the shopArr
shopArr.push(ShopOne,ShopTwo,ShopThree,ShopFour,ShopFive)
console.log(shopArr)



//create a function to call all methods hourlyCookieAvg of each instance of Shop
let shopCalc
let createFunc =  function() {
    for (let i = 0; i < shopArr.length; i++){
        shopCalc = shopArr[i]
        shopCalc.hourlyCookieAvg()
    } console.log(shopCalc.name + ' sells on average ' + shopCalc.hourlyCookieAvg() + ' per hour')
}
createFunc()
console.log(shopCalc.name + ' sells on average ' + shopCalc.hourlyCookieAvg() + ' per hour')