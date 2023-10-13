if (window.localStorage.getItem("Them") === "on"){
    $("body").addClass("night")
}
//tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
//Menu Toggle
$(".Mobile-Toggle").on("click",function () {
    $(".navbar-link").toggleClass("Mobile-menu")
    $(".Mobile-Toggle").toggleClass("active")
    $(".night-icon").toggleClass("Mobile-night-icon")
})
//Night mode
$(".night-mode input").on("click",function () {
    $("body").toggleClass("night")
    if (document.getElementsByClassName("night").length === 1){
        window.localStorage.setItem("Them","on")
    }
    else window.localStorage.setItem("Them","off")

})
//Search
$(".fa-search").on("click",function () {
    $(".search-box").show(200)
})
$(".fa-times-circle").on("click",function () {
    $(".search-box").hide(200)
})

//lazy load
registerListener('load', setLazy);
registerListener('load', lazyLoad);
registerListener('scroll', lazyLoad);

var lazy = [];

function setLazy(){
    lazy = document.getElementsByClassName('image');
    console.log('Found ' + lazy.length + ' lazy images');
}

function lazyLoad(){
    for(var i=0; i<lazy.length; i++){
        if(isInViewport(lazy[i])){
            if (lazy[i].getAttribute('data-src')){
                lazy[i].src = lazy[i].getAttribute('data-src');
                lazy[i].removeAttribute('data-src');
            }
        }
    }

    cleanLazy();
}

function cleanLazy(){
    lazy = Array.prototype.filter.call(lazy, function(l){ return l.getAttribute('data-src');});
}

function isInViewport(el){
    var rect = el.getBoundingClientRect();

    return (
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function registerListener(event, func) {
    if (window.addEventListener) {
        window.addEventListener(event, func)
    } else {
        window.attachEvent('on' + event, func)
    }
}

//Setting
$(document).ready(function () {
    //Telegram & Instagram Link
    document.getElementById("Telegram").setAttribute("href","index.html")
    document.getElementById("Instagram").setAttribute("href","#")


    /////////////////////////////////////////////////////////////////////////////////////////////
    //TabGame Text and href
    $(".tab-G1").text("دانلود بازی پورتال فشرده شده")
    $(".tab-G2").text("دانلود بازی جی تی ای v")
    $(".tab-G3").text("دانلود بازی رزیدنت اویل ویلیج")
    $(".tab-G4").text("دانلود بازی اساسینز کرید والهالا")
    $(".tab-G5").text("دانلود بازی call of duty Warzone")
    $(".tab-G6").text("دانلود بازی Green Hell")
    $(".tab-G7").text("دانلود بازی Halo2")
    document.getElementById("tab-G1").setAttribute("href","index.html")
    document.getElementById("tab-G2").setAttribute("href","#")
    document.getElementById("tab-G3").setAttribute("href","index.html")
    document.getElementById("tab-G4").setAttribute("href","#")
    document.getElementById("tab-G5").setAttribute("href","index.html")
    document.getElementById("tab-G6").setAttribute("href","#")
    document.getElementById("tab-G7").setAttribute("href","index.html")
    /////////////////////////////////////////////////////////////////////////////////////////////
    //TabSoftware Text and href
    $(".tab-S1").text("دانلود برنامه GameBoost")
    $(".tab-S2").text("دانلود درایور Nvidia")
    $(".tab-S3").text("دانلود netFramework.")
    $(".tab-S4").text("دانلود ++visival c")
    $(".tab-S5").text("دانلود internet download manager")
    $(".tab-S6").text("دانلود Steam")
    $(".tab-S7").text("دانلود درایور AMD")
    document.getElementById("tab-S1").setAttribute("href","index.html")
    document.getElementById("tab-S2").setAttribute("href","#")
    document.getElementById("tab-S3").setAttribute("href","index.html")
    document.getElementById("tab-S4").setAttribute("href","#")
    document.getElementById("tab-S5").setAttribute("href","index.html")
    document.getElementById("tab-S6").setAttribute("href","#")
    document.getElementById("tab-S7").setAttribute("href","index.html")
    /////////////////////////////////////////////////////////////////////////////////////////////
    //NG href
    document.getElementById("NG1").setAttribute("href","index.html")
    document.getElementById("NG2").setAttribute("href","#")
    document.getElementById("NG3").setAttribute("href","")
    /////////////////////////////////////////////////////////////////////////////////////////////
    //TF Text
    $(".TF1").text("TF1");
    $(".TF2").text("TF2");
    $(".TF3").text("TF3");
    $(".TF4").text("TF4");
    $(".TF5").text("TF5");
    /////////////////////////////////////////////////////////////////////////////////////////////
    //Practical Software Text & href
    $(".Practical-Software-link1").text("Practical-Software-link1");
    $(".Practical-Software-link2").text("Practical-Software-link2");
    $(".Practical-Software-link3").text("Practical-Software-link3");
    $(".Practical-Software-link4").text("Practical-Software-link4");
    $(".Practical-Software-link5").text("Practical-Software-link5");
    $(".Practical-Software-link6").text("Practical-Software-link6");
    $(".Practical-Software-link7").text("Practical-Software-link7");
    document.getElementById("PSI1").setAttribute("href","#")
    document.getElementById("PSI2").setAttribute("href","?")
    document.getElementById("PSI3").setAttribute("href","index.html")
    document.getElementById("PSI4").setAttribute("href","#")
    document.getElementById("PSI5").setAttribute("href","?")
    document.getElementById("PSI6").setAttribute("href","#")
    document.getElementById("PSI7").setAttribute("href","")
    /////////////////////////////////////////////////////////////////////////////////////////////
    //Practical Software Text & href
    $(".Favorites-link1").text("Favorites-link1");
    $(".Favorites-link2").text("Favorites-link2");
    $(".Favorites-link3").text("Favorites-link3");
    $(".Favorites-link4").text("Favorites-link4");
    $(".Favorites-link5").text("Favorites-link5");
    $(".Favorites-link6").text("Favorites-link6");
    $(".Favorites-link7").text("Favorites-link7");
    document.getElementById("FI1").setAttribute("href","#")
    document.getElementById("FI2").setAttribute("href","?")
    document.getElementById("FI3").setAttribute("href","index.html")
    document.getElementById("FI4").setAttribute("href","#")
    document.getElementById("FI5").setAttribute("href","?")
    document.getElementById("FI6").setAttribute("href","#")
    document.getElementById("FI7").setAttribute("href","")
    /////////////////////////////////////////////////////////////////////////////////////////////
    //AdLink href
    document.getElementById("AdLink1").setAttribute("href","#")
    document.getElementById("AdLink2").setAttribute("href","?")
    document.getElementById("AdLink3").setAttribute("href","index.html")
    /////////////////////////////////////////////////////////////////////////////////////////////
    //Footer text & link
    $(".Game-num").text("1");
    $(".software-num").text("");
    document.getElementById("footerNG").setAttribute("href","index.html")
    //////////////////////////////////////////////////////////////////////////////////////////////
    //Home Page
    try {
        document.getElementById("NG1Home").setAttribute("href","index.html")
        document.getElementById("NG2Home").setAttribute("href","#")
        document.getElementById("NG3Home").setAttribute("href","")
        document.getElementById("suggest-link1").setAttribute("href","test.html")
        document.getElementById("suggest-link2").setAttribute("href","#")
        document.getElementById("suggest-link3").setAttribute("href","")
        document.getElementById("Banner2").setAttribute("href","#")
        document.getElementById("Banner1").setAttribute("href","index.html")

    }catch (e) {

    }


})

