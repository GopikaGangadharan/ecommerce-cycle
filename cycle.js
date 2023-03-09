

//to hold user details
userDetails={
    "max":{name:"max",password:'1234'},
    "maxwell":{name:"maxwell",password:'4567'}
}
//saveDetails
console.log(userDetails);
function saveDetails(){
//permently store data in local storage
localStorage.setItem("database",JSON.stringify(userDetails))
}
//getDetails
function getDetails(){
   userDetails=JSON.parse(localStorage.getItem('database'))
}

function register(){
    let username = Rname.value
    let password = Rpswd.value
    getDetails()
    if(username in userDetails){
        alert('User already Exist.Please Login...')
    }
    else{
        userDetails[username]={
           name:username,
           password
        }
        console.log(userDetails);
        saveDetails()
        alert('Register successfully')
        // window.location='#flip'
    }
}

//login

function login(){
    let username = Lname.value
    let password = Lpswd.value
    getDetails()
    if(username in userDetails){
        if( password==userDetails[username].password){
            localStorage.setItem("username",username)
    alert('login successful')
    window.location='index.html'
        }
    }
    else{
        alert('invalid username or password')
    }
}