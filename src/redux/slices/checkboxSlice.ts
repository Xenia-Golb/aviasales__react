import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CheckboxState = {
  all: boolean;
  none: boolean;
  one: boolean;
  two: boolean;
  three: boolean;
};

const initialState: CheckboxState = {
  all: false,
  none: false,
  one: false,
  two: false,
  three: false,
};

const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState,
  reducers: {
    toggleCheckbox(
      state,
      action: PayloadAction<'all' | 'none' | 'one' | 'two' | 'three'>
    ) {
      const checkbox = action.payload;

      if (checkbox === 'all') {
        // Если переключается "Все", включаем/выключаем все чекбоксы
        const newValue = !state.all;
        state.all = newValue;
        state.none = newValue;
        state.one = newValue;
        state.two = newValue;
        state.three = newValue;
      } else {
        // Переключаем конкретный чекбокс
        state[checkbox] = !state[checkbox];

        // Если "Все" было включено, но теперь один из чекбоксов выключен, выключаем "Все"
        if (state.all && !state[checkbox]) {
          state.all = false;
        }

        // Если все чекбоксы (кроме "Все") включены, включаем "Все"
        const allChecked = ['none', 'one', 'two', 'three'].every(
          (key) => state[key as keyof CheckboxState]
        );
        state.all = allChecked;
      }
    },
  },
});

export const { toggleCheckbox } = checkboxSlice.actions;
export default checkboxSlice.reducer;
