import "./RegisterForm.css";

export default function RegisterForm({ name, email, password, setName, setEmail, setPassword, handleSubmit, isLoading }) {

    return(
        <form 
            className="register-form"
            onSubmit={handleSubmit}
        >

            <div className="form-group">

                <label>
                    Username
                </label>

                <input
                    type="text"
                    value={name}
                    placeholder="Enter your username"
                    onChange={e => setName(e.target.value)}
                />

            </div>

            <div className="form-group">

                <label>
                    Email
                </label>

                <input
                    type="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={e => setEmail(e.target.value)}
                />

            </div>

            <div className="form-group">

                <label>
                    Password
                </label>

                <input
                    type="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={e => setPassword(e.target.value)}
                />

            </div>

            {!isLoading ? (
                <button
                    className="register-btn"
                    type="submit"
                >
                    Register
                </button>
            ) : (
                <button
                    className="register-btn"
                    type="submit"
                >
                   Creating Account... 
                </button>
            )}

        </form>
    );
}