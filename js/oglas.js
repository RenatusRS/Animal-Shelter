$(function () {
    var ad = localStorage.getItem("ad");

    $(".name").html(ads[ad]["name"]);
    $("#text").html(ads[ad]["text"]);
    $("#contact").html(users[ads[ad]["user"]]["username"] + " " + ads[ad]["contact"]);

    for (let i = 0; i < comments.length; i++) {
        if (comments[i]["ad"] == ad) {
            $("#comments").append(`<div><h5>${users[comments[i]["user"]]["username"]}</h5><p class="overflow-auto">${comments[i]["text"]}</p></div>`);
        }
    }

    $(".t-leavecomment").click(function () {
        if ($("#leavecomment").val() == "") return;

        comments.push({
            "user": logged,
            "ad": ad,
            "text": $("#leavecomment").val(),
        });

        localStorage.setItem("comments", JSON.stringify(comments));

        window.location.reload();
    })
})
