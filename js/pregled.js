function searchFnc(){
    var ulaz = document.getElementById('filter').value.toLowerCase();

    var kartice=document.getElementById('card-deck');
    var kartice_arr=document.getElementsByClassName('col-lg-4 mb-4');


    for(let i=0;i<kartice_arr.length;i++){
        let title=kartice_arr[i].querySelector(".card .card-body h5.card-title");

        if(title.innerText.toLowerCase().indexOf(ulaz) > -1){
            kartice_arr[i].style.display="";
        }
        else{
            kartice_arr[i].style.display="none";
        }
    }
    
}

$(document).ready(function(){
    $('#btnSort').click(function (){
        $('.card-deck .card').sort(function(a,b) {
            return $(a).find(".card-title").text() > $(b).find(".card-title").text() ? 1 : -1;
        }).appendTo(".card-deck");
    })

    $('#btnSort2').click(function (){
        $('.card-deck .card').sort(function(a,b) {
            return $(a).find(".card-title").text() < $(b).find(".card-title").text() ? 1 : -1;
        }).appendTo(".card-deck");
    })


    $('#btnYearSrt').click(function (){
        $('.card-deck .card').sort(function(a,b) {
            return parseInt($(a).attr("starost")) > parseInt($(b).attr("starost")) ? 1 : -1;
        }).appendTo(".card-deck");
    })

    $('#btnYearSrt2').click(function (){
        $('.card-deck .card').sort(function(a,b) {
            return parseInt($(a).attr("starost")) < parseInt($(b).attr("starost")) ? 1 : -1;
        }).appendTo(".card-deck");
    })



  });
