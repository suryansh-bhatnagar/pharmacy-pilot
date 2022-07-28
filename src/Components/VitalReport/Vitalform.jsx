import React, { useState } from "react";
import { Formik, Form } from "formik";
import { string, object } from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
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
  testType: "bp",
  readings: "",
  chemistId: 680,
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
  readings: string().required("Required"),
  testType: string().required("Required"),
});

export const Vitalform = () => {
  const navigate = useNavigate();

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
              onSubmit={async (values, { resetForm }) => {
                console.log(values);
                resetForm({ values: "" });
                const url =
                  "https://staging.medbikri.com/consultation/savePatientReadings";
                const response = await fetch(url, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                });
                const json = await response.json();
                const readingId = json.readingId;
                console.log(readingId, ">>>>>READing Url");
                const generateUrl = `https://staging.medbikri.com/consultation/generateReadingsReport?readingsId=${readingId}`;
                const reportResponse = await fetch(generateUrl, {
                  method: "GET",
                });
                const reportJson = await reportResponse.json();
                navigate("/generatedreport", {
                  state: { pdfUrl: `${reportJson.reportURL}` },
                });
                // console.log(json, ">>>>post rqst  page");
                // console.log(reportJson.reportURL, ">>>>GET rqst json page");
              }}
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
                        Vital report form
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
                    <Grid item xs={12}>
                      <Textfield name="chemistId" label="Chemist ID" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Select
                        name="testType"
                        label="Test Type"
                        options={{
                          bp: "Blood Pressure",
                          sugar: "Sugar Level",
                          oxygen: "Oxygen Level",
                        }}
                      />{" "}
                    </Grid>
                    {/* {console.log(testType)} */}
                    <Grid item xs={12} md={6}>
                      <Textfield name="readings" label="Test Reading" />
                    </Grid>
                    <Grid item xs={12}>
                      <SubmitButton>Save Details</SubmitButton>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};
