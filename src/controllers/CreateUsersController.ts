import { Context } from 'koa';
import { classToClass } from 'class-transformer';
import { container } from 'tsyringe';

import CreateUserService from '../services/CreateUserService';

class CreateUsersController {
  public async create(context: Context) {
    const {
      name,
      email,
      password,
      role
    } = context.request.body;

    const createUser = container.resolve(CreateUserService)

    const user = await createUser.execute({
      name,
      email,
      password,
      role
    });
    
    return context.body = {
      status: 200,
      user: classToClass(user)
    }
  }
}

export default CreateUsersController;