import Rating from "./Rating"

export default function ProductItem({product}) {
    // console.log('Product is ',product)
    return (
        <>
        <tr>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>{product.category}</td>
            <td><img src={product.image} alt={product.title} width={250} /> </td>
            {/* <td>{product.rating.rate}-{product.rating.count}</td> */}
            <td><Rating rate={product.rating.rate} count={product.rating.count}/></td>
        </tr>
        </>
    )
}  