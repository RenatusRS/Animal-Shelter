$(function () {
    $("#button_login").click(function () {
        for (let i = 0; i < users.length; i++) {
            if ($("#user_id").val() == users[i]["username"]) {
                console.log("TEST");
                if ($("#pass_id").val() != users[i]["password"]) break;

                localStorage.setItem("logged", i);
                window.location.href = "index.html";
            }
        }
    })
})