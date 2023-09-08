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
import save from "../../assets/v2images/save.webp"


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
        link: "https://thecoimbatoresocialclub.com/",

    },
    {
        image: code,
        title: "Code for Deaf",
        description: "Dynamic website",
        link: "https://www.codingfordeaf.org/",

    },
    {
        image: anna,
        title: "Annalakshmi",
        description: "Dynamic site with reservation module",
        link: "https://annalakshmi.in",

    },
    {
        image: hworld,
        title: "The H World",
        description: "E-commerce website",
        link: "https://thehworld.in/",

    },

]
const brandData = [
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
        link: "https://thecoimbatoresocialclub.com/",

    },
    {
        image: code,
        title: "Code for Deaf",
        description: "Dynamic website",
        link: "https://www.codingfordeaf.org/",

    },
    {
        image: anna,
        title: "Annalakshmi",
        description: "Dynamic site with reservation module",
        link: "https://annalakshmi.in",

    },
    {
        image: hworld,
        title: "The H World",
        description: "E-commerce website",
        link: "https://thehworld.in/",

    },

]


export default function NewUserUi() {
    const name = "Surendhar"
    const phone = "9845318077"
    const handleClick = () => {
        // Create a vCard string
        const vCard = `BEGIN:VCARD
    VERSION:3.0
    FN:${name}
    TEL:${phone}
    END:VCARD`;
    
        // Create a Blob with the vCard data
        const blob = new Blob([vCard], { type: 'text/vcard' });
    
        // Create a URL for the Blob
        const url = window.URL.createObjectURL(blob);
    
        // Create a download link and simulate a click to trigger download
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = `${name}.vcf`;
        document.body.appendChild(a);
        a.click();
    
        // Clean up
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      };
    return(
        <div>
        <div style={{maxWidth: "912px", margin: "0 auto"}}>
            <div className="top-cont" />
            <div>
                <div className="prof">
                <img className="prof-img" src={suren} />
                <div onClick={handleClick} style={{alignSelf: "end", marginTop: "-40px",}} className="save-btn">
                <img src={save} style={{ width: "23px", padding: "8px"}}/> 
                </div>
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
                        <h4 className="GilroyBoldT" style={{textAlign: "center", marginTop: "0", padding: "5px 10px", color: "#3E4152"}}>Loud Introvert with big mission Fiercely local but available worldwide</h4>
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
                    <a style={{textDecoration: "none"}} href={`tel://9845318077`}><button className="phone-btn NeuExBlack"><img src={call} style={{width: "13px"}} />CALL</button></a>
                    <a style={{textDecoration: "none"}}  aria-label="Chat on WhatsApp" href={`https://wa.me/919845318077`} > <button className="wa-btn NeuExBlack"><img src={whatsapp} style={{width: "15px"}} />WHATSAPP</button></a>
                    </div>
                    <div>
                        <h2 className="NeuExBlack" style={{textAlign: "center"}}>Works & Portfolios</h2>
                        <h3 className="NeuExBlack" style={{marginLeft: "15px", marginTop: "35px"}}>WEBSITE</h3>
                        <ScrollMenu>
                            {webData.map((webd, index) => (
                                <div className="vt-cardmain" key={index}>
                                <img src={webd.image} className="vt-img" /> 
                                <div className="vt-content">
                                    <h3 style={{color:"#162449"}} className="GilroyBoldT">{webd.title}</h3>
                                    <h5 style={{color:"#3E4152"}} className="GilroyMedT">{webd.description}</h5>
                                </div>
                                <button className="disbtn GilroyBoldT" style={{color: "#162449"}} onClick={() => window.open(webd.link, "_blank")}>
                                    Discover
                                </button>
                            </div>
                            ))}
                        </ScrollMenu>
                        <h3 className="NeuExBlack" style={{marginLeft: "15px", marginTop: "35px"}}>BRANDING & PACKAGING</h3>
                        <ScrollMenu>
                            {brandData.map((brand, index) => (
                                <div className="vt-cardmain" key={index}>
                                <img src={brand.image} className="vt-img" /> 
                                <div className="vt-content">
                                    <h3 style={{color:"#162449"}} className="GilroyBoldT">{brand.title}</h3>
                                    <h5 style={{color:"#3E4152"}} className="GilroyMedT">{brand.description}</h5>
                                </div>
                                <button className="disbtn GilroyBoldT" style={{color: "#162449"}} onClick={() => window.open(brand.link, "_blank")}>
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