let  title  = document.getElementById("titel")
let   price = document.getElementById("price")
let   taxes = document.getElementById("taxes")
let   ads = document.getElementById("ads")
let   dtscount = document.getElementById("dtscount")
let   total = document.getElementById("total")
let   count = document.getElementById("count")
let   category = document.getElementById("category")
let   submit = document.getElementById("submit")
console.log(title ,price,taxes,ads ,dtscount,total,count,category,submit )
//get totle
function getTotel(){
    if(price.value !=''){
        let resulte = (+price.value+ +taxes.value+ +ads.value)- +dtscount.value;
        total.innerHTML=resulte;
        total.style.background='green';
    }
}
//creat data
let datePro;
if (localStorage.product!=null){
    datePro=JSON.parse(localStorage.product);
}else{
    datePro=[]
}

submit.onclick=function(){
    let newPro={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        dtscount:dtscount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }
    if(newPro.count>1){
        for(let i=0;i<newPro.count ;i++){
            datePro.push(newPro);
        }
    }else{
        datePro.push(newPro)
    }
    datePro.push(newPro),
    localStorage.setItem('product',JSON.stringify(datePro))
    claerData()
    showData()
}


//claer data

function claerData(){
    title.value='';
    price.value='';
    taxes.valu='';
    ads.value='';
    dtscount.value='';
    total.innerHTML='';
    count.value='';
    category.value='';
}

//read 
function showData()
{
    let table='';
    for(let i=0;i< datePro.length ;i++ ){
        table +=`
        <tr>
            <td>${i}</td>
            <td>${datePro[i].title}</td>
            <td>${datePro[i].price}</td>
            <td>${datePro[i].taxes}</td>
            <td>${datePro[i].ads}</td>
            <td>${datePro[i].dtscount}</td>
            <td>${datePro[i].total}</td>
            <td>${datePro[i].category}</td>
            <td><button onclick="updatedata(${i}) id="update">update</button></td>
            <td ><button onclick="deletedata(${i}) id="delete">delete</button></td>
        </tr>
        `

    }
    document.getElementById('tbody').innerHTML=table;
    let btndelete=getElementById('deleteall')
    if(datePro.length>0){
        btndelete.innerHTML=
        `<button onclick='deleteall(${datePro.length})>deleteAll</button>
        `
    }else{
        btndelete.innerHTML='';
    }
}

showData()

//delet
function deletdata(){
     datePro.splice(i,1);
     localStorage.product= JSON.stringify(datePro);
     showData()
}
function deleteall(){
    localStorage.clear();
    datePro.splice(0);
    showData()
}
//count



//update
function updatedata(i){
    title.valu=datePro[i].title;
    price.valu=datePro[i].price;
    taxes.valu=datePro[i].taxes;
    ads.valu=datePro[i].ads;
    dtscount.valu=datePro[i].dtscount;
    getTotel();
    count.style.display='none';
    category.valu=datePro[i].category;
    submit.innerHTML='update'






}


