import React from 'react';

const FollowersCard = props => {
    return(
        <div>
        
            {props.followers.map((follower, id) => (
                <div>
                    <img width='150px' src = {follower.avatar_url} alt =''/>
                    <h3>GitHub Name: {follower.login}</h3>
                </div> 
            ))}
        
        </div>
    )
}

export default FollowersCard;