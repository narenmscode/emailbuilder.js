import React from "react"

import SingleStylePropertyPanel from "./SingleStylePropertyPanel"

export default function MultiStylePropertyPanel({ names, value, onChange }) {
  return (
    <>
      {names.map(name => (
        <SingleStylePropertyPanel
          key={name}
          name={name}
          value={value || {}}
          onChange={onChange}
        />
      ))}
    </>
  )
}
