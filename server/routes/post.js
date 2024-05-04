const express = require('express');
const {
  getPosts,
  getPost,
  addPost,
  editPost,
  deletePost,
} = require('../controllers/posts');
const { addComment, deleteComment } = require('../controllers/comment');
const auth = require('../middlewares/authenticated');
const hasRole = require('../middlewares/hasRole');
const mapPost = require('../helpers/mapPost');
const mapComment = require('../helpers/mapComment');
const ROLES = require('../constants/roles');

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
  const { posts, lastPage } = await getPosts(
    req.query.search,
    req.query.limit,
    req.query.page
  );
  res.send({ data: { lastPage, posts: posts.map(mapPost) } });
});

router.get('/:id', async (req, res) => {
  const post = await getPost(req.params.id);

  res.send({ data: mapPost(post) });
});

router.post('/:id/comments', auth, async (req, res) => {
  const newComment = await addComment(req.params.id, {
    content: req.body.content,
    author: req.user.id,
  });

  res.send({ data: mapComment(newComment) });
});

router.delete(
  '/:postId/comments/:commentId',
  auth,
  hasRole([ROLES.ADMIN, ROLES.MODERATOR]),
  async (req, res) => {
    await deleteComment(req.params.postId, req.params.commentId);
    res.send({ data: req.params.commentId });
  }
);

router.post('/', auth, hasRole([ROLES.ADMIN]), async (req, res) => {
  const newPost = await addPost({
    title: req.body.data.title,
    content: req.body.data.content,
    image: req.body.data.imageUrl,
  });

  res.send({ data: mapPost(newPost) });
});

router.patch('/:id', auth, hasRole([ROLES.ADMIN]), async (req, res) => {
  const updatePost = await editPost(req.params.id, {
    title: req.body.data.title,
    content: req.body.data.content,
    image: req.body.data.imageUrl,
  });
  res.send({ data: mapPost(updatePost) });
});

router.delete('/:id', auth, hasRole([ROLES.ADMIN]), async (req, res) => {
  await deletePost(req.params.id);

  res.send({ error: null });
});

module.exports = router;
