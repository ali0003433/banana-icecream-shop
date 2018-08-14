// Declare variable and assign it an empty array
let shopArr = []
// Declare variable and assign it the value of the element w/ id my-body
let elList = document.getElementById('my-list')

// Declare a variable  elShopTitle and assign it value of html element with id shop-title
let elShopTitle = document.getElementById('shop-title')
console.log(elShopTitle)

// declare variable called ShopOne and assign it the value of an object literal
let ShopOne = {
    name: 'Cookie Cabinet',
    type: ['Presidential peanut butter', 'Red, white, blue','Apple pie'],
    city: 'Washington',
    theme: 'Americana',
    payment: ['Visa','Mastercard','American Express','trades negotiable'],
    accommodate: ['Gluten-free','Dairy-free','Sugar-free']
}

// declare variable called ShopTwo and assign it the value of an object literal
let ShopTwo = {
    name: 'Historic bites',
    type: ['Hardtack', 'Dandy Funk', 'Nazareth Sugar'],
    city: ['Washington', 'Bethesda','Arlington'],
    theme: 'Historic',
    payment: ['cash', 'barter'],
    accommodate: ['none']
}

// declare variable called ShopThree and assign it the value of an object literal
let ShopThree = {
    name: 'Cookie Pie',
    type:['Sausage pizza', 'Plain pizza', 'Mushroom pizza', 'Tomato pie'],
    city: 'Washington',
    theme: 'Pizza',
    payment: ['Visa', 'Mastercard', 'Bitcoin', 'Cash', 'Check'],
    accommodate:['adventurous types', 'meat-lovers']
}

//print the three objects
console.log(ShopOne)
console.log(ShopTwo)
console.log(ShopThree)

// push the shop objects into the shop array called shopArr
shopArr.push(ShopOne,ShopTwo,ShopThree)
console.log(shopArr)

//print shopArr at index zero and print city property using dot notation
console.log(shopArr[0].city)

// declare variable and assign it the value of new html element h1 inside the html body element with id= my-body
let elShopOneTitle = document.createElement('li')
elList.appendChild(elShopOneTitle)

console.log(elShopOneTitle)

// display the name property of the ShopOne object  in the html
elShopOneTitle.innerHTML = ShopOne.name

// declare variable of elShopTwoTitle and assign it value of a new h1 element
let elShopTwoTitle = document.createElement('li')
elList.appendChild(elShopTwoTitle)

console.log(elShopTwoTitle)

//display the property, name, of ShopTwo in html
elShopTwoTitle.innerHTML = ShopTwo.name

// declare a variable of elShopThreeTitle and assign it value of new html element
let elShopThreeTitle = document.createElement('li')
elList.appendChild(elShopThreeTitle)

console.log(elShopThreeTitle)

// display the shop's name in the html created
elShopThreeTitle.innerHTML = ShopThree.name

function displayShopTitle() {
    for(let i = 0; i < shopArr.length, i++;) {
        let elShopTitle = document.createElement('li')
        elShopTitle.setAttribute('class', 'shop-title')
        elList.appendChild(elShopTitle)
        elShopTitle.innerHTML = shopArr[i].name
    }
}
displayShopTitle(ShopOne,ShopTwo,ShopThree)