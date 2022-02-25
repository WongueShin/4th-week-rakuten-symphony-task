import React, { useEffect, useState } from "react";
import type { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import colors from "styles/colors";
import Avatar from "components/Avatar";
import * as T from "types";
import * as U from "utils/DataConverter";
import * as C from "constant";
import useInterval from "utils/useInterval";

interface FileTableRowProps {
  FetchData: T.FetchDataType;
}

const FileTableRow: FC<FileTableRowProps> = ({ FetchData }) => {
  const [Period, setPeriod] = useState<string>();

  useEffect(() => {
    setPeriod(U.ExpirationPeriod(FetchData.expires_at));
  }, []);
  useInterval(() => {
    setPeriod(U.ExpirationPeriod(FetchData.expires_at));
  }, 60000);

  const handleLink = (): void => {
    window.location.assign(`/${FetchData.key}`);
    return;
  };

  const handleClipBoard = (): void => {
    navigator.clipboard
      .writeText(window.location.href + FetchData.key)
      .then(() => {
        alert(`${window.location.href + FetchData.key} 주소가 복사되었습니다.`);
      })
      .catch(() => {
        alert("다시 시도해주세요.");
      });

    return;
  };
  return (
    <TableRow>
      <TableCell onClick={handleLink}>
        <LinkInfo>
          <LinkImage>
            {FetchData.thumbnailUrl.slice(FetchData.thumbnailUrl.length - 3) ===
            "svg" ? (
              <img
                referrerPolicy="no-referrer"
                src="/svgs/default.svg"
                alt=""
              />
            ) : (
              <img
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
                src={`${C.PROXY}/${FetchData.thumbnailUrl}`}
                alt=""
              />
            )}
          </LinkImage>
          <LinkTexts>
            <LinkTitle>{FetchData.key}</LinkTitle>
            {U.isValid(FetchData.expires_at) ? (
              <LinkUrl
                onClick={(event) => {
                  event.stopPropagation();
                  handleClipBoard();
                }}
              >
                {window.location.href}
                {FetchData.key}
              </LinkUrl>
            ) : (
              "만료됨"
            )}
          </LinkTexts>
        </LinkInfo>
        <span />
      </TableCell>
      <TableCell>
        <span>파일개수</span>
        <span>
          {FetchData.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
      </TableCell>
      <TableCell>
        <span>파일사이즈</span>
        <span>{U.sizeConverter(FetchData.size)}</span>
      </TableCell>
      <TableCell>
        <span>유효기간</span>
        <span>{Period}</span>
      </TableCell>
      <TableCell>
        <span>받은사람</span>
        <LinkReceivers>
          {FetchData.sent ? (
            FetchData.sent.emails.map((emails, index) => (
              <Avatar key={index} text={emails} />
            ))
          ) : (
            <></>
          )}
        </LinkReceivers>
      </TableCell>
    </TableRow>
  );
};

export default FileTableRow;

const TableRow = styled.tr`
  color: inherit;
  display: table-row;
  vertical-align: middle;
  outline: 0px;
  font-weight: inherit;
  font-size: inherit;
`;

const TableCell = styled.th`
  font-weight: inherit;
  font-size: inherit;
  font-size: 12px;
  line-height: 24px;
  display: table-cell;
  vertical-align: inherit;
  border-bottom: 1px solid ${colors.grey300};
  text-align: left;
  padding: 16px;
`;

const LinkInfo = styled.div`
  display: flex;
  align-items: center;
`;

const LinkImage = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 4px;
  }
`;

const LinkTexts = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;

  & > * {
    margin: 0;
  }
`;

const LinkTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.grey700};
`;

const LinkUrl = styled.a`
  text-decoration: underline;

  :hover {
    color: ${colors.teal700};
  }
`;

const LinkReceivers = styled.div`
  display: flex;

  & > * + * {
    margin-left: 8px;
  }
`;
