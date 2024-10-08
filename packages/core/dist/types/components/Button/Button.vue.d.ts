import { ButtonProps } from './types';
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<ButtonProps>, {
    tag: string;
    nativeType: string;
    useThrottle: boolean;
    throttleDuration: number;
}>, {
    ref: import('vue').Ref<void | HTMLElement>;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, any, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<ButtonProps>, {
    tag: string;
    nativeType: string;
    useThrottle: boolean;
    throttleDuration: number;
}>>>, {
    tag: string | import('vue').Component;
    nativeType: import('./types').NativeType;
    useThrottle: boolean;
    throttleDuration: number;
}, {}>, Readonly<Record<string, any>> & Record<string, any>>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
