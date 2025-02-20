// console.log("check");

document
  .getElementById("comment-Submit")
  .addEventListener("click", function () {
    // console.log("Submit done");
    const commentBox = document.getElementById("comment-Box");
    // console.log(commentBox);
    const collectedComment = commentBox.value;
    // console.log(collectedComment);

    const showComment = document.getElementById("show-comment");
    const setP = document.createElement("p");
    setP.innerText = collectedComment;
    showComment.appendChild(setP);

    commentBox.value = "";
  });
