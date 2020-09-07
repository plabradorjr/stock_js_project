let stockInstances = []

class Stock {
    constructor(obj) {
        this.id = obj.id
        this.name = obj.name
        this.ticker = obj.ticker
        this.price = obj.price
        this.change = obj.change
    };
}

let fetchAndCreateStockObjects = function(){

    fetch('http://localhost:3000/markets')
    .then(res => res.json())
    .then(data => data[0]['stocks'].forEach(function(stocksObject){
        let i = new Stock(stocksObject);
        stockInstances.push(i);
    })
    );
}

fetchAndCreateStockObjects();

let printStocksToDOM = function(){

    const parentnode = document.getElementById('parentnode');
    
    for (let stock of stockInstances) {
            let newCard = document.createElement('div');
            newCard.classList.add('card', 'p-3', 'border-2', 'bg-white', 'text-dark', 'col-3');
            newCard.innerHTML = '<p>' + `${stock.name} `+ '(' + `${stock.ticker}` + ')</p>' + '<small>Price: $' + `${stock.price}` + '</small>'
                                + '<small>24hr change: ' + `${stock.change}` + '</small>'
            parentnode.appendChild(newCard);
    };
}