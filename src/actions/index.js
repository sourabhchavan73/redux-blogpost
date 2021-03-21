import _ from 'lodash'
import jsonplaceholder from '../api/jsonPlaceholder'


// fetching both post and user to overcome multiple api call
export const fetchPostAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts())
    const userIds = _.uniq(_.map(getState().post, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)));
}

// fetching List of posts
export const fetchPosts = () => async dispatch  => {
    const response = await jsonplaceholder.get('/posts')

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
} ;

// fetching single user
export const fetchUser = id => async dispatch => {
    const response = await jsonplaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
}
