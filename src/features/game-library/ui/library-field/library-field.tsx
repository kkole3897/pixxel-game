import cn from 'classnames';
import { useRef } from 'react';
import { nanoid } from 'nanoid';
import { Slot } from '@radix-ui/react-slot';

import { FieldProvider, useFieldContext } from './use-field-context';
import * as styles from './library-field.css';

type FieldProps = React.PropsWithChildren<{
  id?: string;
  className?: string;
  name: string;
}>;

function Field({ children, className, id: idProp, name }: FieldProps) {
  const composedClassName = cn(styles.field, className);

  const id = useRef(idProp ?? nanoid()).current;
  const contextValue = { id };

  return (
    <FieldProvider value={contextValue}>
      <div className={composedClassName}>{children}</div>
    </FieldProvider>
  );
}

type LabelProps = React.PropsWithChildren<{
  className?: string;
}>;

function FieldLabel({ children, className }: LabelProps) {
  const { id } = useFieldContext();

  const composedClassName = cn(styles.label, className);

  return (
    <label htmlFor={id} className={composedClassName}>
      {children}
    </label>
  );
}

type ControlProps = React.PropsWithChildren<{
  className?: string;
}>;

function FieldControl({ children, className }: ControlProps) {
  const { id } = useFieldContext();

  const composedClassName = cn(styles.control, className);

  return (
    <Slot id={id} className={composedClassName}>
      {children}
    </Slot>
  );
}

type ErrorTextProps = React.PropsWithChildren<{
  className?: string;
}>;

function FieldErrorText({ children, className }: ErrorTextProps) {
  const composedClassName = cn(styles.errorText, className);

  return <p className={composedClassName}>{children}</p>;
}

type RequiredIndicatorProps = {
  className?: string;
};

function FieldRequiredIndicator({ className }: RequiredIndicatorProps) {
  const composedClassName = cn(styles.requiredIndicator, className);

  return <span className={composedClassName}>*</span>;
}

type FieldHelperTextProps = React.PropsWithChildren<{
  className?: string;
}>;

function FieldHelperText({ children, className }: FieldHelperTextProps) {
  const composedClassName = cn(styles.helperText, className);

  return <p className={composedClassName}>{children}</p>;
}

const Root = Field;
const Label = FieldLabel;
const Control = FieldControl;
const ErrorText = FieldErrorText;
const RequiredIndicator = FieldRequiredIndicator;
const HelperText = FieldHelperText;

export {
  Field,
  FieldLabel,
  FieldControl,
  FieldErrorText,
  FieldRequiredIndicator,
  Root,
  Label,
  Control,
  ErrorText,
  RequiredIndicator,
  HelperText,
};
