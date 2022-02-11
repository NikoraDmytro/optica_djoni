import { Formik, Form, Field, ErrorMessage } from "formik";

import { formValidationSchema } from "./utils/FormValidation";

import styles from "./QuestionForm.module.scss";

const initialValues = {
  userName: "",
  phoneNumber: "",
};

export const QuestionForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formValidationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);

        setSubmitting(false);
        resetForm();
      }}
    >
      <Form className={styles.questionForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="userName">Имя</label>
          <Field placeholder="Имя" name="userName" />
          <ErrorMessage name="userName" className={styles.error} />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="phoneNumber">Номер телефона</label>
          <input placeholder="+380" name="phoneNumber" />
          <ErrorMessage name="phoneNumber" className={styles.error} />
        </div>

        <button type="submit" className={styles.submitButton}>
          Перезвоните мне
        </button>
      </Form>
    </Formik>
  );
};
