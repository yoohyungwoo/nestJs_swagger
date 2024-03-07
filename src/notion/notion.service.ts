import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as process from 'process';
import { NotionResDto } from './notion.resDto';

@Injectable()
export class NotionService {
  constructor(private http: HttpService) {}

  getBlock(pageId: string): Observable<NotionResDto> {
    const url = `https://api.notion.com/v1/blocks/${pageId}/children`;
    return this.http
      .get(url, {
        headers: {
          'Notion-Version': '2022-02-22',
          Authorization: `Bearer ${process.env.NOTION_SECRET_KEY}`,
        },
      })
      .pipe(map((response) => response.data));
  }
}
