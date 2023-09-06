import React, { useState } from "react";
import { CCol, CFormInput, CForm, CButton } from "@coreui/react";

const Addform = () => {
  const [user_id, setUserId] = useState({});
  const [mobile_no, setMobileNo] = useState({});
  // const [email, setEmail] = useState({});
  // const [password, setPassword] = useState({});
  // const [first_name, setFirstName] = useState({});
  // const [last_name, setLastName] = useState({});
  // const [gender, setGender] = useState({});
  // const [list_of_class, setListOfClass] = useState({});
  // const [city, setCity] = useState({});
  // const [state, setState] = useState({});
  // const [zip, setZip] = useState({});

  const uploadContactDetails = async (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      // headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: user_id,
        mobile_no: mobile_no,
      }),
    };

    const response = await fetch(
      "http://localhost:8000/addmision_list/add",
      requestOptions
    );
    const resData = await response.json();
    console.log(resData);
    // setContacts(resData)
  };
  return (
    <>
      <CForm
        className="row g-3"
        method="post"
        onSubmit={uploadContactDetails}
        style={{ margin: "20px 0px 0px 20px" }}
      >
        <CCol md={12}>
          <CFormInput
            type="text"
            id="user_id"
            name="user_id"
            label="User Id"
            className="formlabel"
            onChange={(event) => {
              setUserId(event.target.value);
            }}
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            type="number"
            id="mobile_no"
            name="mobile_no"
            label="Mobile No"
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </CCol>
        <CCol md={12}>
          <CButton type="submit" name="submit">
            Submit
          </CButton>
        </CCol>
      </CForm>
    </>
  );
};

export default Addform;
