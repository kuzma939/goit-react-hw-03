
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css'
const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.fieldWrapper}>
            <label htmlFor="name">Name</label>
            <Field className={css.field} type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div className={css.fieldWrapper}>
            <label htmlFor="number">Number</label>
            <Field className={css.field} type="text" name="number" />
            <ErrorMessage name="number" component="div" />
          </div>
          <button className={css.btnForm} type="submit" disabled={isSubmitting}>Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;