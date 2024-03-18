import React from 'react';
import './LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div>
            <div className='wrapper'>
                <form action="">
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Usuario' required />
                        <FaUser className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Contraseña' required />
                        <FaLock className='icon' />
                    </div>

                    <div className="remenber-forgot">
                        <label><input type="checkbox" />Recuerdame </label>
                        <a href="#">¿Olvidastes la contraseña?</a>
                    </div>

                    <button type='submit'>Iniciar Sesión</button>

                    <div className="register-link">
                        <p>¿No tienes una cuenta? <a href="#">Registrate</a></p>
                    </div>
                </form>
            </div>
            <footer className="footer-page">
                <div className='foot'>
                    <p>© 2024 | Fran Ortega Velasco</p>
                </div>
            </footer>
        </div>
    );
}


export default LoginForm;