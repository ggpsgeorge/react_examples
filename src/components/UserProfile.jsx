import profilePic from '../assets/profilePic.png'

function UserProfile() {

    const handleClick = (e) => {
        console.log(e)
    } 

    return(
        <div onClick={(e) => handleClick(e)} className='profile-card'>
            <img className='profile-image' src={profilePic} alt="profile picture" />
            <h2>Profile Name</h2>
            <p>Profile Description</p>
        </div>
    );

}

export default UserProfile