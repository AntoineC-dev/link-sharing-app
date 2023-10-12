import * as Ariakit from '@ariakit/react';
import * as React from 'react';
import styles from './Forms.module.css';
import { Link } from 'react-router-dom';
import { TextInputGroup } from '../../components';

function CreateAccount() {
  const form = Ariakit.useFormStore({
    defaultValues: { email: '', password: '', passwordConfirm: '' },
    defaultErrors: { email: "Can't be empty", password: "Can't be empty", passwordConfirm: "Can't be empty" },
  });
  const errors = form.useState((state) => state.errors);
  const isValid = React.useMemo(() => Object.keys(errors).length === 0, [errors]);

  form.useSubmit(async (state) => {
    if (!isValid) return;
    alert(JSON.stringify(state.values));
  });

  return (
    <Ariakit.Form store={form} aria-labelledby="create-account" validateOnBlur={false} className={styles.container}>
      <h1 id="create-account" className={styles.title}>
        Create account
      </h1>
      <p className={styles.text}>Let’s get you started sharing your links!</p>
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
          inputProps={{ type: 'password', placeholder: 'At least 8 characters', required: true, minLength: 8 }}
        />
        <TextInputGroup
          label="Confirm password"
          name={form.names.passwordConfirm}
          variant="password"
          inputProps={{ type: 'password', placeholder: 'At least 8 characters', required: true }}
        />
        <span className={styles.caption}>Password must contain at least 8 characters</span>
        <Ariakit.FormSubmit className={styles.submit} aria-disabled={!isValid}>
          Create new account
        </Ariakit.FormSubmit>
        <div className={styles.footer}>
          <span>Already have an account?</span>
          <Link to={'../login'}>Login</Link>
        </div>
      </div>
    </Ariakit.Form>
  );
}

export default CreateAccount;
