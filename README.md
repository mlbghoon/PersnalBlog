2022-06-17 V 0.2
================

TypeScript 공부 (Movie)
-------------------
1. Layout PropsType 변경

    ```typescript
        interface PropTypes {
            children: React.ReactNode;
        };
    ```
    
* 기존 : any
* 변경 : React.ReactNode
* React.ReactNode = string | number | boolean | React.ReactElement&#60any, string | React.JSXElementConstructor&#60any&#62&#62 | React.ReactFragment | React.ReactPortal | null | undefined
* js파일 일때 : static propTypes = { children: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.array, PropTypes.object]).isRequired }; 선언 하고 사용함

2. Button 수정

    ```typescript
        let buttonRef = useRef<HTMLButtonElement>(null);

        return (
            <button className={btnClass} ref={buttonRef}  id={id} onClick={onClick} ...>
                <span className={"button__text"}>{value}</span>
                {
                    (innerImage && iconClass !== null) 
                    ? 
                        <span className={"button__icon"} onClick={(e) => {e.stopPropagation(); buttonRef.current?.click()}}>
                            <i className={ iconClass }></i> 
                        </span>	 
                    :  
                        null
                }
            </button>
        );
    ```
    
* 버튼안에 아이콘을 클릭해도 ref 사용하여 버튼의 클릭에 연결된 props의 onClick 작동하게 변경
* typeScript 이여서 ref도 HTMLButtonElement 선언후 사용

    ```typescript
        interface BtnProps {
            id: string;
            ...
            onClick: (e:React.MouseEvent) => void;
        };
    ```
    
* btnProps 에서 onClick에 타입을 지정해주고 넘겨야지 props로 event 가 넘어감

    ```typescript
        const onClick = (e:React.MouseEvent) => {
            const target = e.target as HTMLButtonElement;
            console.log(target)
            console.log(target.id)
        }
    ```

* Props 쪽에서도 전달받은 event 가 mouseEvent 이다 타입 지정 해줘야 함
* event 안에 target도 as HTMLButtonElement 사용 안할시 id에서 오류 발생
* terget의 타입을 지정 안해주면 id가 있는지 없는지 알수 없어 오류 발생 하는거라 보여짐

3. Input 추가

    ```typescript
        interface IptProps {
            ...
            onChange: (e:React.ChangeEvent) => void;
            onKeyPress: (e:React.KeyboardEvent) => void;
            onBlur: (e:React.FocusEvent) => void;
            onKeyUp: (e:React.KeyboardEvent) => void;
        };
    ```
* IptProps event 타입지정 
* 여러 타입들마다 정상적으로 작동하는지 테스트 필요

    ```typescript
        const onKeyUp = (e:React.KeyboardEvent) => {
            const target = e.target as HTMLButtonElement;
            console.log("onKeyUp")
            console.log(target.id)
            console.log(e.key)
        }
    ```
    
* KeyboardEvent의 경우 한글 입력시 IME composing 단계를 거친다. 이때 keyEvents 를 처리시 composing 이 완료되지 않았기에 비정상적인 key, keycode 값이 넘어온다
* 영문에서는 문제 없음, 한글입력시에는 사용못 함


2022-06-16 V 0.1
==========

git 초기 새팅(Movie)
------------

1. index.tsx => Root.tsx

    ```typescript
        root.render(
            <AppPanel>
                <Root />
            </AppPanel>
        );
    ```

* react-router-dom 사용을 위해 Root 추가
* React SPA(Single Page Application)구현에 가장 많이 사용되는 react-router-dom 
기존 방식의 a tag 를 사용하면 url 변경시 새로고침이 되어 모드페이지 reload 로드 시간이 오래 걸림 router를 사용시 변경된 소스만 바꿔주기에 속도가 빠름
* react-router-dom 사용을 위해 Root 추가
* layout 컴포넌트 추가

2. Root.tsx => Routes

    ```typescript
        const Root = () => (
            <BrowserRouter>
                <HeadPanel>
                    header
                </HeadPanel>
                <MiddlePanel>
                    <MainPanel>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/Main" element={<Main />} />
                    </Routes>
                    </MainPanel>
                </MiddlePanel>
            </BrowserRouter>
        );
    ```

* BrowserRouter 사용 추후 Provider, History 추가 예정
* layout 컴포넌트 추가

3. App.tsx

    ```typescript
        function App() {
            const { push } = useInternalRouter();
            return (
                <>
                    <CenterPanel>
                        <img 
                        src={require('../common/image/MarvelLogo.png')} 
                        alt="" 
                        onClick={() => push('/Main')}
                        className={'App-logo'}
                        />
                    </CenterPanel>
                    <CenterPanel>
                        어쩌구 저쩌구
                        {/* 화면 설명 문구 추가 예정 */}
                    </CenterPanel>
                </>
            );
        }
    ```

* useInternalRouter 사용 (react-router-dom 의 useNavigate 사용함)
* useNavigate의 push, goBack 으로 페이지 이동 가능
* webpack을 사용할때는 require를 써서 페이지 로딩전 이미지파일을 가지고 오게 해야함
* layout 컴포넌트 추가

4. routing.jsx

    ```typescript
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

    ```typescript
        const [movieList, setMovieList] = useState(new Array<MovieType>);  
        const [page, setPage] = useState(1);  
        const [total_pages, setTotal_page] = useState(0);  
    ```

* api로 가져올 영화의 정보를 담을 state 생성

    ```typescript
        useEffect(() => {
            loadMovieInfo();
        }, []);  
    ```

    ```typescript
        const loadMovieInfo = () => {
            let url = "https://api.themoviedb.org/3/discover/movie?api_key=daf67dd834f07e7672eb384184d2ce3a&language=ko-KR&sort_by=release_date.desc&include_video=false&page=";
            
            if (total_pages !== page) {
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

    ```typescript
        return (
            <>
            <Button
                id={"setse"}
                onClick={ontest}
                value={"버튼"}
                color={"tomato"}
            />
            {movieList.map(movie => <MovieDisplay key={movie.id} movie={movie} />)}
            </>
        );
    ```
* Button 컴포넌트 tsx 로 개발 
* MovieDisplay 추후에 제대로 된 컴포넌트 개발 예정

### StrictMode 사용시에는 개발 도중 발생하는 문제를 감지하기 위해서 렌더링이 2번됨 따라서 지움 
### TypeScript 공부 먼저 집중

