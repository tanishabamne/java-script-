let sub=()=>{
    let name=document.querySelector("#name").value;
    let number=document.querySelector("#number").value;
    let email=document.querySelector("#email").value;
    let pass=document.querySelector("#pass").value;
    let cpass=document.querySelector("#cpass").value;
    
    let errorname=document.querySelector("#errorname");
    let errornumber=document.querySelector("#errornumber");
    let errorpass=document.querySelector("#errorpass");
    let errorcpass=document.querySelector("#errorcpass");

    if(name===""){
        document.querySelector("#name").placeholder="enter name"
        errorname.style.color="red";
        return false;
    }
//     else if(number==="")
//     {
//        errornumber.textContent="please enter number" 
//        return false
//     }
//     else if(isNaN(number))
//         {
//         errornumber.textContent="please enter number" 
//        return false
//     }
//     else if(!(email.includes("@")&& email.includes(".com")))
//         {
//             erroremail.textContent="please enter correct email"
//         }
//     else if(pass.length<6)
//         {
//               errorpass.textContent="plz enter password"
//         }
//     else if( pass!==cpass)
//     {
//  errorcpass.textContent="please enter conform pasword"
//     }
}
