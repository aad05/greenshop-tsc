import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootStore, AppDispatch } from "../../redux";

export const useReduxDispatch = () => useDispatch<AppDispatch>();
export const useReduxSelector: TypedUseSelectorHook<RootStore> = useSelector;
