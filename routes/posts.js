import express from 'express';
const router = express.Router();
import { getPosts, getPost, createPost, updatePost, deletePost } from '../controllers/postController.js';


// GET all posts
router.get('/', getPosts);


// GET single post
router.get('/:id',  getPost);


// POST create a post
router.post("/", createPost);


// PUT update post
router.put("/:id", updatePost);


// DELETE delete post
router.delete("/:id", deletePost);


export default router;
