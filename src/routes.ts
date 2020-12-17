import Router from 'koa-router';

import CreateUsersController from './controllers/CreateUsersController';
import SessionController from './controllers/SessionController';

import ensureAuthenticate from './middlewares/ensureAuthenticate';

const routes = new Router();

const createUsersController = new CreateUsersController();
const sessionController = new SessionController();

routes.post('/users', createUsersController.create);

routes.post('/session', sessionController.create);

routes.get('/employes', ensureAuthenticate, (context) => {
  return context.response.body = {
    status: 200,
    employes: [
      {
        name: "Alexandre",
        role: "Development"
      },
      {
        name: "Diego",
        role: "Development"
      },
      {
        name: "Maykão",
        role: "Development"
      },
      {
        name: "Rodão",
        role: "Development"
      },
    ]
  }
})

export default routes;