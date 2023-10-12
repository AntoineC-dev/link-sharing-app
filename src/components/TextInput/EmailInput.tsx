import * as Ariakit from '@ariakit/react';
import styles from './TextImput.module.css';
import IconEmail from '../../assets/icon-email.svg?react';

interface EmailImputProps {
  inputProps: Omit<Ariakit.FormInputProps, 'name' | 'className' | 'store'>;
  label: string;
  name: Ariakit.FormInputProps['name'];
  store: Ariakit.FormStore;
}

const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);

function EmailImput({ inputProps, label, name, store }: EmailImputProps) {
  store.useValidate(() => {
    const value = store.getValue(name);
    if (value.length === 0) {
      store.setError(name, "Can't be empty");
    }
    if (!emailRegex.test(value)) {
      store.setError(name, 'Wrong format');
    }
  });

  return (
    <div className={styles.container}>
      <Ariakit.FormLabel name={name} className={styles.label}>
        {label}
      </Ariakit.FormLabel>
      <div className={styles.field}>
        <IconEmail className={styles.icon} />
        <Ariakit.FormInput store={store} name={name} className={styles.input} {...inputProps} />
        <Ariakit.FormError name={name} className={styles.error} />
      </div>
    </div>
  );
}

export default EmailImput;
