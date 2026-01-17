import { useState } from 'react';

const initialState = {
  name: '',
  calories: '',
  protein: '',
  carbs: '',
  fat: '',
};

export function useMealForm(onSubmitMeal) {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);

  const setField = (field, value) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const isEmpty = (value) => value.trim() === '';

  const validate = () => {
    if (
      isEmpty(values.name) ||
      isEmpty(values.calories) ||
      isEmpty(values.protein) ||
      isEmpty(values.carbs) ||
      isEmpty(values.fat)
    ) {
      setError('All fields are required');
      return false;
    }

    const numbers = [
      values.calories,
      values.protein,
      values.carbs,
      values.fat,
    ].map(Number);

    if (numbers.some(isNaN)) {
      setError('Please enter valid numbers');
      return false;
    }

    return true;
  };

  const submit = () => {
    setError(null);

    if (!validate()) return false;

    const meal = {
      name: values.name.trim(),
      calories: Number(values.calories),
      protein: Number(values.protein),
      carbs: Number(values.carbs),
      fat: Number(values.fat),
    };

    onSubmitMeal(meal);
    setValues(initialState);
    return true;
  };

  return {
    values,
    error,
    setField,
    submit,
  };
}
