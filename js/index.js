$(function () {
    for (let i = 1; i <= 3; i++) {
        $("#ads").append(`<div class="col-12 col-lg-4 my-2"><div name="${ads.length - i}" class="text-break pointer ad h-100 p-3 border rounded"><h5> ${ads[ads.length - i]["name"]}</h5> ${ads[ads.length - i]["text"]}<br>${users[ads[ads.length - i]["user"]]["username"]} ${ads[ads.length - i]["contact"]}</div></div>`)
    }
}) 