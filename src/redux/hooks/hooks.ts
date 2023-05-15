import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';

type DispatchFunk = () => AppDispatch;

export const useAppDispatc: DispatchFunk = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
