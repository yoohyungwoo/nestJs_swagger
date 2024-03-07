import { Controller, Get } from '@nestjs/common';
import { NotionService } from './notion.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('notion')
@ApiTags('Notion API')
export class NotionController {
  constructor(private notionService: NotionService) {}

  @Get('list')
  @ApiOperation({
    summary: 'Notion List 조회',
    description: 'Notion의 폴더안에 List 조회하는 API',
  })
  get() {
    return this.notionService.getBlock('8ea8a266-b87e-47bd-be61-aa0da70f15bc');
  }
}
