import React from 'react'
import './username.css'
import LogoIcon from '../assets/logos/verified.svg'
import { Box } from '@mui/material';
import InstagramIcon from '../assets/logos/instagram.svg'
import FaceBookIcon from '../assets/logos/facebook.svg'
import DribbleIcon from '../assets/logos/dribbble.svg'
import BehanceIcon from '../assets/logos/behance.svg'
import LinkedInIcon from '../assets/logos/linkedin-in.svg'
import TwitterIcon from '../assets/logos/twitter.svg'
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import GoBusyLogo from '../assets/logos/gobylogo.png'
import { Link } from 'react-router-dom';
import { fontSize } from '@mui/system';
import { Fade } from 'react-reveal';
import { Slide } from 'react-reveal';
import  Reveal  from 'react-reveal/Reveal';

export default function Username(props) {



    const data = props.data;


    const styles = {
        mainLayout: {
            width: '100%',
            height: '100%',
            backgroundColor: '#FFFFFF'
        },
        textStruct: {
            textAlign: 'center',
        },
        folderStruct: {
            backgroundColor: '#fff',
            borderRadius: 8,
            padding: 5
        },
        folderFormat: {
            marginBottom: 10,
            marginTop: 20
        },
        folderTxt: {
            fontSize: 18,
        },
        folderStructure: {
            padding: 10
        },
        resumeBtn: {
            width: '80%',
            height: 55,
            backgroundColor: '#3ECC66'
        }
    }

    return (
        <div style={styles.mainLayout}>
            <div style={{


            }}>
                <div style={{ backgroundColor: "#414453", color: "#fff" }}>
                    <div className="profile--avatar">
                        <img
                            src={data.userBio.profile}
                            className='imgBox userprofileImg'

                        />
                    </div>

                    <div className='usernameTxtBox'>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}
                        >
                            <div effect="fadeInUp" bottom >
                                <h2 style={styles.textStruct} className='usernameTxt'>
                                    {data.userBio.name}
                                </h2>
                            </div>

                            <img
                                style={{
                                    height: 23,
                                    width: 25,
                                    marginTop: 30,
                                    marginLeft: 15.5
                                }}
                                src={LogoIcon}
                            />

                        </Box>

                    </div>
                    {/* <h3 style={styles.textStruct}>
                @{data.userBio.userName}
            </h3> */}
                    <Fade bo effect="fadeInUp">
                        <h3 className='userbioTxt usernameBioTxt'>
                            {data.userBio.bio}
                        </h3>
                    </Fade>
                    <div style={{ width: '100%' }}>
                        <Slide bottom duration={500}>
                        <Box
                            // sx={{
                            //   display: 'flex',
                            //   flexWrap: 'nowrap',
                            //   bgcolor: 'background.paper',
                            //   borderRadius: 1,
                            // }}
                            className='usernameSocialIconBox'
                        >
                            <img onClick={() => window.open(data.userBio.links.instagram, "_blank")} src={InstagramIcon} style={{}} className='usernameSocialIcon' />
                            <img onClick={() => window.open(data.userBio.links.fb, "_blank")} src={FaceBookIcon} className='usernameSocialIcon' />
                            <img onClick={() => window.open(data.userBio.links.dribble, "_blank")} src={DribbleIcon} className='usernameSocialIcon' />
                            <img onClick={() => window.open(data.userBio.links.behance, "_blank")} src={BehanceIcon} className='usernameSocialIcon' />
                            <img onClick={() => window.open(data.userBio.links.linkedin, "_blank")} src={LinkedInIcon} className='usernameSocialIcon' />
                            <img onClick={() => window.open(data.userBio.links.twitter, "_blank")} src={TwitterIcon} className='usernameSocialIcon' />
                        </Box>
                        </Slide>
                    </div>
                </div>
                {/* <h3 style={styles.textStruct}>
            {data.userBio.email}
            </h3>
            <h3 style={styles.textStruct}>
            {data.userBio.age}
            </h3> */}
                <div>

                </div>
                <div style={styles.folderStruct}>
                    {data.userLinks && data.userLinks.map((item, index) => {
                        if (item.title === 'Portfolio')
                            return (
                                <div>
                                    <div style={styles.folderFormat}>
                                        <h3 style={{

                                            marginLeft: 20,
                                            fontSize: "23px"
                                        }}>
                                            {item.title}
                                        </h3>
                                        <ScrollMenu style={{
                                            // backgroundColor: '#848484',

                                        }}>
                                            {item.links.map((lin, index) => {
                                                return (
                                                    <div style={{}}>
                                                        <div className='card--menu'>2
                                                            <div>
                                                                <img src={lin.image} />
                                                            </div>
                                                            <div style={{}} >
                                                                <p style={{ fontWeight: "600", fontSize: "20px", textAlign: "center" }} >
                                                                    {lin.heading}
                                                                </p>
                                                            </div>
                                                            <p style={{ fontSize: "15px", textAlign: "justify", textJustify: "inter-word" }}>
                                                                {lin.description}
                                                            </p>

                                                            <button onClick={() => window.open(lin.url, "_blank")} className='btn--dis'>
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
                                <div style={styles.folderFormat}>
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
                                    )
                                }) 

                                }
                            </ScrollMenu>    
                        </div>    
                    )
                    if(item.title === 'Certifications')
                    return(
                        <div style={styles.folderFormat}>
                            <h3 style={{marginLeft:"20px", fontSize:"23px"}}>
                                {console.log('item ',item)}
                         {item.title}
                            </h3>
                            <ScrollMenu>
                                {item.links.map((lin, index) => {
                                    return(
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
            <div className='resumeBtnBox'>
                <a className='resumeBtn'>
                    Download Resume
                </a>
            </div>
        </div>
        </div>
    )
}
