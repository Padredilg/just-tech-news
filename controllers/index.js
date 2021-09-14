const router = require('express').Router();

const apiRoutes = require('./api');//gets from index
const homeRoutes = require('./home-routes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {//catchall
    res.status(404).end();
});

module.exports = router;