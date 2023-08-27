//local storage information that the users have input
let users= localStorage.getItem("Informations")==null ? []:JSON.parse(localStorage.getItem("Informations"));

//getting input from our html page
const user_name=document.querySelector("#username")
const user_password=document.querySelector("#password")
const class_form=document.querySelector("#form-class")

//setting info to database
function storeToDatabase(usersinfo){
    localStorage.setItem("Informations",JSON.stringify(usersinfo))
}
class_form.addEventListener('submit',event =>{
    event.preventDefault();
    const form_object= new FormData(class_form)

    addFormObjectToInformations(form_object)
    console.log(users)
    storeToDatabase(users)
    class_form.reset();

})
 function addFormObjectToInformations(form_object){
    users.push(
        {
        'name':form_object.get('username'),
    'password':form_object.get('password')

        }
    )




 }

 function Redirect(){
    
    location.replace('home.html')

 }