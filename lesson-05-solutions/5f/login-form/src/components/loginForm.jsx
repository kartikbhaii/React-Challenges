import { useState } from 'react'
import "./loginForm.css"

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)

    function toggleButton() {
        if (showPassword) {
            setShowPassword(false)

        }
        else {
            setShowPassword(true)
        }
    }

    return (
        <>
            <div>
                <input type="email" placeholder="Email" />
            </div>
            <div>
                <input type={showPassword ? 'text' : 'password'} placeholder="Password" />
                <button onClick={toggleButton} >Show</button>
            </div>
            <button className="login-signup-button">Login</button>
            <button className="login-signup-button">Signup</button>
        </>
    )
}

export default LoginForm