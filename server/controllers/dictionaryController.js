import dictionary from '../data/englishdictionary.json' assert { type: "json" };
import { getPopularTerms, addSearchTerm } from '../utils/popularSearch.js';

export const searchWord = (req, res) => {
    const term = req.query.term.toLowerCase();
    const definition = dictionary[term];

    if (definition) {
        addSearchTerm(term);  // Track popular searches
        res.json({ term, definition });
    } else {
        res.status(404).json({ message: "Word not found" });
    }
};

export const getPopularSearches = (req, res) => {
    const popularTerms = getPopularTerms();
    res.json({ popularTerms });
};
