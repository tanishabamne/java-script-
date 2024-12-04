    // que.1 program
function q1(){
    let age =prompt("Enter your age")
    let result = age>=18 ? "Adult" : "Minor";
    alert(result)

    
}
                // ********************************que.2 program**********************************

function go(){
    let num1=confirm(" have u comlete course?");
    let num2=confirm(" have u done certification");
    if( num1 && num2)
    {
        alert(" congratulations! completed" )
    }
    else{
        alert(" certification not completed.")
    }
    
}
                      //*******************************que03******************************************/

function q3(){
    let price =prompt("Enter price");
    let coupen=confirm("Do you have discount coupen")
    if(coupen ){
    let coupen= price - (price*0.10)
    alert(coupen)

    }
    else {
        alert ("no discount")
    }
}

           //*****************************************Que.04********************************************
    
 function q4(){
    let num= prompt("enter your exam score")
    if(num>=33){
        alert("u r pass")
    }
    else{
        alert("u r fail")
    }

 }



            //   que.5 
function easy(){
    let num= prompt("enter any number.")
    if(num%2 ==0){
        alert("number is even");

    }
    else{
        alert("number is odd");
    }
}


                        //******************Que.num 06 *******************************/

function hii(){
   let para=document.querySelector("#text");
   para.innerHTML="Hello";
   para.style.color="red";
   para.style.fontSize="50px";

}


function hlo(){
    let write =document.querySelector("#write");
    write.innerHTML="cybrom";

}






