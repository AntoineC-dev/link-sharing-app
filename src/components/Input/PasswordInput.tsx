import * as Ariakit from '@ariakit/react';
import * as React from 'react';
import styles from './Imput.module.css';
import IconPassword from '../../assets/icon-password.svg?react';
import clsx from 'clsx';

interface PasswordImputProps extends Ariakit.FormInputProps {
  label: string;
  store: Ariakit.FormStore;
  checkMinLength?: boolean;
  compareName?: Ariakit.FormInputProps['name'];
}

function EmailImput({ label, name, store, checkMinLength = false, compareName, ...props }: PasswordImputProps) {
  const errors = store.useState((state) => state.errors);
  const touched = store.useState((state) => state.touched);
  const isInvalid = React.useMemo(() => {
    return !!errors[name as string] && touched[name as string];
  }, [errors, touched, name]);
  store.useValidate(() => {
    const value = store.getValue(name);
    if (value.length === 0) {
      store.setError(name, "Can't be empty");
    } else if (checkMinLength && value.length < 8) {
      store.setError(name, 'Please check again');
    } else if (compareName && store.getValue(compareName) !== value) {
      store.setError(name, "Passwords don't match");
    }
  });

  return (
    <div className={styles.container}>
      <Ariakit.FormLabel name={name} className={styles.label} data-invalid={isInvalid}>
        {label}
      </Ariakit.FormLabel>
      <div className={styles.field}>
        <IconPassword className={styles.icon} />
        <Ariakit.FormInput store={store} name={name} {...props} className={clsx(styles.input, props.className)} />
        <Ariakit.FormError name={name} className={styles.error} />
      </div>
    </div>
  );
}

export default EmailImput;
