let Name :any = document.getElementById("name");
let desig :any= document.getElementById("desig");
let phone :any= document.getElementById("phone");
let email :any= document.getElementById("email");
let add :any= document.getElementById("add");
let deg1 :any= document.getElementById("deg1");
let pass1 :any= document.getElementById("pass1");
let uni1 :any= document.getElementById("uni1");
let deg2 :any= document.getElementById("deg2");
let pass2 :any= document.getElementById("pass2");
let uni2 :any= document.getElementById("uni2");
let skills1 :any= document.getElementById("skills1");
let skills2 :any= document.getElementById("skills2");
let skills3 :any= document.getElementById("skills3");
let skills4 :any= document.getElementById("skills4");
let skills5 :any= document.getElementById("skills5");
let lang1 :any= document.getElementById("lang1");
let lang2 :any= document.getElementById("lang2");
let styear :any= document.getElementById("styear");
let endyear :any= document.getElementById("endyear");
let Company :any= document.getElementById("Company");
let compaddress :any= document.getElementById("compaddress");
let jobtitle :any= document.getElementById("jobtitle");
let achievement1 :any= document.getElementById("achievement1");
let achievement2 :any= document.getElementById("achievement2");
let achievement3 :any= document.getElementById("achievement3");
let pic :any= document.getElementById("pic");

let submitBtn = document.getElementById('submitBtn')
let form = document.getElementById('form')

form?.addEventListener('submit', (e)=>{
e.preventDefault()

localStorage.setItem("name", Name.value)
localStorage.setItem("desig", desig.value)
localStorage.setItem("phone", phone.value)
localStorage.setItem("email", email.value)
localStorage.setItem("add", add.value)
localStorage.setItem("deg1", deg1.value)
localStorage.setItem("pass1", pass1.value)
localStorage.setItem("uni1", uni1.value)
localStorage.setItem("deg2", deg2.value)
localStorage.setItem("pass2", pass2.value)
localStorage.setItem("uni2", uni2.value)
localStorage.setItem("skills1", skills1.value)
localStorage.setItem("skills2", skills2.value)
localStorage.setItem("skills3", skills3.value)
localStorage.setItem("skills4", skills4.value)
localStorage.setItem("skills5", skills5.value)
localStorage.setItem("lang1", lang1.value)
localStorage.setItem("lang2", lang2.value)
localStorage.setItem("styear", styear.value)
localStorage.setItem("endyear", endyear.value)
localStorage.setItem("Company", Company.value)
localStorage.setItem("compaddress", compaddress.value)
localStorage.setItem("jobtitle", jobtitle.value)
localStorage.setItem("achievement1", achievement1.value)
localStorage.setItem("achievement2", achievement2.value)
localStorage.setItem("achievement3", achievement3.value)

if(pic.files && pic.files[0]){
    let reader = new FileReader()
    reader.addEventListener("load", ()=>{
        let textImg: any  = reader.result
        localStorage.setItem("profile_pic",textImg)
    })
        reader.readAsDataURL(pic.files[0])
}

window.location.href ="./resume/resume.html"

})
