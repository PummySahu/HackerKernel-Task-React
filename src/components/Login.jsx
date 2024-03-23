import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Nav from './Nav'

const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('token')) {
          navigate('/');
        }
      }, [navigate]);




    const formhandler = async(e)=>{
        e.preventDefault()

        try{
            const res = await fetch('https://reqres.in/api/login', {
                method: "POST",
                headers: {
                    'content-type' : 'application/json'
                },
                body:JSON.stringify({ email, password })
            })

            console.log(res)

            if(res.ok){
                const data = await res.json();
                console.log('Login successful:', data);
                localStorage.setItem('token', data.token); 
                navigate('/')
            }else{
                console.error('Login failed:', res.statusText);
                toast.error('Invalid email or password');
            }
            
        }catch(err){
            console.error('Error:', err.message);
            toast.error('Something went wrong');
        }

    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <Nav/>
                <form onSubmit={formhandler} className="p-6 w-full lg:h-96 md:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Login</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full mb-2 p-2 rounded border focus:outline-none focus:border-blue-500 border-gray-300 "
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded border focus:border-blue-500  focus:outline-none border-gray-300 mb-4 p-2"
                    />
                    <button type="submit" className="text-white p-2 rounded w-full bg-blue-500 ">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login