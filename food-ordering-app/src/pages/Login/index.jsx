import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/elements/Button";
import { app } from "../../firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    let navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        setLoading(true);
        const authentication = getAuth();
        let uid = '';
        signInWithEmailAndPassword(authentication, data.email, data.password)
            .then((response) => {
                uid = response.user.uid;
                sessionStorage.setItem('User Id', uid);
                sessionStorage.setItem('Auth token', response._tokenResponse.refreshToken)
                window.dispatchEvent(new Event("storage"))
                setLoading(false);
                toast.success('Successful Login!🎉', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark'
                    });
                navigate('/');
            })
            .catch((error) => {
                if (error.code === 'auth/wrong-password') {
                    toast.error('Wrong Password')
                }
                if (error.code === 'auth/user-not-found') {
                    toast.error('Email not found, please registe')
                }
                setLoading(false);
            })
    
    }
    return (
        <div className="min-h-screen flex items-center justify-center p-6 relative">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tomato/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="rounded-3xl max-w-md w-full flex flex-col items-center justify-center relative p-[1px] bg-gradient-to-tr from-marigold/50 to-tomato/50 shadow-2xl">
                <div className="p-10 rounded-3xl z-10 w-full h-full bg-black/60 backdrop-blur-xl border border-white/10">
                    <h5 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Login</h5>
                <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label 
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-400 uppercase tracking-widest mb-2">Email</label>
                        <input 
                        {...register('email')}
                        id="email"
                        type="email"
                        className="block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-marigold transition duration-300"
                        placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label 
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-400 uppercase tracking-widest mb-2">Password</label>
                        <input 
                        {...register('password')}
                        id="password"
                        type="password"
                        className="block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-marigold transition duration-300"
                        placeholder="••••••••"
                        />
                    </div>
                    <Button size="large" className="w-full mt-4">{loading ? "loading" : 'Login'}</Button>
                </form>
                <ToastContainer />
                </div>
            </div>
        </div>
    )
}

export default Login;