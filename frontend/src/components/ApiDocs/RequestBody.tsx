import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Properties from "./Properties";

interface Props {
  item: any;
}

const RequestBody = ({ item }: Props) => {
  return (
    <div>
      <div className="iconTitleWrapper">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faCircle} className="circleIcon" />
        &nbsp;requestBody
      </div>
      <div className="contentBox">
        <div>{"{"}</div>
        {item?.requestBody && (
          <>
            <div className="titleContentWrapper2">
              <div>&nbsp;&nbsp;&nbsp;dtoName:</div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
              {item.requestBody?.dtoName && item.requestBody.dtoName}',
            </div>
            <div className="titleContentWrapper2">
              <div>&nbsp;&nbsp;&nbsp;name:</div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
              {item.requestBody?.name && item.requestBody.name}',
            </div>
            <div className="titleContentWrapper2">
              <div>&nbsp;&nbsp;&nbsp;type:</div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
              {item.requestBody?.type && item.requestBody.type}',
            </div>
            <div className="titleContentWrapper2">
              <div>&nbsp;&nbsp;&nbsp;collectionType:</div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
              {item.requestBody?.collectionType &&
                item.requestBody.collectionType}
              ',
            </div>
            <div className="titleContentWrapper2">
              <div>&nbsp;&nbsp;&nbsp;required:</div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
              {item.requestBody?.required && item.requestBody.required}',
            </div>
            <Properties
              item={item.requestBody?.properties && item.requestBody.properties}
            />
          </>
        )}
        <div>{"}"}</div>
      </div>
    </div>
  );
};

export default RequestBody;
