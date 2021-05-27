function toggle() {

    var wrapper = document.getElementById("wrapper");

    if (wrapper.getAttribute("added") === "false") {
        wrapper.className = "toggleSidebar";
        wrapper.setAttribute("added", "true");
    }
    else {
        wrapper.className = "";
        wrapper.setAttribute("added", "false");
    }
}

function darkmode() {

    var darkMode = document.getElementById('darkMode');

    if (darkMode.checked) {
        document.getElementById('main').className = "dark";
    }
    else {
        document.getElementById('main').className = "";
    }
    darkMode.onchange = () => {
        if (darkMode.checked) {
            document.getElementById('main').className = "dark";
        }
        else {
            document.getElementById('main').className = "";
        }
    }
}

export { toggle, darkmode };