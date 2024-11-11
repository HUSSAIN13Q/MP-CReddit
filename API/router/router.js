const express = require("express");
const {
  allPost,
  findPost,
  newPosts,
  deletePost,
  newComments,
  deleteComments,
  updatePost,
} = require("../controllers/controllers");

const router = express.Router();

router.get("/", allPost);
router.get("/:postId", findPost);
router.post("/", newPosts);
router.delete("/:postId", deletePost);
router.post("/:postId/comments", newComments);
router.delete("/comments/:commentsId", deleteComments);
router.put("/:postId", updatePost);
router.put("/comments/:commentsId", updateComments);

module.exports = router;
