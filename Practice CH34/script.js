let products =[]; //array of products stores all product for transaction

//create the constructor
function Product(paramProduct, paramPrice) {
    this.attrProduct= paramProduct;
    this.attrPrice= paramPrice;
}

//get the values from the inputs
let inputProduct= document.getElementById("txtProduct"); //the value is "" for now

let inputPrice= document.getElementById("txtPrice"); //the value is "" for now


//the next two section of code limit the Price inputs to two decimals
$(document).on('keydown', 'input[pattern]', function(e){
    var input = $(this);
    var oldVal = input.val();
    var regex = new RegExp(input.attr('pattern'), 'g');


setTimeout(function(){
    var newVal = input.val();
        if(!regex.test(newVal)){
        input.val(oldVal); 
    }
    }, 1);
    }   
);

//register function
function register(){
    let newProduct = new Product(inputProduct.value,inputPrice.value)//creating the new object 
    products.push(newProduct) //add the product to the array
    display();
}

//display function
function display(){
    let row = "";
    //travel the products array
    for(let i=0;i<products.length;i++){
        let product=products[i];
        row+=`
        <tr>
        <td>${i+1}</td>
        <td>${product.attrProduct}</td>
        <td  class="price-align"> $${product.attrPrice} </td>
        </r>`;
    }
    document.getElementById("productsTable").innerHTML=row;
    document.getElementById("productsInCart").innerHTML=products.length;
}


//create an init
function init(){
    //create initial objects
    let product1 = new Product("T-shirt", 12.50)
    products.push(product1);//add the product to the array
    display();
}

window.onload =init; //loads the init function


//The code below was with Jquery i changed to js only so I could be inline with class
// //create the constructor
// function Product(paramProduct,paramPrice){//capitalize Constructor functions
//     this.attrProduct = paramProduct;
//     this.attrPrice = paramPrice;
// }  

// //get the values from the inputs

// let inputProduct= $("#txtProduct");//the value is "" for now
// let inputPrice= $("#txtPrice");

// //register function
// function register(){
//     let newProduct = new Product(inputProduct.val(),inputPrice.val())
//     console.log(newProduct);
// }

// //display function

// //create an init
// function init(){
//     //create initial objects
//     let product1 = new Product("T-shirt", 12.5)
//     console.log(product1);

// }

// window.onload =init; //loads the init function
   