const hamburger = document.querySelector('.hamburger'), //Меню гамбургер
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => { //Закрыть меню
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

$("a[href^='#']").click(function() { // Это универсальный плавный скролл наверх, так же подойдет для меню.
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" }, 1000);
    return false;
});

$('input[name=user_phone]').mask("+7 (999) 999-99-99");