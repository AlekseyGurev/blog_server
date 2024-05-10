require('dotenv').config();
const path = require('path');
const baseUrl = process.env.MONGODB_CONNECTION_STRING;

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
// const cors = require('cors');

const port = 3001;
const app = express();

app.use('/', express.static('../blog_dz/dist'));
// app.use('/posts', express.static('../blog_dz/dist/index.html'));
// app.use('/post/:id', express.static('../blog_dz/dist/index.html'));

app.use(cookieParser());
app.use(express.json());
// app.use(cors());

// app.post('/register', async (req, res) => {
//   try {
//     const { user, token } = await register(req.body.login, req.body.password);
//     res
//       .cookie('token', token, { httpOnly: true })
//       .send({ error: null, user: mapUser(user) });
//   } catch (error) {
//     res.send({ error: error.message || 'Unknown error' });
//   }
// });

// app.post('/login', async (req, res) => {
//   try {
//     const { user, token } = await login(req.body.login, req.body.password);
//     res
//       .cookie('token', token, { httpOnly: true })
//       .send({ error: null, user: mapUser(user) });
//   } catch (error) {
//     res.send({ error: error.message || 'Unknown error' });
//   }
// });

// app.post('/logout', (req, res) => {
//   res.cookie('token', '', { httpOnly: true }).send({});
// });

// app.get('/posts', async (req, res) => {
//   const { posts, lastPage } = await getPosts(
//     req.query.search,
//     req.query.limit,
//     req.query.page
//   );
//   res.send({ data: { lastPage, posts: posts.map(mapPost) } });
// });

// app.get('/post/:id', async (req, res) => {
//   const post = await getPost(req.params.id);

//   res.send({ data: mapPost(post) });
// });

// app.use(auth);

// app.post('/posts/:id/comments', async (req, res) => {
//   const newComment = await addComment(req.params.id, {
//     content: req.body.content,
//     author: req.user.id,
//   });

//   res.send({ data: mapComment(newComment) });
// });

// app.get('/users', hasRole([ROLES.ADMIN]), async (req, res) => {
//   const users = await getUsers();
//   res.send({ data: users.map(mapUser) });
// });

// app.get('/users/roles', hasRole([ROLES.ADMIN]), async (req, res) => {
//   const roles = await getRoles;
//   res.send({ data: roles });
// });

// app.patch('/users/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
//   const newUser = await updateUser(req.params.id, {
//     role: req.body.roleId,
//   });
//   res.send({ data: mapUser(newUser) });
// });

// app.delete('/users/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
//   await deleteUser(req.params.id);
//   res.send({ error: null });
// });

// app.delete(
//   '/posts/:postId/comments/:commentId',
//   hasRole([ROLES.ADMIN, ROLES.MODERATOR]),
//   async (req, res) => {
//     await deleteComment(req.params.postId, req.params.commentId);
//     res.send({ error: null });
//   }
// );

// app.post('/posts', hasRole([ROLES.ADMIN]), async (req, res) => {
//   const newPost = await addPost({
//     title: req.body.title,
//     content: req.body.content,
//     image: req.body.imageUrl,
//   });

//   res.send({ data: mapPost(newPost) });
// });

// app.patch('/post/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
//   const updatePost = await editPost(req.params.id, {
//     title: req.body.title,
//     content: req.body.content,
//     image: req.body.imageUrl,
//   });
//   res.send({ data: mapPost(updatePost) });
// });

// app.delete('/post/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
//   await deletePost(req.params.id);

//   res.send({ error: null });
// });

app.use('/api', routes);
app.get('*', (req, res) => {
  res.sendFile(path.resolve('../blog_dz/dist'));
});

mongoose.connect(baseUrl).then(() => {
  app.listen(port, () => {
    console.log(`server started on port ${port}`);
  });
});
