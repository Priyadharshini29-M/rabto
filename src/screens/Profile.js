import React from 'react'
import { useParams} from 'react-router-dom';

import { userData } from '../data/users';


function Profile() {

    const {username} = useParams();




    return (
        <div>
            {username}
            {console.log("Userbio ",userData.userBio)}
            {console.log("Userlink ",userData.userLinks)}
            <h2>
            {userData.userBio.name}
            </h2>
            <h3>
            {userData.userBio.userName}
            </h3>
            <h3>
            {userData.userBio.bio}
            </h3>
            <h3>
            {userData.userBio.email}
            </h3>
            <h3>
            {userData.userBio.age}
            </h3>
            <p>
                User Link
            </p>
            <div>
                {userData.userLinks && userData.userLinks.map((item, index) => {
                    if(item.title === 'Portfolio')
                    return(
                        <div>
                            <h3>
                                {console.log('item ',item)}
                               Title: {item.title}
                            </h3>
                            <div>
                                {item.links.map((lin, index) => {
                                    return(
                                        <div>
                                            <p>
                                            {lin.heading}
                                            </p>
                                            <p>
                                            {lin.description}
                                            </p>
                                            <p>
                                            {lin.url}
                                            </p>
                                            <p>
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
                        <div>
                            <h3>
                                {console.log('item ',item)}
                               Title: {item.title}
                            </h3>
                            <div>
                                {item.links.map((lin, index) => {
                                    return(
                                        <div>
                                            <p>
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
                        <div>
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
            {console.log('userName - ',userData.userBio.name)}
            <p>
                User 
            </p>
        </div>

    )
}
export default Profile;