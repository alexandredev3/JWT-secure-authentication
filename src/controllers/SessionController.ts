import { Context } from 'koa';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import AuthenticateService from '../services/AuthenticateService';

class SessionController {
  public async create(context: Context) {
    const {
      email,
      password
    } = context.request.body;

    const authenticateUser = container.resolve(AuthenticateService);

    const user = await authenticateUser.execute({ email, password });

    return context.response.body = {
      status: 200,
      user: classToClass(user)
    };
  }
}

export default SessionController;