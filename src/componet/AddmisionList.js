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
  const [addforms, setAddForms] = useState([]);

  useEffect(() => {
    loadaddformFromServer();
  }, []);

  const loadaddformFromServer = async () => {
    const response = await fetch("http://localhost:8000/addmision_list");
    const resData = await response.json();
    console.log(resData);
    setAddForms(resData);
  };

  return (
    <>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">User Id</CTableHeaderCell>
            <CTableHeaderCell scope="col">Mobile No</CTableHeaderCell>
            <CTableHeaderCell scope="col">Email Id</CTableHeaderCell>
            <CTableHeaderCell scope="col">First Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Last Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Gender</CTableHeaderCell>
            <CTableHeaderCell scope="col"> Type Of Class</CTableHeaderCell>
            <CTableHeaderCell scope="col">Update</CTableHeaderCell>
            <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
          </CTableRow>
        </CTableHead>

        <CTableBody>
          {addforms.map((addform) => {
            return (
              <CTableRow key={addform.id}>
                <CTableHeaderCell scope="row">{addform.id}</CTableHeaderCell>
                <CTableDataCell>{addform.user_id}</CTableDataCell>
                <CTableDataCell>{addform.mobile_no}</CTableDataCell>
                {/* <CTableDataCell>{addform.email_id}</CTableDataCell>
                <CTableDataCell>{addform.first_name}</CTableDataCell>
                <CTableDataCell>{addform.last_name}</CTableDataCell>
                <CTableDataCell>{addform.gender}</CTableDataCell>
                <CTableDataCell>{addform.list_of_class}</CTableDataCell> */}
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
