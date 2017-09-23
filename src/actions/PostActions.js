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
                type: POST_STATUS,
                payload: true
            });
            dispatch({
                type: FETCH_POSTS,
                payload: data.val()
            })
        }, () => {
            dispatch({
                type: POST_STATUS,
                payload: -1
            })
        });
    }
}

export function savePost(values) {
    return dispatch => database.push(values);
}

export function deletePost(id) {
    return dispatch => database.child(id).remove();
}