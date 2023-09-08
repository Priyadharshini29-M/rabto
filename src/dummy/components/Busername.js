import React from 'react';
import './Busername.css';
import LogoIcon from '../assets/logos/verified.svg';
import { Box } from '@mui/material';
import InstagramIcon from '../assets/logos/instagram.svg';
import FaceBookIcon from '../assets/logos/facebook.svg';
import DribbleIcon from '../assets/logos/dribbble.svg';
import BehanceIcon from '../assets/logos/behance.svg';
import {Fade, Slide} from "react-reveal";
import LinkedInIcon from '../assets/logos/linkedin-in.svg';
import TwitterIcon from '../assets/logos/twitter.svg';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import GoBusyLogo from '../assets/logos/gobylogo.png';
import {TbMinusVertical} from "react-icons/tb"
import enterprise from "../../assets/images/enterprise.png"
import dotlogo from "../../assets/images/dotlogored.png";
import WhatsappButton from "../../assets/images/WhatsAppButtonGreenSmall.png"
import {FaPhoneAlt} from "react-icons/fa"
import ReactRoundedImage from "react-rounded-image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//tempAssets
import BusinessLogo from "../../assets/images/download.png"
import { Container } from '@mui/system';
import {MdCorporateFare} from "react-icons/md"

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



export default function Username(props) {

    const data = props.data;
  return (
    
    <div >  
        <div>
            <div style={{backgroundColor:"#F4F4F4", marginTop: -8, marginRight: -8, marginLeft: -8}}>
        <Container>
            <div style={{backgroundColor:"#F4F4F4", paddingBottom:"10px", paddingTop: "10px", borderRadius: "7px"}}>
                <div className='logo--cont'>
                <ReactRoundedImage
                image={data.userBio.profile}
                imageWidth="100"
                imageHeight="100"
                roundedSize="0"
                borderRadius="100"
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
        {data.userBio.name}
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
        <img
        style={{
            height:23,
            width:25,
            marginTop: 31,
            marginLeft: 15.5
        }}
        src={enterprise}
        />
        
      </Box>
    
      </div>
            {/* <h3 style={styles.textStruct}>
                @{data.userBio.userName}
            </h3> */}
                    <Fade bo effect="fadeInUp">
                        <h3 className='userbioTxt usernameBioTxt gilroy'>
                            {data.userBio.bio}
                        </h3>
                    </Fade>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "15px 0"}}>
                    <div style={{marginRight: "15px"}}>
                    <a style={{textDecoration: "none"}} href={`tel://${data.userBio.whatsappNumber}`}>
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
                            {data.userBio.links.instagram ? <img onClick={() => window.open(data.userBio.links.instagram, "_blank")} src={InstagramIcon} style={{}} className='busernameSocialIcon' /> : null}
                            {data.userBio.links.fb ? <img onClick={() => window.open(data.userBio.links.fb, "_blank")} src={FaceBookIcon} className='busernameSocialIcon' />: null}
                            {data.userBio.links.dribble ? <img onClick={() => window.open(data.userBio.links.dribble, "_blank")} src={DribbleIcon} className='busernameSocialIcon' />: null}
                            {data.userBio.links.behance ? <img onClick={() => window.open(data.userBio.links.behance, "_blank")} src={BehanceIcon} className='busernameSocialIcon' />: null}
                            {data.userBio.links.linkedin ? <img onClick={() => window.open(data.userBio.links.linkedin, "_blank")} src={LinkedInIcon} className='busernameSocialIcon' />: null}
                            {data.userBio.links.twitter ? <img onClick={() => window.open(data.userBio.links.twitter, "_blank")} src={TwitterIcon} className='busernameSocialIcon' />: null}
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
                                                            <p style={{ fontSize: "15px", textAlign: "justify", textJustify: "inter-word", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                                                              <span className=''>Category -</span> {lin.description}
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
                                        <div style={{padding: "20px, 10px"}}>

                                        {data.userBio.userName === "snowflakes" ? 
                                        <div>
                                        <h3 style={{
                                            fontWeight: 'bolder',
                                            marginLeft: 20,
                                            fontSize: "23px"
                                        }}
                                        className="gilroyBold"
                                        >
                                            Our Products
                                        </h3>
                                        <ScrollMenu style={{
                                            // backgroundColor: '#848484',
                                            display: "flex",
                                        }}>
                                              <div style={{padding:"15px 0"}}>
                                                        <div className='card--menu-p'>
                                                        <Carousel responsive={responsive}>
                                                            <div>
                                                                <img src="https://firebasestorage.googleapis.com/v0/b/bluesky-website-f4558.appspot.com/o/goby%2FIMG_9461%20(1).webp?alt=media&token=d3b92875-b35a-407e-8c73-ee0cf4559f0c" style={{ width: "100%", borderRadius: "23px"}} />
                                                            </div>
                                                            <div>
                                                                <img src="https://firebasestorage.googleapis.com/v0/b/bluesky-website-f4558.appspot.com/o/goby%2FIMG_9457.webp?alt=media&token=129364dd-7239-4aeb-9b5e-ab32427689d9" style={{ width: "100%", borderRadius: "23px"}} />
                                                            </div>
                                                          
                                                            
                                                        </Carousel>
                                                            
                                                            <div style={{}} >
                                                                <p style={{ fontWeight: "600", fontSize: "20px", textAlign: "center" }} className="gilroyBold">
                                                                Product #1
                                                                </p>
                                                            </div>
                                                            <p style={{ fontSize: "15px", textAlign: "justify", textJustify: "inter-word" }}>
                                                            Sustainable dress for little ones who love nature.
                                                            </p>



                                                        </div>
                                                    </div>
                                              <div style={{padding:"15px 0"}}>
                                                        <div className='card--menu-p'>
                                                        <Carousel responsive={responsive}>
                                                            <div>
                                                                <img src="https://firebasestorage.googleapis.com/v0/b/bluesky-website-f4558.appspot.com/o/goby%2FIMG_9365.webp?alt=media&token=09240c58-3aaf-48f8-92ad-55f463c439ca" style={{ width: "100%", borderRadius: "23px"}} />
                                                            </div>
                                                            <div>
                                                                <img src="https://firebasestorage.googleapis.com/v0/b/bluesky-website-f4558.appspot.com/o/goby%2FIMG_9357%20(1).webp?alt=media&token=3237c77b-0dd3-4e90-bbfa-6a6da96f6ad8" style={{ width: "100%", borderRadius: "23px"}} />
                                                            </div>
                                                            <div>
                                                                <img src="https://firebasestorage.googleapis.com/v0/b/bluesky-website-f4558.appspot.com/o/goby%2FIMG_9392%20(1).webp?alt=media&token=896c1fda-525b-4283-b396-f8e27046248a" style={{ width: "100%", borderRadius: "23px"}} />
                                                            </div>
                                                            
                                                        </Carousel>
                                                            
                                                            <div style={{}} >
                                                                <p style={{ fontWeight: "600", fontSize: "20px", textAlign: "center" }} className="gilroyBold">
                                                                    Product #2
                                                                </p>
                                                            </div>
                                                            <p style={{ fontSize: "15px", textAlign: "justify", textJustify: "inter-word" }}>
                                                            Breathable and eco-friendly dress for all occasions.
                                                            </p>



                                                        </div>
                                                    </div>
                                              <div style={{padding:"15px 0"}}>
                                                        <div className='card--menu-p'>
                                                        <Carousel responsive={responsive}>
                                                            <div>
                                                                <img src="https://firebasestorage.googleapis.com/v0/b/bluesky-website-f4558.appspot.com/o/goby%2FIMG_9233.webp?alt=media&token=6560bbba-5ec3-4867-b236-be869f8d89eb" style={{ width: "100%", borderRadius: "23px"}} />
                                                            </div>
                                                            <div>
                                                                <img src="https://firebasestorage.googleapis.com/v0/b/bluesky-website-f4558.appspot.com/o/goby%2FIMG_9226%20(1).webp?alt=media&token=cd528fa9-23d7-4f61-a790-dd08d14be279" style={{ width: "100%", borderRadius: "23px"}} />
                                                            </div>
                                                            
                                                            
                                                        </Carousel>
                                                            
                                                            <div style={{}} >
                                                                <p style={{ fontWeight: "600", fontSize: "20px", textAlign: "center" }} className="gilroyBold">
                                                                    Product #3
                                                                </p>
                                                            </div>
                                                            <p style={{ fontSize: "15px", textAlign: "justify", textJustify: "inter-word" }}>
                                                            Chemical-free dress for sensitive skin and happy playtime
                                                            </p>



                                                        </div>
                                                    </div>
                                        {/* <Carousel>
                                        <div>
                                            <img src="https://firebasestorage.googleapis.com/v0/b/boga-sree.appspot.com/o/goby%2FIMG_9461.webp?alt=media&token=44ab4887-74f7-4bb5-9b8e-b6e702ae6e02" />
                                        </div>
                                        <div>
                                            <img src="https://firebasestorage.googleapis.com/v0/b/boga-sree.appspot.com/o/goby%2FIMG_9453.webp?alt=media&token=1e681fc7-9b7a-4df3-9e1a-f2bfa6ba087d" />
                                        </div>
                                        <div>
                                            <img src="https://firebasestorage.googleapis.com/v0/b/boga-sree.appspot.com/o/goby%2FIMG_9392.webp?alt=media&token=f6327049-b68e-4349-8c5d-4ddbd01d6817" />
                                        
                                        </div>
                                        <div>
                                            <img src="https://firebasestorage.googleapis.com/v0/b/boga-sree.appspot.com/o/goby%2FIMG_9366.webp?alt=media&token=7197337a-106c-40f4-8c71-9e8f6acc546c" />
                                        
                                        </div>
                                        <div>
                                            <img src="https://firebasestorage.googleapis.com/v0/b/boga-sree.appspot.com/o/goby%2FIMG_9357.webp?alt=media&token=fd1b504a-1b64-4efe-86c1-a6c565a029bc" />
                                        
                                        </div>
                                        <div>
                                            <img src="https://firebasestorage.googleapis.com/v0/b/boga-sree.appspot.com/o/goby%2FIMG_9330.webp?alt=media&token=8b311715-672b-4444-9e2c-6309c757b581" />
                                        
                                        </div>
                                        <div>
                                            <img src="https://firebasestorage.googleapis.com/v0/b/boga-sree.appspot.com/o/goby%2FIMG_9280%20(1).webp?alt=media&token=a092a4ff-abec-4171-a4c1-25d7283eb521" />
                                        
                                        </div>
                                        <div>
                                            <img src="https://firebasestorage.googleapis.com/v0/b/boga-sree.appspot.com/o/goby%2FIMG_9226.webp?alt=media&token=ea6ab408-11bb-4ce2-ae89-bf7bc911de3f" />
                                        
                                        </div>
                                        
                                        </Carousel> */}
                                        </ScrollMenu>
                                        </div> : (null) }
                                        </div>
                                    </div>
                                </div>

                            )
                        if (item.id === 2)
                            return (
                                <div >
                                    <h3 style={{
                                        marginLeft: 20,
                                        fontSize: "23px"
                                    }} className='gilroyBold'>
                                        {item.title}
                                    </h3>
                                    <ScrollMenu style={{
                                        marginTop: 20,
                                        marginBottom: 45,

                                    }}>
                               <video height="500px" width="300">
                                    <source src="https://www.instagram.com/reel/Csf7m8ft_V8/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" />
                               </video>
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
            <div className='resumeBtnBox'>
                <a href={data.userBio.brochure_link} className='resumeBtn' download>
                    Download Brochure
                </a>
            </div> 
        </div>
        </div>
    )
}
