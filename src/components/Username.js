import React from 'react'

export default function Username(props) {


    const data = props.data;


    const styles = {
        textStruct: {
            textAlign: 'center'
        },
        folderStruct: {
            margin: 20,
            backgroundColor: '#5C5C5C',
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
    <div>  
        <div>
            <h2 style={styles.textStruct}>
            {data.userBio.name}
            </h2>
            <h3 style={styles.textStruct}>
                @{data.userBio.userName}
            </h3>
            <h3 style={styles.textStruct}>
            {data.userBio.bio}
            </h3>
            <h3 style={styles.textStruct}>
            {data.userBio.email}
            </h3>
            <h3 style={styles.textStruct}>
            {data.userBio.age}
            </h3>
            <p style={styles.textStruct}>
                User Link
            </p>
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
