import React, { useState } from "react";
import { CCol, CFormInput, CForm, CButton } from "@coreui/react";

const EditAddmission = () => {
  const [user_id, setUserId] = useState({});
  const [mobile_no, setMobileNo] = useState({});
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const [first_name, setFirstName] = useState({});
  const [last_name, setLastName] = useState({});
  const [gender, setGender] = useState({});
  const [list_of_class, setListOfClass] = useState({});
  const [city, setCity] = useState({});
  const [state, setState] = useState({});
  const [zip, setZip] = useState({});

  const [addmission, setAddmission] = useState("");
  const { id } = useParams();

  useEffect(() => {
    loadAddmissionDetail();
  }, []);

  const loadAddmissionDetail = async () => {
    const response = await fetch("http://localhost:3000/addmissions/view/" + id);
    const resData = await response.json();
    console.log(resData);
    setAddmission(resData);
    // setTitle(resData.title);
    // setUrl(resData.url);
    // setDetail(resData.detail);
  };

  const uploadAddmissionDetails = async (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      body: JSON.stringify({
        user_id: user_id,
        mobile_no: mobile_no,
        email: email,
        password: password,
        first_name: first_name,
        last_name: last_name,
        gender: gender,
        list_of_class: list_of_class,
        city: city,
        state: state,
        zip: zip,
      }),
    };

    const response = await fetch("http://localhost:3000/addmissions/add",requestOptions
    );
    const resData = await response.json();
    console.log(resData);
  };
  return (
    <>
      <CForm
        className="row g-3"
        method="post"
        onSubmit={uploadAddmissionDetails}
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
        <CCol md={6}>
          <CFormInput
            type="text"
            id="email"
            name="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            type="text"
            id="password"
            name="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            type="text"
            id="first_name"
            name="first_name"
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            type="text"
            id="last_name"
            name="last_name"
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            type="text"
            id="gender"
            name="gender"
            label="Gender"
            onChange={(e) => setGender(e.target.value)}
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            type="text"
            id="list_of_class"
            name="list_of_class"
            label="List Of Class"
            onChange={(e) => setListOfClass(e.target.value)}
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            type="text"
            id="city"
            name="city"
            label="City"
            onChange={(e) => setCity(e.target.value)}
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            type="text"
            id="state"
            name="state"
            label="State"
            onChange={(e) => setState(e.target.value)}
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            type="text"
            id="zip"
            name="zip"
            label="Zip"
            onChange={(e) => setZip(e.target.value)}
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

export default EditAddmission;
