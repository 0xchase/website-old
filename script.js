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
        hideAllMenus();
    } else {
        x.className = "navbar wide-margin";
        hideAllMenus();
    }
}

function hideAllMenus() {
    document.getElementById("about").style.display = "";
    document.getElementById("projects").style.display = "";
    document.getElementById("music").style.display = "";
}

function toggleDisplay(name) {
    if (window.innerWidth <= 600) {
        var x = document.getElementById(name);
        if (x.style.display.includes("block")) {
            x.style.display = "";
        } else {
            x.style.display = "block";
        }
    }
}