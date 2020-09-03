// console.log("hello i'm inside indexJs woot!")
let stockInstances = []

let fetchAndCreateStockObjects = function(){

    fetch('http://localhost:3000/markets')
    .then(res => res.json())
    .then(data => data[0]['stocks'].forEach(function(stocksObject){
        let i = new Stock(stocksObject);
        stockInstances.push(i);
    })
    )
}

fetchAndCreateStockObjects();

let printStocksToDOM = function(){

    const parentnode = document.getElementById('parentnode');
    
    for (let stock of stockInstances) {
            let newCard = document.createElement('div');
            newCard.classList.add('card', 'p-3', 'border-2', 'bg-white', 'text-dark', 'col-3');
            newCard.innerHTML = '<p>' + `${stock.name} `+ '(' + `${stock.ticker}` + ')</p>' + '<small>Price: $' + `${stock.price}` + '</small>'
                                + '<small>24hr % change: +' + `${stock.change}` + '%</small>'
            parentnode.appendChild(newCard);
    };
}

document.getElementById("btn1").addEventListener("click", function(){
    printStocksToDOM();
});


let postComment = function(){

    fetch('http://localhost:3000/comments/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({
            name: "anon from index.js try1",
            content: "yay post from index.js try1"
        }),
    })
        .then(res => res.json())
        .then(data => console.log(data));

}


  