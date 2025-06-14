import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RegistryPayment {
  registro_civil: string;
  [key: string]: any;
}

interface banksPse {
  banks: {
    bankCode: string;
    bankName: string;
  }[];
}

const initialState = {
  registryPayment: [] as RegistryPayment[],
  banksPse: [] as banksPse[],
  selector: 4,
  detailSelector: "cedula",
  paymentMethod: "card",
  total: 0,
  isEditing: {},
  isLoading: false,
  error: null,
};

export const registryPaymentSlice = createSlice({
  name: "registryPayment",
  initialState,
  reducers: {
    setRegistryPayment: (state, action: PayloadAction<RegistryPayment>) => {
      state.registryPayment.push(action.payload);
      state.total = state.registryPayment.length * 30000;
    },

    setEditing: (state, action: PayloadAction<number>) => {
      const recordToEdit = state.registryPayment[action.payload];

      if (recordToEdit) {
        state.isEditing = recordToEdit;
      }
    },

    setDeleteIsEditing: (state) => {
      state.isEditing = {};
    },

    setDeleteRegistryPayment: (state, action) => {
      state.registryPayment = state.registryPayment.filter(
        (_, index) => index !== action.payload
      );
      state.total = state.registryPayment.length * 30000;
    },

    setUpdateRegistryPayment: (
      state,
      action: PayloadAction<{ index: number; updatedData: RegistryPayment }>
    ) => {
      const { index, updatedData } = action.payload;

      if (
        index !== undefined &&
        index >= 0 &&
        index < state.registryPayment.length
      ) {
        // Actualiza solo el registro que corresponde al índice
        state.registryPayment[index] = {
          ...state.registryPayment[index],
          ...updatedData,
        };
      }
    },

    setBanksPse: (state, action) => {
      state.banksPse = action.payload;
    },

    setSelector: (state, action) => {
      state.selector = action.payload;
    },

    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },

    setDetailSelector: (state, action) => {
      state.detailSelector = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
      state.registryPayment = [];
      state.total = 0;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setRegistryPayment,
  setDeleteRegistryPayment,
  setError,
  setIsLoading,
  setBanksPse,
  setEditing,
  setSelector,
  setDetailSelector,
  setPaymentMethod,
  setDeleteIsEditing,
  setUpdateRegistryPayment,
} = registryPaymentSlice.actions;

export default registryPaymentSlice.reducer;
