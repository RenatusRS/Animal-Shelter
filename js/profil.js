$(function () {
    if (logged == null) window.location.replace("login.html");

    $("#username").html(users[logged]["username"]);

    for (let i = 0; i < ads.length; i++) {
        if (ads[i]["user"] == logged) {
            $("#ads").append(`<div name="${i}" class="pointer ad border rounded p-3 my-2"><h5>${ads[i]["name"]}</h5> ${ads[i]["text"]} <br> ${ads[i]["contact"]} </div>`)
        }
    }

    for (let i = 0; i < comments.length; i++) {
        if (comments[i]["user"] == logged) {
            if (!$(`#${comments[i]["ad"]}`).length) $("#comments").append(`<div name="${comments[i]["ad"]}" id="${comments[i]["ad"]}" class="pointer ad border rounded p-2 my-2"><h5>${ads[comments[i]['ad']]["name"]}</h5></div>`)

            $(`#${comments[i]["ad"]}`).append(`<p>${comments[i]["text"]}</p>`)
        }
    }

    $(".ad").click(function () {
        localStorage.setItem("ad", $(this).attr("name"));
        window.location.href = "oglasi/oglas.html"
    })
}) 