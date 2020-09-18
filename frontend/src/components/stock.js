// let Stock.all = []

class Stock {
    constructor(obj) {
        this.id = obj.id
        this.name = obj.name
        this.ticker = obj.ticker
        this.price = obj.price
        this.change = obj.change
        Stock.all.push(this);

    };

    render() {
        let newCard = document.createElement('div');
            newCard.classList.add('card', 'p-3', 'border-2', 'bg-white', 'text-dark', 'col-3');
            newCard.innerHTML = '<p>' + `${this.name} `+ '(' + `${this.ticker}` + ')</p>' + '<small>Price: $' + `${this.price}` + '</small>'
                                + '<small>24hr change: ' + `${this.change}` + '</small>'

        return newCard;
    }

}

Stock.all = []

let fetchAndCreateStockObjects = () => {

    fetch('http://localhost:3000/markets')
    .then(res => res.json())
    .then(data => data[0]['stocks'].forEach(function(stocksObject){
        new Stock(stocksObject);
        // stockInstances.push(i);
    })
    );
}

fetchAndCreateStockObjects();

let printStocksToDOM = () => {

    const parentNode = document.getElementById('parentnode');
    
    // for (let stock of Stock.all) {
       // parentnode.appendChild(newCard);
    //};

    Stock.all.forEach(stock => {
        let renderElement = stock.render()
        parentNode.appendChild(renderElement)
    })
}