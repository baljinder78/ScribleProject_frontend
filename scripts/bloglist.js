/*
 Made By
 Name-Baljinder Singh
 Id-1811981088
 Contact me on linkdin:-https://www.linkedin.com/in/baljinder-singh-39a5791b6/
 */

var configuration_model=document.getElementsByClassName("Confirmation_box_model")[0];

var configuration_btn=document.querySelectorAll(".trash");

var configuration_no=document.getElementById("no");



var j;
for (j = 0; j < configuration_btn.length; j++) {
    let btn=configuration_btn[j];
    btn.onclick=function() {
        configuration_model.style.display="flex";
    }
}

configuration_no.onclick=function () {
    configuration_model.style.display="none";
}

/*
 Made By
 Name-Baljinder Singh
 Id-1811981088
 Contact me on linkdin:-https://www.linkedin.com/in/baljinder-singh-39a5791b6/
 :)
 */