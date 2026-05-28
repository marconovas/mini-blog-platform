import { useState } from "react";
import Navigation from "../components/layout/Navigation.jsx";
import RegisterForm from "../components/auth/RegisterForm.jsx";
import PageHeader from "../components/layout/PageHeader.jsx";
import Footer from "../components/layout/Footer.jsx";
import { userRegister } from "../services/auth.service.js";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const redirect = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        setIsLoading(true);

        try{
            const res = await userRegister(name, email, password);

            console.log(res);
            redirect("/login");
            
        } catch(error) {

            console.log(error.message);
            setError(error.message);            
        
        }finally{
            setIsLoading(false);
        }
    }

    return(
        <>

            <Navigation />

            <section>
                <PageHeader 
                title="Welcome!"
                description="Create your acccount and join the community!"
                />

                <RegisterForm
                    name={name}
                    email={email}
                    password={password}
                    setName={setName}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    handleSubmit={handleSubmit}
                    isLoading={isLoading}
                />

                {error && (
                    <p className="form-error">
                        {error}
                    </p>
                )}
            </section>

            <Footer />
        </>
    )
}