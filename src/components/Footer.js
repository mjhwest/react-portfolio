import React from 'react';
import {
    FacebookShareButton, 
    FacebookIcon,
    TwitterShareButton, 
    TwitterIcon, 
    RedditIcon,
    RedditShareButton,
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappShareButton,
    WhatsappIcon
    
} from "react-share"; 
import {Link} from "react-scroll"

export const Footer = () => {
  return( 
  
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="d-flex">
                        <p>Located in Adelaide, South Australia  </p> 
                    </div>
                    <div className="d-flex">
                        <p>michaelwest.webdev@gmail.com </p> 
                    </div>
                </div>
                <div className="col-lg-3 col-md-2 col-sm-6">
                <div className="row">
                        <div className="col">
                            <Link smooth={true} to="home"  className="footer-nav"> Home</Link>
                            <br/>
                            <Link smooth={true} to="about" offset={-150} className="footer-nav"> About Me </Link>
                            <br/>
                            <Link smooth={true} to="experience" offset={-50} className="footer-nav"> Experience</Link>
                            <br/>
                        </div>
                        <div className="col">
                            <Link smooth={true} to="portfolio" offset={-25} className="footer-nav"> Portfolio</Link>
                            <br/>
                            <a className="footer-nav"> Contact Me </a>
                            <br/>
                            <a href="https://github.com/mjhwest" className="footer-nav" target="_blank" rel="noopener noreferrer" className="menu-item"> GitHub </a>
                            <br/>
                            <a href="https://drive.google.com/file/d/1LyfOoN5r5EcFuZFziYDx9VpOkqhl3tnB/view" className="footer-nav" target="_blank" rel="noopener noreferrer" class="menu-item"> Resume </a>
                    </div>
                </div>
            </div>

            
            <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                <div className="d-flex justify-content-center"> 
                <FacebookShareButton
                url={"https://github.com/mjhwest"}
                quote= {" An Aspiring Full Stack Developer"}>
                    <FacebookIcon className="mx-3" size={36}/>
                </FacebookShareButton>
                <TwitterShareButton
                url={"https://github.com/mjhwest"}
                quote= {" An Aspiring Full Stack Developer"}>
                    <TwitterIcon className="mx-3" size={36}/>
                </TwitterShareButton>
                <RedditShareButton
                url={"https://github.com/mjhwest"}
                quote= {" An Aspiring Full Stack Developer"}>
                    <RedditIcon className="mx-3" size={36}/>
                </RedditShareButton>
                <LinkedinShareButton
                url={"https://github.com/mjhwest"}
                quote= {" An Aspiring Full Stack Developer"}>
                    <LinkedinIcon className="mx-3" size={36}/>
                </LinkedinShareButton>
                <WhatsappShareButton
                url={"https://github.com/mjhwest"}
                quote= {" An Aspiring Full Stack Developer"}>
                    <WhatsappIcon className="mx-3" size={36}/>
                </WhatsappShareButton>
                </div>
                <p className="pt-3 text-center">
                    Copyright&copy;
                    {new Date().getFullYear()}&nbsp; Michael West 
                </p>
            </div>
        </div>
    </div>
</div>
  )
};

export default Footer;