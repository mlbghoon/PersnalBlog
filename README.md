2022-06-16 V 0.1
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
                <Route path="/Main" element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
    ```

* BrowserRouter 사용 추후 Provider, History 추가 예정

3. App.tsx

    ```javascript
    function App() {
        const { push } = useInternalRouter();
        return (
            <div className={'App-logo-div'}>
            <img 
                src={require('../common/image/MarvelLogo.png')} 
                alt="" 
                onClick={() => push('/Main')}
                className={'App-logo'}
            />
            </div>
        );
    }
    ```

* useInternalRouter 사용 (react-router-dom 의 useNavigate 사용함)
* useNavigate의 push, goBack 으로 페이지 이동 가능
* webpack을 사용할때는 require를 써서 페이지 로딩전 이미지파일을 가지고 오게 해야함


4. routing.jsx

    ```javascript
    export function useInternalRouter() {
        const navigate = useNavigate();
        return useMemo(() => {
            return {
            goBack() {
                navigate(-1);
            },
            push(path) {
                navigate(path);
            },
            };
        }, [navigate]);
    }
    ```

5. Main.tsx

    ```javascript
        const [movieList, setMovieList] = useState(new Array<MovieType>);  
        const [page, setPage] = useState(1);  
        const [total_pages, setTotal_page] = useState(0);  
    ```

* api로 가져올 영화의 정보를 담을 state 생성

    ```javascript
        useEffect(() => {
            loadMovieInfo();
        }, []);  
    ```

    ```javascript
        const loadMovieInfo = () => {
            let url = "https://api.themoviedb.org/3/discover/movie?api_key=daf67dd834f07e7672eb384184d2ce3a&language=ko-KR&sort_by=release_date.desc&include_video=false&page=";
            
            if (total_pages != page) {
                url += page + 1;
                setPage(page + 1);

            } else {
                url += page;
            }
        
            url += "&with_companies=19551|420|13252|2301|38679|7505|108634&without_genres=99&region=KR"

            const reqOptions = {
                method: 'get',			
                url: url,
            };
            
            axios(reqOptions).then(res=> {   
            setMovieList(res.data.results); 
            setTotal_page(res.data.total_pages);                 
        })        
    } 
    ```

* 화면 오픈시 api 연동해서 영화 리스트 가져오기
* 페이지 넘기기등은 우선 기본 구조만 만들어놈

    ```javascript
        const makeTblData = () => { 
            let test = new Array;

            for (let i = 0; i < movieList.length; i ++) {
                test.push(
                    [	
                    {type : 'T', value : movieList[i].id},
                    {type : 'D', value :   
                        <input
                        id       = {'selSchChgDtm'+i}
                        name     = {'selSchChgDtm'+i}
                        readOnly = {true}
                        disabled = {false}
                        width    = {"100%"}
                        value    = {movieList[i].title}
                        />}
                    ]
                )
            }                    
            return test;
        }
    ```
* redering 할때 Table 컴포넌트에서 사용할 데이터 생성

    ```javascript
    return (
        <div>
            <Table
                id="tblInfo"
                colGrp = {[{width: '50%'}, {width: '50%'}]}
                tbData = {makeTblData()}
            /> 
        </div>
    );
    ```
* 기존에 만들어 놨던 Table 컴포넌트 사용
* 추후에 제대로 된 컴포넌트 개발 예정

### StrictMode 사용시에는 개발 도중 발생하는 문제를 감지하기 위해서 렌더링이 2번됨 따라서 
### TypeScript 공부 추가 필요


