import React from "react"
import "./Home.css"
import Product from "./Product"
import Header from "./Header"

function Home() {
    return (
        <div>
            <Header />
            <div className="home">
                <div className="home__container">
                    {/* <img src="file:///Users/liang/Desktop/2/john%20rodenn-castillo-rQqWOHZ96OM.jpg" alt="" className="home__image" /> */}

                    <div className="home__row">
                        <Product 
                            id="12341234"
                            title="This is the title of product 1 alsjdlakzxcklnk;andkan;dkna"
                            price={11.96}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/41gFg-0JLjS._AC_UL800_FMwebp_QL65_.jpg"
                        />
                        <Product 
                            id="23526432"
                            title="This is the title of product 2 ajd;kanc;kxzmck;ank"
                            price={11.96}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/41gFg-0JLjS._AC_UL800_FMwebp_QL65_.jpg"
                        />
                    </div>

                    <div className="home__row">
                        <Product 
                            id="123412584"
                            title="This is the title of product 1 shdaaldlkanldknsk.cnlkanckla"
                            price={11.96}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/41gFg-0JLjS._AC_UL800_FMwebp_QL65_.jpg"
                        />
                        <Product 
                            id="128591234"
                            title="This is the title of product 2"
                            price={11.96}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/41gFg-0JLjS._AC_UL800_FMwebp_QL65_.jpg"
                        />
                    </div>

                    <div className="home__row">
                        <Product 
                            id="12313234"
                            title="This is the title of product 1"
                            price={11.96}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/41gFg-0JLjS._AC_UL800_FMwebp_QL65_.jpg"
                        />
                        <Product 
                            id="12349034"
                            title="This is the title of product 2"
                            price={11.96}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/41gFg-0JLjS._AC_UL800_FMwebp_QL65_.jpg"
                        />
                        <Product 
                            id="12347234"
                            title="This is the title of product 3"
                            price={11.96}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/41gFg-0JLjS._AC_UL800_FMwebp_QL65_.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
