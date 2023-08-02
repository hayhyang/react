export type UseFormProps = any | Record<string, unknown>;

export type UseFormReturn = {
  watch: UseFormWatch;
  getValues: UseFormGetValues;
  getFieldState: UseFormGetFieldState;
  setError: UseFormSetError;
  clearErrors: UseFormClearErrors;
  setValue: UseFormSetValue;
  trigger: UseFormTrigger;
  formState: FormState;
  resetField: UseFormResetField;
  reset: UseFormReset;
  handleSubmit: UseFormHandleSubmit;
  unregister: UseFormUnregister;
  control: Control;
  register: UseFormRegister;
  setFocus: UseFormSetFocus;
};

export type UseFormWatch = any;
export type UseFormGetValues = any;
export type UseFormGetFieldState = any;
export type UseFormSetError = any;
export type UseFormClearErrors = any;
export type UseFormSetValue = any;
export type UseFormTrigger = any;
export type FormState = {
  isDirty: boolean;
  isLoading: boolean;
  isSubmitted: boolean;
  isSubmitSuccessful: boolean;
  isSubmitting: boolean;
  isValidating: boolean;
  isValid: boolean;
  submitCount: number;
  defaultValues?: any;
  dirtyFields: any;
  touchedFields: any;
  errors: any;
};
export type UseFormResetField = any;
export type UseFormReset = any;
export type UseFormHandleSubmit = any;
export type UseFormUnregister = any;
export type Control = any;
export type UseFormRegister = any;
export type UseFormSetFocus = any;
