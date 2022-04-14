const express = require('express');
const router = express.Router();

//Require controller modules
const book_controller = require('../controllers/bookController');
const bookinstance_controller = require('../controllers/bookinstanceController');
const author_controller = require('../controllers/authorController');
const genre_controller = require('../controllers/genreController');

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
