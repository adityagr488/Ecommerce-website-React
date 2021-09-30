import React from 'react'
import Products from './Products'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Header = () =>{

    return (
        <Router>
            <nav className="navbar">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item nav-link"><b><span className="fa fa-opencart"></span> E-KART</b></li>
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="productsmenu nav-item">
                            <Link to = '/' className="productsbtn nav-link">Products <span className="fas fa-chevron-down"></span></Link>
                            <div className="productslist">
                                <div>
                                    <Link to="/smartphones" className="nav-link">Smartphones</Link>
                                    <Link to="/tabs" className="nav-link">Tabs</Link>
                                    <Link to="/laptops" className="nav-link">Laptops</Link>
                                    <Link to="/desktops" className="nav-link">Desktops</Link>
                                </div>
                                <div style={{borderLeft:"1px solid gray"}}>
                                    <Link to="/headphones" className="nav-link">Headphones</Link>
                                    <Link to="/microphones" className="nav-link">Microphone</Link>
                                    <Link to="/cameras" className="nav-link">Cameras</Link>
                                    <Link to="/speakers" className="nav-link">Speakers</Link>
                                </div>
                            </div>
                        </li>
                        <div className="suggestions" >
                            <input className="searchbox" type="text" name="search" id="search" placeholder="Search products..."/>
                        </div>
                        <button id="searchbtn"><span className="fas fa-search"></span>Search</button>
                        <Link className="nav-link" to="#" style={{marginLeft: "20px"}}><span className="fas fa-shopping-cart"></span></Link>
                    </ul>
                </div>
            </nav>

        <Switch>
            <Route exact path = "/">
                <Products category="all" />
            </Route>
            <Route exact path="/smartphones">
                <Products category="smartphones"/>
            </Route>
            <Route exact path="/tabs">
                <Products category="tabs"/>
            </Route>
            <Route exact path="/laptops">
                <Products category="laptops"/>
            </Route>
            <Route exact path="/desktops">
                <Products category="desktops"/>
            </Route>
            <Route exact path="/headphones">
                <Products category="headphones"/>
            </Route>
            <Route exact path="/microphones">
                <Products category="microphones"/>
            </Route>
            <Route exact path="/cameras">
                <Products category="cameras"/>
            </Route>
            <Route exact path="/speakers">
                <Products category="speakers"/>
            </Route>
        </Switch>

        </Router>
    )
}

export default Header;