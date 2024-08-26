import { Plugin } from 'vue';
type SFCWithInstall<T> = T & Plugin;
export declare function makeInstaller(component: Plugin[]): Plugin;
export declare const withInstaller: <T>(component: T) => SFCWithInstall<T>;
export {};
