"use strict";
let Name = document.getElementById("name");
let desig = document.getElementById("desig");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let add = document.getElementById("add");
let deg1 = document.getElementById("deg1");
let pass1 = document.getElementById("pass1");
let uni1 = document.getElementById("uni1");
let deg2 = document.getElementById("deg2");
let pass2 = document.getElementById("pass2");
let uni2 = document.getElementById("uni2");
let skills1 = document.getElementById("skills1");
let skills2 = document.getElementById("skills2");
let skills3 = document.getElementById("skills3");
let skills4 = document.getElementById("skills4");
let skills5 = document.getElementById("skills5");
let lang1 = document.getElementById("lang1");
let lang2 = document.getElementById("lang2");
let styear = document.getElementById("styear");
let endyear = document.getElementById("endyear");
let Company = document.getElementById("Company");
let compaddress = document.getElementById("compaddress");
let jobtitle = document.getElementById("jobtitle");
let achievement1 = document.getElementById("achievement1");
let achievement2 = document.getElementById("achievement2");
let achievement3 = document.getElementById("achievement3");
let pic = document.getElementById("pic");
let submitBtn = document.getElementById('submitBtn');
let form = document.getElementById('form');
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem("name", Name.value);
    localStorage.setItem("desig", desig.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("add", add.value);
    localStorage.setItem("deg1", deg1.value);
    localStorage.setItem("pass1", pass1.value);
    localStorage.setItem("uni1", uni1.value);
    localStorage.setItem("deg2", deg2.value);
    localStorage.setItem("pass2", pass2.value);
    localStorage.setItem("uni2", uni2.value);
    localStorage.setItem("skills1", skills1.value);
    localStorage.setItem("skills2", skills2.value);
    localStorage.setItem("skills3", skills3.value);
    localStorage.setItem("skills4", skills4.value);
    localStorage.setItem("skills5", skills5.value);
    localStorage.setItem("lang1", lang1.value);
    localStorage.setItem("lang2", lang2.value);
    localStorage.setItem("styear", styear.value);
    localStorage.setItem("endyear", endyear.value);
    localStorage.setItem("Company", Company.value);
    localStorage.setItem("compaddress", compaddress.value);
    localStorage.setItem("jobtitle", jobtitle.value);
    localStorage.setItem("achievement1", achievement1.value);
    localStorage.setItem("achievement2", achievement2.value);
    localStorage.setItem("achievement3", achievement3.value);
    if (pic.files && pic.files[0]) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let textImg = reader.result;
            localStorage.setItem("profile_pic", textImg);
        });
        reader.readAsDataURL(pic.files[0]);
    }
    window.location.href = "./resume/resume.html";
});
