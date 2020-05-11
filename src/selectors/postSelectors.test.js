import { getPosts, getPostByIndex } from './postSelectors';

describe('post selectors', () => {
  it('gets all blog posts', () => {
    const state = [{
      title: 'post title',
      body: 'post body'
    }];

    const posts = getPosts(state);

    expect(posts).toEqual([{
      title: 'post title',
      body: 'post body'
    }]);
  });

  // it('gets blog post by index', () => {
  //   const state = [{

  //   }]
  // })
})