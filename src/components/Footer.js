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
                            <a className="footer-nav"> Home</a>
                            <br/>
                            <a className="footer-nav"> About Me </a>
                            <br/>
                            <a className="footer-nav"> Experience</a>
                            <br/>
                        </div>
                        <div className="col">
                            <a className="footer-nav"> Portfolio</a>
                            <br/>
                            <a className="footer-nav"> Contact Me </a>
                            <br/>
                            <a className="footer-nav"> GitHub </a>
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