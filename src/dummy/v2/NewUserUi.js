import React, {useState, useEffect} from "react";
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
import footerlogo from "../assets/logos/footer.png";
import savebtn from "../assets/logos/save.png";
import td from "../assets/logos/td.webm";
import cover from '../../assets/v2images/cover.webp'
import { Tooltip, Zoom } from "@mui/material";



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
    const handleSaveClick = () => {

        // Get the contact information
        const contact = {
          name: "Surendhar BNI Stalwarts",
          phone: "+91 9845318077",
          email: "team@thedottech.in"
        };
    
        // Create vCard content
        const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${contact.name}\nTEL;TYPE=work,voice:${contact.phone}\nEMAIL:${contact.email}\nEND:VCARD`;
        
        // Create Blob object
        const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    
        // Create URL for the Blob
        const url = URL.createObjectURL(blob);
    
        // Create a link element
        const link = document.createElement('a');
    
        // Set attributes for the link
        link.download = `${contact.name}.vcf`;
        link.href = url;
    
        // Simulate a click on the link to trigger the download
        link.click();
      };
    

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
            alert('Contact information copied to clipboard. You can paste it while adding a contact');
          }).catch((error) => {
            console.error('Failed to copy to clipboard:', error);
          });
        }
      };
      const words = ['Branding', 'Web Design & Development', 'Creatives & Strategy', 'Digital Marketing', 'Custom Softwares', 'Mobile App Development'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let timeout;

    if (typedText.length < words[currentWordIndex].length) {
      timeout = setTimeout(() => {
        setTypedText((prevText) => prevText + words[currentWordIndex][typedText.length]);
      }, 50); // Adjust the timeout value as needed
    } else {
      timeout = setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setTypedText('');
      }, 1500); // Adjust the timeout value as needed
    }

    return () => clearTimeout(timeout);
  }, [currentWordIndex, typedText, words]);
    const [videoError, setvideoError] = useState(false);
    const handleVideoError = () => {
        setvideoError(true)
    } 
    
    return(
        <div>
        <div style={{maxWidth: "768px", margin: "0 auto"}}>
            <div className="top-cont">
                {videoError ? (
                    <div style={{backgroundColor: "#E82A34", width: "100%", height: "300px"}} />
                ) : (
                    <video style={{width: "100%"}} controls={false} autoPlay={true} muted loop onError={handleVideoError} onLoad={handleVideoError} playsInline>
                    <source src={td} type="video/webm"/>
                    </video>
                )}
                
            </div>
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
                        
                        <Tooltip TransitionComponent={Zoom} title="Save Contact" placement='right-start'>
                        <img src={savebtn} onClick={handleSaveClick} style={{marginLeft: "3px"}} />
                        </Tooltip>
                    </div>
                    <div>
                        <h4 className="GilroyBoldT" style={{textAlign: "center", padding: "5px 10px", color: "#3E4152", marginTop: "0"}}>Loud Introvert with big mission Fiercely local but available worldwide</h4>
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
                    <a style={{textDecoration: "none"}} href={`tel://9845318077`}><button className="phone-btn NeuExBlack"><img src={call} style={{width: "13px"}} /><span style={{marginBottom: "0px"}}>Call</span></button></a>
                    <a style={{textDecoration: "none"}}  aria-label="Chat on WhatsApp" href={`https://wa.me/919845318077`} > <button className="wa-btn NeuExBlack"><img src={whatsapp} style={{width: "15px"}} /><span style={{marginBottom: "0px"}}>WhatsApp</span></button></a>
                    </div>
                    <div className="typing-animation-container" style={{margin: "30px 0"}}>
      <p style={{fontSize: "small"}} className="MontserratR">We are seasoned in</p>
      <p>
        <span className="highlight MontserratEBold">{typedText}</span>
        {<span className="cursor" >|</span>}
      </p>
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
            <img src={footerlogo} style={{width: "15%", maxWidth: "50px", padding: "20px 0"}} />
        </div>
        </div>
    )
}