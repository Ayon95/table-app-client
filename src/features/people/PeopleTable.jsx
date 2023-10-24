import { useState } from 'react';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useUser } from '../../contexts/authContext';
import columns from './columns';
import useFetchPeople from './hooks/useFetchPeople';
import Table from './../../ui/Table';
import PaginationControls from '../../ui/PaginationControls';

function PeopleTable() {
  const { user } = useUser();
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading, isError, error } = useFetchPeople(
    {
      page: pagination.pageIndex + 1,
      rowsPerPage: pagination.pageSize,
      ...(sorting.length > 0 && {
        sortBy: sorting[0].id,
        sortOrder: sorting[0].desc ? 'desc' : 'asc',
      }),
    },
    user?.token
  );

  const table = useReactTable({
    data: data?.people ?? [],
    columns,
    pageCount: data?.query.totalPages ?? -1,
    state: {
      pagination,
      sorting,
      columnVisibility: {
        email: user?.userType === 'customer',
        city: !!user,
      },
    },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    manualSorting: true,
  });

  return (
    <section className="section">
      <h2>Paginated Table</h2>
      {isLoading ? (
        <p>Fetching data...</p>
      ) : isError ? (
        <p>{error.message}</p>
      ) : (
        <>
          <div className="table-container">
            <Table table={table} caption="People Details" />
          </div>
          <PaginationControls table={table} />
        </>
      )}
    </section>
  );
}

export default PeopleTable;
