const CommentBox = ({ data }) => {
  return data.map((comment, index) => (
    // pl-10 is padding left of 10, border-l-2 is border left of 2px, and Recursion will take care of replies styling as it is calling itself
    <div className=" pl-10 border-l-2 border-black" key={index}>
    {/* This div is to show content like image, username and comment */}
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
      {/* If a given comment has replies call the component itself, which is using Recursion */}
      <div>{comment?.replies && <CommentBox data={comment.replies} />}</div>
    </div>
  ));
};
export default CommentBox;
