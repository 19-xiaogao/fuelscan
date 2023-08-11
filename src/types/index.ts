export enum ThemeColor {
    Light,
    Dark
}

export interface IContext {
    themeColor: ThemeColor,
    handleSetThemeColor: (val: ThemeColor) => void;
}