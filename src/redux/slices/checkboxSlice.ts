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
    toggleCheckbox(state, action: PayloadAction<keyof CheckboxState>) {
      const checkbox = action.payload;

      if (checkbox === 'all') {
        // Если переключается "Все"
        state.all = !state.all;
        state.none = state.all;
        state.one = state.all;
        state.two = state.all;
        state.three = state.all;
      } else {
        // Если переключается любой другой чекбокс
        state[checkbox] = !state[checkbox];

        // Если "Все" был включен, но теперь один из чекбоксов снят
        if (state.all && !state[checkbox]) {
          state.all = false;
        }

        // Если все остальные чекбоксы включены, включаем "Все"
        if (state.none && state.one && state.two && state.three) {
          state.all = true;
        }
      }
    },
  },
});

export const { toggleCheckbox } = checkboxSlice.actions;
export default checkboxSlice.reducer;
