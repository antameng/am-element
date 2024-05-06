import type { Component } from 'vue'
export type ButtonType = "primary" | "success" | "warning" | "danger" | "info"
export type ButtonSize = "small" | "medium" | "large"
export type NativeType = "button" | "reset" | "submit"

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
  icon?: string;
  iconPosition?: "left" | "right" | "top" | "bottom";
  square?: boolean;
}
