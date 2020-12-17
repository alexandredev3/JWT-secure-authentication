import bcrypton from 'bcryptjs';

import IHashProvider from '../models/IHashProvider';
import config from '../../../config';

class HashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    const hash = await bcrypton.hash(payload, config.hash.hashSaltRounds);

    return hash;
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    const compare = await bcrypton.compare(payload, hashed);

    return compare;
  }
}

export default HashProvider;