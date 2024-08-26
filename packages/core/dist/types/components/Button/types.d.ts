import { Component, Ref } from 'vue';
export type ButtonType = "primary" | "success" | "warning" | "danger" | "info";
export type ButtonSize = "small" | "medium" | "large";
export type NativeType = "button" | "reset" | "submit";
export interface ButtonProps {
    tag?: string | Component;
    type?: ButtonType;
    size?: ButtonSize;
    nativeType?: NativeType;
    plain?: boolean;
    round?: boolean;
    circle?: boolean;
    disabled?: boolean;
    loading?: boolean;
    /**
     * @description 自定义加载中状态图标组件
     * @default "spinner"
     */
    loadingIcon?: string;
    icon?: string;
    iconPosition?: "left" | "right" | "top" | "bottom";
    square?: boolean;
    autofocus?: boolean;
    useThrottle?: boolean;
    throttleDuration?: number;
}
export interface ButtonGroupProps {
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
}
export interface ButtonGroupContext {
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
}
export interface ButtonEmits {
    (e: 'click', val: MouseEvent): void;
}
export interface ButtonInstance {
    ref: Ref<HTMLElement | void>;
}
export interface ButtonSlots {
    (e: 'icon', val: string): void;
}
