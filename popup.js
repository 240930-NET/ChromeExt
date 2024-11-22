const button = document.getElementById("sampleSecond");

button.addEventListener("click", (e) => {
    e.stopPropagation();
    alert(e.target["id"] + " was pressed!")
});