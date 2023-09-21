
       document.addEventListener("DOMContentLoaded", function () {
    const enterBtn = document.getElementById("enterBtn");
    const status = document.getElementById("status");

    enterBtn.addEventListener("click", function () {
        status.innerHTML = "<h1>Entered Metaverse</h1>";
    });
});