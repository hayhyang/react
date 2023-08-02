import { VALIDATION_MODE } from '../constants';
import { FormState, UseFormProps, UseFormReturn } from '../types';

const defaultOptions = {
  mode: VALIDATION_MODE.onSumit,
  reValidateMode: VALIDATION_MODE.onChange,
  shouldFocusError: true,
};

export const createFormControl = (
  props: UseFormProps = {},
  flushRootRender: () => void,
) => {
  const _options = {
    ...defaultOptions,
    ...props,
  };

  const _formState: FormState = {
    submitCount: 0,
    isDirty: false,
    isLoading: false,
    isValidating: false,
    isSubmitted: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    touchedFields: {},
    dirtyFields: {},
    errors: {},
  };
  // return {
  //   control,
  //   trigger,
  //   handleSubmit,
  //   watch,
  //   setValue,
  //   getValues,
  //   reset,
  //   resetField,
  //   clearErrors,
  //   unregister,
  //   setError,
  //   setFocus,
  //   getFieldState,
  // };
};
