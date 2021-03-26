
var creat_post_modal = document.getElementsByClassName("creat_post_modal")[0];

var creat_post_btn=document.getElementById("create_post");

var creat_post_close_btn=document.getElementsByClassName("creat_post_close")[0];

creat_post_btn.onclick = function() {

    creat_post_modal.style.display = "flex";

}

creat_post_close_btn.onclick=function () {
    creat_post_modal.style.display="none";
}


window.onclick = function(event) {
    if (event.target === creat_post_modal) {
        creat_post_modal.style.display = "none";
    }
}