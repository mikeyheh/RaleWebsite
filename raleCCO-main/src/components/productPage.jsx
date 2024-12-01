import React from "react";

function ProductPage() {
    return (
        <div className="w-full h-auto bg-gray-200 p-10">

            <div className=" bg-white z-1 rounded-2xl">
                <div className="p-5">
                    
                    <div className="flex gap-4">
                        <div className="bg-gray-200 w-[40vw] h-[40vw] rounded-xl">
                            <img src="rale1.png" alt="rale" className="p-4 drop-shadow-xl"  />
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="bg-gray-200 w-[11vw] h-[11vw] rounded-xl">
                                <img src="dnd1.png" alt="rale"className="p-3 drop-shadow-xl"/>
                            </div>

                            <div className="bg-gray-200 w-[11vw] h-[11vw] rounded-xl">
                                <img src="dnd2.png" alt="rale"className="p-3 drop-shadow-xl"/>
                            </div>
                        </div>

                        <div className="bg-gray-400 w-[0.2vw] h-auto"></div>

                        <div className="flex flex-col py-10">
                                <div className="text-2xl text-gray-500">T-Shirt</div>
                                <div className="text-6xl text-black">Do Not Disturb Tee</div>

                                <div className="text-yellow-300 p-1 gap-1 flex align-middle">
                                    <span class="material-symbols-outlined text-4xl">star_rate</span>
                                    <span class="material-symbols-outlined text-4xl">star_rate</span>
                                    <span class="material-symbols-outlined text-4xl">star_rate</span>
                                    <span class="material-symbols-outlined text-4xl">star_rate</span>
                                    <span class="material-symbols-outlined text-4xl">star_rate</span>

                                    <div className="text-gray-300 text-xl py-1">25 Ratings | 42 Sold</div>
                                </div>

                                <div className="text-5xl text-gray-400 italic">₱499.00</div>

                                <div className="bg-gray-200 w-auto h-1/4 rounded-xl m-2 my-4">
                                    <div className="relative p-3 w-full h-full flex flex-row">
                                        <img src="alec.png" alt="alec" className="w-[5.6vw] rounded-full my-auto m-2"/>
                                        <div className=" p-2">
                                            <div className="text-slate-400 italic text-2xl">"The shirt quality is so good, and the design is top notch!"</div>
                                            <div className="flex w-full justify-between">
                                                <div className="text-yellow-300 p-1 gap-1">
                                                    <span class="material-symbols-outlined text-3xl">star_rate</span>
                                                    <span class="material-symbols-outlined text-3xl">star_rate</span>
                                                    <span class="material-symbols-outlined text-3xl">star_rate</span>
                                                    <span class="material-symbols-outlined text-3xl">star_rate</span>
                                                    <span class="material-symbols-outlined text-3xl">star_rate</span>
                                                </div>
                                                <div className="float-right text-slate-400 italic text-xl">-Alec_69</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-5/6 h-1/6 p-3 flex flex-row justify-between mx-auto">
                                    <div className="bg-gray-400 text-3xl text-white p-2 w-[3.5vw] h-[3.54vw] grid justify-items-center rounded-lg">S</div>
                                    <div className="bg-gray-400 text-3xl text-white p-2 w-[3.5vw] h-[3.54vw] grid justify-items-center rounded-lg">M</div>
                                    <div className="bg-gray-400 text-3xl text-white p-2 w-[3.5vw] h-[3.54vw] grid justify-items-center rounded-lg">L</div>
                                    <div className="bg-gray-400 text-2xl text-white p-2 w-[3.5vw] h-[3.54vw] grid justify-items-center rounded-lg">XL</div>
                                    <div className="bg-gray-400 text-2xl text-white p-2 w-[3.5vw] h-[3.54vw] grid justify-items-center rounded-lg">2XL</div>
                                    <div className="bg-gray-400 text-2xl text-white p-2 w-[3.5vw] h-[3.54vw] grid justify-items-center rounded-lg">3XL</div>
                                </div>

                                <div className="w-full h-2/6 p-3 mx-auto">
                                    <div className="bg-gray-100 text-3xl p-3 rounded-2xl grid justify-items-center"> ADD TO CART </div>
                                </div>
                        </div>

                    </div>

                </div>
            </div>   

            <div className=" bg-white z-1 rounded-2xl my-4 p-4">
                <div className=" text-3xl float-left">Recommended For You</div>

                <div className="p-5 relative">   

                    <div className="relative p-3 rounded-xl border-2 border-gray-200 border-rounded-lg  overflow-auto flex flex-row gap-3">

                        <div className="relative w-[13vw] h-[16.5vw] items-center">
                            <img src="rale1.png" alt="rale" className="absolute mx-auto z-1 w-full p-3"/>
                            <div className="relative bg-gray-100 w-[13vw] h-[13vw]"></div>
                            <div>
                                <div className="text-sm text-zinc-400 leading-tight">T-Shirt</div>
                                <div className="text-lg text-grey-400 leading-tight">Do Not Disturb Tee</div>
                                <div className="text-sm italic text-zinc-400 leading-tight">₱499.00</div>
                            </div>
                        </div>

                        <div className="relative w-[13vw] h-[16.5vw] items-center">
                            <img src="rale4.png" alt="rale" className="absolute mx-auto z-1 w-full p-3"/>
                            <div className="relative bg-gray-100 w-[13vw] h-[13vw]"></div>
                            <div>
                                <div className="text-sm text-zinc-400 leading-tight">T-Shirt</div>
                                <div className="text-lg text-grey-400 leading-tight">Another Day Tee</div>
                                <div className="text-sm italic text-zinc-400 leading-tight">₱499.00</div>
                            </div>
                        </div>

                        <div className="relative w-[13vw] h-[16.5vw] items-center">
                            <img src="strapped.png" alt="rale" className="absolute mx-auto z-1 w-full p-3"/>
                            <div className="relative italic bg-gray-100 w-[13vw] h-[13vw]"></div>
                            <div>
                                <div className="text-sm text-zinc-400 leading-tight">T-Shirt</div>
                                <div className="text-lg text-grey-400 leading-tight">Strapped Tee</div>
                                <div className="text-sm italic text-zinc-400 leading-tight">₱499.00</div>
                            </div>
                        </div>

                        <div className="relative w-[13vw] h-[16.5vw] items-center">
                            <img src="superiority.png" alt="rale" className="absolute mx-auto z-1 w-full p-3"/>
                            <div className="relative bg-gray-100 w-[13vw] h-[13vw]"></div>
                            <div>
                                <div className="text-sm text-zinc-400 leading-tight">T-Shirt</div>
                                <div className="text-lg text-grey-400 leading-tight">Superiority Tee</div>
                                <div className="text-sm italic text-zinc-400 leading-tight">₱499.00</div>
                            </div>
                        </div>

                        <div className="relative w-[13vw] h-[16.5vw] items-center">
                            <img src="embrace1.png" alt="rale" className="absolute mx-auto z-1 w-full p-3"/>
                            <div className="relative bg-gray-100 w-[13vw] h-[13vw]"></div>
                            <div>
                                <div className="text-sm text-zinc-400 leading-tight">T-Shirt</div>
                                <div className="text-lg text-grey-400 leading-tight">Do Not Disturb Tee</div>
                                <div className="text-sm italic text-zinc-400 leading-tight">₱499.00</div>
                            </div>
                        </div>

                        <div className="relative w-[13vw] h-[16.5vw] items-center">
                            <img src="rale3.png" alt="rale" className="absolute mx-auto z-1 w-full p-3"/>
                            <div className="relative bg-gray-100 w-[13vw] h-[13vw]"></div>
                            <div>
                                <div className="text-sm text-zinc-400 leading-tight">T-Shirt</div>
                                <div className="text-lg text-grey-400 leading-tight">Another Day Tee</div>
                                <div className="text-sm italic text-zinc-400 leading-tight">₱499.00</div>
                            </div>
                        </div>

                        <div className="relative w-[13vw] h-[16.5vw] items-center">
                            <img src="rale7.png" alt="rale" className="absolute mx-auto z-1 w-full p-3"/>
                            <div className="relative bg-gray-100 w-[13vw] h-[13vw]"></div>
                            <div>
                                <div className="text-sm text-zinc-400 leading-tight">T-Shirt</div>
                                <div className="text-lg text-grey-400 leading-tight">Strapped Tee</div>
                                <div className="text-sm italic text-zinc-400 leading-tight">₱499.00</div>
                            </div>
                        </div>

                        <div className="relative w-[13vw] h-[16.5vw] items-center">
                            <img src="rale6.png" alt="rale" className="absolute mx-auto z-1 w-full p-3"/>
                            <div className="relative bg-gray-100 w-[13vw] h-[13vw]"></div>
                            <div>
                                <div className="text-sm text-zinc-400 leading-tight">T-Shirt</div>
                                <div className="text-lg text-grey-400 leading-tight">Superiority Tee</div>
                                <div className="text-sm italic text-zinc-400 leading-tight">₱499.00</div>
                            </div>
                        </div>

                    </div>
                    
                    
                    
                </div>

            </div>
        </div>
    );
}

export default ProductPage;
