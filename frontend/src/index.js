// console.log("hello i'm inside indexJs woot!")
let stockInstances = []

fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(data => data.forEach(function(stocksObject){
        let i = new Stock(stocksObject);
        stockInstances.push(i);
    })
    );

// console.log(stockInstances)