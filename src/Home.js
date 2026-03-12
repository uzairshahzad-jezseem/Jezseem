import React from 'react'

const Home = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className='bg-white p-[40px_40px_60px_40px] w-[380px] rounded-lg shadow-sm border border-gray-300 text-left max-auto'>
                <p className="text-base font-normal ">Please enter your details</p>
                <h3 className="text-[40px] font-medium mb-5">Welcome Back</h3>

                <input type="email" placeholder="Email address" className="input w-[100%] p-4 mb-4 border border-gray-300 rounded-md text-sm" />
                <input type="password" placeholder="Password" className="input w-[100%] p-4 mb-4 border border-gray-300 rounded-md text-sm" />

                <div className="flex justify-between text-sm mb-5">
                    <label>
                        <input type="checkbox" /> Remember for 30 days
                    </label>
                    <a href="#" className="text-blue-500 hover:underline">Forgot password</a>
                </div>

                <button className="w-[100%] py-2 px-4 bg-blue-600 rounded-md text-white hover:opacity-85">Sign up</button>

                <div className="flex gap-1 justify-center text-sm mt-3">
                    <p>Don't have an account?</p>
                    <a href="#" className="text-blue-600 font-medium underline">Signup</a>
                </div>
            </div>
        </div>
    )
}

export default Home