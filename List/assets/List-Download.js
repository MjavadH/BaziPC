
$(document).ready(function () {
    $(".ZoomS").hide()
})
$(".ScreenShot img").on("click",function () {
    let imgS = this.getAttribute("src")
    document.getElementById("ZoomS").setAttribute("src",imgS)
    $(".ZoomS").show(500)
    $("html").addClass("off")
})
$(".ZoomS").on("click",function () {
    $(".ZoomS").hide(500)
    $("html").removeClass("off")
})

function copyToClipboard(password) {
    navigator.clipboard.writeText($(password).text())
    $(".tooltip-inner").text("پسوورد کپی شد!")
}