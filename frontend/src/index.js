// console.log("hello i'm inside indexJs woot!")
let stockInstances = []


let fetchAndRenderStockToDOM = function(){

    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(data => data.forEach(function(stocksObject){
        let i = new Stock(stocksObject);
        stockInstances.push(i);
    })
    );

}

// fetchAndInstantiateStocks();

let postComment = function(){

    fetch('http://localhost:3000/comments/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({
            content: "yay post from index.js try2"
        }),
    })
        .then(res => res.json())
        .then(data => console.log(data));

}


  