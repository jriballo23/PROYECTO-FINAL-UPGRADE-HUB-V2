import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import "./EntryPage.scss";

const EntryPage = () => {

let Register = false;

 const RegisterOn = () => {
    if (!Register) {
        Register = true;
        let a = document.querySelector('#Register');
        a.className = 'Register-Form-On';
        let b = document.querySelector('#Login');
        b.className = 'Login-Form-Off';
        let c = document.querySelector('#Btn-Options');
        c.innerHTML = 'Iniciar Sesión';
        c.className = 'Login-Btn';
    } else {
        Register = false;
        let a = document.querySelector('#Register');
        a.className = 'Register-Form-Off';
        let b = document.querySelector('#Login');
        b.className = 'Login-Form-On';
        let c = document.querySelector('#Btn-Options');
        c.innerHTML = 'Crear cuenta';
        c.className = 'Register-Btn';
    }
    
 }

  return (
    <div className='Body'> 
        <div className='Left-Container'>
            <img src='../docEntry2.png' alt='docu'/>
        </div>

        <div className='Right-Container'>
   
            <div className='Btn-Content'>
                <button id='Btn-Options' onClick={RegisterOn} className='Register-Btn'>Crear cuenta</button>
            </div>
            <div id='Login'  className='Login-Form-On'>
                <LoginForm/>
            </div>
            <div id='Register' className='Register-Form-Off'>
                <RegisterForm/>
            </div>
        </div>

    </div>

  )
}

export default EntryPage