import { ICreatePostPort } from '../../ports/out/create-post.port';
import { IUpdatePostPort } from '../../ports/out/update-post.port';
import { IDeletePostPort } from '../../ports/out/delete-post.port';
import { IGetPostCommentsPort } from '../../ports/out/get-post-comments.port';
import { IGetPostPort } from '../../ports/out/get-post.port';
import { IGetUserPort } from '../../ports/out/get-user.port';

export interface IHttpRepository
  extends IGetUserPort,
    IGetPostPort,
    IGetPostCommentsPort,
    ICreatePostPort,
    IUpdatePostPort,
    IDeletePostPort {}
