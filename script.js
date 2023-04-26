function removeFocus() {
    document.getElementById('focus').classList.remove("focus");
}

function shrinkNavBar() {
    var x = document.getElementById("myNavBar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else if (x.className == "navbar wide-margin") {
        x.className += " responsive";
    } else if (x.className == "navbar responsive"){
        x.className = "navbar";
    } else {
        x.className = "navbar wide-margin";
    }
}
