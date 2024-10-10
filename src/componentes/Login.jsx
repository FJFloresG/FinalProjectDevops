import '../styles/Login.css'
import regresarIcon from '../assets/botonRegresar.svg'
import logoTexto from '../assets/logoConTexto.svg'



import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

export function Login({loggedIn, setLoggedIn}){
    const navigate = useNavigate();

    const retornar = () => {
        let path = `/`;
        navigate(path);
    };
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/users.json')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error('Error loading users:', error));
    }, []);
    //Handle the form values enters by user.
    function handleChangeUsuario(event) {
        setUsername(event.target.value);
    }
    function handleChangePassword(event) {
        setPassword(event.target.value);
    }

    const onLogginButton = () => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const foundLocalUser = storedUsers.find(user => username === user.user && password === user.password);
        
        if (foundLocalUser) {
            setLoggedIn(true);
            return;
        }
        const founduser = users.find(user => username === user.user && password === user.password);

        if (!founduser) {
            window.alert("Please enter correct credentials");
            setUsername('');
            setPassword('');
        } else {
            setLoggedIn(true);
        }
    };

    useEffect(() => {
        if(loggedIn){
            retornar()
        }
    });

    return (
        <>
            <div className='login'>
                <button onClick={retornar} className='botonRegresar'><img src={regresarIcon} alt="Back" /></button>
                <img className='logoConTexto' src={logoTexto} alt="Aroma Gourmet" />
                <div className="loginContenedor">
                    <div id='loginInteractivo' className='loginTitulo'>
                        <h2>LOGIN</h2>
                        <span>Costumer</span>
                    </div>
                    <div className="inputLogin">
                        <label>User Name</label>
                        <input onChange={handleChangeUsuario} value={username} type="text" placeholder='Enter your username'/>
                    </div>
                    <div className="inputLogin">
                        <label>Password</label>
                        <input onChange={handleChangePassword} value={password} type="password" placeholder='Enter your password'/>
                    </div>
                    {/*<span>Forgot your password?<a href="#root"> Click Aquí</a></span>*/}
                    <button onClick={onLogginButton}>LOGIN</button>
                    <div className='register'><span>Don t have an account?<Link to="/register">Register here</Link></span></div>
                    
                </div>
            </div>
        </>
    )
}