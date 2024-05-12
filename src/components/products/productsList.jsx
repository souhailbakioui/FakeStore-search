import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

export default function ProductList() {
    const fetchProductList = () => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProductList(data));
    };

    const fetchCategoryList = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(data => setCategoryList(data));
    };

    const [productList, setProductList] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [categoryList, setCategoryList] = useState([]);
    const [categorySearch, setCategorySearch] = useState('');

    const displayProducts = () => {
        const tempProductList = productList.filter(product => {
            return (product.id.toString().startsWith(searchInput) ||
                    product.title.toLowerCase().includes(searchInput?.toLowerCase()) ||
                    product.description.toLowerCase().includes(searchInput?.toLowerCase())) &&
                    (categorySearch === '' || product.category === categorySearch);
        
        });

        if (productList.length > 0) {
            return tempProductList.map((product, key) => {
                return <ProductItem product={product} key={key} />;
            });
        } else {
            return <tr><td>No Items found</td></tr>;
        }
    };

    const handleSearch = (e) => {
        setSearchInput(e.target.value);
    };

    const showCategoriesHandler = (category) => {
        setCategorySearch(category);
    };

    const displayAllCategories = () => {
        return categoryList.map((category, key) => {
            return (
                <button 
                    type="button" 
                    className={`btn btn-sm ${category === categorySearch ? 'btn-secondary' : 'btn-outline-secondary'} m-2`} 
                    key={key} 
                    onClick={() => showCategoriesHandler(category)}
                >
                    {category}
                </button>
            );
        });
    };

    useEffect(() => {
        fetchProductList();
        fetchCategoryList();
    }, []);

    return (
        <div className="container-fluid mx-auto w-75 my-5">
            <h3>Search</h3>
            <input 
                type="text" 
                id="search" 
                className="form-control mb-3" 
                placeholder="Search by ID, Title, or Description"
                onChange={handleSearch}
            />
            <div className="btn-group" role="group" aria-label="Categories">
                {displayAllCategories()}
            </div>
            <h1 className="text-xl-left mt-4">List Product</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Image</th>
                        <th scope="col">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {displayProducts()}
                </tbody>
            </table>
        </div>
    );
}
