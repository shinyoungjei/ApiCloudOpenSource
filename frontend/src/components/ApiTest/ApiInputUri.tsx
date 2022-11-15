import axios from "axios";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RequestTypeInfo } from "../../pages/CreateApi/ApisType";
import { reBodyType } from "../../pages/TestApi";
import { useAppDispatch } from "../../Store/hooks";
import { selectTestApi } from "../../Store/slice/testApi";
import MethodTest from "./MethodTest";

const ApiInputUriSearch = styled.input`
  width: 50%;
  border: none;
  border-bottom: 1px solid #000000;
  border-right: 1px solid #000000;
  border-top: 1px solid #000000;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 1px 50px 1px 10px;
  outline: none;
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.bgColor};
`;

export type list = {
  getInfo: RequestTypeInfo | undefined;
  testbodyInfo: reBodyType | undefined;
  setTestbodyInfo: Dispatch<SetStateAction<reBodyType | undefined>>;
  setParamsInfo: Dispatch<SetStateAction<reBodyType | undefined>>;
  paramsInfo: reBodyType | undefined;
};

const ApiInputUri = ({ getInfo, testbodyInfo, setTestbodyInfo, paramsInfo, setParamsInfo }: list) => {
  const [sendFlag, setSendFlag] = useState(false);
  const [headObj, setHeadObj] = useState({});
  const info = useSelector(selectTestApi);

  // TEST 전용 UseEffect 추후 삭제 예정
  useEffect(() => {
    console.log("GETINFO LIST => ", getInfo);
  }, [getInfo, info.getControllerInfomation, info.getApisInfomation]);

  // 헤더 정보 받아 오기.
  const headReq = getInfo?.controllers[info.getControllerInfomation].apis[info.getApisInfomation].headers;
  useEffect(() => {
    let test = {};
    headReq?.map((it, idx) => {
      const key = it.key;
      const value = it.value;
      test = { ...test, [key]: value };
    });
    setHeadObj(test);
  }, [getInfo, info.getControllerInfomation, info.getApisInfomation]);

  // 서버 주소 받아오기
  const server = Object.values(info.getServerUrl).toString();
  const context = Object.values(info.getContextUrl).toString();
  const testUri = server + context;

  // 메소드 정보 받아오기
  const requestMethod = getInfo?.controllers[info.getControllerInfomation].apis[info.getApisInfomation].method;

  // console.log("HEAD =>", headObj); 헤더 정보
  // console.log("testbodyInfo =>", testbodyInfo); 바디 정보
  let config = {
    headers: headObj,
  };
  console.log("body=>", testbodyInfo);
  console.log("PRAMAL => ", paramsInfo);

  let params = {
    param: paramsInfo,
  };

  const submitRequest = () => {
    switch (requestMethod) {
      case "get":
        axios
          .get(testUri, {
            params: params, //파람 작성한곳에서 불러올거임
          })
          .then((res) => {
            console.log("RES=>", res);
          });
        break;
      case "post":
        axios
          .post(testUri, testbodyInfo)
          .then((res) => {
            console.log("post 성공", res);
            console.log("postBody =>", testbodyInfo);
          })
          .catch((err) => {
            console.log("ERR =>", err);
            console.log("postBody =>", testbodyInfo);
          });
        break;
      case "put":
        axios
          .put(testUri, testbodyInfo)
          .then((res) => {
            console.log("put 성공 =>", res);
            console.log("putBody =>", testbodyInfo);
          })
          .catch((err) => {
            console.log("ERR => ", err);
            console.log("putBody=>", testbodyInfo);
          });
        break;
      // case "delete":
      //   axios.delete(testUri, requestMethod).then(() => {
      //     console.log("Delete Success");
      //   });
      //   break;
      // case "patch":
      //   console.log("PATCH");
      //   break;
      // case "options":
      //   console.log("OPTIONS");
      //   break;
      // case "head":
      //   console.log("HEAD");
      //   break;
      default:
        break;
    }

    setSendFlag(!sendFlag);
  };

  // body정보 초기화 하기
  useEffect(() => {
    setTestbodyInfo({});
    setParamsInfo({});
  }, [sendFlag]);

  const [value, setValue] = useState(testUri);
  const paramInfo = info.getParams;
  const [mulumpyo, setMulumpyo] = useState("");
  const [paramsValue, setParamsValue] = useState("");

  // useEffect(() => {
  //   const test = value + "?" + paramInfo;

  //   if (paramInfo.length >= 1) {
  //     setMulumpyo("?");
  //     setParamsValue(paramInfo);
  //   } else {
  //     setMulumpyo("");
  //     setParamsValue("");
  //   }
  //   // setValue(paramInfo);
  // }, [paramInfo]);

  return (
    <div className="apiInputContainer">
      <span className="apiChoice">
        <MethodTest methodApiWord={requestMethod} />
      </span>
      <ApiInputUriSearch
        type="text"
        // value={value + mulumpyo + paramsValue}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button className="apiTestBtn" onClick={submitRequest}>
        send
      </button>
    </div>
  );
};

export default ApiInputUri;
