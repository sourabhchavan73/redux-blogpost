import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import  { fetchUser } from '../actions/index'

const UserHeader = ({ userId, fetchUser, users }) => {

    // useEffect(() => {
    //     fetchUser(userId)
    //   },[]);

      //we fetching all the api list just for only user 
    //   const user = users.find(user => user.id === userId)

      if(!users){
          return null
      }

    return (
        <div>
            <br />
            <h1 style={{color:'red'}}>{users.name}</h1>
           
        </div>
    )
}


const mapStatetoProps = ( state, ownProps ) => {
    return { users: state.users.find(user => user.id === ownProps.userId)};
}

export default connect( mapStatetoProps,
    // { fetchUser: fetchUser }    
)(UserHeader);

