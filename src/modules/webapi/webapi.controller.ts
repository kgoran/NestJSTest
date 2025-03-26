import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { WebapiService } from './webapi.service';

@Controller('webapi')
export class WebapiController {
  constructor(private readonly webapiService: WebapiService) {}

  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  @Get('post/:id')
  async getPostById(@Param('id') id: string): Promise<string> {
    return `test${id}}`;
  }

  @Get('filtered-posts/:searchString')
  async getFilteredPosts(
    @Param('searchString') searchString: string,
  ): Promise<string[]> {
    return [`test1 ${searchString}`, 'test2'];
  }

  @Post('post')
  async createDraft(
    @Body() postData: { title: string; content?: string; authorEmail: string },
  ): Promise<string> {
    return `test1 ${postData.title}`;
  }

  @Post('user')
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<string> {
    return `test1 ${userData.name} ${userData.email}`;
  }

  @Put('publish/:id')
  async publishPost(@Param('id') id: string): Promise<string> {
    return `test1 ${id}`;
  }
}
