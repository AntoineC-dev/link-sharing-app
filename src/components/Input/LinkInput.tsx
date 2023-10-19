import * as Ariakit from '@ariakit/react';
import * as React from 'react';
import clsx from 'clsx';
import styles from './Imput.module.css';
import IconLink from '../../assets/icon-link.svg?react';
import { TPlatform } from '../../types';
import { linkHelpers } from '../../helpers';

interface LinkInputProps extends Ariakit.FormInputProps {
  label: string;
  platform: TPlatform;
  store: Ariakit.FormStore;
}

function LinkInput({ label, name, platform, store, ...props }: LinkInputProps) {
  const errors = store.useState((state) => state.errors);
  const touched = store.useState((state) => state.touched);
  const regexp = React.useMemo(() => linkHelpers.getLinkRegexp(platform), [platform]);
  const isInvalid = React.useMemo(() => {
    return !!errors[name as string] && touched[name as string];
  }, [errors, touched, name]);
  store.useValidate(() => {
    const value = store.getValue(name);
    if (value.length === 0) {
      store.setError(name, "Can't be empty");
    } else if (!regexp.test(value)) {
      store.setError(name, 'Wrong format');
    }
  });

  return (
    <div className={styles.container}>
      <Ariakit.FormLabel name={name} className={styles.label} data-invalid={isInvalid}>
        {label}
      </Ariakit.FormLabel>
      <div className={styles.field}>
        <IconLink className={styles.icon} />
        <Ariakit.FormInput store={store} name={name} {...props} className={clsx(styles.input, props.className)} />
        <Ariakit.FormError name={name} className={styles.error} />
      </div>
    </div>
  );
}

export default LinkInput;
