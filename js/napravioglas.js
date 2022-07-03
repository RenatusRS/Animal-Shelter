$(function () {
    $("#button_napravi").click(function () {
        var logged = JSON.parse(localStorage.getItem("logged"));
        if(logged!=null){

            var ads = JSON.parse(localStorage.getItem("ads"));
            ads.push({
                "user": logged,
                "name": $("#username").val(),
                "text": $("#text").val(),
                "contact": $("#number").val()
            });
            localStorage.setItem("ads", JSON.stringify(ads));
            window.location.href = "oglasi.html";
        }
    })
})