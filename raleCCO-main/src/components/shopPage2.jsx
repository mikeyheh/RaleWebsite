import React, { useState, useEffect } from "react";
import axios from "axios";

function ShopPage2() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [showFilters, setShowFilters] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const PRODUCTS_PER_PAGE = 16;

    const filters = [
        { id: 'all', label: 'See All' },
        { id: 'basics', label: 'Basics' },
        { id: 'graphic', label: 'Graphic Tees' },
        { id: 'oversized', label: 'Oversized' }
    ];

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        filterProducts();
        setCurrentPage(1);
    }, [selectedFilter, allProducts]);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:8590/product');
            setAllProducts(response.data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch products');
            console.error('Error fetching products:', err);
        } finally {
            setLoading(false);
        }
    };

    const filterProducts = () => {
        if (selectedFilter === 'all') {
            setFilteredProducts(allProducts);
        } else {
            const categoryMap = {
                'basics': 'BASICS',
                'graphic': 'GRAPHICTEES',
                'oversized': 'OVERSIZED'
            };
            const filtered = allProducts.filter(product => 
                product.category === categoryMap[selectedFilter]
            );
            setFilteredProducts(filtered);
        }
    };

    const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)); //If totalPages dont change after full change this
    

    const getCurrentPageProducts = () => {
        const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
        const endIndex = startIndex + PRODUCTS_PER_PAGE;
        return filteredProducts.slice(startIndex, endIndex);
    };

    const handlePrevPage = () => {
        setCurrentPage(prev => Math.max(1, prev - 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prev => Math.min(totalPages, prev + 1));
    };

    const ProductCard = ({ product }) => (
        <div className="relative w-[13vw] h-[16.5vw] items-center">
            <img src={product.image} alt={product.name} className="absolute mx-auto z-1 w-full p-3"/>
            <div className="relative bg-gray-100 w-[13vw] h-[13vw]"></div>
            <div>
                <div className="text-sm text-zinc-400 leading-tight">T-Shirt</div>
                <div className="text-lg text-grey-400 leading-tight">{product.name}</div>
                <div className="text-sm italic text-zinc-400 leading-tight">₱{product.price}</div>
            </div>
        </div>
    );

    if (loading) return <div className="text-center p-10">Loading...</div>;
    if (error) return <div className="text-center p-10 text-red-500">{error}</div>;

    return (
        <div className="relative w-full mx-auto p-4">
            <div className="w-2/3 flex justify-between mx-auto">
                <div className="text-8xl p-3 px-0">T-SHIRTS</div>
                <div className="relative text-2xl py-5 p-2 flex justify-center items-center">
                    <button 
                        onClick={() => setShowFilters(!showFilters)}
                        className="border-2 rounded-full p-2 px-4 border-gray-600 flex items-center gap-4 hover:bg-gray-100"
                    >
                        <span className="material-symbols-outlined text-2xl">tune</span>
                        <span>Filters</span>
                    </button>
                </div>
            </div>

            <div className="w-2/3 mx-auto p-2 flex gap-4">
                {filters.map(filter => (
                    <button
                        key={filter.id}
                        onClick={() => setSelectedFilter(filter.id)}
                        className={`text-xl border-2 p-2 rounded-lg transition-colors ${
                            selectedFilter === filter.id 
                                ? 'border-black bg-black text-white' 
                                : 'border-gray-600 hover:bg-gray-100'
                        }`}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            <div className="w-2/3 mx-auto p-2 py-5 flex gap-3 justify-center">
                <button 
                    onClick={handlePrevPage}
                    className={`text-2xl border-1 px-1 border-gray-600 rounded-md ${
                        currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                    }`}
                    disabled={currentPage === 1}
                >
                    &lt;&lt;
                </button>
                <div className="text-2xl">PAGE {currentPage} OF {totalPages}</div>
                <button 
                    onClick={handleNextPage}
                    className={`text-2xl border-1 px-1 border-gray-600 rounded-md ${
                        currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                    }`}
                    disabled={currentPage === totalPages}
                >
                    &gt;&gt;
                </button>
            </div>

            <div className="relative w-2/3 mx-auto p-2 py-4 grid grid-cols-4 gap-10 justify-items-center">
                {getCurrentPageProducts().map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="w-2/3 mx-auto p-2 py-5 flex gap-3 justify-center">
                <button 
                    onClick={handlePrevPage}
                    className={`text-2xl border-1 px-1 border-gray-600 rounded-md ${
                        currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                    }`}
                    disabled={currentPage === 1}
                >
                    &lt;&lt;
                </button>
                <div className="text-2xl">PAGE {currentPage} OF {totalPages}</div>
                <button 
                    onClick={handleNextPage}
                    className={`text-2xl border-1 px-1 border-gray-600 rounded-md ${
                        currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                    }`}
                    disabled={currentPage === totalPages}
                >
                    &gt;&gt;
                </button>
            </div>

            <div className="w-2/3 mx-auto p-2 flex gap-3 justify-center">
                <img src="/page2banner.png" alt="banner" className="w-[65vw]"/>
            </div>
        </div>
    );
}

export default ShopPage2;