import React,{useState} from 'react';


const Login = () => {

    const [isUsernameValid, setUsernameValidity] = useState("false");
    const [isPasswordValid, setPasswordValidity] = useState("false");


    const usernameHandler = (e) => {
       var username = e.target.value;
       if(username.length<7){
        setUsernameValidity(false);
       }
       else{
        setUsernameValidity(true);
       }
    }

    const passwordHandler = (e) => {
       const Password = e.target.value;
       if(Password.length<7){
        setPasswordValidity(false);
       }
       else{
        setPasswordValidity(true);
       }
    }

    const formHandler = (e) => {
        e.preventDefault();
        if(!isUsernameValid || !isPasswordValid){
            alert("Usename or password are less than 6 chars long");
        }
    }

    return (
        <>
        <h1>Nine: Login Form Validity</h1>
        <form onSubmit={formHandler}>
        <input type="text" placeholder="Enter Username"onChange={usernameHandler}/>
        {isUsernameValid? "":<span>Username must be atleast 6 chars long</span> }<br/>
        <input type="text" placeholder="Enter Password" onChange={passwordHandler}/>
        {isPasswordValid? "":<span>Password must be atleast 6 chars long</span> }<br/>
        <input type="submit"/>
        </form>
        </>
    );
}

export default Login;