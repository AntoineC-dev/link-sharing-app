import * as Ariakit from '@ariakit/react';
import * as React from 'react';
import styles from './Forms.module.css';
import { Link } from 'react-router-dom';
import { EmailInput, PasswordInput } from '../../components';

function Login() {
  const form = Ariakit.useFormStore({
    defaultValues: { email: '', password: '' },
    defaultErrors: { email: "Can't be empty", password: "Can't be empty" },
  });
  const errors = form.useState((state) => state.errors);
  const isValid = React.useMemo(() => Object.keys(errors).length === 0, [errors]);

  form.useSubmit(async (state) => {
    if (!isValid) return;
    alert(JSON.stringify(state.values));
  });

  return (
    <Ariakit.Form store={form} aria-labelledby="login" className={styles.container}>
      <h1 id="login" className={styles.title}>
        Login
      </h1>
      <p className={styles.text}>Add your details below to get back into the app</p>
      <div className={styles.form}>
        <EmailInput
          store={form}
          label="Email address"
          name={form.names.email}
          inputProps={{ type: 'email', placeholder: 'e.g. alex@email.com' }}
        />
        <PasswordInput
          store={form}
          label="Password"
          name={form.names.password}
          inputProps={{ type: 'password', placeholder: 'Enter your password' }}
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
