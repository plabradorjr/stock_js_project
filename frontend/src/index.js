let stockInstances = []
let commentInstances = []

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
                                + '<small>24hr % change: +' + `${stock.change}` + '%</small>'
            parentnode.appendChild(newCard);
    };
}

document.getElementById("test").addEventListener("click", function(){
    removeLandingPage();
    printStocksToDOM();
    showViewCommentButton();
});

let removeLandingPage = function(){
    document.getElementById("topMeme").remove();
}

let showViewCommentButton = function(){
    document.getElementById("commentSection").classList.toggle('invisible');
    document.getElementById("comment-button").addEventListener("click", function(){
        printCommentsToDOM();
        document.getElementById("commentSection").remove();
        document.getElementById("postCommentOption").classList.toggle('invisible')
    });
    
}

let fetchAndCreateCommentObjects = function(){

    fetch('http://localhost:3000/comments')
    .then(res => res.json())
    // .then(data => console.log(data[0]['comments']))
    .then(data => data.forEach(function(commentObj){
        let newComment = new Comments(commentObj);
        commentInstances.push(newComment);
    })
    )
}

fetchAndCreateCommentObjects();

let printCommentsToDOM = function(){

    let parentNodeComments = document.getElementById('parentnodeforcomments');
    
    for (let comment of commentInstances) {
            let newPostCard = document.createElement('div');
            newPostCard.classList.add('card', 'center', 'p-3', 'border-2', 'bg-dark', 'col-8');
            newPostCard.innerHTML = '<p>🧐 ' + `${comment.name}` + ':</p>' + '<small>📈🚀 ' + `${comment.content}` + '</small>'
                                
            parentNodeComments.appendChild(newPostCard);
    };
}

let postComment = function(name, comment){

    document.querySelector(".comment-name").value = ''
    document.querySelector(".comment-content").value = ''

    fetch('http://localhost:3000/comments/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({
            name: name,
            content: comment
        }),
    })

    let newPost = document.createElement('div');
    newPost.classList.add('card', 'center', 'p-3', 'border-2', 'bg-dark', 'col-8');
    newPost.innerHTML = '<p>🤑 ' + name + ':</p>' + '<small>📈🚀 ' + comment + '</small>'
    
    let parentNodeCommentsPost = document.getElementById('parentnodeforcomments');

    parentNodeCommentsPost.appendChild(newPost);    
}

let handleSubmitClick = function(){
    
    document.querySelector(".fetch-new-input").addEventListener('click', function(e){

        let inputNameValue = document.querySelector(".comment-name").value;
        let inputCommentValue = document.querySelector(".comment-content").value;

        postComment(inputNameValue, inputCommentValue)
        
    })    
}

handleSubmitClick();
