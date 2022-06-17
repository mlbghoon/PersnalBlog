import React from 'react';
import '../common/css/App.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MovieDisplay } from '../common/components/MovieDisplay';
import {  Button, Input } from '../common/components';


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
  const onClick = (e:React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    console.log(target)
    console.log(target.id)
  }

  const onChange = (e:React.ChangeEvent) => {
    const value = (e.target as HTMLInputElement).value;
    setIptVal(value);
  }

  const onKeyPress = (e:React.KeyboardEvent) => {
    const target = e.target as HTMLButtonElement;
    console.log("onKeyPress")
    console.log(target.id)
    console.log(e.key)
   
  }

  const onKeyUp = (e:React.KeyboardEvent) => {
    const target = e.target as HTMLButtonElement;
    console.log("onKeyUp")
    console.log(target.id)
    console.log(e.key)
  }

  const onBlur = (e:React.FocusEvent) => {
    const target = e.target as HTMLInputElement;
    console.log("onBlur")
    console.log(target)    
  }
  
  return (
    <>
      <Button
        id={"setse"}
        onClick={onClick}
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
        onChange={onChange}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
        alertEmpty={true}
      />
      {/* {movieList.map(movie => <MovieDisplay key={movie.id} movie={movie} />)} */}
    </>
  );
}


