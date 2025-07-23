import { app ,  auth , signInWithEmailAndPassword ,  } from  "./firebase.js" ;



const login = async () => {
const email = document.querySelector("#email")
const password = document.querySelector("#password")
if(!email.value || !password.value){
    alert("email and password are required")
    return;

}

try{
    const response =await signInWithEmailAndPassword (
    auth, 
    email.value,
    password.value,
)
   console.log("Login Successful", response.user);
    alert("Login Successful!");
    window.location.assign("/dashboard.html")

}
catch(error){
    alert(error.message)
}

}

window.login =login





