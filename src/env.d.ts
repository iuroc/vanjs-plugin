import type { BSColor } from './color'
import type { applyStyle, isState, makeCSS } from '.'

declare module 'vanjs-core' {
    interface Van {
        css: typeof makeCSS
        style: typeof applyStyle
        color: BSColor
        isState: typeof isState
    }
}