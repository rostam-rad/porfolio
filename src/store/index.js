import { combineReducers } from "@reduxjs/toolkit";

import homeReducer from "reducers/home-reducer";

export default combineReducers({
  homepage: homeReducer,
});
