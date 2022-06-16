function load_user() {
    if (document.getElementById("user_id").value == "hose" && document.getElementById("pass_id").value == "hose") {
        var korisnik= document.getElementById("user_id").value;
        localStorage.setItem("korisnik", korisnik);
        window.location.href = 'index.html';
    }
}