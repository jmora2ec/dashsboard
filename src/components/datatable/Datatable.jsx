import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColums } from '../../services/datatablesource';
import './dataTable.scss';

export default function DataTable() {

  const actionColum =[
    {
      field:'action',
      headerName:'Action',
      width:200,
      renderCell:()=>{
      return (
        <div className='cellAction'>
          <div className='viewButton'>View</div>
          <div className='deleteButton'>Delete</div>
        </div>
      )
      }
    }
  ]


  return (
    <div className='dataTable'>
      <DataGrid
        rows={userRows}
        columns={userColums.concat(actionColum)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}
