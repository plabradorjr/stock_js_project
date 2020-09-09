document.getElementById("dollar-button").addEventListener("click", () => {
    removeLandingPage();
    showHeaderPuts();
    printStocksToDOM();
    showViewCommentButton();
});

let showHeaderPuts = () => document.getElementById("puts-header").classList.toggle('invisible');


let removeLandingPage = () => document.getElementById("topMeme").remove();

let showViewCommentButton = () => {
    document.getElementById("commentSection").classList.toggle('invisible');
    document.getElementById("comment-button").addEventListener("click", function(){
        printCommentsToDOM();
        document.getElementById("commentSection").remove();
        document.getElementById("postCommentOption").classList.toggle('invisible')
    });
    
}

let handleSubmitClick = () => {
    
    document.querySelector(".fetch-new-input").addEventListener('click', function(e){

        let inputNameValue = document.querySelector(".comment-name").value;
        let inputCommentValue = document.querySelector(".comment-content").value;

        postComment(inputNameValue, inputCommentValue)
        
    })    
}

handleSubmitClick();
