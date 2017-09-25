import { database } from '../firebase';

export const FETCH_POSTS = 'fetch_posts';
export const POST_STATUS = 'posts_status';
export function getPosts() {
    return dispatch => {
        dispatch({
            type: POST_STATUS,
            payload: true
        });
        database.on('value', data => {           
            dispatch({
                type: FETCH_POSTS,
                payload: data.val()
            })
            dispatch({
                type: POST_STATUS,
                payload: false
            });
        }, () => {
            dispatch({
                type: POST_STATUS,
                payload: -1
            })
        });
    }
}

export function savePost(post, uid) {
    return dispatch => database.push({...post, uid});
}

export function deletePost(id) {
    return dispatch => database.child(id).remove();
}