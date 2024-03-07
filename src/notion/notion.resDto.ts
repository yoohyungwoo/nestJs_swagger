export class NotionResDto {
  readonly object: string;
  readonly results: Array<any>;
  readonly nextCursor: string | null;
  readonly hasMore: boolean;
  readonly type: string;
  readonly block: object;
  readonly requestId: string;
}
