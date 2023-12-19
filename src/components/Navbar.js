import './Navbar.css';

function Navbar() {
    return(
        <div className='navbar'>
            <h3>G-TECH</h3>
            <div className='navbar-nav'>
               <h1>WELCOME TO MY WEBSITE</h1>
            </div>
            <div className='navbar-form'>
                <label for='search'></label>
                <input className='searchInput' type='text' name='search' placeholder='search'></input>
                <button className='searchBtn'>Search</button>
            </div>
        </div>
    )
}

export default Navbar;