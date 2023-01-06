import { Link } from "react-router-dom";
import stocksData from "../stocksdata";

const Stocks = (props) => {

    return (
        <div className="stocks">
            {stocksData.map((stock) => {
                const { name, symbol } = stock;
                return (
                    <Link to={`/price/${symbol}`}>
                        <h2>{name}</h2>
                    </Link>
                );
            })}
        </div>
    );
};

export default Stocks;