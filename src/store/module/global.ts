import { createSlice } from '@reduxjs/toolkit';

export const globalState = createSlice({
  name: 'globalState',
  initialState: {
    language: 'cn',
    menuList: [
      {
        icon: '',
        name: '首页',
        patch: '/home'
      },
      {
        icon: '',
        name: '个人博客',
        patch: '/home'
      },
      {
        icon: '',
        name: '个人博客21',
        patch: '/home'
      }
    ]
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    }
  }
});

export const { setLanguage } = globalState.actions; //导出actions

export default globalState.reducer;
