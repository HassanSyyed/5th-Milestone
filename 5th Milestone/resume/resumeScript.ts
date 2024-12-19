let myName = localStorage.getItem("name");

window.addEventListener("load", () => {
    let desig = localStorage.getItem("desig");
    let phone = localStorage.getItem("phone");
    let email = localStorage.getItem("email");
    let add = localStorage.getItem("add");
    let deg1 = localStorage.getItem("deg1");
    let pass1 = localStorage.getItem("pass1");
    let uni1 = localStorage.getItem("uni1");
    let deg2 = localStorage.getItem("deg2");
    let pass2 = localStorage.getItem("pass2");
    let uni2 = localStorage.getItem("uni2");
    let deg3 = localStorage.getItem("deg3");
    let pass3 = localStorage.getItem("pass3");
    let uni3 = localStorage.getItem("uni3");
    let skill1 = localStorage.getItem("skill1");
    let skill2 = localStorage.getItem("skill2");
    let skill3 = localStorage.getItem("skill3");
    let skill4 = localStorage.getItem("skill4");
    let skill5 = localStorage.getItem("skill5");
    let lang1 = localStorage.getItem("lang1");
    let lang2 = localStorage.getItem("lang2");
    let styear = localStorage.getItem("styear");
    let endyear = localStorage.getItem("endyear");
    let company = localStorage.getItem("Company");
    let comaddress = localStorage.getItem("compaddress");
    let jobtitle = localStorage.getItem("jobtitle");
    let achievement1 = localStorage.getItem("achievement1");
    let achievement2 = localStorage.getItem("achievement2");
    let achievement3 = localStorage.getItem("achievement3");
    let picture =      localStorage.getItem("profile_pic");

    let resName: any = document.getElementById('resName');
    resName.textcontent = myName;

    let resDesig: any = document.getElementById('resDesig');
    resDesig.textcontent = desig;

    let resphone: any = document.getElementById('resphone');
    resphone.textcontent = phone;

    let resEmail: any = document.getElementById('resEmail');
    resEmail.textcontent = email;

    let resAdd: any = document.getElementById('resAdd');
    resAdd.textcontent = add;

    let resdeg1: any = document.getElementById('resdeg1');
    resdeg1.textcontent = deg1;

    let respass1: any = document.getElementById('respass1');
    respass1.textcontent = pass1;

    let resuni1: any = document.getElementById('resuni1');
    resuni1.textcontent = uni1;

    let resdeg2: any = document.getElementById('resdeg2');
    resdeg2.textcontent = deg2;

    let respass2: any = document.getElementById('respass2');
    respass2.textcontent = pass2;

    let resuni2: any = document.getElementById('resuni2');
    resuni2.textcontent = uni2;

    let resdeg3: any = document.getElementById('resdeg3');
    resdeg3.textcontent = deg3;

    let respass3: any = document.getElementById('respass3');
    respass3.textcontent = pass3;

    let resuni3: any = document.getElementById('resuni3');
    resuni3.textcontent = uni3;

    let resskill1: any = document.getElementById('resskill1');
    resskill1.textcontent = skill1;

    let resskill2: any = document.getElementById('resskill2');
    resskill2.textcontent = skill2;

    let resskill3: any = document.getElementById('resskill3');
    resskill3.textcontent = skill3;

    let resskill4: any = document.getElementById('resskill4');
    resskill4.textcontent = skill4;

    let resskill5: any = document.getElementById('resskill5');
    resskill5.textcontent = skill5;

    let reslang1: any = document.getElementById('reslang1');
    reslang1.textcontent = lang1;

    let reslang2: any = document.getElementById('reslang2');
    reslang2.textcontent = lang2;

    let resstyear: any = document.getElementById('resstyear');
    resstyear.textcontent = styear;

    let resendyear: any = document.getElementById('resendyear');
    resendyear.textcontent = endyear;

    let rescompany: any = document.getElementById('rescompany');
    rescompany.textcontent = company;

    let rescomaddress: any = document.getElementById('rescomaddress');
    rescomaddress.textcontent = comaddress;

    let resjobtitle: any = document.getElementById('resjobtitle');
    resjobtitle.textcontent = jobtitle;

    let resachievment1: any = document.getElementById('resachievement1');
    resachievment1.textcontent = achievement1;

    let resachievment2: any = document.getElementById('resachievement2');
    resachievment2.textcontent = achievement2;

    let resachievment3: any = document.getElementById('resachievement3');
    resachievment3.textcontent = achievement3;

    let resImg: any = document.getElementById('resImg');
    resImg.src = picture;

});


// -------------------- print button ------------------

let print_btn = document.getElementById('print_btn')

print_btn?.addEventListener("click", () => {
    window.print()
});


// -------------------- edit button ------------------
let edit_btn = document.getElementById('edit_btn')

edit_btn?.addEventListener("click", () => {
    window.history.back()
});

// -------------------- Share button ------------------
let share_btn = document.getElementById("share_btn")
let anc = document.getElementById("anc")
let userName;
if(myName){
    userName = myName.toLowerCase().replace(/\s+/g, "-")
}else{
    userName = "user"
}

let baseUrl = "http://127.0.0.1:5501/resume/resume.html";
let uniqueUrl = `${baseUrl}?/${myName}`

share_btn?.addEventListener("click", () => {
    anc?.setAttribute("href", uniqueUrl)
});

// -------------------- Copy Link button ------------------
let copy_btn = document.getElementById('copy_btn')

copy_btn?.addEventListener("click", () => {
    navigator.clipboard.writeText(uniqueUrl).then(()=>{
        alert("copy succefull")
    })
});