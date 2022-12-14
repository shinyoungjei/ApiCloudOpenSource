import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MappedTypeDescription } from "@syncedstore/core/types/doc";
import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { ControllerType } from "../../../pages/CreateApi/ApisType";
import "./WarningModal.scss";

interface Props {
  setIsWarningModal: React.Dispatch<React.SetStateAction<boolean>>;
  validationResult: any;
  synchronizeApiDoc?: () => void;
  synchronizeFile?: any;
  prepareExtraction?: (extract: () => void) => void;
  extractSpringBoot?: () => void;
  errorMessage?: string;
  setErrorMessage?: React.Dispatch<React.SetStateAction<string>>;
  isPending?: boolean;
  state: MappedTypeDescription<{
    data: ControllerType[];
  }>;
}

const WarningModal = ({
  setIsWarningModal,
  validationResult,
  synchronizeApiDoc,
  synchronizeFile,
  prepareExtraction,
  extractSpringBoot,
  errorMessage,
  setErrorMessage,
  isPending,
  state,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isControllerNameValidation, setIsControllerNameValidation] =
    useState(true);

  useEffect(() => {
    if (!validationResult) {
      return;
    }
  }, [validationResult]);

  const handleStart = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const checkControllerNameValidation = () => {
    const checkNameList = [];
    let cnt = 0;
    if (state.data && state.data.length > 0) {
      for (let item of state.data) {
        if (item.name !== null && item.name.trim()) {
          checkNameList.push(item.name);
        }
      }
      const result =
        checkNameList &&
        checkNameList.reduce((accu: any, curr) => {
          accu[curr] = (accu[curr] || 0) + 1;
          return accu;
        }, {});

      for (let item in result) {
        if (result[item] > 1) {
          cnt += result[item] - 1;
        }
      }
    }

    return cnt;
  };

  useEffect(() => {
    if (checkControllerNameValidation()) {
      setIsControllerNameValidation(false);
    } else {
      setIsControllerNameValidation(true);
    }
  }, []);
  return (
    <div className="warningModalContainer">
      <div className="warningModalInnerContainer">
        <p className="warningModalTitle">Controller ????????? ?????? ??????</p>
        <p className="warningModalText">?????? ?????????????????????????</p>
        <div className="warningModalValidationResultContainer">
          <div className="warningModalValidationResultGroup">
            <div className="warningModalInfoDropdown">
              <div className="warningModalValidationResultText1">
                <CloudIcon color={synchronizeFile ? "#277fc3" : "#6fc7d1"}>
                  <FontAwesomeIcon icon={faCloud} />
                </CloudIcon>
                <p>properties ????????? ??????</p>
              </div>
              <p className="warningModalInfoText">
                properties??? name, type, required ??? ??????????????????
              </p>
            </div>
            <div className="warningModalInfoDropdown">
              <div className="warningModalValidationResultText1">
                <CloudIcon color={synchronizeFile ? "#277fc3" : "#6fc7d1"}>
                  <FontAwesomeIcon icon={faCloud} />
                </CloudIcon>
                <p>????????? ??????</p>
              </div>
              <p className="warningModalInfoText">name??? ??????????????????</p>
            </div>
            <div className="warningModalInfoDropdown">
              <div className="warningModalValidationResultText1">
                <CloudIcon color={synchronizeFile ? "#277fc3" : "#6fc7d1"}>
                  <FontAwesomeIcon icon={faCloud} />
                </CloudIcon>
                <p>?????? ?????? ??????</p>
              </div>
              <p className="warningModalInfoText">
                type, dtoName, properties??? ????????? ??????????????????
              </p>
            </div>
            <div className="warningModalInfoDropdown">
              <div className="warningModalValidationResultText1">
                <CloudIcon color={synchronizeFile ? "#277fc3" : "#6fc7d1"}>
                  <FontAwesomeIcon icon={faCloud} />
                </CloudIcon>
                <p>????????? ??????</p>
              </div>
              <p className="warningModalInfoText">
                properties ????????? ????????? name??? ?????????????????????.
              </p>
            </div>
          </div>
          {validationResult && validationResult.length === 4 && (
            <div>
              <p className="warningModalValidationResultText2">
                {validationResult[0]}
              </p>
              <p className="warningModalValidationResultText2">
                {validationResult[1]}
              </p>
              <p className="warningModalValidationResultText2">
                {validationResult[2]}
              </p>
              <p className="warningModalValidationResultText2">
                {validationResult[3]}
              </p>
            </div>
          )}
        </div>
        {extractSpringBoot && prepareExtraction && (
          <p className="warningModalExtractText">
            Type??? Object??? ?????? DtoName??? ????????? ??????????????? ????????? ??? ????????????.
          </p>
        )}
        {errorMessage && (
          <p className="warningModalExtractText">{errorMessage}</p>
        )}
        {!isControllerNameValidation && (
          <p className="warningModalExtractText">
            Controller Name??? ?????????????????????.
          </p>
        )}
        <div className="warningModalButtonGroup">
          <WarningModalButton
            disabled={!isControllerNameValidation}
            color={synchronizeFile ? "#277fc3" : "#6fc7d1"}
            className="warningModalButton"
            onClick={() => {
              if (synchronizeFile) {
                synchronizeFile();
                handleStart();
              } else if (synchronizeApiDoc) {
                synchronizeApiDoc();
              } else if (extractSpringBoot && prepareExtraction) {
                prepareExtraction(extractSpringBoot);
              }
            }}
          >
            {synchronizeFile || synchronizeApiDoc ? (
              isPending && isLoading ? (
                <div className="warningModalLoading">
                  <ThreeDots
                    height="20"
                    width="50"
                    radius="9"
                    color="#fff"
                    ariaLabel="three-dots-loading"
                    visible={true}
                  />
                </div>
              ) : (
                "?????????"
              )
            ) : (
              "??????"
            )}
          </WarningModalButton>
          <WarningModalCloseButton
            color={synchronizeFile ? "#277fc3" : "#6fc7d1"}
            className="warningModalButton"
            onClick={() => {
              setIsWarningModal((curr) => !curr);
              if (setErrorMessage) {
                setErrorMessage("");
              }
            }}
          >
            ??????
          </WarningModalCloseButton>
        </div>
      </div>
      <div
        className="warningModalCloseButton"
        onClick={() => {
          setIsWarningModal((curr) => !curr);
          if (setErrorMessage) {
            setErrorMessage("");
          }
        }}
      />
    </div>
  );
};

const CloudIcon = styled.div`
  margin: 0 10px 0 0;
  color: ${(props) => props.color};
`;

const WarningModalButton = styled.button`
  background-color: ${(props) => props.color};
  color: white;
  width: 45%;
  text-align: center;
  padding: 10px;
  border-radius: 20px;
  border: none;
  outline: none;
`;

const WarningModalCloseButton = styled.div`
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
  width: 45%;
  text-align: center;
  padding: 10px;
  border-radius: 20px;
`;
export default WarningModal;
