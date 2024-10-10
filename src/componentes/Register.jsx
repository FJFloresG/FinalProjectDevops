import '../styles/Login.css'
import regresarIcon from '../assets/botonRegresar.svg'
import logoTexto from '../assets/logoConTexto.svg'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {Link} from 'react-router-dom'

export function Register(){
    const navigate = useNavigate();

    const retornar = () =>{
        let path=`/`
        navigate(path)
    }
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState(''); 

    function handleChangeUsuario(event) {
        setUsername(event.target.value);
    }
    function handleChangePassword(event) {
        setPassword(event.target.value);
    }
    function handleChangeAddress(event) {
        setAddress(event.target.value);
    }
    function handleChangeEmail(event) {
        setEmail(event.target.value);
    }
    function handleRegister() {
        const user = {
            user: username,
            password: password,
            address: address,
            email: email
        };
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        existingUsers.push(user);
        localStorage.setItem('users', JSON.stringify(existingUsers));
        navigate('/login');
    }
    return (
        <>
            <div className='login'>
                <button onClick={retornar} className='botonRegresar'><img src={regresarIcon} alt="Back" /></button>
                <img className='logoConTexto' src={logoTexto} alt="Aroma Gourmet" />
                <div className="loginContenedor">
                    <div id='loginInteractivo' className='loginTitulo'>
                        <h2>CUSTOMER REGISTRATION</h2>
                        <p></p>
                    </div>
                    <div className="inputLogin">
                        <label >Username</label>
                        <input onChange={handleChangeUsuario} value={username} type="text" placeholder='Enter your username'/>
                    </div>
                    <div className="inputLogin">
                        <label >Address </label>
                        <input onChange={handleChangeAddress} value={address} type="text" placeholder='Enter your address' />
                    </div>
                    <div className="inputLogin">
                        <label >Email </label>
                        <input onChange={handleChangeEmail} value={email} type="email" placeholder='Enter your email' />
                    </div>
                    <div className="inputLogin">
                        <label >Password</label>
                        <input onChange={handleChangePassword} value={password} type="password" placeholder='Enter your password'/>
                    </div>
                    <button onClick={handleRegister}>REGISTER</button>
                    <p></p>
                    <span>¿Already registered?  <Link to="/login">Login here</Link></span>
                </div>
            </div>
        </>
    )
}