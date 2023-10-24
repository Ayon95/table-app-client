import { useMemo, useState } from 'react';
import { useUser } from '../../contexts/authContext';
import useFetchPeopleInfinite from './hooks/useFetchPeopleInfinite';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import columns from './columns';
import Table from '../../ui/Table';

function InfiniteScrollingPeopleTable() {
  const { user } = useUser();
  const [sorting, setSorting] = useState([]);

  const sortingParams = {
    ...(sorting.length > 0 && {
      sortBy: sorting[0].id,
      sortOrder: sorting[0].desc ? 'desc' : 'asc',
    }),
  };

  const { data, isLoading, isFetching, isError, error, fetchNextPage } = useFetchPeopleInfinite(
    sortingParams,
    user?.token
  );

  const flattenedData = useMemo(() => data?.pages?.flatMap(page => page.people), [data]);
  const fetchedRows = flattenedData?.length;
  const totalRows = data?.pages?.[0].query.totalRows ?? 0;

  const table = useReactTable({
    data: flattenedData,
    columns: columns,
    state: {
      sorting,
      columnVisibility: {
        email: user?.userType === 'customer',
        city: !!user,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    manualSorting: true,
  });

  function handleScrollToBottom(e) {
    const maxScrollAmount = e.target.scrollHeight - e.target.clientHeight;
    const threshold = 50;

    // Fetch the next set of rows if the table is scrolled within the threshold from the bottom
    if (
      maxScrollAmount - e.target.scrollTop < threshold &&
      !isFetching &&
      fetchedRows < totalRows
    ) {
      fetchNextPage();
    }
  }

  return (
    <section className="section">
      <h2>Infinite Scrolling Table</h2>
      {isLoading ? (
        <p>Fetching data...</p>
      ) : isError ? (
        <p className="error">{error.message}</p>
      ) : (
        <>
          <div
            className="table-container table-container--infinite-scroll"
            onScroll={handleScrollToBottom}
          >
            <Table table={table} caption="People Details" />
          </div>
          <p>
            Fetched {fetchedRows} of {totalRows} rows
          </p>
        </>
      )}
    </section>
  );
}

export default InfiniteScrollingPeopleTable;
