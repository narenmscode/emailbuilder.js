import React, { useState } from "react"

import { HtmlPropsSchema } from "@usewaypoint/block-html"

import BaseSidebarPanel from "./helpers/BaseSidebarPanel"
import TextInput from "./helpers/inputs/TextInput"
import MultiStylePropertyPanel from "./helpers/style-inputs/MultiStylePropertyPanel"

export default function HtmlSidebarPanel({ data, setData }) {
  const [, setErrors] = useState(null)

  const updateData = d => {
    const res = HtmlPropsSchema.safeParse(d)
    if (res.success) {
      setData(res.data)
      setErrors(null)
    } else {
      setErrors(res.error)
    }
  }

  return (
    <BaseSidebarPanel title="Html block">
      <TextInput
        label="Content"
        rows={5}
        defaultValue={data.props?.contents ?? ""}
        onChange={contents =>
          updateData({ ...data, props: { ...data.props, contents } })
        }
      />
      <MultiStylePropertyPanel
        names={[
          "color",
          "backgroundColor",
          "fontFamily",
          "fontSize",
          "textAlign",
          "padding"
        ]}
        value={data.style}
        onChange={style => updateData({ ...data, style })}
      />
    </BaseSidebarPanel>
  )
}
