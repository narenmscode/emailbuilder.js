import React, { Fragment } from "react"

import EditorBlock from "../../../editor/EditorBlock"

import AddBlockButton from "./AddBlockMenu"

function generateId() {
  return `block-${Date.now()}`
}

export default function EditorChildrenIds({ childrenIds, onChange }) {
  const appendBlock = block => {
    const blockId = generateId()
    return onChange({
      blockId,
      block,
      childrenIds: [...(childrenIds || []), blockId]
    })
  }

  const insertBlock = (block, index) => {
    const blockId = generateId()
    const newChildrenIds = [...(childrenIds || [])]
    newChildrenIds.splice(index, 0, blockId)
    return onChange({
      blockId,
      block,
      childrenIds: newChildrenIds
    })
  }

  if (!childrenIds || childrenIds.length === 0) {
    return <AddBlockButton placeholder onSelect={appendBlock} />
  }

  return (
    <>
      {childrenIds.map((childId, i) => (
        <Fragment key={childId}>
          <AddBlockButton onSelect={block => insertBlock(block, i)} />
          <EditorBlock id={childId} />
        </Fragment>
      ))}
      <AddBlockButton onSelect={appendBlock} />
    </>
  )
}
