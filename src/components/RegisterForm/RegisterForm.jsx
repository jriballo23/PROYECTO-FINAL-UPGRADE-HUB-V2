import React from 'react'
import { useForm } from 'react-hook-form'
import { API } from '../../shared/services/API'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { AuthContext } from '../../shared/context/auth'
import "../RegisterForm/RegisterForm.scss";
const RegisterForm = () => {
  
    const {createNewUser, loading, error, message}  = useContext(AuthContext)
    
    let navigate = useNavigate()

    const createUser = async (data) => {
        console.log(data);
        try{
            const result = await createNewUser (data.email,data.password);
            if (result === undefined){
                return;
            } else {
                /* navigate('/login') */
            }
        }catch (error) {
            console.error('---> Create User Error !', error)
        }
    }

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        createUser(data);
        API.post("users/register", data).then((response) => {
            console.log(response)
           /* navigate("/login") */
        })
    }

    return (
        <form className='content-form-register' onSubmit={handleSubmit(onSubmit)}>
                    <div className='content-register'>
                     
                        <input placeholder='Nombre*' className='input-name' type="text" name="fullname" {...register('fullname', {required:true})}/>
                     
                        <input placeholder='Apodo' className='input-nick' type="text" name="nickname" {...register('nickname', {required:true})}/>
                       
                        <input placeholder='Fecha de Nacimiento*' className='input-birth' type="text" name="birthday" {...register('birthday', {required:true})}/>
                       
                        <input placeholder='Codigo postal*' className='input-cp' type="text" name="cp" {...register('cp', {required:true})}/>
                      
                        <input placeholder='E-mail*' className='input-email' type="email" name="email" {...register('email', {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})}/>
                      
                        <input placeholder='Password' className='input-password' type="password" name="password" {...register('password', {required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,12}$/})}/>
                    </div>
                    {error && <p>{message}</p>}
                    <input className='btn-register' type='submit' value={loading ? 'validando...':'Register'} />
   
        </form>);
}

export default RegisterForm
