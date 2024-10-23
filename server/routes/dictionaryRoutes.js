import { Router } from 'express';
import { searchWord, getPopularSearches } from '../controllers/dictionaryController.js';

const router = Router();

// Route to search a word
router.get('/search', searchWord);

// Route to get the popular search terms
router.get('/popular', getPopularSearches);

export default router;
