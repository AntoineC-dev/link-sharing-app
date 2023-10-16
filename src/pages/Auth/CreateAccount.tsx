import * as Ariakit from '@ariakit/react';
import * as React from 'react';
import styles from './Forms.module.css';
import { Link } from 'react-router-dom';
import { EmailInput, PasswordInput, Title } from '../../components';
import { useStore } from '../../stores';

function CreateAccount() {
  const form = Ariakit.useFormStore({
    defaultValues: { email: '', password: '', passwordConfirm: '' },
    defaultErrors: { email: "Can't be empty", password: "Can't be empty", passwordConfirm: "Can't be empty" },
  });
  const errors = form.useState((state) => state.errors);
  const isValid = React.useMemo(() => Object.keys(errors).length === 0, [errors]);
  const createAccount = useStore((store) => store.createAccount);

  form.useSubmit(async (state) => {
    if (!isValid) return;
    const email = state.values.email;
    const password = state.values.password;
    createAccount(email, password);
  });

  return (
    <Ariakit.Form store={form} aria-labelledby="create-account" validateOnBlur={false} className={styles.container}>
      <Title
        title="Create account"
        text="Let’s get you started sharing your links!"
        titleProps={{ id: 'create-account' }}
      />
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
          checkMinLength={true}
          inputProps={{ type: 'password', placeholder: 'At least 8 characters' }}
        />
        <PasswordInput
          store={form}
          label="Confirm password"
          name={form.names.passwordConfirm}
          compareName={form.names.password}
          inputProps={{ type: 'password', placeholder: 'At least 8 characters' }}
        />
        <span className={styles.caption}>Password must contain at least 8 characters</span>
        <Ariakit.FormSubmit className={styles.submit} aria-disabled={!isValid}>
          Create new account
        </Ariakit.FormSubmit>
        <div className={styles.footer}>
          <span>Already have an account?</span>
          <Link to={'/auth'}>Login</Link>
        </div>
      </div>
    </Ariakit.Form>
  );
}

export default CreateAccount;
