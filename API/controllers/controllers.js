const posts = require("../../post");
const uuid4 = require("uuid4");
const { post } = require("../router/router");

exports.allPost = function (req, res) {
  const { title } = req.query;
  let findTitle = posts;
  if (title) {
    findTitle = posts.filter((post) =>
      post.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
    );
  }
  res.status(200).json(findTitle);
};

exports.findPost = function (req, res) {
  const findId = posts.find((post) => post.id === req.params.postId);
  if (!findId) res.status(404).json({ message: "no post" });
  res.status(200).json(findId);
};

exports.newPosts = function (req, res) {
  const { title, description } = req.body;
  const newPost = {
    id: uuid4(),
    title,
    description,
    comments: [],
  };
  if (!title || !description) res.status(400).json({ message: "Bad Request" });
  if (typeof title !== "string")
    res.status(400).json({ message: "The 'title' field must be a string." });
  if (typeof description !== "string")
    res
      .status(400)
      .json({ message: "The 'description' field must be a string." });
  posts.unshift(newPost);
  res.status(201).json(newPost);
};

exports.deletePost = function (req, res) {
  const findId = posts.find((post) => post.id === req.params.postId);
  if (!findId) res.status(404).json({ message: "no post" });

  const postIndex = posts.findIndex((post) => post.id === req.params.postId);
  posts.splice(postIndex, 1);

  res.status(204).json({ message: "the post have been deleted" });
};

exports.newComments = function (req, res) {
  const findId = posts.find((p) => p.id === req.params.commentsId);
  if (!findId) res.status(404).json({ message: "no post" });
  const { username, comment } = req.body;

  const newComment = {
    id: uuid4(),
    username,
    comment,
  };

  if (!username || !comment)
    res.status(400).json({ message: "Username or comment is missing" });
  if (typeof username !== "string")
    res.status(400).json({ message: "The 'username' field must be a string." });
  if (typeof comment !== "string")
    res.status(400).json({ message: "The 'comment' field must be a string." });

  findId.comments.unshift(newComment);
  res.status(201).json(newComment);
  // id: `${findId.comments.length + 101}`,
};

exports.deleteComments = function (req, res) {
  const findId = posts.find((post) => post.id === req.params.commentsId);
  if (!findId) {
    return res.status(404).json({ message: "no post" });
  }

  const commentIndex = findId.comments.findIndex(
    (comment) => comment.id === req.params.commentsId
  );
  findId.comments.splice(commentIndex, 1);

  res.status(204).json({ message: "the comment have been deleted" });
};

exports.updatePost = function (req, res) {
  const findId = posts.find((post) => post.id === req.params.postId);
  if (!findId) res.status(404).json({ message: "no post" });
  res.status(200).json(findId);

  const { title, description } = req.body;

  if (!title || !description) res.status(400).json({ message: "Bad Request" });
  findId.title = title;
  findId.description = description;

  res.status(200).json(findId);
};

exports.updateComments = function (req, res) {
  const findId = posts.find((post) => post.id === req.params.commentsId);
  if (!findId) {
    return res.status(404).json({ message: "no post" });
  }
  res.status(200).json(findId);
  const commentUpdate = findId.comments.find(
    (comment) => comment.id === req.params.commentsId
  );
  const { username, comment } = req.body;
  if (!username || !comment) res.status(400).json({ message: "Bad Request" });
  commentUpdate.username = username;
  commentUpdate.comment = comment;

  res.status(200).json(commentUpdate);
};
