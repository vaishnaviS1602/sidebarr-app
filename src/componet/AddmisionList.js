import React, { useState, useEffect } from "react";
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from "@coreui/react";

const ContactList = () => {
  const [addmissions, setAddmissions] = useState([]);
  useEffect(() => {
    loadAddmissiosFromServer();
  }, []);

  const loadAddmissiosFromServer = async () => {
    const response = await fetch("http://localhost:3000/addmissions");
    const resData = await response.json();
    console.log(resData);
    setAddmissions(resData);
  };

  return (
    <>
      <CTable>
        <CTableHead>
          <CTableRow>
          <CTableHeaderCell scope="col"> Id</CTableHeaderCell>
            <CTableHeaderCell scope="col">User Id</CTableHeaderCell>
            <CTableHeaderCell scope="col">Mobile No</CTableHeaderCell>
            <CTableHeaderCell scope="col">Email Id</CTableHeaderCell>
            <CTableHeaderCell scope="col">First Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Last Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Gender</CTableHeaderCell>
            <CTableHeaderCell scope="col"> Type Of Class</CTableHeaderCell>
            <CTableHeaderCell scope="col">City</CTableHeaderCell>
            <CTableHeaderCell scope="col">State</CTableHeaderCell>
            <CTableHeaderCell scope="col"> Zip</CTableHeaderCell>
            <CTableHeaderCell scope="col">Update</CTableHeaderCell>
            <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
          </CTableRow>
        </CTableHead>

        <CTableBody>
          {addmissions.map((addmission) => {
            return (
              <CTableRow key={addmission.id}>
                <CTableHeaderCell scope="row">{addmission.id}</CTableHeaderCell>
                <CTableDataCell>{addmission.user_id}</CTableDataCell>
                <CTableDataCell>{addmission.mobile_no}</CTableDataCell>
                <CTableDataCell>{addmission.email_id}</CTableDataCell>
                <CTableDataCell>{addmission.first_name}</CTableDataCell>
                <CTableDataCell>{addmission.last_name}</CTableDataCell>
                <CTableDataCell>{addmission.gender}</CTableDataCell>
                <CTableDataCell>{addmission.list_of_class}</CTableDataCell>
                <CTableDataCell>{addmission.city}</CTableDataCell>
                <CTableDataCell>{addmission.state}</CTableDataCell>
                <CTableDataCell>{addmission.zip}</CTableDataCell>
                <CTableDataCell>
                  <button className="text-decoration-none btn btn-sm btn-success">Update</button>
                </CTableDataCell>
                <CTableDataCell>
                  <button className="text-decoration-none btn btn-sm btn-danger">Delete</button>
                </CTableDataCell>
              </CTableRow>
            );
          })}
        </CTableBody>
      </CTable>
    </>
  );
};

export default ContactList;
