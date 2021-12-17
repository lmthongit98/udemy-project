
/* Truncate Card Title */
function truncateCardTitle(){
    var cardList = document.getElementsByClassName('card-title');
    for(var i = 0; i < cardList.length; i++){
        var text = cardList[i].innerHTML;
        cardList[i].innerHTML = stringcateString(text, 35);
    }
}


function stringcateString(str, num){
    if(str.length > num){
        return str.slice(0, num) + "...";
    }
    return str;
}

window.addEventListener("load", function(){
    truncateCardTitle();
});

/* SIDE BAR MINI */
var toggleBtn = document.querySelector('.sidebarMini__button');
var sidebarMini = document.querySelector('.sidebarMini');
var switchBtn = document.querySelector('#checkbox');


toggleBtn.addEventListener('click', function(){
    sidebarMini.classList.toggle('is-opened'); //toggle: remove class if exist class, add class if doesn't exits
});

switchBtn.addEventListener('click', function(){
    console.log('dsadas')
    document.querySelector('body').classList.toggle('darkMode');
});