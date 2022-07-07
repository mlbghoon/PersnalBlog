2022-07-06 V 1.3
================
1. session 에서 사용하던 정보들 redux로 변경 고려중

    ```typescript
        ComLib.setSession('gdsUserInfo',	res.data.dsUserInfo);
        ComLib.setSession('gdsCommCode',	res.data.dsCommCodeInfo);
        ComLib.setSession('gdsMenu', 		res.data.dsMenuInfo);
        ComLib.setSession('gdsCentStndVl',	res.data.dsCentStvlInfo);
        ComLib.setSession('gdsCentList',	res.data.dsCentList);
        ComLib.setSession('gdsTeamList',	res.data.dsTeamList);
        ComLib.setSession('gdsUserList',	res.data.dsUserList);
        ComLib.setSession('gdsMsgList',		res.data.dsMsgList);
        ComLib.setSession('gdsConstList',	res.data.dsConstList);
    ```
    
    * 공통 코드, 메세지 코드 등등 변경후 바로 rerendering 이 되게 할수 있음
    * theme 같은 기능을 만들때 좋음

2. redux, store 정리

    * 불필요 하게 분해 되있는 부분 합치기
    * menuSlice 말고 다른 slice도 추가 할수 있게 변경
    * store에 저장되있는 state 명명 전부 변경


### 다음목표 : 1. dataset 마무리 
