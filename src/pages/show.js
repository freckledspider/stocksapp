import { useLoaderData } from "react-router-dom";

const Show = props => {
    const stock = useLoaderData();
    return (
        <div>
            <h1>
                {stock[0].symbol}
            </h1>
        </div>
    );

}

export default Show;