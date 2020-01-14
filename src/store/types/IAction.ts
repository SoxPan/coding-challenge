import { Action } from "redux";

export interface IAction<T = undefined> extends Action<string> {
    payload?: T;
}
