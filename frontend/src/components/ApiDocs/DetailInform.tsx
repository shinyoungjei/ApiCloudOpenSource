import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ForwardedRef, forwardRef, useEffect, useRef } from "react";
import "./DetailInform.scss";
import Headers from "./Headers";
import Parameters from "./Parameters";
import Queries from "./Queries";
import RequestBody from "./RequestBody";
import Responses from "./Responses";
import { Ref } from "./Sidebar";

interface Props {
  detail: any;
  scrollPosition: number;
}

// ref의 객체, 함수 여부 판단
const useForwardRef = <T,>(ref: ForwardedRef<T>, initialValue: any = null) => {
  const targetRef = useRef<T>(initialValue);

  useEffect(() => {
    if (!ref) return;

    if (typeof ref === "function") {
      ref(targetRef.current);
    } else {
      ref.current = targetRef.current;
    }
  }, [ref]);

  return targetRef;
};

const DetailInform = forwardRef<Ref, Props>(
  ({ detail, scrollPosition }, menuRef) => {
    const refList = useForwardRef<Ref>(menuRef, []);

    // map 돌면서 refList에 ref 요소 할당 함수
    const addToRefs = (el: never) => {
      refList.current.push(el);
    };

    return (
      <div className="docPaper2Wrapper">
        <h2 className="detailInformTitle">
          <div
            ref={(el) => (refList.current[0] = el)}
            className={
              refList.current.length > 0 &&
              refList.current[0]?.offsetTop !== undefined &&
              scrollPosition - 1 <= refList.current[0]?.offsetTop &&
              refList.current[0]?.offsetTop < scrollPosition + 1
                ? "highLightedSubtitle"
                : "subtitle"
            }
          >
            상세정보
          </div>
        </h2>
        {detail &&
          detail?.controllers.map((controller: any, controllerIdx: any) => (
            <div key={controllerIdx}>
              <div
                ref={(el) =>
                  (refList.current[
                    (3 + controller.apis.length) * controllerIdx + 1
                  ] = el)
                }
                className={
                  refList.current.length > 0 &&
                  refList.current[
                    (3 + controller.apis.length) * controllerIdx + 1
                  ]?.offsetTop !== undefined &&
                  scrollPosition - 1 <=
                    refList.current[
                      (3 + controller.apis.length) * controllerIdx + 1
                    ]!.offsetTop &&
                  refList.current[
                    (3 + controller.apis.length) * controllerIdx + 1
                  ]!.offsetTop <
                    scrollPosition + 1
                    ? "highLightedSubtitle"
                    : "subtitle"
                }
              >
                controllers
              </div>
              <div className="titleContentWrapper">
                <div className="iconTitleWrapper">
                  &nbsp;
                  <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                  <div
                    ref={(el) =>
                      (refList.current[
                        (3 + controller.apis.length) * controllerIdx + 2
                      ] = el)
                    }
                    className={
                      refList.current.length > 0 &&
                      refList.current[
                        (3 + controller.apis.length) * controllerIdx + 2
                      ]?.offsetTop !== undefined &&
                      scrollPosition - 1 <=
                        refList.current[
                          (3 + controller.apis.length) * controllerIdx + 2
                        ]!.offsetTop &&
                      refList.current[
                        (3 + controller.apis.length) * controllerIdx + 2
                      ]!.offsetTop <
                        scrollPosition + 1
                        ? "highLightedSubtitle"
                        : "subtitle"
                    }
                  >
                    &nbsp;name:
                  </div>
                </div>
                <div className="content">{controller.name}</div>
              </div>
              <div className="titleContentWrapper">
                <div className="iconTitleWrapper">
                  &nbsp;
                  <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                  <div
                    ref={(el) =>
                      (refList.current[
                        (3 + controller.apis.length) * controllerIdx + 3
                      ] = el)
                    }
                    className={
                      refList.current.length > 0 &&
                      refList.current[
                        (3 + controller.apis.length) * controllerIdx + 3
                      ]?.offsetTop !== undefined &&
                      scrollPosition - 1 <=
                        refList.current[
                          (3 + controller.apis.length) * controllerIdx + 3
                        ]!.offsetTop &&
                      refList.current[
                        (3 + controller.apis.length) * controllerIdx + 3
                      ]!.offsetTop <
                        scrollPosition + 1
                        ? "highLightedSubtitle"
                        : "subtitle"
                    }
                  >
                    &nbsp;commonUri:
                  </div>
                </div>
                <div className="content">{controller?.commonUri}</div>
              </div>
              {controller?.apis &&
                controller.apis.length > 0 &&
                controller.apis.map((api: any, apiIdx: any) => (
                  <div key={apiIdx} ref={addToRefs}>
                    <div
                      className={
                        refList.current.length > 0 &&
                        refList.current[
                          (3 + controller.apis.length) * controllerIdx +
                            apiIdx +
                            4
                        ]?.offsetTop !== undefined &&
                        scrollPosition - 1 <=
                          refList.current[
                            (3 + controller.apis.length) * controllerIdx +
                              apiIdx +
                              4
                          ]!.offsetTop &&
                        refList.current[
                          (3 + controller.apis.length) * controllerIdx +
                            apiIdx +
                            4
                        ]!.offsetTop <
                          scrollPosition + 1
                          ? "highLightedTitleContentWrapper"
                          : "titleContentWrapper"
                      }
                    >
                      &nbsp;
                      <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                      &nbsp;apis
                    </div>
                    <div className="titleContentWrapper">
                      <div className="iconTitleWrapper">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon
                          icon={faCircle}
                          className="circleIcon"
                        />
                        &nbsp;name:
                      </div>
                      <div className="content">{api?.name}</div>
                    </div>
                    <div className="titleContentWrapper">
                      <div className="iconTitleWrapper">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon
                          icon={faCircle}
                          className="circleIcon"
                        />
                        &nbsp;uri:
                      </div>
                      <div className="content">{api?.uri}</div>
                    </div>
                    <div className="titleContentWrapper">
                      <div className="iconTitleWrapper">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon
                          icon={faCircle}
                          className="circleIcon"
                        />
                        &nbsp;method:
                      </div>
                      <div className="content">{api?.method}</div>
                    </div>
                    <RequestBody item={api} />
                    <Parameters item={api} />
                    <Queries item={api} />
                    <Headers item={api} />
                    <Responses item={api} />
                  </div>
                ))}
            </div>
          ))}
      </div>
    );
  }
);

export default DetailInform;
