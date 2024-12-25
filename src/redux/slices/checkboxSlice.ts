import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CheckboxState = {
  all: boolean;
  none: boolean;
  one: boolean;
  two: boolean;
  three: boolean;
};

const initialState: CheckboxState = {
  all: true,
  none: true,
  one: true,
  two: true,
  three: true,
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
        const newValue = !state.all;
        state.all = newValue;
        state.none = newValue;
        state.one = newValue;
        state.two = newValue;
        state.three = newValue;
      } else {
        state[checkbox] = !state[checkbox];
        if (state.all && !state[checkbox]) {
          state.all = false;
        }
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
