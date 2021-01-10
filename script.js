let $darkTheme = false
if (localStorage.getItem('defaultTheme') == 'dark') {
    toggleDarkMode()
}

function toggleDarkMode() {

    if ($darkTheme == false) {
        document.getElementById("theme").href = "darkTheme.css";
        document.getElementById("infoTheme").innerHTML = "Light Mode";
        localStorage.setItem('defaultTheme', 'dark');
        $darkTheme = true
    } else {
        document.getElementById("theme").href = "lightTheme.css";
        document.getElementById("infoTheme").innerHTML = "Dark Mode";
        localStorage.removeItem('defaultTheme');
        $darkTheme = false
    }

}