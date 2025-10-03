import { Properties } from 'csstype'
import van, { State, Val } from 'vanjs-core'
import bsColor from './color'

declare module 'vanjs-core' {
    interface Van {
        css: typeof makeCSS
        style: typeof applyStyle
        color: typeof bsColor
        isState: typeof isState
    }
}

/**
 * Convert camelCase string to kebab-case.
 * 
 * Example: `backgroundColor` -> `background-color`
 *
 * @param str The camelCase string to convert.
 * @returns The kebab-case string.
 */
function camelToKebab(str: string): string {
    return str.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase())
}

/**
 * Generate a CSS string from a style object.
 *
 * @param style CSS properties object with camelCase keys.
 * @returns A CSS string suitable for inline styles or style tags.
 */
function makeCSS(style: Properties): string {
    return Object.entries(style)
        .filter(([, value]) => value != null) // ignore null/undefined values
        .map(([key, value]) => `${camelToKebab(key)}: ${value};`)
        .join(' ')
}

/** Cache the prototype of van.state() for reliable State type detection */
const stateProto = Object.getPrototypeOf(van.state())

/**
 * Type guard to check if a value is a VanJS State object.
 *
 * @param value The value to test.
 * @returns True if the value is a State, false otherwise.
 */
function isState<T>(value: Val<T>): value is State<T> {
    return (
        typeof value === 'object' &&
        value !== null &&
        Object.getPrototypeOf(value) === stateProto
    )
}

/**
 * Apply CSS properties to an element's inline style.
 *
 * @param styleProperties An object representing CSS properties.
 * @param element The element to apply styles to.
 */
function applyStyleProperties<T extends ElementCSSInlineStyle>(
    styleProperties: Properties,
    element: T,
): void {
    for (const [key, value] of Object.entries(styleProperties)) {
        const cssKey = camelToKebab(key)
        if (value == null) {
            element.style.removeProperty(cssKey)
        } else {
            element.style.setProperty(cssKey, String(value))
        }
    }
}

/**
 * Apply styles to an element. Supports reactive style updates via a function.
 *
 * If a function is provided, the styles will be re-applied reactively whenever dependencies change.
 *
 * @param style An object of CSS properties or a function returning such an object.
 * @param element The element to apply styles to.
 * @returns The styled element.
 */
function applyStyle<T extends ElementCSSInlineStyle>(
    style: Properties | (() => Properties),
    element: T,
): T {
    if (typeof style === 'function') {
        // Reactive style application using van.derive
        van.derive(() => {
            const computedStyle = style()
            if (computedStyle && typeof computedStyle === 'object') {
                applyStyleProperties(computedStyle, element)
            }
        })
    } else if (style && typeof style === 'object') {
        applyStyleProperties(style, element)
    }
    return element
}

// Extend van with utility functions and color palette
Object.assign(van, {
    css: makeCSS,
    style: applyStyle,
    color: bsColor,
    isState,
})

export { camelToKebab, makeCSS, isState, applyStyle }