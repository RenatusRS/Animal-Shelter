if (localStorage.getItem("lang") == null) {
    localStorage.setItem("ad", 0);
    localStorage.setItem("lang", "rs");
    localStorage.setItem("logged", null);

    var users = [
        {
            "username": "Aleksandar",
            "password": "aki",
        }, {
            "username": "Zoran",
            "password": "zoki",
        }, {
            "username": "Bogdan",
            "password": "boki",
        }, {
            "username": "Vladimir",
            "password": "vlax",
        }, {
            "username": "Petar",
            "password": "peki",
        }
    ]

    localStorage.setItem("users", JSON.stringify(users));

    var ads = [
        {
            "user": 2,
            "name": "Tobuscus",
            "text": "Starija siva mačka, voli da se mota oko Zemunskog keja.",
            "contact": "063-761-0321",
        }, {
            "user": 3,
            "name": "Fićo",
            "text": "papagaj Fićo, zadnji put viđen kako se igra sa mačkama kod Tošinog Bunara.",
            "contact": "062-464-535",
        }, {
            "user": 3,
            "name": "Feđo",
            "text": "papagaj Feđo, video sam ga zadnji put kako se igra sa Fićom, područije Tošin Bunar.",
            "contact": "062-464-535",
        }, {
            "user": 1,
            "name": "Kan Ye",
            "text": "Crni pas, malo džangrizav, Belvil",
            "contact": "064-555-333",
        }, {
            "user": 0,
            "name": "Drizi",
            "text": "čivava, veoma aktivna, smeđa sa belim tufnama. zemun.",
            "contact": "065-332-1252",
        }
    ]

    localStorage.setItem("ads", JSON.stringify(ads));

    var comments = [
        {
            "user": 2,
            "ad": 1,
            "text": "sa mackama se igrao? brate, imam lose vesti za tebe...",
        }, {
            "user": 2,
            "ad": 1,
            "text": "ne znam",
        }, {
            "user": 0,
            "ad": 3,
            "text": "Mislim da sam ga video kod Fontane.",
        }, {
            "user": 2,
            "ad": 0,
            "text": "nadjena!",
        }, {
            "user": 1,
            "ad": 3,
            "text": "i ja!",
        }, {
            "user": 1,
            "ad": 3,
            "text": "Nađen! Hvala!!!",
        }, {
            "user": 0,
            "ad": 4,
            "text": "zaboravio sam da napomenem da je ženka.",
        }, {
            "user": 4,
            "ad": 4,
            "text": "Ima jedna takva u zemunskom parku. Ima ogrlicu!",
        },
    ]

    localStorage.setItem("comments", JSON.stringify(comments));
}

var trans = {
    "home": {
        html: {
            "rs": "Početna Stranica",
            "en": "Home"
        }
    },

    "about": {
        html: {
            "rs": "O nama",
            "en": "About"
        }
    },

    "dogs": {
        html: {
            "rs": "Psi",
            "en": "Dogs",
        }
    },

    "cats": {
        html: {
            "rs": "Mačke",
            "en": "Cats",
        }
    },

    "birds": {
        html: {
            "rs": "Ptice",
            "en": "Avians",
        }
    },

    "animals": {
        html: {
            "rs": "Životinje",
            "en": "Animals"
        }
    },

    "lostpets": {
        html: {
            "rs": "Izgubljeni Ljubimci",
            "en": "Missing Pets"
        }
    },

    "createad": {
        html: {
            "rs": "Napravi Oglas",
            "en": "Create Ad"
        }
    },

    "myacc": {
        html: {
            "rs": "Moj Nalog",
            "en": "My Account"
        }
    },

    "copyright": {
        html: {
            "rs": "Copyright © 2022, Plava Šapa, Uroš Lončar, Đorđe Stanojević<br> Odsek za softversko inženjerstvo Elektrotehničkog fakulteta Univerziteta u Beogradu",
            "en": "Copyright © 2022, Blue Paw, Uroš Lončar, Đorđe Stanojević<br> Software Engineering department, Faculty of Electrical Engineering, University of Belgrade"
        }
    },

    "logout": {
        html: {
            "rs": "Odjavi se",
            "en": "Logout",
        }
    },

    "login": {
        html: {
            "rs": "Prijavi se",
            "en": "Login",
        }
    },

    "myads": {
        html: {
            "rs": "Moji oglasi",
            "en": "My ads",
        }
    },

    "mycomments": {
        html: {
            "rs": "Moji komentari",
            "en": "My comments"
        }
    },

    "ads": {
        html: {
            "rs": "Oglasi",
            "en": "Ads",
        }
    },

    "leavecomment": {
        html: {
            "rs": "Ostavi komentar",
            "en": "Leave comment",
        }
    }

}

var lang = localStorage.getItem("lang");
var logged = JSON.parse(localStorage.getItem("logged"));
var users = JSON.parse(localStorage.getItem("users"));
var ads = JSON.parse(localStorage.getItem("ads"));
var comments = JSON.parse(localStorage.getItem("comments"));



document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth < 992) {
        document.querySelectorAll('.navbar .dropdown').forEach(function (everydropdown) {
            everydropdown.addEventListener('hidden.bs.dropdown', function () {
                this.querySelectorAll('.submenu').forEach(function (everysubmenu) {
                    everysubmenu.style.display = 'none';
                });
            })
        });

        document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
            element.addEventListener('click', function (e) {
                let nextEl = this.nextElementSibling;
                if (nextEl && nextEl.classList.contains('submenu')) {
                    e.preventDefault();
                    nextEl.style.display = nextEl.style.display == 'block' ? 'none' : 'block';
                }
            });
        })
    }
});

$(function () {
    $("body").prepend(`
    <header>
        <nav class="navbar navbar-expand-lg  bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/VD-Project/index.html"><img id="logo" src="/VD-Project/assets/logo.png"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="main_nav">
                    <ul class="navbar-nav">
                        <li class="nav-item active"> <a class="t-home nav-link " href="/VD-Project/index.html"></a> </li>
                        <li class="nav-item"> <a class="t-about nav-link " href="/VD-Project/onama.html"></a> </li>
                        <li class="nav-item dropdown" id="myDropdown">
                            <a class="t-animals nav-link dropdown-toggle" href="/VD-Project/zivotinje.html"
                                data-bs-toggle="dropdown"></a>
                            <ul class="dropdown-menu">
                                <li> <a class="t-dogs dropdown-item" href="/VD-Project/zivotinje/psi.html"></a>
                                    <ul class="submenu dropdown-menu">
                                        <li><a class="dropdown-item" href="/VD-Project/zivotinje/psi/meda.html">Meda</a></li>
                                        <li><a class="dropdown-item" href="/VD-Project/zivotinje/psi/zuca.html">Žuća</a></li>
                                        <li><a class="dropdown-item" href="/VD-Project/zivotinje/psi/don.html">Don</a></li>
                                    </ul>
                                </li>
                                <li> <a class="t-cats dropdown-item" href="/VD-Project/zivotinje/macke.html"></a>
                                    <ul class="submenu dropdown-menu">
                                        <li><a class="dropdown-item" href="/VD-Project/zivotinje/macke/ana.html">Ana</a></li>
                                        <li><a class="dropdown-item" href="/VD-Project/zivotinje/macke/luna.html">Luna</a></li>
                                        <li><a class="dropdown-item" href="/VD-Project/zivotinje/macke/bea.html">Bea</a></li>
                                    </ul>
                                </li>
                                <li> <a class="t-birds dropdown-item" href="/VD-Project/zivotinje/ptice.html"></a>
                                    <ul class="submenu dropdown-menu">
                                        <li><a class="dropdown-item" href="/VD-Project/zivotinje/ptice/didi.html">Didi</a></li>
                                        <li><a class="dropdown-item" href="/VD-Project/zivotinje/ptice/edi.html">Edi</a></li>
                                        <li><a class="dropdown-item" href="/VD-Project/zivotinje/ptice/gasa.html">Gaša</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item"> <a class="t-lostpets nav-link " href="/VD-Project/oglasi.html"></a> </li>
                        <li class="nav-item logged"> <a class="t-createad nav-link " href="/VD-Project/napravioglas.html"></a> </li>
                        <li class="nav-item logged"> <a class="t-myacc nav-link " href="/VD-Project/profil.html"></a> </li>
                        <li class="nav-item logged"> <a id="logout" class="t-logout pointer nav-link " ></a> </li>
                        <li class="nav-item notlogged"> <a href="/VD-Project/login.html" class="t-login nav-link"></a> </li>
                    </ul>
                </div>
                <span id="lang" class="nav-link " href="#">
                    <img src="/VD-Project/assets/flags/rs.svg" class="flag rs"></i>
                    <img src="/VD-Project/assets/flags/gb.svg" class="flag en"></i>
                </span>
            </div>
        </nav>
    </header>`
    ).append(`
    <footer>
        <span class="t-copyright"></span>
    </footer>`
    );

    $("head").append(`
    <link rel="icon" type="image/x-icon" href="/VD-Project/assets/favicon.png">
    `)

    if (logged != null) {
        $(".logged").show();
        $(".notlogged").hide();
    } else {
        $(".notlogged").show();
        $(".logged").hide();
    }

    $("#logout").click(function () {
        localStorage.setItem("logged", null);
        window.location.href = "index.html";
    })

    var translate = function () {
        $('[class^="t-"]').each(function () {
            var translate = $(this).attr("class").match(/(t-\S+)/)[0].substring(2);

            try {
                if (trans[translate].hasOwnProperty("html")) $(this).html(trans[translate].html[lang]);
                if (trans[translate].hasOwnProperty("value")) $(this).attr("value", trans[translate].value[lang]);
                if (trans[translate].hasOwnProperty("placeholder")) $(this).attr("placeholder", trans[translate].placeholder[lang]);
            } catch (error) {
                console.error('Missing translation: "' + translate + '"');
            }

        })
    }

    $("#lang").click(function () {
        $("." + lang).hide();
        lang = lang == "rs" ? "en" : "rs";
        localStorage.setItem("lang", lang);
        $("." + lang).show();
        translate();
    })

    $("." + lang).show();

    translate();
})