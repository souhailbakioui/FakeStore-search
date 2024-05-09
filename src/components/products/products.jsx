import { useEffect } from "react"

export default function ProductList() {

    const fetchProductList = () => {
        const products=fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => console.log(data));

    }

    useEffect(() => {
        console.log('I wanna run it as amount')
        fetchProductList()
    }, [])

    return (
        <div className="container-fluix mx-auto w-75 my-5">
            <h1 className="text-xl-left">List Product</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Categorie</th>
                        <th scope="col">image</th>
                        <th scope="col">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tbody>
            </table>
        </div>
    )

}