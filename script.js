function checkText() {
    let inputText = document.getElementById("inputText").value;
    if (inputText === "Hello") {
        document.body.style.backgroundColor = "Black";
    } else if (inputText === "World") {
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.style.backgroundColor = "yellow";
    }
}