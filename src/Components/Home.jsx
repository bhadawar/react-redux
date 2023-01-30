import React from 'react';
import { IMAGES } from "../Images";

function Home() {
    return (
        <section>
            <div className="add-cart">
                <img src={IMAGES.colCart} className="img-fluid" style={{maxWidth:50}}/>
            </div>
            <h1>Home Component</h1>
            <div className="cartWrapper">

                <div className="img-wrapper item">
                    <img src={IMAGES.mobile} />
                </div>

                <div className="text-wrapper item">
                    <span>I-phone</span>
                    <span>Price: 350$.000</span>
                </div>

                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
 


            </div>
        </section>
    )
}

export default Home;