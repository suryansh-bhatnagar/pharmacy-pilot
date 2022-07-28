// // import { Button } from "@material-ui/core";
// import React, { button } from "react";
// import { useNavigate } from "react-router-dom";

// const linkButton = {
//   color: "white",
//   textDecoration: "none",
//   backgroundColor: "blue",
//   paddingTop: 8,
//   paddingBottom: 8,
//   border: "none",
//   borderRadius: 25,
//   display: "inline-block",
//   width: "50vh",
//   textAlign: "center",
// };
// const normalDoc = async (amt, navigate) => {
//   const url = "https://staging.medbikri.com/consultation/createPaymentLink";
//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       chemistId: 680,
//       amount: amt,
//       usecase: "Doctor Consultation",
//     }),
//   });
//   const json = await response.json();
//   navigate("/paymentpage", {
//     state: { paymentUrl: `${json.paymentURL}` },
//   });

//   console.log(json);
// };
// const ConsultingCharges = () => {
//   const navigate = useNavigate();
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         height: " 100vh",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <button style={linkButton} onClick={() => normalDoc(600, navigate)}>
//         Normal Doctor
//       </button>
//       <div style={{ height: "16px" }}></div>
//       <button style={linkButton} onClick={() => normalDoc(150, navigate)}>
//         Skin Doctor
//       </button>
//       {/* <a
//         className="webcastBtn"
//         href="https://www.google.com"
//         target="_blank"
//         rel="noreferrer"
//       >
//         Skin Doctor
//       </a> */}
//     </div>
//   );
// };

// export default ConsultingCharges;

import React from "react";
import { Formik, Form } from "formik";
import { string, object } from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";

// import Textfield from "./Textfield";
import Textfield from "../../UI/Textfield";
import Select from "../../UI/Select";
import SubmitButton from "../../UI/Button";
const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
  typoColor: {
    color: "#3f51b5",
  },
}));

var INITIAL_FORM_STATE = {
  patientName: "",
  patientNumber: "",
  docType: "",
};

//Reg ex for phone validation

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// Adding validation

const FORM_VALIDATION = object().shape({
  patientName: string().required("Required"),
  patientNumber: string()
    .required("Required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "to short")
    .max(10, "to long"),
  docType: string().required("Required"),
});

const ConsultingCharges = () => {
  const classes = useStyles();
  //   const navigate = useNavigate();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={() => console.log("submitted")}
            >
              {(formikProps) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography
                        className={classes.typoColor}
                        variant="h5"
                        component="div"
                        gutterBottom
                      >
                        Booking for Doctor Consultation
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Textfield name="patientName" label="Patient name*" />
                    </Grid>
                    <Grid item xs={12}>
                      <Textfield
                        name="patientNumber"
                        label="Patient phone number*"
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Select
                        name="docType"
                        label="Doctor's Type"
                        options={{
                          normalDoc: "Normal Doctor",
                          skinDoc: "Skin Doc",
                        }}
                      />
                    </Grid>
                    {/* {console.log(testType)} */}

                    <Grid item xs={12}>
                      <SubmitButton>Next</SubmitButton>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
            {/* <Button variant="contained" color="primary">
              Generate Report
            </Button> */}
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default ConsultingCharges;
