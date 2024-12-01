import React from "react";

function RegisterPage() {
    return (
        <div className="w-full h-screen overflow-hidden fixed">
        <div className="relative bg-white p-10 w-full h-full">
            <div
                className="absolute font-bold font-archivo-black text-[12vw] tracking-tighter text-gray-200"
                style={{
                    top: "15%",
                    left: "49%",
                    transform: "translate(-50%, -50%) scaleX(1.4)",
                    whiteSpace: "nowrap",
                }}>
                REGISTER
            </div>

            <div className="bg-gray-200 z-10 flex flex-col p-5 mx-[10%] gap-4 rounded-2xl relative top-[16vh] h-auto">
                <div className="text-3xl font-bold mx-auto">CREATE A NEW ACCOUNT</div>

                        <div>
                            <div className="text-lg font-semibold">first name</div>
                            <input type="text" placeholder="First Name" name="fname" className="p-2 w-full rounded-xl"></input>
                        </div>
                        <div>
                            <div className="text-lg font-semibold">last name</div>
                            <input type="text" placeholder="Last Name" name="lname" className="p-2 w-full rounded-xl"></input>
                        </div>
                    
                        <div className="flex flex-row w-full gap-7">
                            <div className=" w-1/2">
                                <div className="text-lg font-semibold">username</div>
                                <input type="text" placeholder="Username" name="username" className="p-2 w-full rounded-xl"></input>
                            </div>
                            <div className="w-1/2 ">
                                <div className="text-lg font-semibold">password</div>
                                <input type="text" placeholder="Password" name="password" className="p-2 w-full rounded-xl"></input>
                            </div>
                        </div>
                        <div className="flex flex-row w-full gap-7">
                            <div className=" w-1/2">
                                <div className="text-lg font-semibold">email address</div>
                                <input type="text" placeholder="Email Address" name="email" className="p-2 w-full rounded-xl"></input>
                            </div>
                            <div className="w-1/2 ">
                                <div className="text-lg font-semibold">phone number</div>
                                <input type="text" placeholder="Phone Number" name="pnum" className="p-2 w-full rounded-xl"></input>
                            </div>
                        </div>


            </div>

            <div className="bg-gray-200 z-10 my-4 p-3 grid justify-items-center  gap-4 rounded-2xl w-1/3 mx-auto relative top-[16vh] h-auto">
                <div className="text-2xl">REGISTER</div>
            </div>

        

        </div>

        
    </div>
    );
}

export default RegisterPage;
