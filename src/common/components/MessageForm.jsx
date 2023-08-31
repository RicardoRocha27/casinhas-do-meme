import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  useMediaQuery,
} from "@mui/material";
import * as yup from "yup";
import DOMPurify from "dompurify";
import emailjs from "@emailjs/browser";
import { notification } from "antd";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";

const PHONE_REGEX = "^(9[1236][0-9]) ?([0-9]{3}) ?([0-9]{3})$";
const NAME_REGEX = "^[A-Za-zÀ-ÖØ-öø-ÿs.'-]{1,40}$";

const sanitize = (value) => {
  return DOMPurify.sanitize(value);
};

export const MessageForm = ({ data }) => {
  const { language } = useContext(LanguageContext);

  const isFullWidth = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .transform(sanitize)
      .matches(NAME_REGEX, { message: data.firstName.error })
      .required(data.firstName.required),
    lastName: yup
      .string()
      .transform(sanitize)
      .matches(NAME_REGEX, { message: data.lastName.error })
      .required(data.lastName.required),
    email: yup
      .string()
      .transform(sanitize)
      .email(data.email.error)
      .required(data.email.required),
    phone: yup
      .string()
      .transform(sanitize)
      .matches(PHONE_REGEX, { message: data.phone.error }),
    subject: yup
      .string()
      .transform(sanitize)
      .oneOf(data.subjects)
      .required(data.subject.required),
    subject2: yup.string().when("subject", {
      is: data.subjects[4],
      then: yup
        .string()
        .transform(sanitize)
        .max(20, data.other.error)
        .required(data.other.required),
      otherwise: yup.string().transform(sanitize).notRequired(),
    }),
    body: yup.string().transform(sanitize).required(data.body.required),
  });

  const onSubmit = () => {
    const formTemplate = {
      name: values.firstName + " " + values.lastName,
      email: values.email,
      phone: values.phone === "" ? "Não foi fornecido" : values.phone,
      subject:
        values.subject === data.subjects[4] ? values.subject2 : values.subject,
      body: values.body,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formTemplate,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          notification.success({
            message: language === "pt" ? "Mensagem enviada" : "Message sent",
            description:
              language === "pt"
                ? "A sua mensagem foi enviada com sucesso."
                : "Your message was successfully sent.",
            placement: "top",
          });
          resetForm();
        },
        () => {
          notification.error({
            message:
              language === "pt" ? "Ocorreu um erro" : "An error has occurred",
            description:
              language === "pt"
                ? "Não conseguimos enviar a sua mensagem, por favor tente mais tarde"
                : "We couldn't send your message, please try again later.",
            placement: "top",
          });
        }
      );
  };

  const {
    values,
    touched,
    handleBlur,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      subject2: "",
      body: "",
    },
    validationSchema: schema,
    onSubmit,
  });

  return (
    <Box
      my={10}
      height="100%"
      display="flex"
      alignItems="center"
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          color="textSecondary"
          textAlign="center"
          mb={{ md: 5, xs: 2 }}
        >
          {data.title}
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              type="text"
              name="firstName"
              label={data.firstName.text}
              variant="outlined"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.firstName && touched.firstName ? errors.firstName : ""
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} mt={{ xs: 1, md: 0 }}>
            <TextField
              required
              type="text"
              name="lastName"
              label={data.lastName.text}
              variant="outlined"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.lastName && touched.lastName ? errors.lastName : ""
              }
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} mt={{ xs: 1, md: 2 }}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              type="email"
              name="email"
              label={data.email.text}
              variant="outlined"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors.email && touched.email ? errors.email : ""}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} mt={{ xs: 1, md: 0 }}>
            <TextField
              type="phone"
              name="phone"
              label={data.phone.text}
              variant="outlined"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors.phone && touched.phone ? errors.phone : ""}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} mt={{ xs: 1, md: 2 }}>
          <Grid item xs={12}>
            <TextField
              required
              name="subject"
              select
              label={data.subject.text}
              fullWidth
              value={values.subject}
              onChange={(e) => {
                handleChange(e);
              }}
              onBlur={handleBlur}
              helperText={
                errors.subject && touched.subject ? errors.subject : ""
              }
            >
              {data.subjects.map((subject, id) => (
                <MenuItem key={id} value={subject}>
                  {subject}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        {values.subject === data.subjects[4] ? (
          <Grid container spacing={1} mt={{ xs: 1, md: 2 }}>
            <Grid item xs={12}>
              <TextField
                required
                type="text"
                name="subject2"
                label={data.other.text}
                variant="outlined"
                value={values.subject2}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.subject2 && touched.subject2 ? errors.subject2 : ""
                }
                fullWidth
              />
            </Grid>
          </Grid>
        ) : undefined}
        <Grid container spacing={1} mt={{ xs: 1, md: 2 }}>
          <Grid item xs={12}>
            <TextField
              required
              name="body"
              label={data.body.text}
              multiline
              rows={4}
              value={values.body}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors.body && touched.body ? errors.body : ""}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} mt={{ xs: 0, md: 2 }}>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth={isFullWidth}
            >
              {data.buttonText}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
