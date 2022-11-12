import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColums } from "../../services/datatablesource";
import "./dataTable.scss";
import { Link } from "react-router-dom";

export default function DataTable() {
  const actionColum = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="dataTable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={userRows}
        columns={userColums.concat(actionColum)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}
