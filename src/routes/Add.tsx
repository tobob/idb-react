import React from "react";
import { db } from "../models/db";
import { Field, Form, Formik, FormikProps } from "formik";
import { useHistory } from "react-router-dom";

const Add = () => {
  const history = useHistory();
  return (
    <div>
      <h3>Add receipt</h3>
      <Formik
        initialValues={{ kcal: "0", name: "", desc: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            db.receipts.add({ ...values, kcal: parseInt(values.kcal || "") });
            actions.setSubmitting(false);
            history.push("/");
          }, 1000);
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <Field name="name" placeholder="Name" />
            <br />
            <Field name="kcal" placeholder="Kcal" label="kcal" />
            <br />

            <Field name="desc" placeholder="desc" as="textarea" />
            <br />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Add;
