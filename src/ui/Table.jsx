import { flexRender } from '@tanstack/react-table';
import { TiArrowSortedUp, TiArrowSortedDown, TiArrowUnsorted } from 'react-icons/ti';

function Table({ table, caption }) {
  return (
    <table>
      <caption className="sr-only">
        {caption}
        <span>Column headers with buttons are sortable</span>
      </caption>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => {
              const isSorted = header.column.getIsSorted();
              return (
                <th
                  key={header.id}
                  {...(isSorted && {
                    'aria-sort': isSorted + 'ending',
                  })}
                >
                  <button type="button" onClick={header.column.getToggleSortingHandler()}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {
                      {
                        asc: <TiArrowSortedUp aria-hidden="true" focusable="false" />,
                        desc: <TiArrowSortedDown aria-hidden="true" focusable="false" />,
                        false: <TiArrowUnsorted aria-hidden="true" focusable="false" />,
                      }[isSorted]
                    }
                  </button>
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
