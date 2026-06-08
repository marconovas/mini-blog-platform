
import Navigation from "../components/layout/Navigation.jsx";
import PageHeader from "../components/layout/PageHeader.jsx";
import Footer from "../components/layout/Footer.jsx";
import LogInForm from "../components/auth/LogInForm.jsx";
import LoadingSpinner from "../components/ui/LoadingSpinner.jsx";
import { useState } from "react";
import { userLogIn } from "../services/auth.service.js";
import { useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth.js";

import { toast } from "react-toastify";


export default function LogInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[error, setError] = useState("");  //ERROR MSG
    const[isLoading, setIsLoading] = useState(false);    //LOADING SPINNER
    
    const navigate = useNavigate();
    const { login } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        try{
            
            const data = await userLogIn(email, password);            

            console.log(data);

            login(data.token, data.user); //CHECK THIS

            toast.success("Login Successful!",{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            navigate("/posts");

        } catch(error) {

            setError(error.message);

        } finally {
            setIsLoading(false);
        }
    }

    return(
        <>
            <Navigation />

            <section>
                <PageHeader 
                    title="Welcome Again!"
                    description="Plase log-in into your account and start sharing with others!"
                />

                {!isLoading ? (
                    <LogInForm 
                        email={email}
                        password={password}
                        setEmail={setEmail}
                        setPassword={setPassword}
                        handleSubmit={handleSubmit}
                        isLoading={isLoading}
                    />

                ) : (
                    <LoadingSpinner />
                )}

            </section>

            {error && (
                <p className="form-error">
                    {error}
                </p>
            )}

            <Footer />
        </>
    )
}