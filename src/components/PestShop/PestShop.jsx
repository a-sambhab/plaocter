import React from 'react';
import './pestshop.css'

const PestShopData = [
    {
        name:"Pesticide",
        desc:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop.",
        img:"https://res.cloudinary.com/dgy8ybeoy/image/upload/v1632575384/samples/plaocter/23a-copy1-removebg-preview_1_wrhfmu.png"
    },
    {
        name:"Pesticide",
        desc:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop.",
        img:"https://res.cloudinary.com/dgy8ybeoy/image/upload/v1632575384/samples/plaocter/23a-copy1-removebg-preview_1_wrhfmu.png"
    },
    {
        name:"Pesticide",
        desc:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop.",
        img:"https://res.cloudinary.com/dgy8ybeoy/image/upload/v1632575384/samples/plaocter/23a-copy1-removebg-preview_1_wrhfmu.png"
    },
    {
        name:"Pesticide",
        desc:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop.",
        img:"https://res.cloudinary.com/dgy8ybeoy/image/upload/v1632575384/samples/plaocter/23a-copy1-removebg-preview_1_wrhfmu.png"
    },
    {
        name:"Pesticide",
        desc:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop.",
        img:"https://res.cloudinary.com/dgy8ybeoy/image/upload/v1632575384/samples/plaocter/23a-copy1-removebg-preview_1_wrhfmu.png"
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
                    <a href="#">Buy Now</a>
                </div>
                <img src={props.img}/>
            </div>
        </>
    );
}

const PestShop = () => {
    return(
        <>
        <div className="pestsection">
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