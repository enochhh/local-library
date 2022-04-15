const express = require('express');
const router = express.Router();

//Require controller modules
const book_controller = require('../controllers/bookController');
const bookinstance_controller = require('../controllers/bookinstanceController');
const author_controller = require('../controllers/authorController');
const genre_controller = require('../controllers/genreController');
const author = require('../models/author');

// BOOK ROUTES //

// GET catalog home page
router.get('/', book_controller.index);

// GET request for creating a Book.  NOTE this must come before routes that display Book (uses id)
router.get('/book/create', book_controller.book_create_get);

// POST request for creating a Book
router.post('/book/create', book_controller.book_create_post);

// GET request for deleting a Book
router.get('/book/:id/delete', book_controller.book_delete_get);

// POST request for deleting a Book
router.post('/book/:id/delete', book_controller.book_delete_post);

// GET request for updating a Book
router.get('/book/:id/update', book_controller.book_update_get);

// POST request for updating a Book
router.post('/book/:id/update', book_controller.book_update_post);

// GET request for one Book
router.get('/book/:id', book_controller.book_detail);

// Get request for all Books
router.get('/books', book_controller.book_list);

// AUTHOR ROUTES //

// GET request for creating Author. NOTE This must come before route for id (i.e. display author)
router.get('/author/create', author_controller.author_create_get);

// POST route for creating Author
router.post('/author/create', author_controller.author_create_post);

// GET request for deleting Author
router.get('/author/:id/delete', author_controller.author_delete_get);

// POST request for deleting Author
router.post('/author/:id/delete', author_controller.author_delete_post);

//GET request for updating Author
router.get('/author/:id/update', author_controller.author_update_get);

// POST request for updating Author 
router.post('/author/:id/update', author_controller.author_update_post);

// GET request for one Author
router.get('/author/:id', author_controller.author_detail);

// GET request for all Authors
router.get('/authors', author_controller.author_list);

// GENRE ROUTES //

// GET request for creating Genre 
router.get('/genre/create', genre_controller.genre_create_get);

// POST request for creating Genre
router.post('/genre/create', genre_controller.genre_create_post);

// GET request for deleting Genre 
router.get('/genre/:id/delete', genre_controller.genre_delete_get);

// POST request for deleting Genre
router.post('/genre/:id/delete', genre_controller.genre_delete_post);

// GET request for updating Genre
router.get('/genre/:id/update', genre_controller.genre_update_get); 

// POST request for updating Genre
router.post('/genre/:id/update', genre_controller.genre_update_post);

// GET request for one Genre
router.get('/genre/:id', genre_controller.genre_detail);

// GET request for all Genres
router.get('/genres', genre_controller.genre_list);

