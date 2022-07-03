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


    "name": {
        html: {
            "rs": "Ime",
            "en": "Name"
        }
    },

    "pass": {
        html: {
            "rs": "Lozinka",
            "en": "Password"
        }
    },

    "mail": {
        html: {
            "rs": "Mejl adresa",
            "en": "Mail adress"
        }
    },

    "adoz": {
        html: {
            "rs": "A-Ž",
            "en": "A-Z"
        }
    },

    "search": {
        html: {
            "rs": "Pretraga",
            "en": "Search"
        }
    },

    "anagod": {
        html: {
            "rs": "3 godine stara",
            "en": "3 years old"
        }
    },

    "american": {
        html: {
            "rs": "Američka kratkodlaka",
            "en": "American shorthair"
        }
    },

    "orange": {
        html: {
            "rs": "Narandžasta prugasta",
            "en": "Orange stripped"
        }
    },

    "medaprev": {
        html: {
            "rs": "Meda je zlatni retriver. Lepo se slaže sa drugim kucama. Potreban je dom.",
            "en": "Meda is a golden retriever. He goes along well with other doggies. He needs a home."
        }
    },

    "zucaprev": {
        html: {
            "rs": "Žuća je star nešto više od godinu dana. Miroljubiv je i razigran. Miran je u kući.",
            "en": "Žuća is a little over a year old. He is peaceful and playful. He is calm in the house."
        }
    },

    "donprev": {
        html: {
            "rs": "Don je umiljati nemački ovčar, velika maza i slaže se sa drugim kucama.",
            "en": "Don is a sweet German shepherd, a big dog and gets along well with other dogs."
        }
    },

    "anaprev": {
        html: {
            "rs": "Devojčica. Vesela je i nežna. Ona Voli ljude. Očišćena je od parazita.",
            "en": "Little girl. She is cheerful and gentle. She Loves People. She was cleared of parasites."
        }
    },

    "lunafull": {
        html: {
            "rs": "Sterilisana, vakcinisana i ociscena od parazita. Umiljata sam, volim da sedim u krilu, lepo se slazem sa drugim macama. Samo trazim da me neko voli onako kako cu ja voleti vas.",
            "en": "Sterilized, vaccinated and cleared of parasites. I'm cuddly, I like to sit on your lap, I get along well with other cats. I'm just asking for someone to love me the way I will love you."
        }
    },

    "lunaprev": {
        html: {
            "rs": "Sterilisana, vakcinisana i ociscena od parazita. Umiljata, voli da sedi u krilu.",
            "en": "Sterilized, vaccinated and cleared of parasites. Cute, likes to sit on your knee."
        }
    },

    "beaprev": {
        html: {
            "rs": "Bea je divna, umiljata i vesela devojčica. Voli ljude i mace. Zna da korsiti pesak.",
            "en": "Bea is a wonderful, cuddly and cheerful little girl. Loves people and cats. She knows how to use the sand."
        }
    },

    "didiprev": {
        html: {
            "rs": "Zdrava australijska tigrica. Pogodna i za mlađe. Tigrice su vrlo društveni kućni ljubimci i vole da žive u paru.",
            "en": "A healthy Australian tigress. Also suitable for younger people. Tigresses are very social pets and like to live in pairs."
        }
    },

    "ediprev": {
        html: {
            "rs": "Jedina vrsta papagaja koji može izgovoriti rečenice sa smislom (npr. da pozdravi vlasnika kad uđe u stan).",
            "en": "The only type of parrot that can speak sentences with meaning (eg to greet the owner when he enters the apartment)."
        }
    },

    "male": {
        html: {
            "rs": "Mužijak",
            "en": "Male"
        }
    },

    "female": {
        html: {
            "rs": "Ženka",
            "en": "Female"
        }
    },

    "britshort": {
        html: {
            "rs": "Britanska kratkodlaka",
            "en": "British shorthair"
        }
    },

    "gasaprev": {
        html: {
            "rs": "Gaša je mlada druželjubiva nimfa. Nimfa papagaji su dobri i poslušni učenici pa se lako i brzo pripitome.",
            "en": "Gasa is a young friendly nymph. Nymph parrots are good and obedient students, so they are easily and quickly tamed."
        }
    },

    "findmore": {
        html: {
            "rs": "Otkrij više",
            "en": "Find out more"
        }
    },

    "zdoa": {
        html: {
            "rs": "Ž-A",
            "en": "Z-A"
        }
    },


    "petpower": {
        html: {
            "rs": "Kućni ljubimci, mogu da smanje stres, anksioznost i depresiju, da olakšaju usamljenost, podstaknu vežbanje, pa čak i poboljšaju vaše kardiovaskularno zdravlje. Briga o životinji može da pomogne deci da rastu sigurnije i aktivnije. Kućni ljubimci takođe pružaju dragoceno društvo za starije osobe.",
            "en": "Pets can reduce stress, anxiety and depression, ease loneliness, encourage exercise and even improve your cardiovascular health. Caring for an animal can help children grow up safer and more active. Pets can also provide precious companionship for the elderly."
        }
    },

    "catpower": {
        html: {
            "rs": "Mačke vam mogu praviti društvo i mogu biti odlični prijatelji koji će biti tu za vas bez obzira na sve. U zavisnosti od rase vaše mačke, možda imate mačku koja voli da vam sedi u krilu ili senku koja će vas pratiti gde god da krenete. Pored uobičajenog ponašanja vaše mačke, možete računati na to da će vas čekati na kraju napornog dana.",
            "en": "Cats can keep you company and can be great friends who will be there for you no matter what. Depending on the breed of your cat, you may have a cat that likes to sit on your lap or a shadow that will follow you wherever you go. In addition to your cat's usual behavior, you can count on him waiting for you at the end of a busy day."
        }
    },

    "birdpower": {
        html: {
            "rs": "Ptice su grupisane u jata, što znači da su navikle da imaju pratioce u svakom trenutku. Jedna ptica će želeti prijatelja koliko i ljudi. Mnoge će da vam pevaju, ponekad razgovaraju i igraju se sa vama, posebno ako provodite vreme zajedno sa pticom van kaveza.",
            "en": "Birds are grouped in flocks, which means they are used to having companions at all times. A bird will want a friend as much as people. Many will sing to you, sometimes talk and play with you, especially if you spend time with the bird outside the cage."
        }
    },

    "location": {
        html: {
            "rs": "Lokacija",
            "en": "Location"
        }
    },

    "aboutproblem": {
        html: {
            "rs": "Problem nisu neodgovorni vlasnici kućnih ljubimaca, prenaseljenost ili napuštanje. Problem je u nedostatku zakona i nefunkcionalnom sistemu šintera koji ne ispunjava očekivanja naših zajednica i nemilosrdno stavlja spasilačke grupe pod ogroman pritisak da spasu živote. <br>Dobrovoljne spasilačke organizacije rade neverovatan posao spašavajući rizične kućne ljubimce od šintera, često uz veliku cenu. Skoro deceniju, Plava šapa je pomogala u stvaranju istinske društvene promene podsticanjem usvajanja kućnih ljubimaca. Naš rad je pomogao da se napravi razlika u srpskoj spasilačkoj zajednici i hiljadama kućnih ljubimaca kojima je potrebno spasavanje i rehabilitacija.Ali, dok svaki kućni ljubimac ne bude bezbedan, poštovan i voljen, sve nas čeka veliki posao. Saznajte više o našoj misiji da spasimo 1000 zdravih i vrednih kućnih ljubimaca svake godine.",
            "en": "The problem are not irresponsible pet owners, overpopulation or abandonment. The problem is a lack of laws and a dysfunctional system of dogcatchers that does not meet the expectations of our communities and relentlessly puts rescue groups under enormous pressure to save lives. <br>Volunteer rescue organizations do an incredible job rescuing at-risk pets from dogcatchers, often at great cost. For nearly a decade, Blue Paw has helped create real social change by encouraging pet adoption. Our work has helped make a difference in the Serbian rescue community and thousands of pets in need of rescue and rehabilitation. But until every pet is safe, respected and loved, we all have a lot of work ahead of us. Learn more about our mission to save 1000's of healthy and valuable pets each year."
        }
    },

    "aboutmission": {
        html: {
            "rs": "Misija je da spasimo, družimo se i osiguramo domove pune ljubavi za neželjene ili napuštene životinje. Plava šapa ostvaruje ovaj cilj pružanjem najvišeg standarda nege za životinje kojima je potrebna,sa posebnim fokusom na obezbeđivanje da se svi aspekti njihovog zdravlja i dobrobiti osiguraju. Naša vizija je da stvorimo zajednicu u kojoj postoji dom za svaku životinju. Naše vrednosti su posvećenost, saosećanje, ljubav, razumevanje i strpljenje.",
            "en": "The mission is to rescue, socialize and provide loving homes for unwanted or abandoned animals. Blue Paw achieves this goal by providing the highest standard of care for animals in need, with a particular focus on ensuring that all aspects of their health and well-being are ensured. Our vision is to create a community where there is a home for every animal. Our values are commitment, compassion, love, understanding and patience."
        }
    },

    "aboutwant": {
        html: {
            "rs": "Želimo da budemo fer prema svima koji se prijave za kućnog ljubimca, pa prijave pregledamo redosledom kojim ih primamo. Nažalost, nismo u mogućnosti da odgovorimo ako vaša prijava ne bude uspešna zbog velikog broja prijava koje primamo. Ako Vam se ne javimo u roku od nekoliko dana nakon prijave, nastavite da proveravate ponovo. Dodajemo životinje na ovu stranicu čim postaju spremne da odu u novi dom. Naši centri za smeštaj takođe ne mogu da prihvate termine za ulazak. Ako je vaša prijava uspešna, upoznaćete svoju životinju tokom procesa vraćanja u dom.",
            "en": "We want to be fair to everyone who applies for a pet, so we review applications in the order we receive them. Unfortunately, we are unable to respond if your application is unsuccessful due to the high volume of applications we receive. If we don't hear from you within a few days after applying, please keep checking back. We are adding animals to this page as soon as they are ready to go to their new home. Our accommodation centers are also unable to accept walk-in appointments. If your application is successful, you will get to know your animal during the rehoming process."
        }
    },

    "contactnum": {
        html: {
            "rs": "Kontakt telefon",
            "en": "Contact number"
        }
    },

    "adtext": {
        html: {
            "rs": "Tekst oglasa",
            "en": "Ad text"
        }
    },

    "makead": {
        html: {
            "rs": "Napravite oglas",
            "en": "Create an ad"
        }
    },

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

    "dogpower": {
        html: {
            "rs": "Psi mogu da razumeju mnoge reči koje koristimo, ali su još bolji u tumačenju našeg tona glasa, govora tela i gestova. I kao svaki dobar ljudski prijatelj, lojalni pas će vas pogledati u oči kako bi procenio vaše emocionalno stanje i pokušao da razume šta mislite i osećate (i da utvrdi kada bi sledeća šetnja ili poslastica mogla doći, naravno).",
            "en": "Dogs can understand many of the words we use, but they are even better at interpreting our tone of voice, body language and gestures. And like any good human friend, a loyal dog will look you in the eye to gauge your emotional state and try to understand what you're thinking and feeling (and to determine when the next walk or treat might be coming, of course)."
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