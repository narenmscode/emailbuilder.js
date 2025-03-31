import React, { useState } from "react"

import { HeightOutlined } from "@mui/icons-material"
import {
  SpacerPropsDefaults,
  SpacerPropsSchema
} from "@usewaypoint/block-spacer"

import BaseSidebarPanel from "./helpers/BaseSidebarPanel"
import SliderInput from "./helpers/inputs/SliderInput"

export default function SpacerSidebarPanel({ data, setData }) {
  const [, setErrors] = useState(null)

  const updateData = d => {
    const res = SpacerPropsSchema.safeParse(d)
    if (res.success) {
      setData(res.data)
      setErrors(null)
    } else {
      setErrors(res.error)
    }
  }

  return (
    <BaseSidebarPanel title="Spacer block">
      <SliderInput
        label="Height"
        iconLabel={<HeightOutlined sx={{ color: "text.secondary" }} />}
        units="px"
        step={4}
        min={4}
        max={128}
        defaultValue={data.props?.height ?? SpacerPropsDefaults.height}
        onChange={height =>
          updateData({ ...data, props: { ...data.props, height } })
        }
      />
    </BaseSidebarPanel>
  )
}
