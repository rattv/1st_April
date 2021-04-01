function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
$("#my-button").hover(function () { 
    $(this).css({
        top: getRandomInt(50, 500)+"px",
        left: getRandomInt(50, 500)+"px"
    });
}, function () { });


$("#my-button-2").hover(function () { 
    $(this).css({
        top: getRandomInt(50, 500)+"px",
        left: getRandomInt(50, 500)+"px"
    });
}, function () { });

$("#my-button-3").hover(function () { 
    $(this).css({
        top: getRandomInt(50, 500)+"px",
        left: getRandomInt(50, 500)+"px"
    });
}, function () { });

$("#my-button-4").hover(function () { 
    $(this).css({
        top: getRandomInt(50, 500)+"px",
        left: getRandomInt(50, 500)+"px"
    });
}, function () { });

$("#my-button-5").hover(function () { 
    $(this).css({
        top: getRandomInt(50, 500)+"px",
        left: getRandomInt(50, 500)+"px"
    });
}, function () { });

document.getElementById('my-button').onclick = function(){
alert('НУ, ТЫ И КЛОУН!!! 🤡');
}

document.getElementById('my-button-2').onclick = function(){
alert('C ТАКИМИ прИколами ТЕБЕ ТОЛЬКО В ОДНОКЛАССНИКАХ КЛАССЫ СТАВИТЬ!!! 👍');
}

document.getElementById('my-button-3').onclick = function(){
    alert('Ну, что? Ещё по одной? 🥴');
}

document.getElementById('my-button-4').onclick = function(){
    alert('ТУПОЙ КОТ! 🐱');
}

document.getElementById('my-button-5').onclick = function(){
    var test = prompt("Что общего между этим сайтом и тобой?", 'Сюда ответ вводить');
    if (test == "Мы оба годные") {
        $(".button-wrapper").html('<img src="Дибров_2.jpg" alt="альтернативный текст" class = "dibrov">');
        function  answer_right() {
            alert("БИНГО! 🐱‍👤 ВЫ ВЫИГРАЛИ 5000000000000 РУБЛЕЙ, ВЫШЛИТЕ НА ПОЧТУ rattv@yandex.ru ДАННЫЕ КРЕДИТНОЙ КАРТЫ, ЧТОБЫ ПОЛУЧИТЬ ПРИЗ!");
        }
        setTimeout(answer_right, 1000);      
    } else {
        $(".button-wrapper").html('<img src="Дибров.jpg" alt="альтернативный текст" class = "dibrov">');
        function  answer() {
            if (confirm ('Ответ: Мы оба годные ☠'));
            {
                $('.dibrov').remove();
                $(".button-wrapper").html('<h1 class = "h1">GAME OVER!</h1>');
            }
          }
          setTimeout(answer, 1000);       

        }
}
    
