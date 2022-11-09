import { useEffect } from "react";
import { useDispatch } from 'react-redux'

export const useUpdatePage = (callback) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateID = setInterval(() => {
      dispatch(callback())
    }, 60000);
    return () => clearInterval(updateID)
  }, [callback, dispatch])
}