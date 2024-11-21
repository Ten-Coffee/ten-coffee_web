import { BASE_URL } from '@/constants/base-url.constant';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface RequestOptions<T> {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: T;
  queryParams?: Record<string, string | number>;
}

export class ApiService {
  private readonly resourceUrl: string;

  constructor(resourcePath: string) {
    this.resourceUrl = `${BASE_URL}${resourcePath}`;
  }

  private buildUrl(
    endpoint: string,
    queryParams?: Record<string, string | number>
  ): string {
    const url = new URL(this.resourceUrl + endpoint);
    if (queryParams) {
      Object.entries(queryParams).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }
    return url.toString();
  }

  async request<TResponse, TBody = unknown>(
    endpoint: string = '',
    options: RequestOptions<TBody> = {}
  ): Promise<TResponse> {
    const { method = 'GET', headers = {}, body, queryParams } = options;

    const url = this.buildUrl(endpoint, queryParams);

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: body ? JSON.stringify(body) : undefined
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }

    return {} as TResponse;
  }
}
