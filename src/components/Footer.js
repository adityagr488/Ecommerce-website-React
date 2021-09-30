import React from 'react'
import { 
    BrowserRouter as Router, 
    Link 
} from 'react-router-dom';

const Footer = () =>{
    return (
        <>
            <Router>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2 className="text-center">Links</h2>
                                <hr/>
                                <div className="productsmenu">
                                    <span className="productsbtn">Products <span className="fas fa-chevron-down"></span></span>
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
                                </div>
                            </div>
                            <div className="col">
                                <h2>Address</h2>
                                <hr/>
                                <address>
                                    <span className="fas fa-map-marker-alt"></span> Belagondapalli, <br/> 
                                    &emsp;Hosur - 635 114 <br/>
                                    <span className="fas fa-phone-alt"></span> 04344 - 123456, 654321 <br/>
                                    <span className="fas fa-envelope"></span> help@ekart.com
                                </address>
                            </div>
                            <div className="col">
                                <h2>Social Media</h2>
                                <hr/>
                                <Link to="#" className="nav-link social-media-icons"><span className="fab fa-facebook-square fa-lg"></span></Link>
                                <Link to="#" className="nav-link social-media-icons"><span className="fab fa-instagram fa-lg"></span></Link>
                                <Link to="#" className="nav-link social-media-icons"><span className="fab fa-twitter fa-lg"></span></Link>
                                <Link to="#" className="nav-link social-media-icons"><span className="fab fa-linkedin fa-lg"></span></Link>
                                <Link to="#" className="nav-link social-media-icons"><span className="fab fa-youtube fa-lg"></span></Link>
                            </div>
                        </div>
                        <hr/>
                        <div className="row-content text-center" >
                            <div className="col">Copyright © E-KART</div>
                        </div>
                    </div>
                </footer>
            </Router>
        </>
    )
}

export default Footer;