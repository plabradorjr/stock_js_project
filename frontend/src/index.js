// console.log("hello i'm inside indexJs woot!")
let stockInstances = []


let fetchAndInstantiateStocks = function(){

    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(data => data.forEach(function(stocksObject){
        let i = new Stock(stocksObject);
        stockInstances.push(i);
    })
    );

}

fetchAndInstantiateStocks();

// fetch('http://localhost:3000/stocks', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application.json'
//     },
//     body: JSON.stringify({
//         comments: 'comment from javascript'
//     })
// })
//     .then(res => res.json())
//     .then(data => data.forEach(function(stocksObject){
//         let i = new Stock(stocksObject);
//         stockInstances.push(i);
//     })
//     );