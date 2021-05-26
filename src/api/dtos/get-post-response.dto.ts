import { IGetCommentResponseDto } from './get-comment-response.dto';
import { IGetUserResponseDto } from './get-user-response.dto';

export interface IGetPostResponseDto {
  id: number;
  title: string;
  content: string;
  readingTime: number;
  author: IGetUserResponseDto;
  commentsCount: number;
  comments: Array<IGetCommentResponseDto>;
}
