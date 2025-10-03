const bsColor: BSColor = {
    gray: {
        default: '#6c757d',
        100: '#f8f9fa',
        200: '#e9ecef',
        300: '#dee2e6',
        400: '#ced4da',
        500: '#adb5bd',
        600: '#6c757d',
        700: '#495057',
        800: '#343a40',
        900: '#212529'
    },
    primary: {
        main: '#0d6efd',
        text: '#052c65',
        bg: '#cfe2ff',
        border: '#9ec5fe'
    },
    secondary: {
        main: '#6c757d',
        text: '#2b2f32',
        bg: '#e2e3e5',
        border: '#c4c8cb'
    },
    success: {
        main: '#198754',
        text: '#0a3622',
        bg: '#d1e7dd',
        border: '#a3cfbb'
    },
    danger: {
        main: '#dc3545',
        text: '#58151c',
        bg: '#f8d7da',
        border: '#f1aeb5'
    },
    warning: {
        main: '#ffc107',
        text: '#664d03',
        bg: '#fff3cd',
        border: '#ffe69c'
    },
    info: {
        main: '#0dcaf0',
        text: '#055160',
        bg: '#cff4fc',
        border: '#9eeaf9'
    },
    dark: {
        main: '#212529',
        text: '#495057',
        bg: '#ced4da',
        border: '#adb5bd'
    },
    light: {
        main: '#f8f9fa',
        text: '#495057',
        bg: '#fcfcfd',
        border: '#e9ecef'
    },
    blue: '#0d6efd',
    indigo: '#6610f2',
    purple: '#6f42c1',
    pink: '#d63384',
    red: '#dc3545',
    orange: '#fd7e14',
    yellow: '#ffc107',
    green: '#198754',
    teal: '#20c997',
    cyan: '#0dcaf0',
    black: '#000000',
    white: '#ffffff'
}

export type ColorValue = `#${string}`

export interface BSColor extends ThemeColor, NamedColor {
    gray: GrayColor
}

export interface GrayColor {
    [level: number]: ColorValue
    default: ColorValue
}

export type ThemeNames = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'

export type ThemeColor = Record<ThemeNames, {
    main: ColorValue
    text: ColorValue
    bg: ColorValue
    border: ColorValue
}>

export type ColorNames = 'blue' | 'indigo' | 'purple' | 'pink' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'cyan' | 'black' | 'white'

export type NamedColor = Record<ColorNames, ColorValue>

export default bsColor