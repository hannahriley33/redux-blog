import { post, deletePost } from '../actions/postActions';
import reducer from './postReducer.js';

describe('post reducer', () => {
  it('handles post action', () => {
    const state = [];
    const action = post(
      'post body',
      'post title'
    );
    const newState = reducer(state, action);

    expect(newState).toEqual([{
      body: 'post body',
      title: 'post title'
    }]);
  });

  it('handles delete post action', () => {
    const state = [{
      body: 'post body',
      title: 'post title'
    }];
    
    const action = deletePost(0);
    const newState = reducer(state, action);

    expect(newState).toEqual([]);
  });
});
