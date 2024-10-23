const popularSearches = {};

export const addSearchTerm = (term) => {
    if (popularSearches[term]) {
        popularSearches[term]++;
    } else {
        popularSearches[term] = 1;
    }
};

export const getPopularTerms = () => {
    return Object.entries(popularSearches)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([term]) => term);
};
