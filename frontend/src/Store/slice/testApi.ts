import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosGet } from "../../util/axiosUtil";
import { RootState } from "../store";

type bodyType = {
  key: string;
  value: string;
};

interface initType {
  getControllerInfomation: number;
  getApisInfomation: number;
  getRequest: number;
  getIsDarkMode: boolean;
  getRequestBodyInfo: bodyType;
  getServerUrl: string;
  getContextUrl: string;
  getParams: string;
  getParamsId: string;
  getToken: string;
  getResponseStatus: number;
  getResponseData: any;
  getResponseStatusText: string;
  getResponseErroStatusMessage: string;
  getResponseSuccessHeader: any;
  getHeadListNumber: number;
  getResponseListNumber: number;
  getFlag: boolean;
}

const initialState: initType = {
  getControllerInfomation: 0,
  getApisInfomation: 0,
  getRequest: 0,
  getIsDarkMode: false,
  getRequestBodyInfo: { key: "", value: "" },
  getServerUrl: "",
  getContextUrl: "",
  getParams: "",
  getParamsId: "",
  getToken: "",
  getResponseStatus: 0,
  getResponseData: {},
  getResponseStatusText: "",
  getResponseErroStatusMessage: "",
  getResponseSuccessHeader: {},
  getHeadListNumber: 1,
  getResponseListNumber: 1,
  getFlag: false,
};

// API 조회 하기.
export const getApiRequestInfo: any = createAsyncThunk(
  "testApi/getApiRequestInfo",
  async (args: any, { rejectWithValue }) => {
    try {
      const response = await axiosGet(`apis/${args.docId}`);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response);
    }
  }
);

const testApiSlice = createSlice({
  name: "testApi",
  initialState,
  reducers: {
    getFlagResponse(state, action) {
      state.getFlag = action.payload;
    },
    getResNum(state, action) {
      state.getResponseListNumber = action.payload;
    },
    getHeadNum(state, action) {
      state.getHeadListNumber = action.payload;
    },
    getSuccessHeader(state, action) {
      state.getResponseSuccessHeader = action.payload;
    },
    getErrMessage(state, action) {
      state.getResponseErroStatusMessage = action.payload;
    },
    getData(state, action) {
      state.getResponseData = action.payload;
    },
    getStatus(state, action) {
      state.getResponseStatus = action.payload;
    },
    getStatusTextInfo(state, action) {
      state.getResponseStatusText = action.payload;
    },
    getTokenInfo(state, action) {
      state.getToken = action.payload;
    },
    getParamsID(state, action) {
      state.getParamsId = action.payload;
    },
    getParam(state, action) {
      state.getParams = action.payload;
    },
    getURL(state, action) {
      state.getServerUrl = action.payload;
    },
    getContext(state, action) {
      state.getContextUrl = action.payload;
    },
    setGlobalDarkMode(state, action) {
      state = action.payload;
    },
    addController(state, action) {
      state.getControllerInfomation = action.payload;
    },
    addApis(state, action) {
      state.getApisInfomation = action.payload;
    },
    addRequest(state, action) {
      state.getRequest = action.payload;
    },
  },
  extraReducers: {
    [getApiRequestInfo.fulfilled]: (state, action) => {},
    [getApiRequestInfo.rejected]: (state, action) => {},
  },
});

export default testApiSlice;
export const selectTestApi = (state: RootState) => state.testApi;
