import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { userDummy } from "./ListDummy";
import { useDispatch, useSelector } from "react-redux";
import mainApiSlice, {
  getApiDoc,
  updateApiDoc,
} from "../../Store/slice/mainApi";
import { RootState } from "../../Store/store";

export type DocInformationType = {
  docId: number;
  docsName: string;
  serverUrl: string;
  contextUri: string;
  javaVersion: string;
  springVersion: string;
  buildManagement: number;
  groupPackage: string;
  packageName: string;
  packaging: number;
};

const UpdateModal = () => {
  const [docsName, setDocsName] = useState("");
  const [serverUrl, setServerUrl] = useState("");
  const [contextUri, setContextUri] = useState("");
  const [javaVersion, setJavaVersion] = useState("");
  const [springVersion, setSpringVersion] = useState("");
  const [buildManagement, setBuildManagement] = useState("");
  const [groupPackage, setGroupPackage] = useState("");
  const [packageName, setPackageName] = useState("");
  const [packaging, setPackaging] = useState("");

  const docsNameInput: any = useRef();

  const docId = useSelector((state: RootState) => state.mainApi.docId);
  const isOpenUpdateModal = useSelector(
    (state: RootState) => state.mainApi.isOpenUpdateModal
  );

  const dispatch = useDispatch();

  const canGoNext =
    docsName &&
    serverUrl &&
    contextUri &&
    javaVersion &&
    springVersion &&
    buildManagement &&
    groupPackage &&
    packageName &&
    packaging;

  const updateDocRequest = {
    docId: docId,
    docsName: docsName,
    serverUrl: serverUrl,
    contextUri: contextUri,
    javaVersion: javaVersion,
    springVersion: springVersion,
    buildManagement: buildManagement,
    groupPackage: groupPackage,
    packageName: packageName,
    packaging: packaging,
  };

  // API DOC 수정하기
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (docId > 0) {
      dispatch(
        updateApiDoc({ docId: docId, updateDocRequest: updateDocRequest })
      ).then((res: any) => {
        if (res.payload?.status === 200) {
          dispatch(mainApiSlice.actions.setDocId({ docId: 0 }));
          dispatch(
            mainApiSlice.actions.setIsOpenUpdateModal({ isOpenModal: false })
          );
          dispatch(
            mainApiSlice.actions.setIsDocUpdated({
              isDocUpdated: true,
            })
          );
        }
      });
    }
  };

  useEffect(() => {
    if (docId > 0) {
      dispatch(getApiDoc({ docId: docId })).then((res: any) => {
        if (res.payload?.status === 200) {
          setDocsName(res.payload.docsName);
          setServerUrl(res.payload.serverUrl);
          setContextUri(res.payload.contextUri);
          setJavaVersion(res.payload.javaVersion);
          setSpringVersion(res.payload.springVersion);
          setBuildManagement(res.payload.buildManagement);
          setGroupPackage(res.payload.groupPackage);
          setPackageName(res.payload.packageName);
          setPackaging(res.payload.packaging);
        }
      });
    }
  }, []);

  return (
    <ModalContainer>
      <DialogBox>
        <div className="modalContainer">
          <div className="modalMain">
            <form onSubmit={onSubmit}>
              <p>수정하기</p>
              <input
                className="docsName"
                type="text"
                placeholder="생성할 API 명을 작성해주세요"
                ref={docsNameInput}
                value={docsName}
                onChange={(e) => setDocsName(e.target.value)}
              />
              <input
                className="serverUrl"
                type="text"
                placeholder="생성할 serverUrl을 작성해주세요"
                value={serverUrl}
                onChange={(e) => setServerUrl(e.target.value)}
              />
              <input
                className="contextUrl"
                type="text"
                placeholder="생성할 contextUrl를 작성해주세요"
                value={contextUri}
                onChange={(e) => setContextUri(e.target.value)}
              />
              <input
                className="javaVersion"
                type="text"
                placeholder="생성할 javaVersion을 작성해주세요"
                value={javaVersion}
                onChange={(e) => setJavaVersion(e.target.value)}
              />
              <input
                className="springVersion"
                type="text"
                placeholder="생성할 springVersion을 작성해주세요"
                value={springVersion}
                onChange={(e) => setSpringVersion(e.target.value)}
              />
              <input
                className="buildManagement"
                type="text"
                placeholder="생성할 buildManagement을 작성해주세요"
                value={buildManagement}
                onChange={(e) => setBuildManagement(e.target.value)}
              />
              <input
                className="groupPackage"
                type="text"
                placeholder="생성할 groupPackage을 작성해주세요"
                value={groupPackage}
                onChange={(e) => setGroupPackage(e.target.value)}
              />
              <input
                className="packageName"
                type="text"
                placeholder="생성할 packageName을 작성해주세요"
                value={packageName}
                onChange={(e) => setPackageName(e.target.value)}
              />
              <input
                className="packaging"
                type="text"
                placeholder="생성할 packaging을 작성해주세요"
                value={packaging}
                onChange={(e) => setPackaging(e.target.value)}
              />
              <p>초대하기</p>
              <input
                className="groupMember"
                type="text"
                placeholder="추가할 사용자의 이메일을 작성해주세요"
              />
              <p>그룹목록</p>
              <p>API 편집 권한이 있는 사용자</p>
              <div className="apiUser">
                {userDummy.map((it, idx) => (
                  <div className="apiUserList" key={idx}>
                    <FontAwesomeIcon
                      className="apiUserIcon"
                      icon={faCircleUser}
                    />
                    <div className="apiUserTitle">
                      <p>{it.name}</p>
                      <p>{it.id}</p>
                    </div>
                    <p className="apiAuthority">{it.authority}</p>
                  </div>
                ))}
              </div>
              <div className="modalBtn">
                <button className="copyBtn">
                  <FontAwesomeIcon icon={faLink} />
                  <span>링크복사</span>
                </button>
                <button className="makeBtn" type="submit" disabled={!canGoNext}>
                  완료
                </button>
              </div>
            </form>
          </div>
        </div>
      </DialogBox>
      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (isOpenUpdateModal) {
            dispatch(
              mainApiSlice.actions.setIsOpenUpdateModal({
                isOpenUpdateModal: false,
              })
            );
          }
        }}
      />
    </ModalContainer>
  );
};
const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

const DialogBox = styled.dialog`
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 70px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
  margin-bottom: 530px;
  margin-right: 550px;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
`;

export default UpdateModal;