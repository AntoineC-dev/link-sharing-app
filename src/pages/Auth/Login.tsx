import * as Ariakit from '@ariakit/react';
import * as React from 'react';
import styles from './Forms.module.css';
import { Link } from 'react-router-dom';
import { TextInputGroup } from '../../components';

function Login() {
  const form = Ariakit.useFormStore({ defaultValues: { email: '', password: '' } });
  const values = form.useState((state) => state.values);
  const errors = form.useState((state) => state.errors);
  const [isValid, setIsValid] = React.useState(false);

  form.useSubmit(async (state) => {
    if (!isValid) return;
    alert(JSON.stringify(state.values));
  });

  React.useEffect(() => {
    const isFilled = Object.values(values).every((value) => value.length !== 0);
    const hasNoError = Object.keys(errors).length === 0;
    setIsValid(isFilled && hasNoError);
  }, [errors, values]);

  return (
    <Ariakit.Form store={form} aria-labelledby="login" validateOnBlur={false} className={styles.container}>
      <h1 id="login" className={styles.title}>
        Login
      </h1>
      <p className={styles.text}>Add your details below to get back into the app</p>
      <div className={styles.form}>
        <TextInputGroup
          label="Email address"
          name={form.names.email}
          variant="email"
          inputProps={{ type: 'email', placeholder: 'e.g. alex@email.com', required: true }}
        />
        <TextInputGroup
          label="Password"
          name={form.names.password}
          variant="password"
          inputProps={{ type: 'password', placeholder: 'Enter your password', required: true }}
        />
        <Ariakit.FormSubmit className={styles.submit} aria-disabled={!isValid}>
          Login
        </Ariakit.FormSubmit>
        <div className={styles.footer}>
          <span>Don’t have an account?</span>
          <Link to={'../create-account'}>Create account</Link>
        </div>
      </div>
    </Ariakit.Form>
  );
}

export default Login;
