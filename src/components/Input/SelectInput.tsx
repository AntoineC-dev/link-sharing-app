import * as React from 'react';
import * as Ariakit from '@ariakit/react';
import styles from './Imput.module.css';
import { linkHelpers } from '../../helpers';
import { TPlatform } from '../../types';
import IconChevronDown from '../../assets/icon-chevron-down.svg?react';

interface SelectProps extends Ariakit.SelectProps {
  value?: string;
  setValue?: (value: string) => void;
  defaultValue?: string;
  onBlur?: React.FocusEventHandler<HTMLElement>;
}

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(function Select(
  { children, value, setValue, defaultValue, ...props },
  ref
) {
  const select = Ariakit.useSelectStore({ value, setValue, defaultValue });
  const portalRef = React.useRef<HTMLDivElement>(null);
  const selectValue = select.useState('value');
  const label = React.useMemo(() => linkHelpers.getPlatformLabel(selectValue as TPlatform), [selectValue]);
  const IconPlatform = React.useMemo(() => linkHelpers.getPlatformIcon(selectValue as TPlatform), [selectValue]);

  // Only call onBlur if the focus is leaving the whole widget.
  const onBlur = (event: React.FocusEvent<HTMLElement>) => {
    const portal = portalRef.current;
    const { selectElement, popoverElement } = select.getState();
    if (portal?.contains(event.relatedTarget)) return;
    if (selectElement?.contains(event.relatedTarget)) return;
    if (popoverElement?.contains(event.relatedTarget)) return;
    props.onBlur?.(event);
  };

  return (
    <>
      <div className={styles.container}>
        <span className={styles.label}>Platform</span>
        <Ariakit.Select ref={ref} {...props} store={select} onBlur={onBlur} className={styles.selectBtn}>
          <IconPlatform className={styles.selectIcon} />
          <span>{label}</span>
          <IconChevronDown className={styles.arrow} />
        </Ariakit.Select>
      </div>
      <Ariakit.SelectPopover
        store={select}
        modal
        sameWidth
        gutter={4}
        onBlur={onBlur}
        portalRef={portalRef}
        className={styles.popover}>
        {children}
      </Ariakit.SelectPopover>
    </>
  );
});

interface SelectItemProps extends Ariakit.SelectItemProps {}

export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(function SelectItem(props, ref) {
  const label = React.useMemo(() => linkHelpers.getPlatformLabel(props.value as TPlatform), [props.value]);
  const IconPlatform = React.useMemo(() => linkHelpers.getPlatformIcon(props.value as TPlatform), [props.value]);
  return (
    <Ariakit.SelectItem ref={ref} {...props} className={styles.selectItem}>
      <IconPlatform className={styles.selectIcon} />
      <span>{label}</span>
    </Ariakit.SelectItem>
  );
});

interface FormSelectProps
  extends Ariakit.FormFieldProps<'button'>,
    Omit<SelectProps, keyof Ariakit.FormFieldProps<'button'>> {}

export const FormSelect = React.forwardRef<HTMLButtonElement, FormSelectProps>(function FormSelect(
  { name, ...props },
  ref
) {
  const form = Ariakit.useFormContext();
  if (!form) throw new Error('FormSelect must be used within a Form');

  const value = form.useValue(name);

  const select = (
    <Select ref={ref} value={value} setValue={(value) => form.setValue(name, value)} render={props.render} />
  );
  const field = <Ariakit.FormField name={name} render={select} />;
  return <Ariakit.Role.button {...props} render={field} />;
});
