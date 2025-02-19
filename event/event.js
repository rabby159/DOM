console.log("check");

function red() {
  document.body.style.backgroundColor = "red";
}

function green() {
  document.body.style.backgroundColor = "green";
}
function blue() {
  document.body.style.backgroundColor = "blue";
}

document.getElementById("make-purple").addEventListener("click", function () {
  document.body.style.backgroundColor = "purple";
});

document
  .getElementById("make-goldenrod")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
  });
