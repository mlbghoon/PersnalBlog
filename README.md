2020-06-16
==========

git 초기 새팅
------------

1. index.tsx => Root.tsx

    ```javascript
    root.render(
        <React.StrictMode>
            <Root />
        </React.StrictMode>
    );
    ```

* react-router-dom 사용을 위해 Root 추가
* React SPA(Single Page Application)구현에 가장 많이 사용되는 react-router-dom 
기존 방식의 a tag 를 사용하면 url 변경시 새로고침이 되어 모드페이지 reload 로드 시간이 오래 걸림 router를 사용시 변경된 소스만 바꿔주기에 속도가 빠름

2. Root.tsx => Routes

    ```javascript
    const Root = () => (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/page2" element={<App2 />} />
            </Routes>
        </BrowserRouter>
    );
    ```

* BrowserRouter 사용 추후 Provider, History 추가 예정



