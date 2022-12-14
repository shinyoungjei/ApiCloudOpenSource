# โ๏ธAPICloud

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb79b2d09-a53a-4fab-a969-7e72c96fb364%2FKakaoTalk_20221109_160041020.png?table=block&id=a775f43b-631e-4acf-82f9-c37cac455fe9&spaceId=a58fbc02-debe-4308-8332-63da46011251&width=250&userId=c5496e47-f115-4111-8d4e-742818285391&cache=v2)

๐ก **APICloud - API ์์ฑ ์๋น์ค**

Spring Boot Framework ํ๊ฒฝ์์ Restful API๋ฅผ ๊ฐ๋ฐํ  ์, ์์ฑํ API ๋ช์ธ๋ฅผ ๊ธฐ๋ฐ์ผ๋ก Controller๋ฅผ ์์ฑํด์ฃผ๋ ์น์๋น์ค

## ์ฃผ์๊ธฐ๋ฅ

1. ์์ฑํ API ๋ช์ธ๋ฅผ ๊ธฐ๋ฐ์ผ๋ก SpringBoot ํ๋ก์ ํธ, controller, DTO ์์ฑ
2. ์์ฑ๋ API๋ค์ ์์ฒญ๊ฐ๊ณผ ๋ฐํ๊ฐ ํ์ธ ๋ฐ ํ์คํธ
3. Google/Github ๋ก๊ทธ์ธ์ ํตํด ์ฌ์ฉ์ API ๋ฌธ์๋ฅผ ์ ์ฅ ๋ฐ ๊ทธ๋ฃน ์์ฑ
4. ๊ทธ๋ฃน API ๋ฌธ์ ๋์ ์์ฑ/ํธ์ง
5. ์์ฑ๋ API ๋ฌธ์๋ฅผ PDF, CSV, Notion์ผ๋ก Export
6. ํ๋ก์ ํธ, API ๋ฌธ์ ๊ฐ ๋๊ธฐํ ๊ธฐ๋ฅ

## ์ํคํ์ณ

![image](https://user-images.githubusercontent.com/105499985/202324997-0f7ffd20-c31f-43be-a0f3-81ec9d5fbfe6.png)

## ๊ธฐ๋ฅ์์

### ์ฐ์ปดํ์ด์ง

![image](https://user-images.githubusercontent.com/105499985/202839993-859b00e2-1f57-4912-b994-20de7360917c.png)

- Google, Github ๋ก๊ทธ์ธ

### API Doc ์์ฑ, ์ ๋ณด ์์ 

- api doc ์์ฑ

  ![01_main_API๋ช์ธ์์์ฑ](https://user-images.githubusercontent.com/105499985/202839340-22d551e6-fa32-41f3-9598-fc05769455c8.gif)

  - ์๋ฒ ์ ๋ณด ์ฝ์
  - ๊ณต์  ์ ์  ์ ํ

- ์ ์  ๊ถํ ์ค์ 

  ![02_main_์ ์ ๊ถํ์ค์ ](https://user-images.githubusercontent.com/105499985/202839342-4e85b6b3-4b5f-4106-bf20-09b0c6848a65.gif)

  - ํธ์ง์, ๋ทฐ์ด ์ค ์ค์ 
  - ๊ทธ๋ฃน์์ ์ฌ์ฉ์ ์ญ์ 

### API Doc ํธ์ง

- ์ปจํธ๋กค๋ฌ ์์ฑ

  ![03_createApi_์ปจํธ๋กค๋ฌ์์ฑ](https://user-images.githubusercontent.com/105499985/202839344-a1259aa3-7f64-4862-bc17-7218a308762a.gif)

- ์ปจํธ๋กค๋ฌ ์์ฑ ์ ์ ํจ์ฑ ๊ฒ์ฌ

  ![04_createApi_์ปจํธ๋กค๋ฌ์ถ๊ฐ์ ํจ์ฑ](https://user-images.githubusercontent.com/105499985/202839345-0b0f7823-55c1-4803-878f-cfd9ffe52453.gif)

  - ์ค๋ณต๋๋ ์ปจํธ๋กค๋ฌ ์ด๋ฆ, ์ค๋ณต๋๋ api ๊ฒ์ฌ

- ๋ช์ธ์ ์์ฑ

  ![05_createApi_๋ช์ธ์์์ฑ](https://user-images.githubusercontent.com/105499985/202839347-3be13fe7-51cd-4a9d-90d8-9b4ddf52e4c5.gif)

- dto ์ค๋ณต ํ์ธ

  ![06_createApi_dto์ค๋ณตํ์ธ](https://user-images.githubusercontent.com/105499985/202839348-a9c39aea-3b41-46b0-9b9a-7d14121d0ac5.gif)

  - ์๋ก ์์ฑํ  dto ์ด๋ฆ์ด ์ด๋ฏธ ๊ฐ์ controller ๋ด์ ์กด์ฌํ  ์, ์ด๋ฆ์ ๋ณ๊ฒฝํ๊ฑฐ๋ ๊ธฐ์กด dto๋ฅผ ์ฌ์ฉ ๊ฐ๋ฅ

- dto ์ ๋ณด ๋ณด๊ธฐ

  ![07_creaeApi_dto์ ๋ณด๋ณด๊ธฐ](https://user-images.githubusercontent.com/105499985/202839349-22891125-ebb8-4a59-b105-3b737856961d.gif)

  - ํด๋น api ๋ฌธ์์์ ์ฌ์ฉ๋ dto ์ ๋ณด ํ์ธ ๊ฐ๋ฅ

- ์ถ์ถญ

  - ๋ธ์ ์ถ์ถ

    ![08_extract_Notion](https://user-images.githubusercontent.com/105499985/202839350-a70544af-021b-46ed-a87c-db12e657142e.gif)

  - spring boot ์ถ์ถ

    ![09_extract_SpringBoot](https://user-images.githubusercontent.com/105499985/202839351-55e257f1-bf0b-46ab-bd45-fd5b74becfb9.gif)

  - csv ์ถ์ถ

    ![10_extract_CSV](https://user-images.githubusercontent.com/105499985/202839352-927cca7f-9fb6-493e-ae41-c9b9a8c3ce95.gif)

### API Doc ๋๊ธฐํ

- ์ฝ๋ > API ๋ฌธ์

  ![11_sync_ํ์ผto๋ฌธ์](https://user-images.githubusercontent.com/105499985/202839355-29f525e6-1ba6-4603-9c5d-74814d305bb0.gif)

  - ์ฝ๋์์ ์์ ๋ ๋ด์ฉ์ api ๋ฌธ์์ ์ ์ฉ

- API ๋ฌธ์ > ์ฝ๋

  ![12_sync_๋ฌธ์to์ฝ๋](https://user-images.githubusercontent.com/105499985/202839356-ec2975e2-3423-4507-b9bb-06d5500545be.gif)

  - api ๋ฌธ์์์ ์์ ๋ ๋ด์ฉ์ ์ฝ๋์ ์ถ๊ฐ

### API Docs ์์ธ๋ณด๊ธฐ

![13_apiDocs_๋ฌธ์์์ธ๋ณด๊ธฐ](https://user-images.githubusercontent.com/105499985/202839357-fab76a94-76dd-415c-91bd-41aa1608d1ad.gif)

- ์์ฑํ api๋ฅผ ์ฝ๊ฒ ํ์ธ ๊ฐ๋ฅ
- ์ฌ์ด๋๋ฐ์์ ์ํ๋ api๋ฅผ ์ ํํ์ฌ ๋ฐ๋ก ์ด๋

### API test

![14_api_testํ์ด์ง](https://user-images.githubusercontent.com/105499985/202863680-583772eb-f42e-47d3-93c1-ae71c0ced9cc.png)

- ์์ฑํ api ๋ฌธ์๋ฅผ ๊ธฐ๋ฐ์ผ๋ก ์๋์ผ๋ก test ํ ์์ฑ
- Request Body, Query, Parameter ์ ์ก ๊ฐ๋ฅ

  - Request Body: JSON ํํ๋ก ์์ฑ
  - Query: url์ ?๋ฅผ ์๋ ฅํ๋ฉด ํ์ํ query key ์๋ ์์ฑ
  - Parameter: url์ ์ง์  ์๋ ฅ

## ์ฐ์ถ๋ฌผ

- [๊ธฐ๋ฅ๋ช์ธ์](https://great-haircut-17f.notion.site/8205cbddae5149f7a34d28369ca608ee)
- [Mockup](https://www.notion.so/APICloud-a775f43b631e4acf82f9c37cac455fe9?p=67043fe082194a3c925677eefefb1de6&pm=s)
- [API](https://great-haircut-17f.notion.site/API-DOCS-8beccf8f0520450a9e285bd06920a77f)
- [ERD](https://great-haircut-17f.notion.site/ERD-d01c7ef3aa8a4accb3bfd3bce1a1b12c)
- [ํฌํ๋ฉ๋ด์ผ](https://lab.ssafy.com/s07-final/S07P31B205/-/blob/develop/exec/%ED%8F%AC%ED%8C%85%EB%A7%A4%EB%89%B4%EC%96%BC.md)

## ํ์๊ฐ

| ์ด๋ฆ   | ์ญํ             |
| ------ | --------------- |
| ์ ์์  | ํ์ฅ, Frontend  |
| ๊น์ฐ์ | ๋ถํ์ฅ, Backend |
| ๊น์๊ฒฝ | ํ์, Backend   |
| ๊น์ํ | ํ์, Frontend  |
| ์ ์ธ๋ฏธ | ํ์, Backend   |
| ์กฐ์ ์ง | ํ์, Frontend  |

## ๊ธฐ์ฌ

APICloud ํ๋ก์ ํธ๋ ์คํ์์ค์ด๋ฉฐ, ๊ฐ๋ฐ์ ๋ถ๋ค์ ์ฐธ์ฌ๋ฅผ ํ์ํฉ๋๋ค. APICloud์ Contributor๋ก ์ฐธ์ฌํ๋ ๋ฒ์ [Contributor Guide](https://lab.ssafy.com/s07-final/S07P31B205/-/blob/develop/docs/ContributorGuide.md)๋ฅผ ์ฐธ๊ณ ํด์ฃผ์ธ์.

## ๋ผ์ด์ ์ค

Distributed under the SGPL license. See [License](https://lab.ssafy.com/s07-final/S07P31B205/-/blob/develop/LICENSE) for more information.
