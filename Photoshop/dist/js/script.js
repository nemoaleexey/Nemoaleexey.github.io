$("a[href^='#']").click(function() { // Это универсальный плавный скролл наверх, так же подойдет для меню.
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" }, 1000);
    return false;
});