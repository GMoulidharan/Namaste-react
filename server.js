const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();

// Proxy API requests to Swiggy's API
app.use(
    '/api',
    createProxyMiddleware({
        target: 'https://www.swiggy.com',
        changeOrigin: true,
        pathRewrite: {
            '^/api': '', // Remove '/api' from the path
        },
    })
);

// Serve the built React app in production
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(3000, () => {
    console.log('Proxy server is running at http://localhost:3000');
});
