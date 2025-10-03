import van from 'vanjs-core'
import './index'

const { div } = van.tags

van.style({ backgroundColor: van.color.primary.bg }, document.body)

const bodyMargin = van.state('auto')

van.style(() => ({
    margin: bodyMargin.val
}), document.body)

setTimeout(() => bodyMargin.val = '30px', 3000)

console.log('van.isState(bodyMargin)', van.isState(bodyMargin))
console.log('van.isState(123456)', van.isState(123456))

van.add(document.body,
    div({
        style: van.css({
            color: van.color.primary.text
        })
    }, 'Hello World')
)