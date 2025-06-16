const PostView = ({ params }: { params: { id: string } }) => {
  return <div>Post id: {params.id}</div>;
};

export default PostView;
