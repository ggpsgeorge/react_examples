import profilePic from '../assets/profilePic.png'

function UserProfile() {

    return(
        <div className='profile-card'>
            <img className='profile-image' src={profilePic} alt="" />
            <h2>Name</h2>
            <p>Description</p>
        </div>
    );

}

export default UserProfile