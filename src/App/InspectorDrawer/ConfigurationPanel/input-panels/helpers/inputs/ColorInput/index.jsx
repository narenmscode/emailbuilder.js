import React from "react"

import BaseColorInput from "./BaseColorInput"

export default function ColorInput(props) {
  return <BaseColorInput {...props} nullable={false} />
}

export function NullableColorInput(props) {
  return <BaseColorInput {...props} nullable />
}
