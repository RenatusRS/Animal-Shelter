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
    "bluepaw": {
        html: {
            "rs": "Plava Šapa",
            "en": "Blue Paw"
        }
    },

    "oglastit": {
        html: {
            "rs": "Oglas",
            "en": "Ad"
        }
    },

    "anatit": {
        html: {
            "rs": "Ana",
            "en": "Ana"
        }
    },

    "beatit": {
        html: {
            "rs": "Bea",
            "en": "Bea"
        }
    },

    "lunatit": {
        html: {
            "rs": "Luna",
            "en": "Luna"
        }
    },

    "dontit": {
        html: {
            "rs": "Don",
            "en": "Don"
        }
    },

    "medatit": {
        html: {
            "rs": "Meda",
            "en": "Meda"
        }
    },

    "zucatit": {
        html: {
            "rs": "Žuća",
            "en": "Žuca"
        }
    },

    "diditit": {
        html: {
            "rs": "Didi",
            "en": "Didi"
        }
    },

    "editit": {
        html: {
            "rs": "Edi",
            "en": "Edi"
        }
    },

    "gasatit": {
        html: {
            "rs": "Gaša",
            "en": "Gasha"
        }
    },

    "macketit": {
        html: {
            "rs": "Mačke",
            "en": "Cats"
        }
    },

    "psitit": {
        html: {
            "rs": "Psi",
            "en": "Dogs"
        }
    },

    "pticetit": {
        html: {
            "rs": "Ptice",
            "en": "Avians"
        }
    },

    "logintit": {
        html: {
            "rs": "Prijava",
            "en": "Login"
        }
    },

    "napraviotit": {
        html: {
            "rs": "Napravi oglas",
            "en": "Create ad"
        }
    },

    "oglasitit": {
        html: {
            "rs": "Oglasi",
            "en": "Ads"
        }
    },

    "onamatit": {
        html: {
            "rs": "O nama",
            "en": "About us"
        }
    },

    "profiltit": {
        html: {
            "rs": "Profil",
            "en": "Profile"
        }
    },

    "zivotinjetit": {
        html: {
            "rs": "Životinje",
            "en": "Animals"
        }
    },

    "name": {
        html: {
            "rs": "Ime",
            "en": "Name"
        }
    },

    "ljubimac": {
        html: {
            "rs": "Ime ljubimca",
            "en": "Pet name"
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
            "rs": "3 godine starosti",
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
            "rs": "Meda je zlatni retriver. Lepo se slaže sa drugim kucama. Potreban mu je dom.",
            "en": "Meda is a golden retriever. He goes along well with other dogs. He needs a home."
        }
    },

    "zucaprev": {
        html: {
            "rs": "Žuća je star nešto više od godinu dana. Miroljubiv je i razigran. Miran je u kući.",
            "en": "Žuca is a little over a year old. He is peaceful and playful. He is calm in the house."
        }
    },

    "zucaage": {
        html: {
            "rs": "1 godina i 2 meseca starosti",
            "en": "1 year and 2 months old"
        }
    },

    "cock": {
        html: {
            "rs": "Nimfa",
            "en": "Cockatiel"
        }
    },

    "gasaful": {
        html: {
            "rs": "Nimfa papagaji su dobri i poslušni učenici pa se lako i brzo pripitome. Dužina života nimfi u zatočeništvu je uglavnom 15-20 godina, iako neki autori to smanjuju na samo 10-15 godina. U oponašanju govora baš i nisu slavne, ali dvadesetak lakših reči i po koju kratku rečenicu nauče vrlo brzo iako ponekad izgovor nije čist. Mlade nimfe do tri meseca starosti vrlo brzo nauče govoriti, ali u početku treba birati reči koje nalikuju njihovoj pesmi. Nimfu možete puštati da slobodno leti po stanu, ali vodite računa da obavezno imate zavese na prozorima (i da su prozori zatvoreni da ne bi pobegle) jer ne vide staklo i mogu da se povrede. Kada se papagaj prilagodi i privikne na ukućane i prostor, nemojte se iznenaditi ako doleti na sto, rame ili glavu. Možete ga naučiti čak i da jede iz ruke.",
            "en": "Cockatiels are good and obedient students, so they are easily and quickly tamed. The lifespan of nymphs in captivity is generally 15-20 years, although some authors reduce this to only 10-15 years. They are not very good at imitating speech, but they learn about twenty easy words and some short sentences very quickly, although sometimes the pronunciation is not clear. Young cockatiels up to three months of age learn to speak very quickly, but at first you should choose words that resemble their song. You can let them fly freely around the apartment, but make sure you have curtains on the windows (and that the windows are closed so they don't escape) because they can't see the glass and can injure themselves. When the parrot adapts and gets used to the household and the space, do not be surprised if it flies to the table, shoulder or head. You can even teach him to eat out of your hand."
        }
    },

    "shiba": {
        html: {
            "rs": "Šiba Inu",
            "en": "Shiba Inu"
        }
    },

    "donprev": {
        html: {
            "rs": "Don je umiljati nemački ovčar i velika je maza. Dobro se slaže sa drugim psima.",
            "en": "Don is a sweet German shepherd; he's a big dog and gets along well with other dogs."
        }
    },

    "anaprev": {
        html: {
            "rs": "Vesela i nežna devojčica. Voli da se druži sa ljudima. Očišćena je od parazita.",
            "en": "Cheerful and gentle female. Likes to interact with people. She was cleared of parasites."
        }
    },

    "didiful": {
        html: {
            "rs": "Tigrice su vrlo društveni kućni ljubimci i vole da žive u paru. Ukoliko će biti kod kuće same više od 5 sati dnevno, svakako nabavite još jednu tigricu. Usamljena tigrica može i da se razboli. Nije redak slučaj da, ukoliko nemaju društvo, ovi kućni ljubimci počnu da čupaju sebi perje sa krila i repa. Imaju sposobnost oponašanja ljudskog govora i drugih zvukova, pa ukoliko im posvetite malo vremena i truda svaki dan, mogu da nauče da izgovaraju nekoliko reči. Za razliku od drugih vrsta papagaja kao što su ara, žako i kakadu, žive od 10 do 14 godina. Vrlo su živahne i radoznale, pa su idealni kućni ljubimci za decu.",
            "en": "Budgerigars are very social pets and like to live in pairs. If she will be home alone for more than 5 hours a day, definitely get another budgerigar. A lonely budgerigar  can also get sick. It is not a rare case that, if they do not have company, these pets start to pluck feathers from their wings and tails. They have the ability to imitate human speech and other sounds, so if you give them a little time and effort every day, they can learn to say a few words. Unlike other types of parrots such as macaws, jays and cockatoos, they live from 10 to 14 years. They are very lively and curious, so they are ideal pets for children."
        }
    },

    "lunafull": {
        html: {
            "rs": "Sterilisana, vakcinisana i ociscena od parazita. Slatka, voli da sedi u krilu.",
            "en": "Sterilized, vaccinated, and cleared of parasites. She's cute and likes to sit on your lap."
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

    "medaful": {
        html: {
            "rs": "Meda je mali zlatni retriver, izuzetne naravi, savršeno dobar u stanu i lepo se slaže sa drugim kucama. Potreban mu je dom i odgovorna porodica. Kuca se nalazi se u Beogradu.",
            "en": "Meda is a small golden retriever, with an exceptional nature, perfectly good in an apartment and gets along well with other houses. He needs a home and a responsible family. The house is located in Belgrade."
        }
    },

    "male": {
        html: {
            "rs": "Mužijak",
            "en": "Male"
        }
    },

    "goldenr": {
        html: {
            "rs": "Zlatni retriver",
            "en": "Golden retreiver"
        }
    },

    "medaage": {
        html: {
            "rs": "8 meseci starosti",
            "en": "8 months old"
        }
    },

    "ediful": {
        html: {
            "rs": "Jedini je papagaj koji može izgovoriti rečenice sa smislom (npr. da pozdravi vlasnika kad uđe u stan). U mogućnosti je da logički povezuje reči u rečenice i upotrebi ih u pravo vreme. Sintagme kao što su „Dobar dan“ ili „Dobro veče“ izgovoriće baš u momentu kada je zaista dan, odnosno veče. Po intelektu je dokazano da su žako papagaji na nivou petogodišnjeg deteta, a po nekim podacima može da nauči da oponaša i do 800 reči što ga svrstava među najintligentnije životinje. Uz pravilnu negu, održavanje i ishranu ova vrsta papagaja može da živi preko 60 godina. Žako spada u velike papagaje.",
            "en": "It is the only parrot that can speak meaningful sentences (eg to greet the owner when he enters the apartment). He is able to logically link words into sentences and use them at the right time. Phrases such as Good day or Good evening will be uttered at the exact moment when it is really day or evening. In terms of intellect, it has been proven that jacoko parrots are at the level of a five-year-old child, and according to some data, they can learn to imitate up to 800 words, which ranks them among the most intelligent animals. With proper care, maintenance and nutrition, this type of parrot can live over 60 years. Jaco belongs to the large parrots."
        }
    },


    "africang": {
        html: {
            "rs": "Žako",
            "en": "Afrikan gray parrot"
        }
    },


    "tigrica": {
        html: {
            "rs": "Australijska tigrica",
            "en": "Budgerigar"
        }
    },

    "germans": {
        html: {
            "rs": "Nemački ovčar",
            "en": "German shepherd"
        }
    },

    "donage": {
        html: {
            "rs": "4 godine starosti",
            "en": "4 years old"
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
            "en": "Gasha is a young friendly nymph. Nymph parrots are good and obedient students, so they are easily and quickly tamed."
        }
    },

    "findmore": {
        html: {
            "rs": "Otkrij više",
            "en": "See more"
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
            "rs": "Napravi Oglas",
            "en": "Create Ad"
        }
    },

    "home": {
        html: {
            "rs": "Početna stranica",
            "en": "Home"
        }
    },

    "about": {
        html: {
            "rs": "O nama",
            "en": "About"
        }
    },

    "psi_z": {
        html: {
            "rs": "Psi su verovatno prve pripitomljene životinje, koje čoveku verno služe sve do danas.",
            "en": "Dogs are probably the first domesticated animals, which faithfully serve man until today."
        }
    },

    "macke_z": {
        html: {
            "rs": "Mačke su poznate po samostalnosti, što je razlog više zašto su tako dobri kućni ljubimci.",
            "en": "Cats are known for being very independent, which is all the more reason why they make such good pets."
        }
    },

    "ptice_z": {
        html: {
            "rs": "Ono što privlači ljude koji drže ptice kao kućne ljubimce su bogatstvo boja, njihov cvrkut i laka nega.",
            "en": "What attracts people who keep birds as pets are the richness of colors, their chirping and easy care."
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
            "rs": "Izgubljeni ljubimci",
            "en": "Missing pets"
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
            "rs": "Copyright © 2022, Plava Šapa<br> Odsek za softversko inženjerstvo Elektrotehničkog fakulteta Univerziteta u Beogradu",
            "en": "Copyright © 2022, Blue Paw<br> Software Engineering department, Faculty of Electrical Engineering, University of Belgrade"
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
            "rs": "Moji Oglasi",
            "en": "My Ads",
        }
    },

    "mycomments": {
        html: {
            "rs": "Moji Komentari",
            "en": "My Comments"
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
    },

    "locationspecific": {
        html: {
            "rs": "Zlatiborska 13, Zemun, Beograd, Srbija",
            "en": "Zlatiborska 13, Zemun, Belgrade, Serbia"
        }
    },

    "article1t": {
        html: {
            "rs": "Izdresiraj svog psa!",
            "en": "Train your dog!",
        }
    },

    "article1": {
        html: {
            "rs": `Da biste ispravno započeli sa svojim štenetom, ono će morati da zna šta očekujete od njega. Ovo će ga naterati da se oseća sigurnim u svojoj sposobnosti da ispuni ciljeve tražene od njega u budućnosti.

            Osnova obuke treba da bude zasnovana na pozitivnom potkrepljivanju. Pozitivno pojačanje je proces davanja psu (ili osobi!) nagrade da podstakne ponašanje koje želite, kao što je primanje plate za odlazak na posao. Ideja nije da se podmiti ponašanje, već da se trenira koristeći nešto što vaš pas ceni. Izbegavajte upotrebu kazni kao što su korekcije uzice ili vikanje. Kazna može dovesti do toga da pas postane zbunjen i nesiguran šta se od njega traži. Važno je zapamtiti da ne možemo očekivati da psi znaju ono što ne znaju - baš kao što ne biste očekivali da dvogodišnje dete zna kako da veže cipele. Strpljenje će pomoći vašem novom štenetu da nauči kako da se ponaša.
            
            Pojačanje može biti sve što vaš pas voli. Većina ljudi koristi male komade hrane „visoke vrednosti“ za poslastice za trening - nešto posebno - kao što je zamrzavanje sušena jetra. Pohvala ili prilika da se igrate sa omiljenom igračkom takođe se mogu iskoristiti kao nagrada. Psi se moraju naučiti da vole pohvale. Ako psu date poslasticu dok kažete "Dobar pas!" srećnim glasom naučiće da je pohvala dobra stvar i da može biti nagrada. Neki psi takođe uživaju u maženju. Hrana je često najpogodniji način za jačanje ponašanja.
            
            Štenci mogu započeti vrlo jednostavnu obuku čim dođu kući, obično oko 8 nedelja. Treninzi neka budu kratki — samo 5 do 10 minuta — i neka se uvek završavaju pozitivno. Ako vaše štene ima problema sa učenjem novog ponašanja, završite sesiju tako što ćete pregledati nešto što već zna i dajte mu mnogo pohvala i veliku nagradu za njegov uspeh. Ako se vašem štenetu dosadi ili frustrira, to će na kraju biti kontraproduktivno za učenje.`,
            "en": `To start off on the right foot (and paw!) with your pup, he'll need to know what you expect from him. This will make him feel secure in his ability to meet the goals laid out for him going forward.

            The foundation of training should be based on positive reinforcement. Positive reinforcement is the process of giving a dog (or person!) a reward to encourage the behavior you want, like getting a paycheck for going to work. The idea is not to bribe the behavior but to train it using something your dog values. Avoid using punishment such as leash corrections or yelling. Punishment can cause a dog to become confused and unsure about what is being asked of him.  It is important to remember that we can't expect dogs to know what they don't know - just like you wouldn't expect a 2-year-old child to know how to tie his shoes. Patience will go a long way in helping your new puppy learn how to behave.
            
            Reinforcement can be anything your dog likes. Most people use small pieces of a “high value” food for training treats — something special — such as freeze-dried liver. Praise or the chance to play with a favorite toy can also be used as a reward. Dogs must be taught to like praise. If you give the dog a treat while saying “Good dog!” in a happy voice, he will learn that praise is a good thing and can be a reward. Some dogs also enjoy petting. Food is often the most convenient way to reinforce behavior.
            
            Puppies can begin very simple training starting as soon as they come home, usually around 8 weeks old. Always keep training sessions brief — just 5 to 10 minutes —and always end on a positive note. If your puppy is having trouble learning a new behavior, end the session by reviewing something he already knows and give him plenty of praise and a big reward for his success. If your puppy gets bored or frustrated, it will ultimately be counterproductive to learning.`,
        }
    },

    "article2t": {
        html: {
            "rs": "UDOMI: Australijska tigrica Didi!",
            "en": "ADOPT: Budgerigar Didi!",
        }
    },

    "article2": {
        html: {
            "rs": "Australijska tigrica Didi traži dom! Više detalja o Didi možete da vidite u sekciji za ptice!",
            "en": "Budgerigar Didi is looking for a home! You can view more details about Didi in the avians section!",
        }
    },

    "article3t": {
        html: {
            "rs": "Higijena ptičijeg kaveza",
            "en": "Birdcage hygiene",
        }
    },

    "article3": {
        html: {
            "rs": `Pošto ptice jedu i vrše nuždu u svojim kavezima, neophodno je da im kavezi budu što čistiji. Dno kaveza treba da bude obloženo papirom za jednokratnu upotrebu kao što su novine koje se može baciti svaki dan. Novinski papir ne sadrži olovo, tako da je netoksičan za ptice čak i ako ga žvaću. Bele ptice koje insistiraju da se igraju u novinama mogu dobiti sivu boju na svom belom perju, ali to se lako ispere.

            Brusni papir koji se prodaje u prodavnicama za kućne ljubimce za oblaganje dna kaveza ne bi trebalo da se koristi, jer ptice mogu pokupiti pesak, progutati ga i razviti opstrukcije gastrointestinalnog trakta. Iverice i strugotine, glina, iseckani ili reciklirani papir i posteljina u klipu se ne preporučuju iz mnogo razloga. Što je najvažnije, ako ptice progutaju ove čestice, one su neprobavljive i mogu izazvati opstrukciju gastrointestinalnog trakta, poput peska. Osim toga, prašina sa ovih vrsta posteljine može biti potencijalno iritantna za disanje, posebno od aromatičnih borova i kedra. Štaviše, mnogi vlasnici zanemaruju da svakodnevno menjaju kavez sa ovim proizvodima (pošto svaki dan postaje sve skuplji za izbacivanje i zamenu) što dovodi do nakupljanja stolice i otpada od hrane na dnu kaveza. Konačno, praktično je nemoguće sa ovim pokrivačima dna kaveza sa česticama pratiti boju, konzistenciju i vlažnost izmeta - što sve može biti važan odraz zdravlja ptice.`,
            "en": `As birds both eat and defecate in their cages, it is essential to keep their cages as clean as possible. The bottom of the cage should be lined with a disposable paper such as newspaper which can be thrown away every day. Newsprint is now free of lead so it is non-toxic to birds even if they chew on it. White birds that insist on playing in the newspaper may get grey newsprint on their white feathers, but this is easily washed off.

            The sandpaper sold in the pet stores to line the bottom of the cage should not be used, as birds may pick off the sand, ingest it, and develop gastrointestinal tract obstructions. Wood chips and shavings, clay, shredded or recycled paper, and corncob bedding are not recommended for many reasons. Most importantly, if birds ingest this particulate matter, it is indigestible and can cause obstruction of the gastrointestinal tract, like sand. In addition, dust from these types of bedding can be potential respiratory irritants, especially from aromatic pines and cedars. Furthermore, many owners neglect to change the cage daily with these products (since it becomes more expensive to throw out and replace every day) resulting in the accumulation of stool and food waste on the bottom on the cage. Finally, it is virtually impossible with these particulate cage bottom coverings to monitor the color, consistency, and wetness of the feces - all of which can be important reflections of a bird's health.`,
        }
    },

    "article4t": {
        html: {
            "rs": "UDOMI: Zlatni retriver Meda!",
            "en": "ADOPT: Golden retreiver Meda!",
        }
    },

    "article4": {
        html: {
            "rs": "Zlatni retriver Meda traži dom! Više detalja o Medi možete da vidite u sekciji za pse!",
            "en": "Golden retreiver Meda is looking for a home! You can view more details about Meda in the dogs section!",
        }
    },

    "article5t": {
        html: {
            "rs": "Mačke i kutije",
            "en": "Cats & Boxes",
        }
    },

    "article5": {
        html: {
            "rs": `Mačke dobijaju udobnost i sigurnost iz zatvorenih prostora, zbog čega vole da provode vreme u kartonskim kutijama. Mačke koriste kutije kao skrovišta gde predatori ne mogu da im se prišunjaju sa strane ili pozadi. Ako je vaša mačka u kutiji, svi „uljezi“ poput plena, ljudi ili drugih kućnih ljubimaca moraju da dođu direktno u njihovo vidno polje, što znači da ih ništa ne može iznenaditi.

            I mačke vole kutije jer pomažu u smanjenju stresa i nude bezbednu zonu gde vaša mačka može da posmatra, a ne da je niko ne vidi. Ovo je idealno za mačke jer je njihova reakcija na stresne situacije često bežanje i skrivanje. Mačke nemaju ugrađene strategije za rešavanje sukoba, pa mnogo radije da se sakriju od svojih problema. Sigurnost privatnog, zatvorenog prostora je još jedan mogući odgovor na pitanje zašto mačke vole kutije.`,
            "en": `Cats get comfort and security from enclosed spaces, which is why they love spending time in cardboard boxes. Cats use boxes as hiding places where predators can't sneak up on them from the side or behind. If your cat is in a box, any “intruders” like prey, humans or other pets have to come directly into their field of vision, meaning nothing can surprise them.

            And cats like boxes because they help to reduce stress and offer a safe zone where your cat can observe and not be seen. This is ideal for cats as their reaction to stressful situations is often to run and hide. Cats don't have in-built conflict resolution strategies, so they much prefer to hide from their problems. The safety of the private, enclosed space is another possible answer to why do cats like boxes.`
        }
    }
}

var lang = localStorage.getItem("lang");
var logged = JSON.parse(localStorage.getItem("logged"));
var users = JSON.parse(localStorage.getItem("users"));
var ads = JSON.parse(localStorage.getItem("ads"));
var comments = JSON.parse(localStorage.getItem("comments"));


$(function () {
    $("body").append(`
                <footer>
                <span class="t-copyright"></span>
    </footer> `
    );

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

    $(".ad").click(function () {
        localStorage.setItem("ad", $(this).attr("name"));
        window.location.href = "oglasi/oglas.html"
    })

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
