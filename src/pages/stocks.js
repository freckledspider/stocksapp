import { Link } from "react-router-dom";
import stocksData from "../stocksdata";

const Stocks = (props) => {

    return (
        <div className="stocks">
            <h1>Most Active Stocks</h1>
            {stocksData.map((stock) => {
                const { name, symbol } = stock;
                return (
                    <Link class="activestocks" to={`/stocks/${symbol}`}>
                        <h2>{name}</h2>
                    </Link>
                );
            })}
        </div>
    );
};

export default Stocks;