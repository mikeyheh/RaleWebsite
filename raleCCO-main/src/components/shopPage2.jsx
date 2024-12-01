import React, { useState } from "react";

function ShopPage2() {
    // State for current page and selected filter
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [showFilters, setShowFilters] = useState(false);

    // Products per page constant
    const PRODUCTS_PER_PAGE = 16;

    // Filter options
    const filters = [
        { id: 'all', label: 'See All' },
        { id: 'basics', label: 'Basics' },
        { id: 'graphic', label: 'Graphic Tees' },
        { id: 'oversized', label: 'Oversized' }
    ];

    // Sample product data - expanded to test pagination
    const allProducts = [
        { id: 1, name: 'Do Not Disturb Tee', type: 'graphic', price: '₱499.00', image: '/rale1.png' },
        { id: 2, name: 'Another Day Tee', type: 'basics', price: '₱499.00', image: '/rale4.png' },
        { id: 3, name: 'Strapped Tee', type: 'graphic', price: '₱499.00', image: '/strapped.png' },
        { id: 4, name: 'Superiority Tee', type: 'oversized', price: '₱499.00', image: '/superiority.png' },
        { id: 5, name: 'Classic Tee', type: 'basics', price: '₱499.00', image: '/embrace1.png' },
        { id: 6, name: 'Urban Tee', type: 'graphic', price: '₱499.00', image: '/rale3.png' },
        { id: 7, name: 'Street Tee', type: 'oversized', price: '₱499.00', image: '/rale7.png' },
        { id: 8, name: 'Modern Tee', type: 'basics', price: '₱499.00', image: '/rale6.png' },
        { id: 9, name: 'Vintage Tee', type: 'graphic', price: '₱499.00', image: '/rale1.png' },
        { id: 10, name: 'Retro Tee', type: 'basics', price: '₱499.00', image: '/rale4.png' },
        { id: 11, name: 'Metro Tee', type: 'graphic', price: '₱499.00', image: '/strapped.png' },
        { id: 12, name: 'City Tee', type: 'oversized', price: '₱499.00', image: '/superiority.png' },
        { id: 13, name: 'Downtown Tee', type: 'basics', price: '₱499.00', image: '/embrace1.png' },
        { id: 14, name: 'Uptown Tee', type: 'graphic', price: '₱499.00', image: '/rale3.png' },
        { id: 15, name: 'Midtown Tee', type: 'oversized', price: '₱499.00', image: '/rale7.png' },
        { id: 16, name: 'Borough Tee', type: 'basics', price: '₱499.00', image: '/rale6.png' },
        { id: 17, name: 'District Tee', type: 'graphic', price: '₱499.00', image: '/rale1.png' },
        { id: 18, name: 'Zone Tee', type: 'basics', price: '₱499.00', image: '/rale4.png' },
        // Add more products as needed
    ];

    // Filter products based on selected filter
    const filteredProducts = selectedFilter === 'all' 
        ? allProducts 
        : allProducts.filter(product => product.type === selectedFilter);

    // Calculate total pages based on filtered products
    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

    // Get current page products
    const getCurrentPageProducts = () => {
        const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
        const endIndex = startIndex + PRODUCTS_PER_PAGE;
        return filteredProducts.slice(startIndex, endIndex);
    };

    // Handle page navigation
    const handlePrevPage = () => {
        setCurrentPage(prev => Math.max(1, prev - 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prev => Math.min(totalPages, prev + 1));
    };

    // Reset to first page when filter changes
    React.useEffect(() => {
        setCurrentPage(1);
    }, [selectedFilter]);

    // Render product card
    const ProductCard = ({ product }) => (
        <div className="relative w-[13vw] h-[16.5vw] items-center">
            <img src={product.image} alt={product.name} className="absolute mx-auto z-1 w-full p-3"/>
            <div className="relative bg-gray-100 w-[13vw] h-[13vw]"></div>
            <div>
                <div className="text-sm text-zinc-400 leading-tight">T-Shirt</div>
                <div className="text-lg text-grey-400 leading-tight">{product.name}</div>
                <div className="text-sm italic text-zinc-400 leading-tight">{product.price}</div>
            </div>
        </div>
    );

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