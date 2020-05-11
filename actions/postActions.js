export const POST = 'POST';
export const post = (body, title) => ({
    type: POST,
    payload: {
        body,
        title
    }
});

export const DELETE_POST = 'DELETE_POST';
export const deletePost = post => ({
    type: DELETE_POST,
    payload: post
});

