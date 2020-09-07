let commentInstances = []

class Comments {
    constructor(obj) {
        this.name = obj.name
        this.content = obj.content
    };
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
