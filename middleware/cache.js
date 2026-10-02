const cache = new Map();
const CACHE_TTL_MS = 60 * 1000; // 60 seconds

function cacheMiddleware(req, res, next) {
    const key = req.originalUrl || req.url;
    const cachedEntry = cache.get(key);

    if (cachedEntry && Date.now() - cachedEntry.timestamp < CACHE_TTL_MS) {
        return res.json(cachedEntry.data);
    }

    const originalJson = res.json.bind(res);
    res.json = (body) => {
        cache.set(key, {
            data: body,
            timestamp: Date.now(),
        });
        return originalJson(body);
    };

    next();
}

module.exports = {
    cacheMiddleware,
};
