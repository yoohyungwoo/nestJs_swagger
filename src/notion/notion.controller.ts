import { Controller, Get, Param } from '@nestjs/common';
import { NotionService } from './notion.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { NotionResDto } from './notion.resDto';

@Controller('notion')
@ApiTags('Notion API')
export class NotionController {
  constructor(private notionService: NotionService) {}

  @Get('list/:pageId')
  @ApiOperation({
    summary: 'Notion List 조회',
    description: 'Notion의 폴더안에 List 조회하는 API',
  })
  get(@Param('pageId') pageId: string): Observable<NotionResDto> {
    return this.notionService.getBlock(pageId);
  }
}
