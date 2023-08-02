import { useRef, useState } from 'react';
import { FormState, UseFormProps, UseFormReturn } from '../types';
import { createFormControl } from '../logic/createFormControl';

export const useForm = (props: UseFormProps = {}): UseFormReturn => {
  const _formControl = useRef<UseFormReturn | undefined>();
  const _values = useRef<typeof props.value>();
  const [formState, updateFormState] = useState<FormState>({
    isDirty: false,
    isValidating: false,
    isLoading: false,
    isSubmitted: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: {},
    defaultValues: props.defaultValues,
  });

  if (!_formControl.current) {
    _formControl.current = {
      ...createFormControl(props, () =>
        updateFormState((formState) => ({ ...formState })),
      ),
    };
  }

  const control = _formControl.current.control;
  control._options = props;

  return _formControl.current;
};
