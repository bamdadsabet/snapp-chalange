export interface UseFetchResult<T> {
  result: T;
  isLoading: boolean;
  error: string | null;
}