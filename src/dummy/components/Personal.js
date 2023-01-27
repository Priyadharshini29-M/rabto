import React from "react";
import "./Busername.css";
import cover from "../../assets/images/cover.png"
import dotlogo from "../../assets/images/suren.jpeg";
import LogoIcon from '../assets/logos/verified.svg';
import InstagramIcon from '../assets/logos/instagram.svg';
import FaceBookIcon from '../assets/logos/facebook.svg';
import LinkedInIcon from '../assets/logos/linkedin-in.svg';
import { Box } from "@mui/system";
import goby from "../../assets/images/gobylogo.png"

function Personal() {
    return(
        <>
            <div>
                <img src={cover} className="cover-img" />
            </div>
            <div className="rounded-cont">
            <div className='logo--cont'>
                <img
                src={dotlogo}
                className='personal-logo'
                
            />
                </div>
            
            <div className="per-bio">
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "15px"}}>
                <h1 className="gilroyBold" style={{fontSize: "2.2em"}}>Surendhar</h1>
                <img
                
                src={LogoIcon}
                />
                </div>
                <h3 className="gilroy" style={{textAlign: "center", width: "90%", marginTop: "-2px"}}>
                Loud Introvert with big mission
Fiercely local but available worldwide
                </h3>
            </div>
            <div className="per-links-cont">
                <button style={{marginTop: "15px"}} className="per-links-btn">add me to</button>
                <button className="per-links-btn">add me to</button>
                <button className="per-links-btn">add me to</button>
                <button className="per-links-btn">add me to</button>
            </div>
            <Box
                        // sx={{
                        //   display: 'flex',
                        //   flexWrap: 'nowrap',
                        //   bgcolor: 'background.paper',
                        //   borderRadius: 1,
                        // }}
                        className='usernameSocialIconBox'
                    >
                        <img src={InstagramIcon} style={{}} className='busernameSocialIcon' />
                        <img src={FaceBookIcon} className='busernameSocialIcon' />
                        <img  src={LinkedInIcon} className='busernameSocialIcon' />
                        {/* <img onClick={() => window.open(data.userBio.links.twitter, "_blank")} src={TwitterIcon} className='busernameSocialIcon' /> */}
                    </Box>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img src={goby} style={{width: "80px", marginTop: "20px"}} />
                    </div>
            </div>
            
        </>
    )
}


export default Personal