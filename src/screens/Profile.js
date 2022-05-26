import React from 'react'
import { useParams} from 'react-router-dom';
import Username from '../components/Username';

import { userData } from '../data/users';


function Profile() {

    const {username} = useParams();
    const userFilterData = userData.filter(i => i.userBio.userName === username);
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