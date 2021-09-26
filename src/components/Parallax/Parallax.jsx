import React, {useState} from 'react'
import './parallax.css'

export default function Parallax() {
    
    const [stars, setstars] = useState("0px")
    const [mountain_behind, setmountain_behind] = useState("0px")
    const [mountain_front, setmountain_front] = useState("0px")
    const [moon, setmoon] = useState("0px")
    const [btn, setbtn] = useState("0px")
    const [text, settext] = useState("0px")
    React.useEffect(()=>{
    window.addEventListener('scroll', function()
    {
        let value = window.scrollY;
        setstars(value * 0.25 + 'px');
        setmoon(value * 1.05 + 'px');
        setmountain_behind(value * 0.05 + 'px');
        setmountain_front(value * 0 + 'px');
        // text.style.marginRight = value * 4 + 'px';
        settext(value * 1.5 + 'px');
        setbtn(value * 1.5 + 'px');
        // header.style.top = value * 0.5 + 'px';
    })
});
    return (
        <>
        <div>
            <header>
            <a href="#" class="logo">Logo</a>
            <ul>
                <li><a href="https://google.com" class="active"> Home</a></li>
                <li><a href="https://google.com"> About</a></li>
                <li><a href="https://google.com"> Work</a></li>
                <li><a href="https://google.com"> Contact</a></li>
            </ul>
        </header>
        <section>
            <img alt="paralimg" style={{left:{stars}}} src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1632640825/samples/plaocter/stars_leedjd.png" id="stars"/>
            <img alt="paralimg" style={{top:{moon}}} src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1632640784/samples/plaocter/moon_wchbgq.png" id="moon"/>
            <h2 style={{marginRight:{text}}} id="text">The Best</h2>
            <a style={{marginTop:{btn}}} href="#service" id="btn">Explore</a>
            <img alt="paralimg" style={{top:{mountain_front}}} src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1632640783/samples/plaocter/mountains_front_i5mskw.png" id="mountains_front"/>
            <img alt="paralimg" style={{top:{mountain_behind}}} src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1632640791/samples/plaocter/mountains_behind_yq8juc.png" id="mountains_behind"/>
        </section>
        </div>
        </>
    )
}
