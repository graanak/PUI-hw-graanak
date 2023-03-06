class Roll {
    constructor(imageURL, rollType, rollGlazing, packSize, basePrice) {
		this.noteImageURL = imageURL;
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;

		this.element= null;
    }
}


const rollSet = new Set();

function addRollSet(imageURL, rollType, rollGlazing, packSize, basePrice){
    const cartObj = new Roll(imageURL, rollType, rollGlazing, packSize, basePrice);
    rollSet.add(cartObj);
    return cartObj;
}

for (const cartObj of rollSet){
    console.log(cartObj);
    createElement(cartObj);
}

function createElement(cartObj){
    const template = document.querySelector('#cart-template');
    // my code wouldn't recognize .content so  I had to use .textContent
    const clone = template.textContent.cloneNode(true);

    cartObj.element = clone.querySelector('.cartObj');

    const btnDelete = cartObj.element.querySelector('delete-x');
    btnDelete.addEventListener('click', () => {
        deleteCart(cartObj);
    })

    const cartListElement = document.querySelector('#cart-list');
    cartListElement.prepend(cartObj.element);

    updateElement(cartObj);

}

function updateElement(cartObj) {
    const rollImageElement = cartObj.element.querySelector('.cart-thumbnail');
    const rollTypeElement = cartObj.element.querySelector('.cart-type');
    const rollGlazingElement = cartObj.element.querySelector('.cart-glazing');
    const rollPackElement = cartObj.element.querySelector('.cart-pack');
    const rollPriceElement = cartObj.element.querySelector('.cart-price');

    rollImageElement.src = roll.noteImageURL;
    rollTypeElement.src = roll.rollType;
    rollGlazingElement.src = roll.rollGlazing;
    rollPackElement.src = roll.packSize;
    rollPriceElement.src = roll.basePrice;
    
}

// deleting the cart items 

function deleteCart(cartObj){
    cartObj.element.remove();
    rollSet.delete(cartObj);
}

// cart objects-----------------

const cartObjOne = addRollSet( 
    "images/products/original-cinnamon-roll.png",
    "0riginal",
    "Sugar milk",
    "1",
    "$2.49"
);

const cartObjTwo = addRollSet( 
    "images/products/walnut-cinnamon-roll.png",
    "Walnut",
    "Vanilla milk",
    "2",
    "$39.90"
);

const cartObjThree = addRollSet( 
    "images/products/raisin-cinnamon-roll.png",
    "Raisin",
    "Sugar milk",
    "3",
    "$8.97"
);

const cartObjFour = addRollSet( 
    "images/products/apple-cinnamon-roll.png",
    "Apple",
    "Keep original",
    "3",
    "$10.47"
);

