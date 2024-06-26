const Post = require('../models/Post');

async function addPost(post) {
  const newPost = await Post.create(post);

  await newPost.populate({
    path: 'comments',
    populate: 'author',
  });

  return newPost;
}

async function editPost(id, post) {
  const newPost = await Post.findByIdAndUpdate(id, post, {
    returnDocument: 'after',
  });

  await newPost.populate({
    path: 'comments',
    populate: 'author',
  });

  return newPost;
}

async function deletePost(id) {
  return await Post.deleteOne({ _id: id });
}

async function getPost(id) {
  return await Post.findById(id).populate({
    path: 'comments',
    populate: 'author',
  });
}

async function getPosts(search = '', limit = 10, page = 1) {
  const [posts, count] = await Promise.all([
    Post.find({ title: { $regex: search, $options: 'i' } })
      .limit(limit)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 }),
    Post.countDocuments({ title: { $regex: search, $options: 'i' } }),
  ]);

  return {
    posts,
    lastPage: Math.ceil(count / limit),
  };
}

module.exports = { addPost, editPost, deletePost, getPost, getPosts };
