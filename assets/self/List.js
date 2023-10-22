let moreList = $(".more-List")
//change Game mode
function Gamemode() {
    moreList.addClass("disabled")
    moreList.text("لیست به پایان رسید")

    let test = $(".Gamemode").val();
    if (test === "اکشن"){
        $(".GameBox").hide(100)
        $(".GameBox.action").show(200)
    }
    else if (test === "شوتر"){
        $(".GameBox").hide(100)
        $(".GameBox.shooter").show(200)
    }
    else if (test === "ترسناک"){
        $(".GameBox").hide(100)
        $(".GameBox.scary").show(200)
    }
    else if (test === "فکری"){
        $(".GameBox").hide(100)
        $(".GameBox.intellectual").show(200)
    }
    else if (test === "استراتژیک"){
        $(".GameBox").hide(100)
        $(".GameBox.strategic").show(200)
    }
    else if (test === "ورزشی"){
        $(".GameBox").hide(100)
        $(".GameBox.sport").show(200)
    }
    else if (test === "موارد دیگر"){
        $(".GameBox").hide(100)
        $(".GameBox.moreG").show(200)
    }
    else {
        $(".GameBox").show(200)
        moreList.removeClass("disabled")


    }
}
//change software mode

let num = 11;
let i = 1;
while (num > i){
    $(".GameBox:nth-child($)".replace("$",i)).show();
    i++
}
moreList.on("click",function () {
    num = num + 10;
    list()
})
function list() {
    let i = 1;
    while (num > i){
        $(".GameBox:nth-child($)".replace("$",i)).show(100);
        i++
    }
    if (num >= document.getElementsByClassName("GameBox").length){
        moreList.text("لیست به پایان رسید")
        moreList.addClass("disabled")

    }
}