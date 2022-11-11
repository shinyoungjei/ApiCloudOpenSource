import React, { useEffect } from "react";
import { useAppDispatch } from "../../Store/hooks";
import "./ApiTest.scss";
import styled from "styled-components";
import testApiSlice from "../../Store/slice/testApi";
import { RequestTypeInfo } from "../../pages/CreateApi/ApisType";
const Item = styled.p`
  border: none;
  border-radius: 10px;
  padding: 9px 10px 3px 10px;
  background-color: ${(props) => props.color};
`;
const SideMenuList = styled.div`
  padding: 5px 7px 5px 7px;
  display: flex;
  font-size: 12px;
  font-weight: bold;
  justify-content: space-between;
`;

const SideContollerName = styled.p`
  padding: 10px 5px 3px 5px;
  border-bottom: 2px solid ${(props) => props.theme.color};
  width: 80px;
  text-color: ${(props) => props.theme.color};
`;
interface type {
  getInfo: RequestTypeInfo | undefined;
}

const ApiSide = ({ getInfo }: type) => {
  const dispatch = useAppDispatch();
  return (
    <div className="">
      {getInfo?.controllers.map((it, index) => (
        <div key={index}>
          <SideContollerName>{it.name}</SideContollerName>
          {it.apis.map((item, idx) => (
            <SideMenuList
              key={idx}
              onClick={() => {
                dispatch(testApiSlice.actions.addController(index));
                dispatch(testApiSlice.actions.addApis(idx));
              }}
            >
              <Item
                color={
                  item?.method === "get"
                    ? "#FDECC8"
                    : item?.method === "post"
                    ? "#F5E0E9"
                    : item?.method === "put"
                    ? "#F1F0EF"
                    : item?.method === "delete"
                    ? "#D3E5EF"
                    : item?.method === "patch"
                    ? "#E8DEEE"
                    : item?.method === "options"
                    ? "#FFE2DD"
                    : "#EEE0DA"
                }
              >
                {item.method}
              </Item>
              <p className="apiSideUriAddress">{item.uri}</p>
            </SideMenuList>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ApiSide;
