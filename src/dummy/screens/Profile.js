import React from 'react'
import { useParams} from 'react-router-dom';
import Busername from '../components/Busername';
import Username from '../components/Username';

import { buserData } from '../data/users';


function Profile() {

    const {username} = useParams();
    const userFilterData = buserData.filter(i => i.userBio.userName === username);
    if(userFilterData[0])
    return (
            <Username data={userFilterData[0]}/>
    )
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