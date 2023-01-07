import {Link} from 'react-router-dom'

const Dashboard = (props) => {
    const stocks = [
        {name: "Tandem" , symbol:"TNDM"},
        {name: 'Apple', symbol:"APPL"}
    ]
    return (
    <div className = 'dashboard'>
        {stocks.map((stock, index) => {
            const {name, symbol} = stock;
            return(
                <Link to={`/price/${symbol}`} key={index}>
                    <h2>{name}</h2>
                </Link>
            )
        })}
    </div>)
}

export default Dashboard