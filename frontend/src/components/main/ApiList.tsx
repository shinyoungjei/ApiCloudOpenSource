import React, { useState } from "react";
import ApiListDetail from "./ApiListDetail";
import { ManagerDummy, GuestDummy } from "./ListDummy";

export type ManagerDummy = {
  id: string;
  apiTitle: string;
  apiContent: string;
  member: number;
};
export type GuestDummy = {
  id: string;
  apiTitle: string;
  apiContent: string;
  member: number;
};
const ApiList = () => {
  const [ApiList, setApiList] = useState(0);
  return (
    <div className="ApiList">
      <div className="ApiListTitle">
        <span
          className={ApiList == 0 ? "ClickList" : "noClicklist"}
          onClick={() => {
            setApiList(0);
          }}
        >
          관리자로 진행중인 API
        </span>
        <span
          className={ApiList == 1 ? "ClickList" : "noClicklist"}
          onClick={() => {
            setApiList(1);
          }}
        >
          참여자로 진행중인 API
        </span>
      </div>
      <div className="ApiListContent">
        <ApiListDetail ManagerDummy={ManagerDummy} GuestDummy={GuestDummy} ApiList={ApiList} />
      </div>
    </div>
  );
};

export default ApiList;
