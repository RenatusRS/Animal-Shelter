$(function () {
    for (let i = 0; i < ads.length; i++) {
        $("#ads").append('<div name="' + i + '" class="ad border rounded"><h5>' + ads[i]["name"] + "</h5>" + ads[i]["text"] + "<br>" + ads[i]["contact"] + '</div>')
    }

    $(".ad").click(function () {
        localStorage.setItem("ad", $(this).attr("name"));
        window.location.href = "oglasi/oglas.html"
    })
}) 