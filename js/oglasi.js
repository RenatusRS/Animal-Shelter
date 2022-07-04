$(function () {
    for (let i = 0; i < ads.length; i++) {
        $("#ads").append(`<div name="${i}" class="text-break pointer p-3 my-3 ad border rounded"><h5> ${ads[i]["name"]}</h5> ${ads[i]["text"]}<br>${users[ads[i]["user"]]["username"]} ${ads[i]["contact"]}</div>`)
    }

    $(".ad").click(function () {
        localStorage.setItem("ad", $(this).attr("name"));
        window.location.href = "oglasi/oglas.html"
    })
}) 