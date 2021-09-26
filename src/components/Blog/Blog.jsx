import React from 'react'
import './blog.css';

const BlogData = [
    {
        name:"Plant clinics improve food security in Rwanda, says new study",
        desc:"Astonishingly, an estimated 40% of crop loss worldwide can be attributed to pests. This statistic that is especially devastating in developing areas where crops are a source of food, income and livestock feed amongst ",
        link:"https://blog.plantwise.org/2020/08/28/plant-clinics-improve-food-security-in-rwanda-says-new-study/"
    },
    {
        name:"Soil microbiome linked to disease resistance in crops",
        desc:"A recent study has unearthed the mystery of how plant disease resistance is linked to the soil microbiome. This new area of research will open up new possibilities",
        link:"https://blog.plantwise.org/2019/11/01/soil-microbiome-linked-to-disease-resistance-in-crops/"
    },
    {
        name:"Smelling plant diseases: New technology identifies plant diseases remotely in the field",
        desc:"Researchers at North Carolina State University have published an exciting study on a novel technology which allows farmers and extension workers to identify plant diseases remotely in the field using airborne chemical fingerprints.",
        link:"https://blog.plantwise.org/2019/08/07/smelling-plant-diseases-new-technology-can-identify-plant-diseases-remotely-in-the-field/"
    },
    {
        name:"It’s here: the new Plantwise Knowledge Bank!",
        desc:"We are pleased to announce the release of the newly designed and dynamic Plantwise Knowledge Bank. The new website is now mobile responsive and has a cleaner, more user-friendly homepage.",
        link:"https://blog.plantwise.org/2019/05/03/its-here-the-new-plantwise-knowledge-bank/"
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
        <img alt="blogimg" src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1632593894/samples/plaocter/New_Project_12_u3o9c2.png"/>
    </div>
    );
}

export default function Blog() {
    return (
        <div id="blog" className="blogs">
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
