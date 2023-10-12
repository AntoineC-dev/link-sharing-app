import * as Ariakit from '@ariakit/react';
import * as React from 'react';
import styles from './TextImputGroup.module.css';
import IconEmail from '../../assets/icon-email.svg?react';
import IconPassword from '../../assets/icon-password.svg?react';
import IconLink from '../../assets/icon-link.svg?react';

type InputVariant = 'email' | 'password' | 'link';

interface TextImputGroupProps {
  variant: InputVariant;
  inputProps: Omit<Ariakit.FormInputProps, 'name' | 'className'>;
  label: string;
  name: Ariakit.FormInputProps['name'];
}

function renderIcon(variant: InputVariant) {
  switch (variant) {
    case 'email':
      return IconEmail;
    case 'password':
      return IconPassword;
    case 'link':
      return IconLink;
  }
}

function TextImputGroup({ inputProps, label, name, variant }: TextImputGroupProps) {
  const Icon = React.useMemo(() => renderIcon(variant), [variant]);

  return (
    <div className={styles.container}>
      <Ariakit.FormLabel name={name} className={styles.label}>
        {label}
      </Ariakit.FormLabel>
      <div className={styles.field}>
        <Icon className={styles.icon} />
        <Ariakit.FormInput name={name} className={styles.input} {...inputProps} />
        <Ariakit.FormError name={name} className={styles.error} />
      </div>
    </div>
  );
}

export default TextImputGroup;
