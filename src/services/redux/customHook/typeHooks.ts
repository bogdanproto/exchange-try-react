import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, TypeDispatch } from '../store';

export const useTypeDispatch: () => TypeDispatch = useDispatch;
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
