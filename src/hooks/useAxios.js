import defaultAxios, { Axios } from "axios";
import { useEffect, useState } from "react";

/**
 * @name useAxios
 * @param {string} opts 요청할 url
 * @param {Axios} axiosInstance 
 * @returns state, refetch()
 * @description axios 요청을 받고, refetch까지 할 수 있게 만들어주는 hook
 */
export const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setState({
        ...state,
        loading: true
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    if (!opts.url) {
      return;
    }

    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state, // 기존 상태의 모든 속성을 유지
          loading: false, // loading 상태를 false로 변경
          data, // data: data를 단축 속성명으로 작성
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { ...state, refetch };
};
