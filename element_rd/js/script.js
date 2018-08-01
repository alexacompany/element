// open menu
var button = document.querySelector('.menu-icon');
button.addEventListener('click', function (){
    button.classList.toggle('open');
});

// navigation
console.clear();

var app = function () {
    var body = void 0;
    var menu = void 0;
    var menuItems = void 0;

    var init = function init() {
        body = document.querySelector('body');
        menu = document.querySelector('.menu-icon');
        menuItems = document.querySelectorAll('.nav__list-item');

        applyListeners();
    };

    var applyListeners = function applyListeners() {
        menu.addEventListener('click', function () {return toggleClass(body, 'nav-active');});
    };

    var toggleClass = function toggleClass(element, stringClass) {
        if (element.classList.contains(stringClass))
            element.classList.remove(stringClass);else

            element.classList.add(stringClass);
    };

    init();
}();

// Универсальная валидация
var patternEmail = /\S+@\S+\.\S+/, patternPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,15}(\s*)?$/,
    patternEmpty = /^[\s]+$/;
$("form").submit(function (e) {
    e.preventDefault();
    var t = !($(this).find('input[name="name"]').length > 0) || $(this).find('input[name="name"]').val(),
        n = !($(this).find('input[name="company-name"]').length > 0) || $(this).find('input[name="company-name"]').val(),
        o = !($(this).find('input[name="phone"]').length > 0) || $(this).find('input[name="phone"]').val(),
        i = !($(this).find('input[name="mail"]').length > 0) || $(this).find('input[name="mail"]').val(),
        s = !($(this).find('input[name="phone"]').length > 0) || patternPhone.test(o),
        a = !($(this).find('input[name="mail"]').length > 0) || patternEmail.test(i),
        r = $(this).find('input[name="name"]').length > 0 && patternEmpty.test(t),
        l = $(this).find('input[name="company-name"]').length > 0 && patternEmpty.test(n),
        d = $(this).find('input[name="phone"]').length > 0 && patternEmpty.test(o),
        c = $(this).find('input[name="mail"]').length > 0 && patternEmpty.test(i);
    if (patternPhone.test(o) || $(this).find('input[name="phone"]').css({
        border: "1px solid #f55858"
    }), patternEmail.test(i) || $(this).find('input[name="mail"]').css({
        border: "1px solid #f55858"
    }), (l || "" == n) && $(this).find('input[name="company-name"]').css({
        border: "1px solid #f55858"
    }), (d || "" == o) && $(this).find('input[name="phone"]').css({
        border: "1px solid #f55858"
    }), (r || "" == t) && $(this).find('input[name="name"]').css({
        border: "1px solid #f55858"
    }), (c || "" == i) && $(this).find('input[name="mail"]').css({
        border: "1px solid #f55858"
    }), console.log(s, a), t && n && o && i && s && a && !r && !d && !c && !l) {
        alert("Успешная отправка");
        var p = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 3500);
        });
        return false;
    }
});