const UserProfile = (props) => {
    return(
        <div style={{margin: '20px 10px', fontSize: '15px', border :'1px solid gray'}}>
             <h2 style={{color: 'black'}}>{props.name}</h2>
             <p style={{color: 'black'}}>Age: {props.age}</p>
             <p style={{color: 'red'}}>Bio: {props.bio}</p>
        </div>

    );
};
export default UserProfile;