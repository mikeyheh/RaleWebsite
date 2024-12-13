import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useShopStore from './shopStore';
import Header from "./Header"; // Adjust path as needed

function ProductPage() {
    const { productId } = useParams();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Assuming your store has a method to get recommended products
    const { getRecommendedProducts } = useShopStore();
    const [recommendedProducts, setRecommendedProducts] = useState([]);

    useEffect(() => {
        console.log("Product ID:", productId);
        const fetchProductDetails = async () => {
            try {
                setLoading(true);
                // Axios API call for product details
                const response = await axios.get(`http://localhost:8590/product/${productId}`);
                setSelectedProduct(response.data);

                // Fetch recommended products
                const recommended = await getRecommendedProducts(productId);
                setRecommendedProducts(recommended);
            }  
            finally {
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [productId]);

    if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
    if (error) return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
    if (!selectedProduct) return <div className="flex justify-center items-center h-screen">Product not found</div>;

    return (
        <div>
        <Header />
        <div className="w-full h-auto bg-gray-200 p-10">
            
            {/* Main Product Display */}
            <div className="bg-white rounded-2xl">
                <div className="p-5">
                    <div className="flex gap-4">
                        {/* Main Image */}
                        <div className="bg-gray-200 w-[40vw] h-[40vw] rounded-xl">
                            <img 
                                src={selectedProduct.imagePath} 
                                alt={selectedProduct.name} 
                                className="p-4 drop-shadow-xl"
                            />
                        </div>

                        {/* Thumbnails */}
                        <div className="flex flex-col gap-4">
                            {selectedProduct.thumbnails?.map((thumb, index) => (
                                <div key={index} className="bg-gray-200 w-[11vw] h-[11vw] rounded-xl">
                                    <img 
                                        src={thumb} 
                                        alt={`${selectedProduct.name} thumbnail`} 
                                        className="p-3 drop-shadow-xl"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="bg-gray-400 w-[0.2vw] h-auto" />

                        {/* Product Details */}
                        <div className="flex flex-col py-10">
                            <div className="text-2xl text-gray-500">{selectedProduct.category}</div>
                            <div className="text-6xl text-black">{selectedProduct.name}</div>

                            <div className="text-yellow-300 p-1 gap-1 flex align-middle">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="material-symbols-outlined text-4xl">star_rate</span>
                                ))}
                                <div className="text-gray-300 text-xl py-1">
                                    {selectedProduct.ratings} Ratings | {selectedProduct.sold} Sold
                                </div>
                            </div>

                            <div className="text-5xl text-gray-400 italic">₱{selectedProduct.price}.00</div>

                            {/* Sizes */}
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
                                {["S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
                                    <div 
                                        key={size}
                                        className="bg-gray-400 text-3xl text-white p-2 w-[3.5vw] h-[3.54vw] grid justify-items-center rounded-lg cursor-pointer hover:bg-gray-500"
                                    >
                                        {size}
                                    </div>
                                ))}
                            </div>
                            

                            {/* Add to Cart Button */}
                            <div className="w-full h-2/6 p-3 mx-auto">
                                <button className="bg-gray-100 text-3xl p-3 rounded-2xl w-full hover:bg-gray-200 transition-colors">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recommended Products */}
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
        </div>
    );
}

export default ProductPage;
