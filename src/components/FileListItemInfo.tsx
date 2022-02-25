import React from "react";
import styled from "styled-components";
import * as T from "types";
import * as U from "utils/DataConverter";
import * as C from "constant";

interface FileListProps {
  fileList: T.FileType[];
}

const FileListItemInfo: React.FC<FileListProps> = ({ fileList }) => {
  return (
    <>
      {fileList.map((item, idx) => {
        return (
          <FileListItem key={idx}>
            <FileItemInfo>
              {item.thumbnailUrl.slice(item.thumbnailUrl.length - 3) ===
              "svg" ? (
                <span
                  style={{
                    backgroundImage: `url(/svgs/default.svg)`,
                  }}
                />
              ) : (
                <img
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                  src={`${C.PROXY}/${item.thumbnailUrl}`}
                  alt=""
                />
              )}
              <span>{item.name}</span>
            </FileItemInfo>
            <FileItemSize>{U.sizeConverter(item.size)}</FileItemSize>
          </FileListItem>
        );
      })}
    </>
  );
};

const FileListItem = styled.li`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FileItemInfo = styled.div`
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;
  display: flex;
  align-items: center;

  span:first-child {
    width: 40px;
    height: 40px;
    margin-right: 12px;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  img:first-child {
    width: 40px;
    height: 40px;
    margin-right: 12px;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  
`;

const FileItemSize = styled.div``;

export default FileListItemInfo;
