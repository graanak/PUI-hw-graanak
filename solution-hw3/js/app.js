let glazingOptions = [
    {
        glazing: 'Keep original',
        price: 0,
    },
    {
        glazing: 'Sugar milk',
        price: 0,
    },
    {
        glazing: 'Vanilla milk + $0.50',
        price: 0.50,
    },
    {
        glazing: 'Double chocolate + $1.50',
        price: 1.50,
    },
];

let packOptions = [
    {
        packSize: '1',
        price: 1,
    },
    
    {
        packSize: '3',
        price: 3,
    },
    {
        packSize: '6',
        price: 5,
    },
    {
        packSize: '12',
        price: 10,
    },
];

let price = 2.49;

let selectGElement = document.querySelector('#glazing');
let selectPElement = document.querySelector('#pack');


function glazingChange (element) {

    const priceChange = element.value;
    let glazeIndex = parseInt(element.value);
    glazeToDisplay = glazingOptions[glazeIndex].price;
    tPrice();
}

for (let i = 0; i < glazingOptions.length; i++) {
    var option = document.createElement('option');
    option.text = glazingOptions[i].glazing;
    option.value = i;
    selectGElement.add(option);
}


function packChange (element) {

    const priceChange = element.value;
    let packIndex = parseInt(element.value);
    packToDisplay = packOptions[packIndex].price;
    tPrice();

}

for (let i = 0; i < packOptions.length; i++) {
    var option = document.createElement('option');
    option.text = packOptions[i].packSize;
    option.value = i;
    selectPElement.add(option);
}



let glazeToDisplay = glazingOptions[0].price;
let packToDisplay = packOptions[0].price;
tPrice();


function tPrice () {

    let priceElement = document.querySelector('#cost');
    let calc = Math.round(price + glazeToDisplay*packToDisplay);
    priceElement.innertext = calc;

}

