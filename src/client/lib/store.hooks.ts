import { 
  AppDispatch, 
  RootState } from "@/store/index";
import { useSelector } from "react-redux";
import { 
  TypedUseSelectorHook, 
  useDispatch } from "react-redux";


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;