import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import fetchPeople from '../api/fetchPeople';

const FETCH_SIZE = 15;

export default function useFetchPeopleInfinite(queryParams, authToken = '') {
  return useInfiniteQuery({
    queryKey: ['peopleInfinite', queryParams],
    queryFn: ({ pageParam }) =>
      fetchPeople({ ...queryParams, page: pageParam, rowsPerPage: FETCH_SIZE }, authToken),
    initialPageParam: 1,
    getNextPageParam: previousPage => {
      return previousPage.query.page + 1;
    },
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });
}
