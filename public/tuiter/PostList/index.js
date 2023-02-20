import PostItem from "./PostItem.js";
import post from "./Homeposts.js";
const PostList = () => {
    return(`
      <ul class="list-group">
         ${
        post.map(post => {
            return(PostItem(post));
        }).join('')
    }
      </ul>
   `);
}
export default PostList;