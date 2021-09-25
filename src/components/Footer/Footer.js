import React from "react";
import './Footer.css';

const Footer =() =>{
    return(
        <>
        <div className="footer">
            <div className="top_footer">
                <div className="left_top_footer">
                    <div className="socialmedia_footer">
                        <img src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1632586064/plaocter/socialmedia_footer_koyrle.svg" alt="" />
                    </div>
                    <div className="text_left_top_footer">
                        <h1>Made with ❤️ by Team Plaocter </h1>
                    </div>
                </div>
                <div className="right_top_footer">
                    <div className="text_right_top_footer">
                        <h1>Subscribe</h1>
                        <h2>Join us to receive gardening tips, offers, news & more.</h2>
                    </div>
                    <div className="buttons_right_top_footer">
                        <div className="emailaddress_button">E-mail address</div>
                        <div className="signup_button">SIGN UP</div>
                    </div>
                    <div className="copyright_text_footer">
                        <h1>© 2021 ShellHacks - All rights reserved</h1>
                    </div>
                </div>
            </div>
            <div className="bottom_footer">
                <div className="grasses_footer">
                    <img src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1632600700/plaocter/bottom_grass_viwlhx.png" alt=""/>
                    {/* <img src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1632587072/plaocter/grass4_1_du0gvr.svg" alt=""/> */}
                    {/* <img src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1632587072/plaocter/grass4_2_d9bmcf.svg" alt=""/> */}
                    {/* <img src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1632587072/plaocter/grass4_3_r77jid.svg" alt=""/> */}
                    {/* <img src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1632587072/plaocter/grass4_4_btfyo9.svg" alt=""/> */}
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;