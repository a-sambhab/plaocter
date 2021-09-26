import React from 'react';
import './pestshop.css'

const PestShopData = [
    {
        name:"Pesticide",
        desc:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop.",
        img:"https://res.cloudinary.com/dgy8ybeoy/image/upload/v1632575384/samples/plaocter/23a-copy1-removebg-preview_1_wrhfmu.png"
    },
    {
        name:"Nanopot Smart Plant Protector",
        desc:"Nanotechnology Based Pest and Disease Controller for All Plants | Vegetables, Fruits, Garden Flowers, Indoor & Outdoor Plants (100ml)",
        img:"https://res.cloudinary.com/dgy8ybeoy/image/upload/v1632655785/samples/plaocter/71C_0jU4_aL._SL1500__v6k2k6.png"
    },
    {
        name:"Go Garden Water",
        desc:"Soluble Neem Oil for Plant Pest Control - Organic Pesticide for Plants and Flowers use for Plants Insects pesticides 250 ML",
        img:"https://res.cloudinary.com/dgy8ybeoy/image/upload/v1632655893/samples/plaocter/71xmbsa1vxL._SL1500__w1ggeq.png"
    },
    {
        name:"BIOADVANCED 701290B",
        desc:"Insecticide Fungicide Miticide 3-in-1 Insect, Disease & Mite Control, 24 Oz",
        img:"https://res.cloudinary.com/dgy8ybeoy/image/upload/v1632656037/samples/plaocter/81F-UNdA9TL._AC_SL1500__jl6qsd.png"
    },
    {
        name:"AgroMagen",
        desc:"GrowSafe Bio-Pesticide, Organic Natural Miticide, Fungicide and Insecticide, Non-Toxic, Concentrate (33.8 Ounce)",
        img:"https://res.cloudinary.com/dgy8ybeoy/image/upload/v1632656314/samples/plaocter/71o1pO7toGL._AC_SL1500__d9ziqe.png"
    },
    {
        name:"Pesticide",
        desc:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop.",
        img:"https://res.cloudinary.com/dgy8ybeoy/image/upload/v1632575384/samples/plaocter/23a-copy1-removebg-preview_1_wrhfmu.png"
    }
]

const PestCard = (props) => {
    return(
        <>
            <div className="shopcard">
                <div className="shopcircle"></div>
                <div className="shopcontent">
                    <h2>{props.name}</h2>
                    <p> {props.desc}</p>
                    <a href="https://google.com">Buy Now</a>
                </div>
                <img alt="shopimg" src={props.img}/>
            </div>
        </>
    );
}

const PestShop = () => {
    return(
        <>
        <div id="shop" className="pestsection">
            <h1>
                The world of <br/> <span>Pesticides</span>
            </h1>
        <div className="pestshop">
            {PestShopData.map(function ncard(val){
                return(
                    <>
                        <PestCard
                            name={val.name}
                            desc={val.desc}
                            img={val.img}
                        />
                    </>
                );
            })}
        </div>
        </div>
        </>
    );
}

export default PestShop;