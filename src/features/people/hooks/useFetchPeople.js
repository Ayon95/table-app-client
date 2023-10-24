import { keepPreviousData, useQuery } from '@tanstack/react-query';
import fetchPeople from '../api/fetchPeople';

export default function useFetchPeople(queryParams, authToken = '') {
  return useQuery({
    queryKey: ['people', queryParams],
    queryFn: () => fetchPeople(queryParams, authToken),
    placeholderData: keepPreviousData,
  });
}
