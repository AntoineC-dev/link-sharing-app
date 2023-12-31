import * as Ariakit from '@ariakit/react';
import * as React from 'react';
import styles from './Forms.module.css';
import { Link } from 'react-router-dom';
import { Button, EmailInput, PasswordInput, Title } from '../../components';
import { useStore } from '../../stores';

function Login() {
  const form = Ariakit.useFormStore({
    defaultValues: { email: '', password: '' },
    defaultErrors: { email: "Can't be empty", password: "Can't be empty" },
  });
  const errors = form.useState((state) => state.errors);
  const isValid = React.useMemo(() => Object.keys(errors).length === 0, [errors]);
  const login = useStore((store) => store.login);

  form.useSubmit(async (state) => {
    if (!isValid) return;
    const email = state.values.email;
    const password = state.values.password;
    login(email, password);
  });

  return (
    <Ariakit.Form store={form} aria-labelledby="login" className={styles.container}>
      <Title title="Login" text="Add your details below to get back into the app" titleProps={{ id: 'login' }} />
      <div className={styles.form}>
        <EmailInput
          store={form}
          label="Email address"
          name={form.names.email}
          type="email"
          placeholder="e.g. alex@email.com"
        />
        <PasswordInput
          store={form}
          label="Password"
          name={form.names.password}
          type="password"
          placeholder="Enter your password"
        />
        <Ariakit.FormSubmit render={Button} className={styles.submit} aria-disabled={!isValid}>
          Login
        </Ariakit.FormSubmit>
        <div className={styles.footer}>
          <span>Don’t have an account?</span>
          <Link to={'create-account'}>Create account</Link>
        </div>
      </div>
    </Ariakit.Form>
  );
}

export default Login;
