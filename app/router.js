// 'use strict';

const Nodal = require('nodal');

const router = new Nodal.Router();

/* Middleware */
/* executed *before* Controller-specific middleware */

const CORSMiddleware = Nodal.require('middleware/cors_middleware.js');
// const CORSAuthorizationMiddleware = Nodal.require('middleware/cors_authorization_middleware.js');
// const ForceWWWMiddleware = Nodal.require('middleware/force_www_middleware.js');
// const ForceHTTPSMiddleware = Nodal.require('middleware/force_https_middleware.js');

router.middleware.use(CORSMiddleware);
// router.middleware.use(CORSAuthorizationMiddleware);
// router.middleware.use(ForceWWWMiddleware);
// router.middleware.use(ForceHTTPSMiddleware);

/* Renderware */
/* executed *after* Controller-specific renderware */

const GzipRenderware = Nodal.require('renderware/gzip_renderware.js');

router.renderware.use(GzipRenderware);

/* Routes */

const IndexController = Nodal.require('app/controllers/index_controller.js');

/* generator: begin imports */

const UsersController = Nodal.require('app/controllers/users_controller.js');
const CrumbtrailsController = Nodal.require('app/controllers/crumbtrails_controller.js');
const CrumbsController = Nodal.require('app/controllers/crumbs_controller.js');

/* generator: end imports */

router.route('/').use(IndexController);

/* generator: begin routes */

router.route('/users/{id}').use(UsersController);
router.route('/crumbtrails/{id}').use(CrumbtrailsController);
router.route('/crumbs/{id}').use(CrumbsController);

/* generator: end routes */

module.exports = router;
