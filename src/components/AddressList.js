import React from "react";
import DataTable from "react-data-table-component";
import { Button } from "reactstrap";

const AddressList = ({ addresses, onAdd, onEdit }) => {
  const columns = [
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Date of Birth", selector: (row) => row.dob, sortable: true },
    { name: "Address", selector: (row) => row.address },
    { name: "City", selector: (row) => row.city },
    { name: "Country", selector: (row) => row.country },
    { name: "Phone", selector: (row) => row.phone },
    { name: "Email", selector: (row) => row.email },
    {
      name: "Actions",
      cell: (row, index) => (
        <button className="edit-button" onClick={() => onEdit(index)}>
          Edit
        </button>
      ),
    },
  ];

  return (
    <div className="container mt-4">
      {}
      <div className="add-button-container">
        <Button  onClick={onAdd} className="add-address-button">
          Add Address
        </Button>
      </div>
      
      <DataTable columns={columns} data={addresses} pagination />
    </div>
  );
};

export default AddressList;