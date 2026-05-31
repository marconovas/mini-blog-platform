import "./LogInForm.css";

export default function LogInForm({
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
    isLoading
}) {

    return(
        <form
            className="login-form"
            onSubmit={handleSubmit}
        >

            <div className="form-group">

                <label>
                    Email
                </label>

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

            </div>

            <div className="form-group">

                <label>
                    Password
                </label>

                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

            </div>


            {!isLoading ? (
                <button
                    className="login-btn"
                    type="submit"
                >
                    Log In
                </button>
            ): (
                <button
                    className="login-btn"
                    type="button"
                    disabled
                >
                    Logging In...
                </button>
            )}

        </form>
    );
}