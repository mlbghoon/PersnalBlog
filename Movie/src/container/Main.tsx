import React from 'react';
import '../common/css/App.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MovieDisplay } from '../common/components/MovieDisplay';
import { Button, Input } from '../common/components';
import { Checkbox } from '../common/components/Checkbox';
import { sh_btn_evnt_return, sh_chk_evnt_return, sh_ipt_event_return } from '../common/components/TypeInterfaces';


// TypeScript 라서 타입을 먼저 선언
// 이방식은 type 방식이고 interface 방식은 따로 공부 필요함
type MovieType = {
  adult: boolean,
  backdrop_path : string,
  genre_ids: Array<number>,
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count:number
}

export const Main = () => {  
  const [movieList, setMovieList] = useState<MovieType[]>([]);  
  const [page, setPage] = useState(1);  
  const [total_pages, setTotal_page] = useState(0);  
  const [iptVal, setIptVal] = useState("");  
  const [checked, setChecked] = useState(false);  
  
  // 화면 오픈시 api 연동해서 영화 리스트 가져오기
  useEffect(() => {
    loadMovieInfo();
  }, []);


  // state 변경시 확인용
  useEffect(() => {
    console.log("movieList : " , movieList);
  }, [movieList]);
  useEffect(() => {
    console.log("page : " , page);
  }, [page]);
  useEffect(() => {
    console.log("total_pages : " , total_pages);
  }, [total_pages]);
  // state 변경시 확인용

  const loadMovieInfo = () => {
    let url:string = "https://api.themoviedb.org/3/discover/movie?api_key=daf67dd834f07e7672eb384184d2ce3a&language=ko-KR&sort_by=release_date.desc&include_video=false&page=";
    
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
  // button Event Test //
  const buttonOnClick = (e:sh_btn_evnt_return) => {
    const target = e.target as HTMLButtonElement;
    console.log(target)
    console.log(e.id)
  }
  // button Event Test //

  // input Event Test //
  const inputOnChange = (e:sh_ipt_event_return) => {
    const value = (e.target as HTMLInputElement).value;
    //console.log(e)
    setIptVal(value);
  }

  const inputOnKeyPress = (e:sh_ipt_event_return) => {
    const target = e.target as HTMLInputElement;
    // console.log("onKeyPress")
    // console.log(target.id)
    // console.log(e.key)
   
  }

  const inputOnKeyUp = (e:sh_ipt_event_return) => {
    const target = e.target as HTMLInputElement;
    // console.log("onKeyUp")
    // console.log(target.id)
    // console.log(e.key)
  }

  const inputOnBlur = (e:sh_ipt_event_return) => {
    const target = e.target as HTMLInputElement;
    // console.log("onBlur")
    // console.log(target)    
  }
  // input Event Test //

  // checkBox Event Test //
  const checkBoxOnChange = (e:sh_chk_evnt_return) => {
    console.log("checkBoxOnChange");
    console.log(e);
    setChecked(prev=>!prev)
  }
  // 컴포넌트에서 만든 custom type을 export import 가능
  const checkBoxOnClick = (e:sh_chk_evnt_return) => {
    console.log("checkBoxOnClick");
    console.log(e);
  }
  // checkBox Event Test //

  return (
    <>
      <Button
        id={"setse"}
        onClick={buttonOnClick}
        value={"버튼"}
        color={"tomato"}
        innerImage={true}
        icon={"save"}
      />
      <Input
        id={"setse"}
        value={iptVal}
        color={"tomato"}
        focusOnRender={true}
        onChange={inputOnChange}
        onKeyPress={inputOnKeyPress}
        onKeyUp={inputOnKeyUp}
        onBlur={inputOnBlur}
        alertEmpty={true}
      />
      <Checkbox
        id={"Checkbox"}
        keyProp={"keyProp"}
        index={1}
        value={"value"}
        onChange={checkBoxOnChange}
        onClick={checkBoxOnClick}
        checked={checked}
      />
      {/* {movieList.map(movie => <MovieDisplay key={movie.id} movie={movie} />)} */}
    </>
  );
}


