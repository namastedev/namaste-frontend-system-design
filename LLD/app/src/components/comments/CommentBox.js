const CommentBox = ({ data }) => {
  return data.map((comment, index) => (
    <div className=" pl-10 border-l-2 border-black" key={index}>
      <div className="flex">
        <div>
          <img
            className="w-16 p-2 rounded-full"
            src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png"
            alt="user"
          />
        </div>
        <div>
          <p className="font-bold px-2 py-4">{comment.username}</p>
          <p className="px-2">{comment.comment}</p>
        </div>
      </div>
      <div>{comment?.replies && <CommentBox data={comment.replies} />}</div>
    </div>
  ));
};
export default CommentBox;
