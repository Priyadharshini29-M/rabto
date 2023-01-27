import React from 'react'
import { useParams} from 'react-router-dom';
import Busername from '../components/Busername';
import Username from '../components/Username';
import {userData} from '.././data/users'
import { buserData } from '../data/users';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Profile() {

    const {username} = useParams();

    const getUserProfile = (username) => {
        axios.get('/user?ID=12345')
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                });
    }

    useEffect(() => {
        
    }, [])
    


    const userFilterData = buserData.filter(i => i.userBio.userName === username);
    // const userFilterData1 = userData.filter(i => i.userBio.userName === username);
    if(userFilterData[0])
    return (
            <Busername data={userFilterData[0]}/>
    )
    // else if(userFilterData1[0])
    // return (
    //     <Username data={userFilterData1[0]} />
    // )
    else
    return (
        <div>
            <p>
                Claim our username: {username}
            </p>
            <button>
                Claim
            </button>
        </div>
    )
}
export default Profile;