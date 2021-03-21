import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPosts, fetchPostAndUsers } from '../actions/index'
import UserHeader from './UserHeader'

const PostList = ({ fetchPostAndUsers, posts }) => {

    useEffect(() => {
        fetchPostAndUsers();
       
      },[]);

    const postsLists =  () => {
        return posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <h1 className="header">{post.title}</h1>
                        <div className="description">{post.body}</div>
                    </div>
                    <UserHeader userId={post.userId} />
                </div>
            );
        });
    }

      
    return (
        
        <div className="ui container ui relaxed divided list">
            {postsLists()}
        </div>
    )

    
}



const mapStatetoProp = (state) => {
    return {posts: state.post}
};

export default connect(
    mapStatetoProp, 
    { fetchPostAndUsers: fetchPostAndUsers }
    )(PostList);
