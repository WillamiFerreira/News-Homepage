import { css } from 'styled-components'

const screenSizes = {
  large: 1170,
  desktop: 970,
  tablet: 668,
  mobile: 376,
  st: 320
}

export const media = Object
  .keys(screenSizes)
  .reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${screenSizes[label] / 16}rem) {
        ${css(...args)}
      }
    `
    return acc
  }, {})