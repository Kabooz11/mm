// let tittle = document.getElementById("tittle");
// let price = document.getElementById("price");
// let ads = document.getElementById("ads");
// let taxes = document.getElementById("taxes");
// let discount = document.getElementById("discount");
// let count = document.getElementById("count");
// let category = document.getElementById("category");
// let tottal= document.getElementById("tottal");
// let submit= document.getElementById("creat");

// function tottalprice(){
//  if(price.value !=''){
//     let result = (+price.value + +ads.value + +taxes.value ) - +discount.value;
//     tottal.innerHTML = result;
//     tottal.style.background = "#040";
//  }else{
//     tottal.style.background = "#7a291b";
//     tottal.innerHTML = "Totle";
//  }
//  }

//  let dataproo ;

//  if(localStorage.product != null){
//     dataproo = JSON.parse(localStorage.product);
//  }else{
//  dataproo = [];
//  }
//    showpro();


// submit.onclick = function(){
//      let newpro = {
//       tittle:tittle.value,
//       price:price.value,
//       ads:ads.value,
//       taxes:taxes.value,
//       discount:discount.value,
//       count:count.value,
//       category:category.value,
//       tottal:tottal.innerHTML,
//    }
//    dataproo.push(newpro);
//    localStorage.setItem("product",JSON.stringify(dataproo));
//    clearData();
// }


// function clearData(){
//             tittle.value ='';
//             price.value = '';
//             ads.value = '';
//             category.value = '';
//             discount.value = '';
//             tottal.innerHTML = '';
//             count.value = '';
//             taxes.value = '';
// }
//  function showpro(){

//    let table='';

//    for(let i=0; i <dataproo.length; i++){
//     table += `
//     <tr>
//         <td>${i}</td>
//         <td>${dataproo[i].tittle}</td>
//         <td>${dataproo[i].price}</td>
//         <td>${dataproo[i].ads}</td>
//         <td>${dataproo[i].taxes}</td>
//         <td>${dataproo[i].discount}</td>
//         <td>${dataproo[i].tottal}</td>
//         <td>${dataproo[i].category}</td>
//         <td><button id="btn" onclick="updateData(${i})">Update</button></td>
//         <td><button id="btn" onclick="deletedata(${i})">Delete</button></td>
//     </tr>`
//    document.getElementById("tbody").innerHTML = table;

//    if( dataproo.length > 0){ 
//     document.getElementById("deleteall").innerHTML = `
//     <button id="de" onclick="deleteall()">Delete All</button>
//     `
// }
// }
// }

// function deletedata(i){
// dataproo.splice(i,1);
// localStorage.product = JSON.stringify(dataproo);
// showpro();
// }
// function deleteall(){
//     localStorage.clear();
//     dataproo.splice(0);
//     showpro();
// }


let tittle = document.getElementById("tittle");
let price = document.getElementById("price");
let ads = document.getElementById("ads");
let taxes = document.getElementById("taxes");
let discount = document.getElementById("discount");
let count = document.getElementById("count");
let category = document.getElementById("category");
let tottal = document.getElementById("tottal");
let submit = document.getElementById("creat");

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

    dataproo.push(newpro);
    localStorage.setItem("product", JSON.stringify(dataproo));
    clearData();
    showpro();
};

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
    let table = '';

    for (let i = 0; i < dataproo.length; i++) {
        table += `
        <tr>
            <td>${i}</td>
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
        <button id="de" onclick="deleteall()">Delete All</button>
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