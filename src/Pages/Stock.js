import {useLoaderData} from "react-router-dom"

const Stock = (props) => {
    const stock = useLoaderData();
    return(
        <div>
            <h1>STOCK PAGE SHOW</h1>
            <h1>
                {stock[0].price}
            </h1>
        </div>
    )
}

export default Stock