import { Controller, Get, Param } from '@nestjs/common';
import { EncryptionService } from './encryption.service';

@Controller('encryption')
export class EncryptionController {
  constructor(private readonly encryptionService: EncryptionService) {}

  @Get('encrypt/:text')
  async encrypr(@Param('text') text: string): Promise<string> {
    return await this.encryptionService.encrypt(text);
  }

  @Get('decrypt/:text')
  async decrypt(@Param('text') text: string): Promise<string> {
    return await this.encryptionService.decrypt(text);
  }

  @Get('hash-password/:password')
  async hashPassword(@Param('password') password: string): Promise<string> {
    return await this.encryptionService.hashPassword(password);
  }

  @Get('compare-password/:password/:hash')
  async comparePassword(
    @Param('password') password: string,
    @Param('hash') hash: string,
  ): Promise<boolean> {
    return await this.encryptionService.comparePassword(password, hash);
  }
}
