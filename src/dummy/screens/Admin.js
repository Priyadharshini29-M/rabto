import { Container, Stack, Item, Paper, Typography, TextField, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ImageUploading from 'react-images-uploading';
import axios from 'axios';


function Admin() {

    const [username, setusername] = useState('');
    const [fullName, setfullName] = useState('');
    const [email, setemail] = useState('');
    const [bio, setbio] = useState('');
    const [phase, setphase] = useState('');
    const [images, setImages] = React.useState([]);

    const maxNumber = 69;
  
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

  return (
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
            <TextField style={{marginTop:10}} fullWidth label="User's Phase" id="fullWidth" />
            </div>
        </div>
        <div>
            <ImageSection/>
        </div>
        </Stack>
    </Container>
  )
}

export default Admin