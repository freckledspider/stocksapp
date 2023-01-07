import { Link } from 'react-router-dom';

const Nav = props => {
    return (
        <div className='nav'>
            <Link class="istockslink" to='/'>
                <div>iStocks</div>
            </Link>
            <Link to='/stocks'>
                <div>Stocks</div>
            </Link>
            <Link to='/about'>
                <div>About</div>
            </Link>
        </div>
    );
}

export default Nav;