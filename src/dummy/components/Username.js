import React from 'react';
import './Busername.css';
import LogoIcon from '../assets/logos/verified.svg';
import { Box } from '@mui/material';
import InstagramIcon from '../assets/logos/instagram.svg';
import FaceBookIcon from '../assets/logos/facebook.svg';
import DribbleIcon from '../assets/logos/dribbble.svg';
import web from '../assets/logos/web.svg';
import BehanceIcon from '../assets/logos/behance.svg';
import {Fade, Slide} from "react-reveal";
import LinkedInIcon from '../assets/logos/linkedin-in.svg';
import TwitterIcon from '../assets/logos/twitter.svg';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import GoBusyLogo from '../assets/logos/gobylogo.png';
import { Container } from '@mui/system';
import bni from "../../assets/images/bni.png"
import dotlogo from "../../assets/images/suren.jpeg";
import WhatsappButton from "../../assets/images/WhatsAppButtonGreenSmall.png"
import {FaPhoneAlt} from "react-icons/fa"
import {MdOutlineBusinessCenter} from "react-icons/md"

export default function Username(props) {

    const data = props.data;
  
    

  return (
    <div >  
    <div>
        <div style={{backgroundColor:"#F4F4F4", marginTop: -8, marginRight: -8, marginLeft: -8}}>
    <Container>
        <div style={{backgroundColor:"#F4F4F4", paddingBottom:"10px", paddingTop: "10px", borderRadius: "7px"}}>
            <div className='logo--cont'>
            <img
            src={dotlogo}
            className='business-logo'
            
        />
            </div>
        
     
        <div className='usernameTxtBox'>
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row'
    }}
    >
    <h2  className='usernameTxt gilroyBold'>
    Surendhar
    </h2>
    <img
    style={{
        height:23,
        width:25,
        marginTop: 31,
        marginLeft: 15.5
    }}
    src={LogoIcon}
    />
    {/* <img
    style={{
        width: "10px",
        marginTop: 31,
        marginLeft: 15.5
    }}
    src={bni}
    /> */}
    
  </Box>

  </div>
        {/* <h3 style={styles.textStruct}>
            @{data.userBio.userName}
        </h3> */}
                <Fade bo effect="fadeInUp">
                    <h3 className='userbioTxt usernameBioTxt gilroy'>
                        {data.userBio.bio}
                    </h3>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginTop: "-20px"}}>
                    <img style={{width: "40px"}} src={bni}/>
                    <h4 className='gilroyBold'>STALWARTS</h4>
                    <p className="gilroy">(member)</p>
                    </div>
                </Fade>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "0 0 15px 0"}}>
                <div style={{marginRight: "15px"}}>
                <a style={{textDecoration: "none"}} href="tel://919845318077">
                    <button className='call-btn gilroy' style={{cursor: "pointer"}}>
                    <FaPhoneAlt style={{marginRight: "8px"}} />
                       <div>Call</div> 
                    </button>
                    </a>
                    </div>
                <a aria-label="Chat on WhatsApp" href={`https://wa.me/91${data.userBio.whatsappNumber}`} > <img className="wa-button-img" src={WhatsappButton} /></a>
                </div>
                <div style={{ width: '100%' }}>
                    <Slide bottom duration={1000}>
                    <Box
                        // sx={{
                        //   display: 'flex',
                        //   flexWrap: 'nowrap',
                        //   bgcolor: 'background.paper',
                        //   borderRadius: 1,
                        // }}
                        className='usernameSocialIconBox'
                    >
                        <img onClick={() => window.open(data.userBio.links.goby, "_blank")} src={web}  style={{width: "22px"}} className='busernameSocialIcon' />
                        <img onClick={() => window.open(data.userBio.links.instagram, "_blank")} src={InstagramIcon} style={{}} className='busernameSocialIcon' />
                        {/* <img onClick={() => window.open(data.userBio.links.fb, "_blank")} src={FaceBookIcon} className='busernameSocialIcon' /> */}
                        <img onClick={() => window.open(data.userBio.links.dribble, "_blank")} src={DribbleIcon} className='busernameSocialIcon' />
                        <img onClick={() => window.open(data.userBio.links.behance, "_blank")} src={BehanceIcon} className='busernameSocialIcon' />
                        <img onClick={() => window.open(data.userBio.links.linkedin, "_blank")} src={LinkedInIcon} className='busernameSocialIcon' />
                        {/* <img onClick={() => window.open(data.userBio.links.twitter, "_blank")} src={TwitterIcon} className='busernameSocialIcon' /> */}
                    </Box>
                    </Slide>
                </div>
            </div>
            </Container>
            </div>
            {/* <h3 style={styles.textStruct}>
        {data.userBio.email}
        </h3>
        <h3 style={styles.textStruct}>
        {data.userBio.age}
        </h3> */}
            <div>

            </div>
            <div style={{marginTop: -8, marginRight: -8, marginLeft: -8}}>
            <div>
                {data.userLinks && data.userLinks.map((item, index) => {
                    if (item.id === 1)
                        return (
                            <div>
                                <div>
                                    <h3 style={{
                                        fontWeight: 'bolder',
                                        marginLeft: 20,
                                        fontSize: "23px"
                                    }}
                                    className="gilroyBold"
                                    >
                                        {item.title}
                                    </h3>
                                    <ScrollMenu style={{
                                        // backgroundColor: '#848484',
                                        display: "flex",
                                    }}>
                                        {item.links.map((lin, index) => {
                                            return (
                                                <div style={{padding:"15px 0"}}>
                                                    <div className='card--menu'>
                                                        <div>
                                                            <img src={lin.image} style={{ width: "100%", borderRadius: "23px"}} />
                                                        </div>
                                                        <div style={{}} >
                                                            <p style={{ fontWeight: "600", fontSize: "20px", textAlign: "center" }} className="gilroyBold">
                                                                {lin.heading}
                                                            </p>
                                                        </div>
                                                        <p style={{ fontSize: "15px", textAlign: "justify", textJustify: "inter-word" }}>
                                                            {lin.description}
                                                        </p>

                                                        <button onClick={() => window.open(lin.url, "_blank")} className='btn--dis' style={{cursor: "pointer"}}>
                                                            DISCOVER
                                                        </button>


                                                    </div>
                                                </div>
                                            )
                                        })

                                        }
                                    </ScrollMenu>
                                </div>
                            </div>

                        )
                    if (item.title === 'Education')
                        return (
                            <div >
                                <h3 style={{
                                    marginLeft: 20,
                                    fontSize: "23px"
                                }}>
                                    {item.title}
                                </h3>
                                <ScrollMenu style={{
                                    marginTop: 20,
                                    marginBottom: 45,

                                }}>
                            {item.links.map((lin, index) => {
                                return(
                                    <div style={{padding:"15px 0", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                                    <div className='card--menu'>
                                        <p 
                                             style={{fontWeight:"600", fontSize:"20px", textAlign:"center"}}
                                        >
                                        {lin.institutionName}
                                        </p>
                                        <p  style={{fontWeight:"400", fontSize:"20px", textAlign:"center"}}>
                                        {lin.year}
                                        </p>
                                        
                                        <p  style={{fontWeight:"400", fontSize:"20px", textAlign:"center"}}>
                                        {lin.grade}
                                        </p>
                                        <button onClick={() => window.open(lin.institutionurl, "_blank")} className='btn--dis'>
                                            DISCOVER
                                        </button>
                                        
                                    </div>
                                    </div>
                                )
                            }) 

                            }
                        </ScrollMenu>    
                    </div>    
                )
                if(item.title === 'Certifications')
                return(
                    <div>
                        <h3 style={{marginLeft:"20px", fontSize:"23px"}}>
                            {console.log('item ',item)}
                     {item.title}
                        </h3>
                        <ScrollMenu>
                            {item.links.map((lin, index) => {
                                return(
                                    <div style={{padding:"15px 0"}}>
                                    <div className='card--menu'>
                                        <div>
                                            <img className='cert--img' src={lin.certificateLink} />
                                        </div>
                                        <div style={{}} >
                                            <p style={{fontWeight:"600", fontSize:"20px", textAlign:"center"}} >
                                            {lin.courseName}
                                            </p>
                                        </div>    
                                        <p style={{fontSize:"15px", textAlign:"center"}}>
                                        {lin.yoc}
                                        </p>
                                        <p style={{fontSize:"15px", textAlign:"center"}}>
                                        {lin.rateYourSkill}
                                        </p>
                                        
                                    
                                        
                                        
                                    </div>
                                    </div>
                                    // <div className='card--menu'>
                                    //     <div>
                                    //         <img  />
                                    //     {lin.certificateLink}
                                    //     </div>
                                        
                                    //     <p style={{fontWeight:"600", fontSize:"20px", textAlign:"center"}}>
                                    //     {lin.courseName}
                                    //     </p>
                                    //     <p style={{fontWeight:"400", fontSize:"20px", textAlign:"center"}}>
                                    //     {lin.yoc}
                                    //     </p>
                                        
                                    //     <p>
                                    //     {lin.rateYourSkill}
                                    //     </p>
                                        
                                    // </div>
                                )
                            }) 

                            }
                        </ScrollMenu>    
                    </div>    
                )
            }) 
            }
        </div>
        </div>
        {/* <div className='resumeBtnBox'>
            <a className='resumeBtn' >
                Download Brochure
            </a>
        </div> */}
    </div>
    </div>
)
}
