import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColums } from '../../services/datatablesource';
import './dataTable.scss';

export default function DataTable() {
  return (
    <div className='dataTable'>
      <DataGrid
        rows={userRows}
        columns={userColums}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
