import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager'; // ! Don't forget this import
import { Inject, Injectable } from '@nestjs/common';
import { CreateDataDto } from './dtos/create-data.dto';

@Injectable()
export class RedisService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  async getData(key: string): Promise<string | undefined | null> {
    return await this.cacheManager.get<string>(key); // ? Retrieve data from the cache
  }

  async postData(createDataDto: CreateDataDto) {
    const { key, value } = createDataDto;
    await this.cacheManager.set(key, value); //  ? Set data in the cache
  }

  async deleteData(createDataDto: CreateDataDto) {
    const { key } = createDataDto;
    await this.cacheManager.del(key); // ? Delete data from the cache
  }
}
