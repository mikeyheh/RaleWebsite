import React from "react";

function LoginPage() {
    return (
        <div className="w-full h-screen overflow-hidden">
        <div className="relative bg-white p-10 w-full h-full">
            <div
                className="absolute font-bold font-archivo-black text-[13vw] tracking-tighter text-gray-200"
                style={{
                    top: "24%",
                    left: "49%",
                    transform: "translate(-50%, -50%) scaleX(1.4)",
                    whiteSpace: "nowrap",
                }}>
                LOGIN
            </div>

            <div className="bg-gray-200 z-10 flex flex-col p-5 mx-[10%] gap-4 rounded-2xl relative top-[25vh] h-auto">
                <div className="text-3xl font-bold mx-auto">LOGIN TO YOUR EXISTING ACCOUNT</div>

                <div>
                    <div className="text-xl font-semibold">username</div>
                    <input type="text" placeholder="username" name="username" className="p-3 w-full rounded-xl"></input>
                </div>
                <div>
                    <div className="text-xl font-semibold">password</div>
                    <input type="text" placeholder="password" name="password" className="p-3 w-full rounded-xl"></input>
                </div>
            </div>

            <div className="bg-gray-200 z-10 my-4 p-3 grid justify-items-center  gap-4 rounded-2xl w-1/3 mx-auto relative top-[25vh] h-auto">
                <div className="text-2xl">LOGIN</div>
            </div>

        

        </div>

        
    </div>
    );
}

export default LoginPage;
