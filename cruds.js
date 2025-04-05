
let tittle = document.getElementById("tittle");
let price = document.getElementById("price");
let ads = document.getElementById("ads");
let taxes = document.getElementById("taxes");
let discount = document.getElementById("discount");
let count = document.getElementById("count");
let category = document.getElementById("category");
let tottal = document.getElementById("tottal");
let submit = document.getElementById("creat");
let search = document.getElementById("search");

let mood = "create";
let ccc;

function tottalprice() {
    if (price.value != '') {
        let result = (+price.value + +ads.value + +taxes.value) - +discount.value;
        tottal.innerHTML = result;
        tottal.style.background = "#040";
    } else {
        tottal.style.background = "#7a291b";
        tottal.innerHTML = "Totle";
    }
}

let dataproo;

if (localStorage.product != null) {
    dataproo = JSON.parse(localStorage.product);
} else {
    dataproo = [];
}
showpro();

submit.onclick = function () {
    let newpro = {
        tittle: tittle.value,
        price: price.value,
        ads: ads.value,
        taxes: taxes.value,
        discount: discount.value,
        count: count.value,
        category: category.value,
        tottal: tottal.innerHTML,
    };
  
    if( tittle.value !='' && price.value !='' && category.value !='' &&newpro.count <= 20){

    if(mood === "create"){
                if(newpro.count > 1){
            for(let i = 0 ; i < newpro.count ; i++){
                
                dataproo.push(newpro);
            }
        }else{
            dataproo.push(newpro);
        }
    }else{
        dataproo[ccc] = newpro;
    }
    
    clearData();
}
    mood = 'create';
    submit.innerHTML = 'Create';
    count.style.display = "block";
    localStorage.setItem("product", JSON.stringify(dataproo));
    // clearData();
    showpro();
    }
    

function clearData() {
    tittle.value = '';
    price.value = '';
    ads.value = '';
    category.value = '';
    discount.value = '';
    tottal.innerHTML = '';
    count.value = '';
    taxes.value = '';
}


function showpro() {
    tottalprice();
    let table = '';

    for (let i = 0; i < dataproo.length; i++) {
        table += `
        <tr>
            <td>${i+1}</td>
            <td>${dataproo[i].tittle}</td>
            <td>${dataproo[i].price}</td>
            <td>${dataproo[i].ads}</td>
            <td>${dataproo[i].taxes}</td>
            <td>${dataproo[i].discount}</td>
            <td>${dataproo[i].tottal}</td>
            <td>${dataproo[i].category}</td>
            <td><button id="btn" onclick="updateData(${i})">Update</button></td>
            <td><button id="btn" onclick="deletedata(${i})">Delete</button></td>
        </tr>`;
    }

    document.getElementById("tbody").innerHTML = table;

    if (dataproo.length > 0) { 
        document.getElementById("deleteall").innerHTML = `
        <button id="de" onclick="deleteall()">Delete All  ( ${dataproo.length}) </button>
        `;
    } else {
        document.getElementById("deleteall").innerHTML = '';
    }
}

function deletedata(i) {
    dataproo.splice(i, 1);
    localStorage.setItem("product", JSON.stringify(dataproo));
    showpro();
}

function deleteall() {
    localStorage.removeItem("product");
    dataproo = [];
    showpro();
}
// update
function updateData(i) {
    tittle.value = dataproo[i].tittle;
    price.value = dataproo[i].price;
    ads.value = dataproo[i].ads;
    taxes.value = dataproo[i].taxes;
    discount.value = dataproo[i].discount;
    tottalprice()
    count.style.display = "none";
    submit.innerHTML = 'Update'
    category.value = dataproo[i].category;
     mood = "update";
    ccc = i;
    scroll({
        top: 0,
        behavior: "smooth",
    });
}
taxes.style.display = "none";
ads.style.display = "none";
search.style.display = "none";
