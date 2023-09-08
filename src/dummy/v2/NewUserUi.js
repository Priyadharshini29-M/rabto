import React from "react";
import "./NewUserUi.css";
import suren from "../../assets/v2images/suren.webp";
import LogoIcon from '../assets/logos/verified.svg';
import InstagramIcon from '../assets/logos/instagram.svg';
import FaceBookIcon from '../assets/logos/facebook.svg';
import DribbleIcon from '../assets/logos/dribbble.svg';
import BehanceIcon from '../assets/logos/behance.svg';
import LinkedInIcon from '../assets/logos/linkedin-in.svg';
import TwitterIcon from '../assets/logos/twitter.svg';
import call from "../../assets/v2images/call.webp"
import whatsapp from "../../assets/v2images/wa.webp"
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import rudra from "../../assets/v2images/rudra.webp"
import csc from "../../assets/v2images/csc.webp"
import code from "../../assets/v2images/code.webp"
import anna from "../../assets/v2images/anna.webp"
import hworld from "../../assets/v2images/hworld.webp"


const webData = [
    {
        image: rudra,
        title: "Rudra Cycles",
        description: "E-commerce website",
        link: "https://rudracyclemart.in/",

    },
    {
        image: csc,
        title: "Coimbatore Social Club",
        description: "Dynamic website",
        link: "https://rudracyclemart.in/",

    },
    {
        image: code,
        title: "Code for Deaf",
        description: "Dynamic website",
        link: "https://rudracyclemart.in/",

    },
    {
        image: anna,
        title: "Annalakshmi",
        description: "Dynamic site with reservation module",
        link: "https://rudracyclemart.in/",

    },
    {
        image: hworld,
        title: "The H World",
        description: "E-commerce website",
        link: "https://rudracyclemart.in/",

    },

]


export default function NewUserUi() {
    return(
        <div>
        <div style={{maxWidth: "912px", margin: "0 auto"}}>
            <div className="top-cont" />
            <div>
                <div className="prof">
                <img className="prof-img" src={suren} />
                <div>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <h2 className="NeuExBlack">Warren Peace</h2>
                        <img
                        style={{
                            height:23,
                            width:25,
                        }}
                        src={LogoIcon}
                        />
                    </div>
                    <div>
                        <h4 style={{textAlign: "center", marginTop: "0", padding: "5px 10px"}}>Loud Introvert with big mission Fiercely local but available worldwide</h4>
                    </div>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px"}}>
                        <img onClick={() => window.open("https://www.instagram.com/thedot_tech/", "_blank")} src={InstagramIcon} style={{}} className='busernameSocialIcon' />
                        <img onClick={() => window.open("https://www.facebook.com/profile.php?id=100078201942993", "_blank")} src={FaceBookIcon} style={{}} className='busernameSocialIcon' />
                        <img onClick={() => window.open("https://dribbble.com/surintherraja", "_blank")} src={DribbleIcon} style={{}} className='busernameSocialIcon' />
                        <img onClick={() => window.open("https://www.behance.net/warrenpeaceweb", "_blank")} src={BehanceIcon} style={{}} className='busernameSocialIcon' />
                        <img onClick={() => window.open("https://www.linkedin.com/in/surinther-raja-s-7370b1125/", "_blank")} src={LinkedInIcon} style={{}} className='busernameSocialIcon' />
                        <img onClick={() => window.open("https://twitter.com/theDot_tech", "_blank")} src={TwitterIcon} style={{}} className='busernameSocialIcon' />
                    </div>
                </div>
                </div>
                <div style={{backgroundColor: "#ffffff"}}>
                    <div className="btn-cont">
                        <button className="phone-btn"><img src={call} style={{width: "13px"}} />CALL</button>
                        <button className="wa-btn"><img src={whatsapp} style={{width: "15px"}} />WHATSAPP</button>
                    </div>
                    <div>
                        <h2>Websites</h2>
                        <ScrollMenu>
                            {webData.map((webd, index) => (
                                <div className="vt-cardmain" key={index}>
                                <img src={webd.image} className="vt-img" /> 
                                <div className="vt-content">
                                    <h3>{webd.title}</h3>
                                    <h5>{webd.description}</h5>
                                </div>
                                <button className="disbtn" onClick={() => window.open(webd.link, "_blank")}>
                                    Discover
                                </button>
                            </div>
                            ))}
                        </ScrollMenu>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}