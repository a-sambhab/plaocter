import React from 'react'
import './blog.css';

const BlogData = [
    {
        name:"Blog",
        desc:"CGAxis 3D model of Small Plant in White Pot 1. Compatible with 3ds max 2010 or higher T. CGAxis 3D model of Small Plant in White Pot 1. Compatible with 3ds max 2010 or higher T",
        link:"#"
    },
    {
        name:"Blog",
        desc:"CGAxis 3D model of Small Plant in White Pot 1. Compatible with 3ds max 2010 or higher T. CGAxis 3D model of Small Plant in White Pot 1. Compatible with 3ds max 2010 or higher T",
        link:"#"
    },
    {
        name:"Blog",
        desc:"CGAxis 3D model of Small Plant in White Pot 1. Compatible with 3ds max 2010 or higher T. CGAxis 3D model of Small Plant in White Pot 1. Compatible with 3ds max 2010 or higher T",
        link:"#"
    },
    {
        name:"Blog",
        desc:"CGAxis 3D model of Small Plant in White Pot 1. Compatible with 3ds max 2010 or higher T. CGAxis 3D model of Small Plant in White Pot 1. Compatible with 3ds max 2010 or higher T",
        link:"#"
    },
]

const BlogCard = (props) => {
    return(
        <div className="blogcard">
        <div className="blogcontent">
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <a href={props.link}>Read More</a>
        </div>
        <img src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1632593894/samples/plaocter/New_Project_12_u3o9c2.png"/>
    </div>
    );
}

export default function Blog() {
    return (
        <div className="blogs">
            <h1>care about your  <br/> <span>plants</span></h1>
            <div className="blogsec">
                {BlogData.map(function ncard(val){
                    return(
                        <BlogCard
                            name={val.name}
                            desc={val.desc}
                            link={val.link}
                        />
                    )
                })}
            </div>
        </div>
    )
}
