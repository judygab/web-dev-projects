import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/elements/Button";
import { app } from "../../firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    let navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

   const onSubmit = async (data) => {
    setLoading(true);

    try {
        let authentication;
        try {
            authentication = getAuth();
        } catch(e) {
            toast.error('Firebase Auth not configured. Please add .env file.', { theme: 'dark' });
            throw e;
        }

        // Step 1: Create user in Firebase
        const response = await createUserWithEmailAndPassword(
            authentication,
            data.email,
            data.password
        );

        const uid = response.user.uid;

        sessionStorage.setItem('User Id', uid);
        sessionStorage.setItem('Auth token', response._tokenResponse.refreshToken);
        window.dispatchEvent(new Event("storage"));

        // Step 2: Send to backend
        const res = await fetch('http://localhost:8080/api/create-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                _id: uid
            })
        });

        if (res.status === 200) {
            toast.success('Account created successfully!🎉', {
                theme: 'dark'
            });
            navigate('/');
        } else {
            console.log("Backend error");
        }

    } catch (error) {
        console.log("Firebase Error:", error);

        if (error.code === 'auth/email-already-in-use') {
            toast.error('Email Already In Use');
        } else if (error.message) {
            toast.error(error.message, { theme: 'dark' });
        } else {
            toast.error('Registration failed. Please try again.', { theme: 'dark' });
        }
    } finally {
        setLoading(false);
    }
};
    return (
        <div className="min-h-screen flex items-center justify-center p-6 relative">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tomato/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="rounded-3xl max-w-md w-full flex flex-col items-center justify-center relative p-[1px] bg-gradient-to-tr from-marigold/50 to-tomato/50 shadow-2xl">
                <div className="p-10 rounded-3xl z-10 w-full h-full bg-black/60 backdrop-blur-xl border border-white/10">
                    <h5 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Register</h5>
                <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label 
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-400 uppercase tracking-widest mb-2">Name</label>
                        <input 
                        {...register('name')}
                        id="name"
                        type="text"
                        className="block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-marigold transition duration-300"
                        placeholder="John Doe"
                        />
                    </div>
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
                    <Button size="large" className="w-full mt-4">{loading ? "loading" : 'Register'}</Button>
                </form>
                <ToastContainer />
                </div>
            </div>
        </div>
    )
}

export default Register;