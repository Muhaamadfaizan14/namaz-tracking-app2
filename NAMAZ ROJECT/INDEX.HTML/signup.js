import { app , db , auth , createUserWithEmailAndPassword , setDoc , doc } from  "./firebase.js" ;




const signuphandler = async () => {
try {
        console.log("signuphandler");


const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const password = document.querySelector("#password");


console.log("firstname", firstname.value); 
console.log("lastname", lastname.value); 
console.log("email", email.value); 
console.log("number", number.value); 
console.log("password", password.value);




const response = await createUserWithEmailAndPassword(
    auth,
    email.value,
    password.value,
);
console.log("user",response)
const useruid = response.user.uid;



const userobj = {
firstname : firstname.value,
lastname : lastname.value,
email : email.value,
number : number.value,
password : password.value,
uid : response.user.uid
}
   const userRes = await setDoc(doc(db, "users", useruid), userobj);
    console.log("userRes", userRes);
    window.location.assign("/INDEX.HTML")
     console.log("userRes", userRes);
}

catch(error){console.log("error",error.message)

}

};


window.signuphandler = signuphandler






