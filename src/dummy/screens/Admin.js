import { Container, Stack, Item, Paper, Typography, TextField, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ImageUploading from 'react-images-uploading';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Admin() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

    const [username, setusername] = useState('');
    const [fullName, setfullName] = useState('');
    const [email, setemail] = useState('');
    const [bio, setbio] = useState('');
    const [phase, setphase] = useState('');
    const [images, setImages] = React.useState([]);


    const [folderList, setfolderList] = useState([]);


    const maxNumber = 69;


    const fileFolderData = {

    } 

    const onFileAndFolderPush = () => {
        
    }


    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };

    const uploadImages = (e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append('myImage',images);
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };
            axios.post(`/upload`,formData,config)
                .then((response) => {
                    alert("The file is successfully uploaded");
                }).catch((error) => {
            });
    }
  
    const ImageSection = () => {
        return(
            <ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div style={{
              marginBottom:25
          }}>

<Typography variant="h6" component="h2">
                Upload User Images
            </Typography>
        
          <div className="upload__image-wrapper" style={{
              width:'80%',
              backgroundColor:'#D3D3D3',
              borderRadius:12,
              padding:10
          }}>
            <button
              style={{
                  height: 40,
                  width: 130,
                  backgroundColor: '#005224',
                  borderRadius:8,
                  color:'#ffffff'
              }}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}
             style={{
                height: 40,
                width: 130,
                backgroundColor: '#490402',
                borderRadius:8,
                color:'#ffffff'
            }}
            >Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item" style={{ margin:15 }}>
                <img src={image['data_url']} alt="" width="80" style={{
                    borderRadius:8
                }} />
                <div className="image-item__btn-wrapper">
                  <button 
                  onClick={() => onImageUpdate(index)}
                  style={{
                    height: 30,
                    width: 80,
                    backgroundColor: '#490402',
                    borderRadius:8,
                    color:'#ffffff'
                }}
                  >Update</button>
                  <button
                  onClick={() => onImageRemove(index)}
                  style={{
                    height: 30,
                    width: 80,
                    backgroundColor: '#C10600',
                    borderRadius:8,
                    color:'#ffffff',
                    marginLeft:10
                }}
                  >Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div style={{
              textAlign:'center'
          }}>
          <Button onClick={(e) => uploadImages(e)} variant="contained" style={{marginTop:15, backgroundColor:'#00921B', width:'80%'}}>Upload</Button>
          </div>
          </div>
        )}
      </ImageUploading>
        )
    }

    const CreateFolderAndLink = () => {

      const [folderTitle, setfolderTitle] = useState('');
      const [folderDescription, setfolderDescription] = useState('');
      const [folderCategory, setfolderCategory] = useState('');
      const [folderBanner, setfolderBanner] = useState('');
  
      const [linkTitle, setlinkTitle] = useState('');
      const [linkDescription, setlinkDescription] = useState('');
      const [linkURL, setlinkURL] = useState('');
      const [linkLogo, setlinkLogo] = useState('');

  
      const folderDataPush = () => {

        let folderData = {
          id: uuidv4(),
          heading: folderTitle,
          description: folderDescription,
          category: folderCategory,
          linkDataList:[],
          positions:0
        }
  
        let newFolderList = [...folderList];
        newFolderList.push(folderData);
        setfolderList(newFolderList);
  
  
      }

      const addLinkDataInFolders = (e,id) => {
        console.log(id, linkTitle, linkDescription, linkURL);

        const newLinkData = {
          id: uuidv4(),
          title: linkTitle,
          description: linkDescription,
          url: linkURL
        }
        
        const folderFindData = folderList.filter(i => i.id === id);
        const folderFindIndex = folderList.findIndex(i => i.id === id);
        folderList.splice(folderFindIndex, -1)
        console.log('folderList - ',folderList);
        folderFindData[0].linkDataList.push(newLinkData)
        console.log('folderFindData - ',folderFindData);


        setlinkTitle('');
        setlinkDescription('');
        setlinkURL('');

      }


      return(
        <div>
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={10}>
        <Container
        style={{
            width:'100%',
            backgroundColor:'#07B848',
            borderRadius:8,
            marginTop:30,
            marginBottom:15,
            padding:25
        }}
        >
            <div>
            <div style={{
               padding:10,
            }}>
                
    <Typography variant="h6" component="h2" style={{
        color: '#ffffff'
    }}>
                    Enter the Heading
                </Typography>  
                <div>
                <TextField fullWidth 
                onChange={(e) => setfolderTitle(e.target.value)}
                label="Enter the heading" id="fullWidth" style={{
                   marginTop:15 
                }}/>
                </div>
            </div>
            <div style={{
               padding:10 
            }}>
                
    <Typography variant="h6" component="h2" style={{
        color: '#ffffff'
    }}>
                    Enter the Description
                </Typography>  
                <div>
                <TextField
                onChange={(e) => setfolderDescription(e.target.value)}
                fullWidth label="Enter the description" id="fullWidth" style={{
                   marginTop:15 
                }}/>
                </div>
            </div>
            <div style={{
               padding:10 
            }}>
                
    <Typography variant="h6" component="h2" style={{
        color: '#ffffff'
    }}>
                    Enter the Category
                </Typography>  
                <div>
                <TextField 
                onChange={(e) => setfolderCategory(e.target.value)}
                fullWidth label="Enter the category" id="fullWidth" style={{
                   marginTop:15 
                }}/>
                </div>
            </div>
            <div style={{
                width: '80%'
            }}>
            </div>
            </div>
            <div style={{
                textAlign:'center',
                marginTop:10,
                marginBottom:15
            }}>
            <Button 
            onClick={() => folderDataPush()}
            variant="contained"
            style={{
                width: '80%',
                margin: 20,
                backgroundColor:'#ffffff',
                color:'#000000'
            }}>ADD</Button>
            </div>
          
            <div style={{
              width:'100%',
              backgroundColor:'#FFFFFF',
              borderRadius:8,
              marginTop:30,
        }}>
        <div>
                {folderList && folderList.map((item, index) => {
                    return(
                        <div style={{
                          width:'70%',
                          backgroundColor: '#D5D5D5',
                          alignSelf: 'center',
                          borderRadius:8,
                          margin:15,
                          padding:10
                        }}>
                            <p>
                                {item.heading}
                            </p>
                            <p>
                                {item.description}
                            </p>
                            <p>
                                {item.category}
                            </p>
                            <p>
                                {item.id}
                            </p>
                            <div style={{
                                width:'78%',
                                backgroundColor:'#B6B6B6',
                            }}>
    <div style={{
               padding:10 
            }}>
                
    <Typography variant="h6" component="h2" style={{
        color: '#ffffff'
    }}>
                    Enter the Link Title
                </Typography>  
                <div>
                <TextField
                value={linkTitle} 
                onChange={(e) => setlinkTitle(e.target.value)}
                fullWidth label="Enter the category" id="fullWidth" style={{
                   marginTop:15 
                }}/>
                </div>
            </div>
    <div style={{
               padding:10 
            }}>
                
    <Typography variant="h6" component="h2" style={{
        color: '#ffffff'
    }}>
                    Enter the Link Title
                </Typography>  
                <div>
                <TextField 
                value={linkDescription} 

                onChange={(e) => setlinkDescription(e.target.value)}
                fullWidth label="Enter the category" id="fullWidth" style={{
                   marginTop:15 
                }}/>
                </div>
            </div>
    <div style={{
               padding:10 
            }}>
                
    <Typography variant="h6" component="h2" style={{
        color: '#ffffff'
    }}>
                    Enter the Link Title
                </Typography>  
                <div>
                <TextField 
                value={linkURL} 

                onChange={(e) => setlinkURL(e.target.value)}
                fullWidth label="Enter the category" id="fullWidth" style={{
                   marginTop:15 
                }}/>
                </div>
            </div>
    <div style={{
               padding:10 
            }}>
                
            <p>
              File Upload
            </p>
                
            </div>

          <Button onClick={(e) => addLinkDataInFolders(e,item.id)} variant="contained" style={{marginTop:15, backgroundColor:'#0D929EF8', width:'30%'}}>Add Link</Button>

                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
        
        </Container>
        </Grid>
        <Grid item xs={6} md={2}>
          <div>
            All Folder and List Display
          </div>
        </Grid>
   
                </Grid>
        <Button onClick={(e) => backStageToOne(e)} variant="contained" style={{marginTop:15, backgroundColor:'#CF1500', width:'20%'}}>Back</Button>
        </Box>
        </div>
      )
    }

    const UserData = () => {
      return(
        <div>
        {firstStage ? (
            <Container>
        
            <Stack spacing={2}>
            <div>
                <div style={{marginTop: 25}}>
                <Typography variant="h3" component="h2">
                    Admin
                    </Typography>
                </div>
            </div>
            <div>
                <div>
                <Typography variant="h6" component="h2" >
                    Enter User Name
                </Typography>
                <TextField style={{marginTop:10}} fullWidth label="User Name" id="fullWidth" onChange={(e) => setusername(e.target.value)} />
                </div>
            </div>
            <div>
            <div>
                <Typography variant="h6" component="h2" >
                    Enter Full Name
                </Typography>
                <TextField style={{marginTop:10}} fullWidth label="User's Full Name" id="fullWidth" onChange={(e) => setfullName(e.target.value)}/>
                </div>
            </div>
            <div>
            <div>
                <Typography variant="h6" component="h2">
                    Enter User Email
                </Typography>
                <TextField style={{marginTop:10}} fullWidth label="User's Email" id="fullWidth" onChange={(e) => setemail(e.target.value)}/>
                </div>
            </div>
            <div>
            <div>
                <Typography variant="h6" component="h2">
                    Enter User Bio
                </Typography>
                <TextField style={{marginTop:10}} fullWidth label="User's Bio" id="fullWidth" onChange={(e) => setbio(e.target.value)}/>
                </div>
            </div>
            <div>
            <div>
                <Typography variant="h6" component="h2">
                    Enter User Phase
                </Typography>
                <TextField style={{marginTop:10}} fullWidth label="User's Phase" id="fullWidth" onChange={(e) => setphase(e.target.value)} />
                </div>
            </div>
            
            <div>
                <ImageSection/>
        <Button onClick={(e) => nextStageToSecond(e)} variant="contained" style={{marginTop:15, backgroundColor:'#00921B', width:'100%', marginRight:25, marginLeft:25}}>Next</Button>

            </div>
            </Stack>
        </Container>
        ) : (
          <Container>
        
            <div>
              <p>
                Secound stage
                </p>
            </div>
      </Container>
        )
  
        }
      </div>
      )
    }

    const [firstStage, setfirstStage] = useState(true);
    const [secoundStage, setsecoundStage] = useState(false);
    const [thrirdStage, setthrirdStage] = useState(false);

    const toFolderStage = (e) => {
      e.preventDefault();
      setsecoundStage(true);
    }

    const nextStageToSecond = () => {
      setsecoundStage(true);
      setfirstStage(false);
      setthrirdStage(false);
    }

    const backStageToOne = () => {
      setfirstStage(true);
      setsecoundStage(false);
      setthrirdStage(false);
    }

    const nextStageToThird = () => {
      setfirstStage(false);
      setsecoundStage(false);
      setthrirdStage(true);
    }

    const backStageToSecond = () => {
      setfirstStage(false);
      setsecoundStage(true);
      setthrirdStage(false);
    }



    
    if(firstStage){
      return <UserData/>
    }
    else if(secoundStage){
      return (
        <Container>
          <CreateFolderAndLink/>
        </Container>
      )
    }
 
}

export default Admin