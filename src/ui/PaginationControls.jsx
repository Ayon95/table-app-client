function PaginationControls({ table }) {
  return (
    <div className="pagination-controls">
      <div className="pagination-controls__buttons">
        <button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>
          Previous
        </button>
        {Array.from({ length: table.getPageCount() }).map((_, i) => (
          <button
            className={`${table.getState().pagination.pageIndex === i ? 'btn--current-page' : ''}`}
            key={i + 1}
            onClick={() => table.setPageIndex(i)}
          >
            {i + 1}
          </button>
        ))}
        <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>
          Next
        </button>
      </div>
      <label htmlFor="selectPageSize">Page size: </label>
      <select
        id="selectPageSize"
        className="pagination-controls__select"
        value={table.getState().pagination.pageSize}
        onChange={e => table.setPageSize(Number.parseFloat(e.target.value))}
      >
        {[5, 10, 15, 20, 25].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PaginationControls;
