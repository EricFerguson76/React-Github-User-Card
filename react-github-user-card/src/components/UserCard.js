import React from 'react';


const UserCard = props => {
    return(
        <div>
            <img width='150px' src = {props.user.avatar_url} alt =''/>
            <h1>Name: {props.user.name}</h1>
            <h3>GitHub Name: {props.user.login}</h3>
            <h3>Followers: {props.user.followers}</h3>
            <h3>Following: {props.user.following}</h3>
            <h4>Bio: {props.user.bio}</h4>
        </div>
    )

}

export default UserCard;