$(function () {
    $("#button_login").click(function () {

        let username = $("#user_id").val().toLowerCase();

        for (let i = 0; i < users.length; i++) {
            if (username == users[i]["username"].toLowerCase()) {
                if ($("#pass_id").val() != users[i]["password"]) break;

                localStorage.setItem("logged", i);
                window.location.href = "index.html";
            }
        }
    })
})