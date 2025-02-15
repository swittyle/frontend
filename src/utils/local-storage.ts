import {TAuthUser} from "@site/src/typings/auth";

export const STORAGE_WTF_TOKEN = 'WTF_TOKEN';
export const STORAGE_WTF_USER   = 'WTF_USER';
export const STORAGE_WTF_SIGN_IN_METHOD_GITHUB   = 'STORAGE_WTF_SIGN_IN_METHOD_GITHUB';
export const STORAGE_WTF_SIGN_IN_METHOD_WALLET   = 'STORAGE_WTF_SIGN_IN_METHOD_WALLET';

export const storageWTFToken = (value: string) => {
    localStorage.setItem(STORAGE_WTF_TOKEN, value);
}

export const getStorageWTFToken = (): string => {
    return localStorage.getItem(STORAGE_WTF_TOKEN);
}


export const storageWTFUser = (value: TAuthUser) => {
    localStorage.setItem(STORAGE_WTF_USER, JSON.stringify(value));
}

export const getStorageWTFUser = (): TAuthUser => {
    return JSON.parse(localStorage.getItem(STORAGE_WTF_USER) || "{}");
}
