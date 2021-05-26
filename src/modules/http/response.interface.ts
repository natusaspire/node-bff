export interface IResponse<T = unknown> {
  headers: Map<string, string>;
  status: number;
  statusText: string;
  json(): Promise<T>;
  text(): Promise<string>;
}
