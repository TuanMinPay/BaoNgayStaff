const express = require('express');
const router = express.Router();
const routesPath = `${__dirname}/`;
const fs = require('fs');
const { removeExtensionFromFile } = require('../middleware/utils');

fs.readdirSync(routesPath).filter((file) => {
    // Take filename and remove last part (extension)
    const routeFile = removeExtensionFromFile(file)
    // Prevents loading of this file and auth file
    return routeFile !== 'index' ? router.use(`/${routeFile}`, require(`./${routeFile}`)) : '';
});

router.get('/', (req, res) => {
    res.render('index')
})

/*
 * Handle 404 error
 */
router.use('*', (req, res) => {
    res.status(404).json({
        errors: {
            msg: 'URL_NOT_FOUND'
        }
    })
})

module.exports = router;