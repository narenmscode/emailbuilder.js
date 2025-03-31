import React, { useState } from "react"

import ContainerPropsSchema from "../../../../documents/blocks/Container/ContainerPropsSchema"

import BaseSidebarPanel from "./helpers/BaseSidebarPanel"
import MultiStylePropertyPanel from "./helpers/style-inputs/MultiStylePropertyPanel"

export default function ContainerSidebarPanel({ data, setData }) {
  const [, setErrors] = useState(null)
  const updateData = d => {
    const res = ContainerPropsSchema.safeParse(d)
    if (res.success) {
      setData(res.data)
      setErrors(null)
    } else {
      setErrors(res.error)
    }
  }
  return (
    <BaseSidebarPanel title="Container block">
      <MultiStylePropertyPanel
        names={["backgroundColor", "borderColor", "borderRadius", "padding"]}
        value={data.style}
        onChange={style => updateData({ ...data, style })}
      />
    </BaseSidebarPanel>
  )
}
