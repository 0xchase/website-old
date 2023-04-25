function removeFocus() {
    document.getElementById('focus').classList.remove("focus");
}

function shrinkNavBar() {
    var x = document.getElementById("myNavBar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
