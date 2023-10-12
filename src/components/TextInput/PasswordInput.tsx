import * as Ariakit from '@ariakit/react';
import styles from './TextImput.module.css';
import IconPassword from '../../assets/icon-password.svg?react';

interface PasswordImputProps {
  inputProps: Omit<Ariakit.FormInputProps, 'name' | 'className' | 'store'>;
  label: string;
  name: Ariakit.FormInputProps['name'];
  store: Ariakit.FormStore;
  checkMinLength?: boolean;
}

function EmailImput({ inputProps, label, name, store, checkMinLength = false }: PasswordImputProps) {
  store.useValidate(() => {
    const value = store.getValue(name);
    if (value.length === 0) {
      store.setError(name, "Can't be empty");
    } else if (checkMinLength && value.length < 8) {
      store.setError(name, 'Please check again');
    }
  });

  return (
    <div className={styles.container}>
      <Ariakit.FormLabel name={name} className={styles.label}>
        {label}
      </Ariakit.FormLabel>
      <div className={styles.field}>
        <IconPassword className={styles.icon} />
        <Ariakit.FormInput store={store} name={name} className={styles.input} {...inputProps} />
        <Ariakit.FormError name={name} className={styles.error} />
      </div>
    </div>
  );
}

export default EmailImput;
