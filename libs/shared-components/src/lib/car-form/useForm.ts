import { useState } from 'react';

interface IUseFormReturnValue<Type> {
  formData: Type;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useForm = <Type>(
  defaultFormState: Type
): IUseFormReturnValue<Type> => {
  const [formData, setFormData] = useState<Type>(defaultFormState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return { formData, onChange };
};

// Generic constraints
interface ISomeFuncArgs {
  length: number;
}

const someFunc = <Type extends string | number>(value: Type): Type => {
  return value;
};

someFunc(123);
