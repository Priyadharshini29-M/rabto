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

export default function Username(props) {


    const data = props.data;


    const styles = {
        mainLayout: {
            width:'100%',
            height:'100%',
            backgroundColor:'#FFFFFF'
        },
        textStruct: {
            textAlign: 'center',
            color:'#162449',
        },
        folderStruct: {
            backgroundColor: '#CFCFCF',
            borderRadius:8,
            padding:5
        },
        folderFormat: {
            marginBottom: 10,
            marginTop: 20
        },
        folderTxt: {
            color:'#FFFFFF',
            fontSize: 18,
            marginLeft: 15,
            marginTop: 15
        },
        folderStructure: {
            padding: 10
        }
    }

  return (
    <div style={styles.mainLayout}>  
        <div style={{
            padding: 20
        }}>
            <img
                src={data.userBio.profile}
                className='imgBox userprofileImg'
                sx={{ boxShadow: 3 }}
            />
         
            <div className='usernameTxtBox'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row'
        }}
        >
        <h2 style={styles.textStruct} className='usernameTxt'>
        {data.userBio.name}
        </h2>
        <img
        style={{
            height:23,
            width:25,
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
            <h3 className='userbioTxt usernameBioTxt'>
            {data.userBio.bio}
            </h3>
            <div style={{ width: '100%' }}>
      <Box
        // sx={{
        //   display: 'flex',
        //   flexWrap: 'nowrap',
        //   bgcolor: 'background.paper',
        //   borderRadius: 1,
        // }}
        className='usernameSocialIconBox'
      >
        <img onClick={() => window.open(data.userBio.links.instagram, "_blank")} src={InstagramIcon} className='usernameSocialIcon'/>
        <img onClick={() => window.open(data.userBio.links.fb, "_blank")} src={FaceBookIcon} className='usernameSocialIcon'/>
        <img onClick={() => window.open(data.userBio.links.dribble, "_blank")} src={DribbleIcon} className='usernameSocialIcon'/>
        <img onClick={() => window.open(data.userBio.links.behance, "_blank")} src={BehanceIcon} className='usernameSocialIcon'/>
        <img onClick={() => window.open(data.userBio.links.linkedin, "_blank")} src={LinkedInIcon} className='usernameSocialIcon'/>
        <img onClick={() => window.open(data.userBio.links.twitter, "_blank")} src={TwitterIcon} className='usernameSocialIcon'/>
      </Box>
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
                    if(item.title === 'Portfolio')
                    return(
                        <div style={styles.folderFormat}>
                            <h3 style={{
                                                color:'#FFFFFF',
                                                marginLeft: 20
                                            }}>
                               {item.title}
                            </h3>
                            <div style={{
                                backgroundColor: '#848484',
                                borderRadius: 8,
                                marginBottom: 15
                            }}>
                                {item.links.map((lin, index) => {
                                    return(
                                        <div>
                                            <div style={styles.folderStructure}>
                                                <p style={styles.folderTxt}>
                                                {lin.heading}
                                                </p>
                                            </div>    
                                            <p style={styles.folderTxt}>
                                            {lin.description}
                                            </p>
                                            <p style={styles.folderTxt}>
                                            {lin.url}
                                            </p>
                                            <p style={styles.folderTxt}>
                                            {lin.image}
                                            </p>
                                        </div>
                                    )
                                }) 

                                }
                            </div>    
                        </div>    
                    )
                    if(item.title === 'Education')
                    return(
                        <div style={styles.folderFormat}>
                            <h3 style={{
                                                color:'#FFFFFF',
                                                marginLeft: 20
                                    }}>
                               {item.title}
                            </h3>
                            <div style={{
                                                marginLeft: 20,
                                                marginBottom:25,

                                    }}>
                                {item.links.map((lin, index) => {
                                    return(
                                        <div>
                                            <p style={{
                                                color:'#FFFFFF'
                                            }}>
                                            {lin.institutionName}
                                            </p>
                                            <p>
                                            {lin.year}
                                            </p>
                                            <p>
                                            {lin.institutionurl}
                                            </p>
                                            <p>
                                            {lin.grade}
                                            </p>
                                            
                                        </div>
                                    )
                                }) 

                                }
                            </div>    
                        </div>    
                    )
                    if(item.title === 'Certifications')
                    return(
                        <div style={styles.folderFormat}>
                            <h3>
                                {console.log('item ',item)}
                               Title: {item.title}
                            </h3>
                            <div>
                                {item.links.map((lin, index) => {
                                    return(
                                        <div>
                                            <p>
                                            {lin.courseName}
                                            </p>
                                            <p>
                                            {lin.yoc}
                                            </p>
                                            <p>
                                            {lin.certificateLink}
                                            </p>
                                            <p>
                                            {lin.rateYourSkill}
                                            </p>
                                            
                                        </div>
                                    )
                                }) 

                                }
                            </div>    
                        </div>    
                    )
                }) 
                }
            </div>
            {console.log('userName - ',data.userBio.name)}
            <p style={{
                textAlign:'center',
                color:'#007228',
                fontWeight: '600'
            }}>
                goBy.in 
            </p>
        </div>
    </div>
  )
}
