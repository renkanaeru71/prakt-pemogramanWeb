// alert("halo jawa")
// confirm("apkah kamu jawa?")
// prompt("siapa nama sampean ")
//let name = prompt("あなたなまえわだれですか")
//let angka1 = parseInt(prompt("angka pertama"))
//let angka2 = parseInt(prompt("angka kedua"))

//document.write(angka1 + angka2)

//console.log("halo namaku " + name)
//    document.write("<pre>kaka keren</pre>")(

function sapa() {
    alert("halo hitam")
}

sapa()

document.title = "web judol asli";

let hiu = document.getElementById("judul1");
hiu.style.color = "red";
hiu.innerHTML = "Kaka ganteng bgt";
hiu.style.backgroundColor = "blue";

let ant = document.getElementsByClassName("Heading");

for (let index = 0; index < ant.length; index++) {
    ant[index].style.textDecoration = "underline";
}

let bee = document.getElementById("judul2");
let cat = document.getElementById("para");

bee.onmouseover = () => {
    cat.innerHTML = "ambatukammm";
};

bee.onmouseout = () => {
    cat.innerHTML = "ohhhhhh";
};
     

