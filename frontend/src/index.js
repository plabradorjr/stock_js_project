document.getElementById("dollar-button").addEventListener("click", function(){
    removeLandingPage();
    showHeaderPuts();
    printStocksToDOM();
    showViewCommentButton();
});

let showHeaderPuts = function(){
    document.getElementById("puts-header").classList.toggle('invisible')
}

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

let handleSubmitClick = function(){
    
    document.querySelector(".fetch-new-input").addEventListener('click', function(e){

        let inputNameValue = document.querySelector(".comment-name").value;
        let inputCommentValue = document.querySelector(".comment-content").value;

        postComment(inputNameValue, inputCommentValue)
        
    })    
}

handleSubmitClick();
