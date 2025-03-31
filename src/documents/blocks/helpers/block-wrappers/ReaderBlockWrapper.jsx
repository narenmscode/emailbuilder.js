import React from "react"

export default function ReaderBlockWrapper({ style, children }) {
  const { padding, borderColor, ...restStyle } = style
  const cssStyle = {
    ...restStyle
  }

  if (padding) {
    const { top, bottom, left, right } = padding
    cssStyle.padding = `${top}px ${right}px ${bottom}px ${left}px`
  }

  if (borderColor) {
    cssStyle.border = `1px solid ${borderColor}`
  }

  return <div style={{ maxWidth: "100%", ...cssStyle }}>{children}</div>
}
