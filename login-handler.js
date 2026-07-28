function login(error,msg) {
    if(error)
    {
        console.log("Error is: "+error)
    }
    else{
        console.log(msg)
    }
}

function loginHandler(username,pswd,clbk) {
    if ( username == "XYZ" && pswd=="12345") {
        clbk(null,"Login Success")
    }else{
        clbk("Username or Password is incorrect",null)
    }
}

loginHandler("XYZ","12345",login)