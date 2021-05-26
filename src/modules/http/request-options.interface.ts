import { Agent } from 'http';

export interface IRequestOptions {
  body?: string | URLSearchParams;
  headers?: Map<string, string>;
  agent?: Agent;
  compress?: boolean;
  maxRedirects?: number;
  maxBodySize?: number;
  timeout?: number;
}
