import { getFormattedDate } from '../../utils/helpers';

const columns = [
  {
    header: 'ID',
    accessorKey: 'id',
  },
  {
    header: 'First Name',
    accessorKey: 'firstName',
  },
  {
    header: 'Last Name',
    accessorKey: 'lastName',
  },
  {
    header: 'Full Name',
    accessorKey: 'fullName',
    accessorFn: row => `${row.firstName} ${row.lastName}`,
  },
  {
    header: 'Email',
    accessorKey: 'email',
  },
  {
    header: 'City',
    accessorKey: 'city',
  },
  {
    header: 'Registered At',
    accessorKey: 'registeredDate',
    cell: info => getFormattedDate(info.getValue()),
  },
  {
    header: 'Is Private',
    accessorKey: 'isPrivate',
  },
];

export default columns;
