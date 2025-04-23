'use client';
import { useEffect, useState } from "react";
import { UseFetchResult } from "./types";

export const useFetch = <T>(url: string): UseFetchResult<T> => {
  const [result, setResult] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then(data => {
        setResult(data);
      })
      .catch(err => {
        setError(err instanceof Error ? err.message : 'An error occurred');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return { result: result!, isLoading, error };
};
