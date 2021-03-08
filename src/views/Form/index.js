import React from 'react';
import { View, TextInput, Button } from 'react-native';
import Formik from 'formik';
import Yup from 'yup'

function Form(props) {
  return (
    <View style={styles.container}>
      <TextInput
        value={props.values.email}
        onChangeText={text => props.setFieldValue('email', text)} />

      <TextInput
        value={props.values.password}
        onChangeText={text => props.setFieldValue('password', text)} />

      <Button
        onPress={props.handleSubmit}
        title="Login" />
    </View>
  );
}

/*export default Formik({
  mapPropsToValues: () => ({ email: '', password: '' }),

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('Preencha o campo de e-mail'),
    password: Yup.string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
      .required('Preencha o campo de senha'),
  }),

  handleSubmit: (values) => {
    console.log(values);
    apiService.post('/authenticate', values)
    .then()
    .catch(err => {
      setSubmitting(false);
      setErrors({ message: err.message });
      { props.errors.message && <Text>Inválido</Text> }
    })
  }
})*/(Form);
