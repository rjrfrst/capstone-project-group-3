import { useState } from "react";

const LogInForm = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState();

    const validateUser = async (password) => {
        try{
            
        } catch (error) {
            throw new Error("Invalid user info")
        }
    }

    const handleFormSubmit = (event) => {
        if(!name || !password){
            alert("Please provide your username and password below.")
            return;
        } else {
            validateUser(password).catch((error) => {
                alert("Incorrect user info");
            });
        }

        event.preventDefault();
        const newUser = {
            name: name,
            password: password,
        }

//      resets username and password ( could remove )
        setName("");
        setPassword(""); 

    }


    return ( 
    <>
    <section className="login-form">
        <section className="login-title">
            <h1>This is the login form</h1>
        </section>
        <div className="form-container" >
            <form className="username-form" onSubmit={(event) => handleFormSubmit(event)}>
                <input type="text" className="username"/>
                <input type="text" className="password"/>
                <input type="submit" className="submit" value={"Log-in"}/>
            </form>
        </div>
    </section>
    </> );
}

export default LogInForm;