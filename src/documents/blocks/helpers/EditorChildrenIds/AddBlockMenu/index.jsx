import React, { useState } from "react"

import BlocksMenu from "./BlocksMenu"
import DividerButton from "./DividerButton"
import PlaceholderButton from "./PlaceholderButton"

export default function AddBlockButton({ onSelect, placeholder }) {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null)
  const [buttonElement, setButtonElement] = useState(null)

  const handleButtonClick = () => {
    setMenuAnchorEl(buttonElement)
  }

  const renderButton = () => {
    if (placeholder) {
      return <PlaceholderButton onClick={handleButtonClick} />
    } else {
      return (
        <DividerButton
          buttonElement={buttonElement}
          onClick={handleButtonClick}
        />
      )
    }
  }

  return (
    <>
      <div ref={setButtonElement} style={{ position: "relative" }}>
        {renderButton()}
      </div>
      <BlocksMenu
        anchorEl={menuAnchorEl}
        setAnchorEl={setMenuAnchorEl}
        onSelect={onSelect}
      />
    </>
  )
}
