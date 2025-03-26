import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';
import { Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { Body, UseInterceptors } from '@nestjs/common/decorators';
import { CreateDataDto } from './dtos/create-data.dto';
import { RedisService } from './redis.service';

@Controller('redis')
@UseInterceptors(CacheInterceptor)
export class RedisController {
  constructor(private readonly redisService: RedisService) {}
  @Get()
  @CacheKey('custom_key')
  @CacheTTL(20)
  async getData(@Query('key') key: string) {
    try {
      console.log(`getData2(${key})`);
      const data = await this.redisService.getData(key);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Post()
  async postData(@Body() createDataDto: CreateDataDto) {
    try {
      console.log('postData()');
      return await this.redisService.postData(createDataDto);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Delete()
  async deleteData(@Body() createDataDto: CreateDataDto) {
    try {
      console.log('deleteData()');
      return await this.redisService.deleteData(createDataDto);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
