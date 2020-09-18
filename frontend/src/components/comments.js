// let commentInstances = []

class Comments {
    constructor(obj) {
        this.name = obj.name
        this.content = obj.content
        Comments.all.push(this);
    };

    render = () => {
        let newPostCard = document.createElement('div');
        newPostCard.classList.add('card', 'center', 'p-3', 'border-2', 'bg-dark', 'col-8');
        newPostCard.innerHTML = '<p>🧐 ' + `${this.name}` + ':</p>' + '<small>📈🚀 ' + `${this.content}` + '</small>'

        return newPostCard;
    }
}

Comments.all = []

let fetchAndCreateCommentObjects = () => {

    fetch('http://localhost:3000/comments')
    .then(res => res.json())
    // .then(data => console.log(data[0]['comments']))
    .then(data => data.forEach(function(commentObj){
        new Comments(commentObj);
    })
    )
}

fetchAndCreateCommentObjects();

let printCommentsToDOM = () => {

    let parentNodeComments = document.getElementById('parentnodeforcomments');
    
    // for (let comment of commentInstances) {
            // let newPostCard = document.createElement('div');
            // newPostCard.classList.add('card', 'center', 'p-3', 'border-2', 'bg-dark', 'col-8');
            // newPostCard.innerHTML = '<p>🧐 ' + `${comment.name}` + ':</p>' + '<small>📈🚀 ' + `${comment.content}` + '</small>'
            Comments.all.forEach(comment => {
                let renderComment = comment.render();
                parentNodeComments.appendChild(renderComment);
            })    
    // };
}

let postComment = (name, comment) => {

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
