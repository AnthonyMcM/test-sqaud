import React from 'react';
import { useForm } from './useForm';
/* eslint-disable-next-line */
export interface CarFormProps {
  onSubmit: (formData: MyNamespace.ICarFormData) => void;
}

export function CarForm(props: CarFormProps) {
  const { formData, onChange } = useForm<MyNamespace.ICarFormData>({
    make: '',
    model: '',
    reg: '',
    price: '',
  });

  return (
    <div className="ch-pa--3 ch-mt--4 ch-bg--white ch-ba--1 ch-rounded--lg ch-bc--white ch-shadow--md">
      <h1 className="ch-fs--5">Add new car</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit(formData);
        }}
      >
        <div className="ch-display--flex ch-flex-flow--row-wrap ch-mb--4">
          <div className="ch-form__group ch-width--5 ch-mr--4 ch-rounded--lg ">
            <label htmlFor="make" className="ch-form__control-label">
              Make
            </label>
            <input
              id="make"
              type="text"
              name="make"
              className="ch-form__control ch-rounded--lg"
              value={formData.make}
              onChange={onChange}
            />
          </div>

          <div className="ch-form__group ch-width--5">
            <label htmlFor="model" className="ch-form__control-label">
              Model
            </label>
            <input
              id="model"
              type="text"
              name="model"
              className="ch-form__control"
              value={formData.model}
              onChange={onChange}
            />
          </div>

          <div className="ch-form__group ch-width--5 ch-mr--4">
            <label htmlFor="reg" className="ch-form__control-label">
              Registration
            </label>
            <input
              id="reg"
              type="text"
              name="reg"
              className="ch-form__control"
              value={formData.reg}
              onChange={onChange}
            />
          </div>

          <div className="ch-form__group ch-width--5">
            <label htmlFor="price" className="ch-form__control-label">
              Price
            </label>
            <input
              id="price"
              type="text"
              name="price"
              className="ch-form__control"
              value={formData.price}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="ch-form__group">
          <input
            id="large-1"
            type="radio"
            name="large"
            value="plan-1"
            className="ch-radio"
          />
          <label
            htmlFor="large-1"
            className="ch-radio__label ch-radio__label--large"
          >
            Service plan 1<small>From £6 per month</small>
          </label>

          <input
            id="large-2"
            type="radio"
            name="large"
            value="plan-2"
            className="ch-radio"
          />
          <label
            htmlFor="large-2"
            className="ch-mt--2 ch-radio__label ch-radio__label--large"
          >
            Service plan 2<small>From £8 per month</small>
          </label>

          <input
            disabled={true}
            id="large-3"
            type="radio"
            name="large"
            value="plan-3"
            className="ch-radio"
          />
          <label
            htmlFor="large-3"
            className="ch-mt--2 ch-radio__label ch-radio__label--large"
          >
            Service plan 3<small>From £12 per month</small>
          </label>
        </div>

        <button type="submit" className="ch-btn ch-btn--success">
          Submit car
        </button>
      </form>
    </div>
  );
}

export default CarForm;
