import * as Style from '../styles';

const PostItem = ({ post }: {post : Object}) => (
  <>
    <Style.Rowtable>
      <Style.ContentField>{post.id}</Style.ContentField>
      <Style.ContentField>{post.title}</Style.ContentField>
      <Style.ContentField>{post.body}</Style.ContentField>
    </Style.Rowtable>
  </>
);

export default PostItem;
