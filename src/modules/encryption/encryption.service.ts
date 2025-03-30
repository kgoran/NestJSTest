import { Injectable } from '@nestjs/common';
import { createCipheriv, scrypt, createDecipheriv } from 'crypto';
import { promisify } from 'util';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EncryptionService {
  public async encrypt(text: string): Promise<string> {
    const password =
      process.env.ENC_PASSWORD ?? 'Passw0rd used to gEner4te kEy';
    const iv = Buffer.from(
      process.env.ENC_INITIALIZATION_VECTOR ?? '$#$%&re(&%&#$"$#fdser#!',
      'hex',
    );

    const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;

    const cipher = createCipheriv('aes-256-ctr', key, iv);

    const encryptedText = Buffer.concat([cipher.update(text), cipher.final()]);
    return encryptedText.toString('hex');
  }

  public async decrypt(text: string): Promise<string> {
    const password =
      process.env.ENC_PASSWORD ?? 'Passw0rd used to gEner4te kEy';
    const iv = Buffer.from(
      process.env.ENC_INITIALIZATION_VECTOR ?? '$#$%&re(&%&#$"$#fdser#!',
      'hex',
    );

    const arrayBuffer = Buffer.from(text, 'hex');

    const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;

    const decipher = createDecipheriv('aes-256-ctr', key, iv);

    const decryptedText = Buffer.concat([
      decipher.update(Buffer.from(arrayBuffer)),
      decipher.final(),
    ]);
    return Buffer.from(decryptedText.toString('hex'), 'hex').toString();
  }

  public async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  public async comparePassword(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
