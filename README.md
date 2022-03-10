# 라쿠텐심포니 코리아 Frontend Developer 기술 과제

### <a href =https://62190ffe18b09e0007065e11--naughty-wescoff-ff743b.netlify.app/ target="_blank">Go Demo🚀</a>
  url= https://62190ffe18b09e0007065e11--naughty-wescoff-ff743b.netlify.app/

## Member

<table>
<tr>
<td align="center"><a href="https://github.com/WongueShin"><img src="https://media.vlpt.us/images/yeonbee/post/a3b02f02-0826-4cc9-b63e-9ddce5fbd857/wongyu.jpg" width="50%" /></a></td>
<td align="center"><a href="https://github.com/yunred"><img src="https://avatars.githubusercontent.com/u/84527643?v=4" width="40%" /></a></td>
</tr>
<tr>
<td align="center"><b>신원규(팀장)</b></td>
<td align="center"><b>김서윤</b></td>

</tr>
<tr>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
</tr>
</table>

<br />
<table>
<tr>
<td align="center"><b>팀원<b></td>
<td align="center"><b>역할</b></td>
</tr>
<tr>
<td>신원규</td>
<td> 프로젝트 매니지먼트 / 링크 목록 화면 </td>
</tr>
<tr>
<td>김서윤</td>
<td> 링크 상세 화면</td>
</tr>

</table>

<br/>
  <br/>

| 이 문제의 저작권은 라쿠텐 심포니 코리아에 있으며, 지원자는 오로지 채용을 위한 목적으로만 이 문제를 활용할 수 있습니다. 안내사항에 따라 과제를 완성해주세요. |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- |


.  
├─ <a name="#precautions">유의사항</a>  
├─ <a href="#questions">문제</a>  
│ 　 ├─ <a href="#question1">화면1: 링크 목록 화면</a>  
│ 　 └─ <a href="#question2">화면2: 링크 상세 화면</a>  
└─ <a href="#apidoc">API 명세</a>

---

<br/>

### <a name="precautions">유의사항</a>

- 문제를 꼼꼼히 살펴보고, 요구 사항을 충실히 구현해주세요.
- 필요한 라이브러리가 있다면 자유롭게 사용할 수 있습니다.

---

<br/>

### <a name="questions">문제</a>

#### <a name="question1">링크 목록 화면</a>

- [x] - 링크로 공유한 파일(들)을 다운로드 받을 수 있는 링크 목록을 확인할 수 있습니다.

- [x] 1. 서버에서 제공한 링크 데이터를 화면에 표시합니다.
- [x] 2. 링크 아이템을 클릭하여 상세페이지로 이동합니다.
- [x] 3. 제목 아래 URL을 아래와 같이 표시합니다.
   - [x] 3-1.유효기간 이내: 도메인 주소를 포함한 상세페이지로 이동하는 전체경로를 표시합니다.
   - [x] 3-2.유효기간 만료: `만료됨`으로 표시합니다.
- [x] 4. URL을 클릭한 경우 아래와 같이 동작합니다.
   - [x] 4-1. 유효기간 이내: URL를 클립보드에 복사하고 `${링크 제목} 주소가 복사 되었습니다.`를 내용으로 가지는 브라우저 기본 Alert을 표시합니다.
   - [x] 4-2. 유효기간 만료: 아무동작도 하지 않습니다.
- [x] 5. 파일 개수의 숫자에 3자리 단위마다 콤마를 표시합니다.
- [x] 6. 파일 사이즈를 읽을 수 있도록 표시해주세요.
   - [x] 6-1. 소수점 둘째 자리까지 표기합니다.
   - [x] 6-2. 단위는 숫자 뒤에 `B`, `KB`, `MB`, `GB`, `TB`로 표기 (ex. 10.86KB)
- [x] 7. 유효기간을 아래와 같이 표시하되 실시간으로 반영합니다.
   - [x] 7-1. 48시간 미만: `XX시간 XX분`
   - [x] 7-2. 48시간 이상: `X일`
   - [x] 7-3. 만료: `만료됨`
- [x] 8. 받은 사람이 있을 경우 받은 사람 텍스트를 미리 주어진 코드베이스와 같이 `<Avatar />`컴포넌트를 이용합니다.

<br/>

#### <a name="question2">화면2: 링크 상세 화면</a>

- [x] - 링크가 가지고 있는 파일 목록을 확인하고 공유 받을 수 있습니다.
- [x] - App.tsx 에서 `<LinkPage />` 를 주석 처리하고, `<DetailPage />` 화면을 주석 해제하면 확인할 수 있습니다.

- [x] 1. 링크 정보를 표시합니다.
- [x] 2. 받기 버튼을 누르면 `다운로드 되었습니다.`를 내용으로 가지는 브라우저 기본 Alert을 표시합니다.
- [x] 3. 링크의 유효기간이 만료 되지 않았을 경우에만 파일 목록을 표시합니다.

---

<br/>

### <a name="apidoc">API 명세</a>

- 링크 목록은 아래 API를 호출하여 가져올 수 있습니다.  
  **GET: https://storage-fe.fastraffic.io/homeworks/links**

```json
[
  {
    "created_at": 1641860565,
    "key": "15PMXQPE",
    "expires_at": 1642033365,
    "download_count": 0,
    "count": 1,
    "size": 11117,
    "summary": "logo.png",
    "thumbnailUrl": "https://storage-fe.fastraffic.io/homeworks/thumbnails/15PMXQPE/1641860565.jpg",
    "files": [
      {
        "key": "662f2b22920a10dbb4cbd819d6f0786937208.jpg",
        "thumbnailUrl": "https://storage-fe.fastraffic.io/homeworks/thumbnails/15PMXQPE/662f2b22920a10dbb4cbd819d6f0786937208.jpg",
        "name": "fab-lentz-mRMQwK513hY-unsplash.jpg",
        "size": 115916
      }
      /* ... */
    ],
    "sent": {
      "subject": "로고파일",
      "content": "로고파일 전달 드립니다.",
      "emails": ["recruit@estmob.com"]
    }
  }
  /* ... */
]
```

각 아이템이 프로퍼티로 가지는 값의 의미는 다음과 같습니다.

- `created_at`: 링크가 생생된 날짜 _(number)_
- `key`: 링크의 KEY _(string | undefined)_
- `expires_at`: 링크의 유효기간 _(number)_
- `download_count`: 링크의 다운로드 횟수 _(number)_
- `count`: 링크의 파일 개수 _(number)_
- `size`: 링크의 파일 사이즈 _(number)_
- `summary`: 링크의 첫번째 파일 이름 _(string)_
- `thumbnailUrl`: 링크의 썸네일 URL _(string)_
- `files`: 링크의 파일 목록 {
  - `key`: 파일의 KEY _(string)_
  - `thumbnailUrl`: 파일의 썸네일 URL _(string)_
  - `name`: 파일의 이름 _(string)_
  - `size`: 파일의 사이즈 _(number)_
    }[]
- `sent`: {
  - `subject`: 링크를 공유한 메일 제목 _(string)_
  - `content`: 링크를 공유한 메일 내용 _(string)_
  - `emails`: 링크를 공유한 메일 목록 _(string[])_
    }

  
  <br/>

## 이슈정리

---

### ⚡구현 중 기술적 이슈들
  - <a href ="https://humble-tachometer-f77.notion.site/SVG-456570efe2f64290b64c8422cf357eea" target="_blank">SVG 이미지를 렌더하려 시도했던 노력들</a>
  - CRA-proxy<br/>
  API 서버에서 데이터를 가져오는데, CORS 정책위반 경고가 발생했습니다.<br/>
  이를 해결하기 위해 프록시 서버를 배포해야하나 고민중에, CRA 에서 CORS 해결을 위한 프록시 서버 기능을 지원하는것을 알게되었습니다.<br/>
  이를 이용해, CRA 프로젝트에서 https로 시작하는 절대경로가 아닌 모든 상대경로 url을 "https://storage-fe.fastraffic.io"로 리다이렉트 시키는 프록시 옵션을 활성화하며 해결했습니다.
  - 이벤트 버블링<br/>
components/FileTableRow.tsx에서 LinkUrl을 선택했을 때 이 요소에 할당된 핸들러(handleClipBoard())가 동작하고, 부모 요소의 핸들러(handleLink())가 동작하여 페이지가 이동됐습니다. 이것은 버블링(bubbling) 원리로 인해 생긴 문제였습니다. 버블링은 한 요소에 이벤트가 발생하면, 해당 요소의 이벤트부터 가장 최상단 조상요소를 만날 때 까지 과정이 반복되어 각각에 할당된 핸들러가 동작합니다. 이 문제는 해당 타겟 이벤트 핸들러에  클릭이벤트가 상위 요소로 전달되지 않게 처리하는 event.stopPropagation()을 사용해서 해결할 수 있습니다.

<br/>
  
  <h3>🛰배포 중 기술적 이슈들</h3>
  
  <li>프록시 서버<br/>
  netlify를 이용해 배포를 진행하였습니다.<br/>
  개발단계에서 사용했던 CRA의 프록시 기능이 배포시에 정상적으로 기능하지 못해서,<br/> heroku에 <a href="https://github.com/Rob--W/cors-anywhere">cors-everywhere</a>를 클론해서 CORS 이슈를 해결하였습니다.</li>
  <br/>

## 프로젝트 후기

🎹신원규 : 결과적으로 클라이언트 단의 문제는 아니라고 판명이 났지만,<br/> svg 이미지를 랜더하려고 webpack 설정을 변경했었던 경험은 상당히 높은 난도의 경험이였던 동시에 매우 흥미로웟던 경험이였습니다.

🎇김서윤 : 과제 요구사항을 구현하고 팀원과 소통하는 과정에서 다양한 구현 방법에 대해 고민할 수 있었던 시간이었습니다.



