import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Properties from "./Properties";

interface Props {
  item: any;
}

const Parameters = ({ item }: Props) => {
  return (
    <div>
      <div className="titleContentWrapper">
        <div className="iconTitleWrapper">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faCircle} className="circleIcon" />
          &nbsp;parameters
        </div>
      </div>
      <div className="contentBox">
        {item.parameters &&
          item.parameters.length > 0 &&
          item.parameters.map((item: any, idx: any) => (
            <div key={idx}>
              <div>{"{"}</div>
              <div className="titleContentWrapper2">
                <div>&nbsp;&nbsp;&nbsp;dtoName:</div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'{item?.dtoName}',
              </div>
              <div className="titleContentWrapper2">
                <div>&nbsp;&nbsp;&nbsp;name:</div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'{item?.name}',
              </div>
              <div className="titleContentWrapper2">
                <div>&nbsp;&nbsp;&nbsp;type:</div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'{item?.type}',
              </div>
              <div className="titleContentWrapper2">
                <div>&nbsp;&nbsp;&nbsp;collectionType:</div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'{item?.collectionType}
                ',
              </div>
              <div className="titleContentWrapper2">
                <div>&nbsp;&nbsp;&nbsp;required:</div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'{item?.required}',
              </div>
              <Properties item={item?.properties} />
              <div>{"}"}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Parameters;
