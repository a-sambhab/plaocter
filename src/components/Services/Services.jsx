import React from 'react'
import './services.css'

const ServiceData = [
    {
        name:"Best Services",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1632565004/plaocter/icon1_afhfp2.svg"
    },
    {
        name:"Best price",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1632565009/plaocter/icon2_i2hqua.svg"
    },
    {
        name:"lifetime support",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1632565001/plaocter/icon3_hr277n.svg"
    },
    {
        name:"All India Delivery",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1632565010/plaocter/icon4_hvlaji.svg"
    },
    {
        name:"lifetime support",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1632565005/plaocter/icon5_nfefho.svg"
    },
    {
        name:"24*7 assistance",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1632565006/plaocter/icon6_xqtlku.svg"
    }
]

const Servcard = (props) => {
    return(
        <div className="servicecard">
                    <img alt="servimg" src={props.img}/>
                    <p>{props.name}</p>
        </div>
    )
}

export default function Services() {
    return (
        <div id="service" className="servicesec">
            <h1>
                why choose <br/> <span>plaocter</span>
            </h1>
            <div className="service">
                {ServiceData.map(function ncard(val){
                    return(
                        <Servcard
                            name={val.name}
                            img={val.img}
                        />
                    )
                })}
            </div>
        </div>
    )
}
