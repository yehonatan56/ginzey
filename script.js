var icon = document.getElementById("burger");
icon.onclick = function() {
    var nav  = document.querySelector('nav');
    if (nav.style.display == "none") {
        nav.style.display = "block"; // == boolean check, single = assimilation
        icon.className = "fas fa-times";
    } else {
        nav.style.display = "none";
        icon.className = "fas fa-bars"
    }
}
