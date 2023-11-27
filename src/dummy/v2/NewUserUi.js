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
import ryd from "../../assets/v2images/ryd.webp"
import rk from "../../assets/v2images/rk.webp"
import dent from "../../assets/v2images/dent.webp"
import bog from "../../assets/v2images/bog.webp"
import save from "../../assets/v2images/save.webp"
import { Button, Popover, Space } from 'antd';
import scan from '../assets/logos/scan.png';
import scanner from '../assets/logos/scanner.png';
import footerlogo from "../assets/logos/footer.png"

const Contact = () => {
    const handleSaveContact = () => {
      // Create a vCard content
      const vCardContent = `BEGIN:VCARD
  VERSION:3.0
  FN:Suren
  TEL:9845211201
  END:VCARD`;
  
      // Create a Blob with the vCard content
      const blob = new Blob([vCardContent], { type: 'text/vcard' });
  
      // Create a download link and trigger the click event
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'SurenContact.vcf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
      <div>
        {/* Button to trigger saving contact */}
        <button onClick={handleSaveContact}>Save Contact</button>
      </div>
    );
  };
  


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
        image: rk,
        title: "RK Bakery",
        description: "Logo Design and Branding",
        link: "https://www.behance.net/gallery/169409287/RK-BAKERY-LOGO",

    },
    {
        image: dent,
        title: "Archident Oral Care",
        description: "Logo Design and Branding Visual Identity",
        link: "https://www.behance.net/gallery/177924265/ARCIDENT-ORAL-CARE",

    },
    {
        image: bog,
        title: "Bogasri Organics",
        description: "Logo Design , Branding and Package design ",
        link: "https://www.behance.net/gallery/177613529/BOGASRI-ORGANICS-PACKAGE-DESIGNING",

    },
    {
        image: ryd,
        title: "Rudra Cycles",
        description: "Branding and AD design",
        link: "https://www.behance.net/gallery/177617033/RUDRA-CYCLE-MART",

    }

]


export default function NewUserUi() {

    const content = (
    <div style={{width: "250px"}}>
        <img src={scanner} style={{width: "100%"}} />
    </div>
    );
    const handleClick = () => {
        // Display instructions for the user
        alert('To save this contact, please follow these steps:\n\n1. Open your device\'s Contacts/People app.\n2. Tap on the option to add a new contact.\n3. Enter the contact information manually.');
    
        // Optionally, you can also provide a preformatted text
        const contactText = `Name: [Name]
    Phone: [Phone]
    Email: [Email]`;
    
        // Copy the preformatted text to the clipboard (if supported)
        if (navigator.clipboard) {
          navigator.clipboard.writeText(contactText).then(() => {
            alert('Contact information copied to clipboard. You can paste it while adding a new contact.');
          }).catch((error) => {
            console.error('Failed to copy to clipboard:', error);
          });
        }
      };
    return(
        <div>
        <div style={{maxWidth: "912px", margin: "0 auto"}}>
            <div className="top-cont" />
            <div>
                <Popover style={{position: "fixed"}} content={content} trigger="click">
                    <div style={{position: "fixed", bottom: "10px", right: "10px", backgroundColor: "#162449", borderRadius: "50px", height: "35px", width: "35px", display: "flex", justifyContent: "center", alignItems: "center", padding: "10px", zIndex: "50"}}>
                        <img src={scan} style={{width: "25px", height: "25px"}} />
                    </div>
                </Popover>
                <div className="prof">
                <img className="prof-img" src={suren} />
                {/* <div style={{alignSelf: "end", marginTop: "-40px",}} className="save-btn">
                <a href="intent://contacts/create?name=Surendhar%20Doe&phone=9845318077#Intent;scheme=android.intent.action.INSERT;end">

                <img src={save} style={{ width: "23px", padding: "8px"}}/> 
                </a>
                </div> */}
                <div>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <h2 className="MontserratEBold">Surendhar</h2>
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
                        <img onClick={() => window.open("https://thedottech.in", "_blank")} src={TwitterIcon} style={{}} className='busernameSocialIcon' />
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
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <img src={footerlogo} style={{width: "15%", padding: "20px 0"}} />
        </div>
        <Contact />
        </div>
    )
}