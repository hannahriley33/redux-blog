import { post, DELETE_POST, POST, deletePost } from './postActions';

describe('post actions', () => {

  it('creates a post action', () => {
    const action = post('FIRST BLOG POST OMGGG WHAT DO I CALL IT', 'IT DOESNT DESERVE A NAME');
    
    expect(action).toEqual({
      type: POST,
      payload: {
        title: 'IT DOESNT DESERVE A NAME',
        body: 'FIRST BLOG POST OMGGG WHAT DO I CALL IT'
      }
    });
  });

  it('creates a delete post action', () => {
    const action = deletePost('IT DOESNT DESERVE A NAME');

    expect(action).toEqual({
      type: DELETE_POST,
      payload: 'IT DOESNT DESERVE A NAME'
    });
  });
});
