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

let test = function(){
    let parentnode = document.getElementById('parentnode');

    let newCard = document.createElement('div');
    newCard.classList.add('card', 'p-3', 'border-0', 'bg-gradient-warning', 'text-dark');
    newCard.textContent = "yay it worked."
    parentnode.appendChild(newCard);
}

document.getElementById("btn1").addEventListener("click", function(){
    console.log(stockInstances[0]['name']);
});


// let postComment = function(){

//     fetch('http://localhost:3000/comments/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin':'*'
//         },
//         body: JSON.stringify({
//             content: "yay post from index.js try2"
//         }),
//     })
//         .then(res => res.json())
//         .then(data => console.log(data));

// }


  