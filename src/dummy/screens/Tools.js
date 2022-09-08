import { Container, Typography, TextField, Button } from '@mui/material'
import React, { useState }  from 'react'

function Tools() {

    const [folderHeading, setfolderHeading] = useState('');
    const [folderDescription, setfolderDescription] = useState('');
    const [folderCategory, setfolderCategory] = useState('');

    const [folderList, setfolderList] = useState([]);


    const folderEntries = () => {
        
        const folderData = {
            name: folderHeading,
            description: folderDescription,
            category: folderCategory
        };

        let newFolderData = [...folderList];
        newFolderData.push(folderData);
        

    }



  return (
    <div
    
    >
        <h2>
                goBy.in Tools
        </h2>
    <Container
    style={{
        width:'80%',
        backgroundColor:'#07B848',
        borderRadius:8,
        marginTop:30,
        marginBottom:15
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
                Enter the Category
            </Typography>  
            <div>
            <TextField fullWidth label="Enter the description" id="fullWidth" style={{
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
            <TextField fullWidth label="Enter the description" id="fullWidth" style={{
               marginTop:15 
            }}/>
            </div>
        </div>
        <div style={{
            width: '80%'
        }}>
        </div>
        </div>

        <div>
            {folderList && folderList.map((item, index) => {
                return(
                    <div>
                        <p>
                            {item.name}
                        </p>
                        <p>
                            {item.description}
                        </p>
                    </div>
                )
            })
            }
        </div>

        <div style={{
            textAlign:'center',
            marginTop:10,
            marginBottom:15
        }}>
        <Button variant="contained" style={{
            width: '80%',
            margin: 20,
            backgroundColor:'#ffffff',
            color:'#000000'
        }}>ADD</Button>
        </div>
    </Container>
    </div>
  )
}

export default Tools