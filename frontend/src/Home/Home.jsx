import React from "react";
import logo1 from '../image/logo.png'
import golden from '../image/goldentemple.jpg'
import red from '../image/Red_fort.avif'
import Aguada from '../image/Aguada_fort.avif'
import book from '../image/booking.jpg'
import '../Home/Home.css'
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="main">
                <div className="p1">

                    <div className="p2">
                        <div className="logo"><img src={logo1} alt="logo1" height={80} width={100} /> <h1>BookMyTour</h1></div>
                        <div className="nav">

                            <Link to='/aboutus' className="a1"><h3 className="t1">About</h3></Link>
                            <Link to='/booking' className="a2"><h3 className="t1">Booking</h3></Link>
                            <Link to="/contact" className="a3"><h3 className="t1">Contact</h3></Link>
                            <Link to="/reviews" className="a4"><h3 className="t1">Reviews</h3></Link>

                            <h3 className="h3">Explore more by  </h3>
                            <Link to="/login" className="a5" ><h3>Login➡️</h3></Link>
                            <Link to="/signup" className="a5"><h3>Signup➡️</h3></Link>

                        </div>
                        <div className="ppp1">
                            <div className="ppp2">
                                <div className="ppp3">
                                    <h1>Welcome to <span className="welcome"> BookMyTour!</span></h1>
                                    <p className="wel"><h3 className="oho">Discover what makes BookMyTour and its offerings distinct from the rest of the pack and indispensable to its customers.</h3></p>
                                    <img src={book} alt="book" width={415} height={200} />
                                </div>
                                <h1></h1>
                            </div>
                        </div>
                    </div>
                    <h2>Explore the list of best tourist destinations in  include Taj Mahal, Red Fort, India Gate & many more on BookMyTour.</h2>
                    <hr />
                    <div className="pp1">

                        <div className="pp2">
                            <div className="pp3">
                                <h3>1️⃣<a href="#" className="links">Golden Temple,Amritsar</a></h3>
                                <img src={golden} alt="temple" width={260} height={200} />
                                <h4>Also known as Sri Harmandir Sahib, Golden Temple is considered to be the most important pilgrimage site amongst Sikhs and will leave you in awe with its jaw-dropping gold and marble edifice.</h4>
                                <button className="button1"><Link to="/Temple">Explore</Link></button>    
                                <button className="button2"><Link to="/info">Book</Link></button>
                            </div>
                            <div className="pp4">
                                <h3>2️⃣<a href="#" className="links">Red Fort,Delhi</a></h3>
                                <img src={red} alt="temple" width={260} height={200} />
                                <h4>Located in Chandni Chowk Old Delhi, this red sandstone structure was constructed the reign of Mughal emperor Shah Jahan. It is known for its intricate Mughal architecture and floral designs.</h4>
                                <button className="button1"><Link to="/Red">Explore</Link></button>    
                                <button className="button2"><Link to="/info">Book</Link></button>
                            </div>
                            <div className="pp5">
                                <h3>3️⃣<a href="#" className="links">Aguada Fort,Goa</a></h3>
                                <img src={Aguada} alt="temple" width={260} height={200} />
                                <h4>The fort overlooks the confluence of Mandovi River and the Arabian Sea. This beautiful red-brown fort houses the Central Jail and a 19th century lighthouse ,it was great wonder of India.</h4>
                                <button className="button1"><Link to="/Ag">Explore</Link></button>    
                                <button className="button2"><Link to="/info">Book</Link></button>
                            </div>
                            <h1></h1>

                        </div>
                    </div>
                    <hr />
                    <h4>   <center>Regency Travel and Tours LCC FZ 317, India.

                        © 2024 BookMyTour.com. All rights reserved. | Powered By SECE</center></h4>
                </div>

                <div className="ppp1">
                    <div className="ppp2">
                        <div className="ppp3">

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Home