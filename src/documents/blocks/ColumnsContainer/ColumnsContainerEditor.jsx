import React from "react"

import { ColumnsContainer as BaseColumnsContainer } from "@usewaypoint/block-columns-container"

import { useCurrentBlockId } from "../../editor/EditorBlock"
import { setDocument, setSelectedBlockId } from "../../editor/EditorContext"
import EditorChildrenIds from "../helpers/EditorChildrenIds"

import ColumnsContainerPropsSchema from "./ColumnsContainerPropsSchema"

const EMPTY_COLUMNS = [
  { childrenIds: [] },
  { childrenIds: [] },
  { childrenIds: [] }
]

export default function ColumnsContainerEditor({ style, props }) {
  const currentBlockId = useCurrentBlockId()

  const { columns, ...restProps } = props ?? {}
  const columnsValue = columns ?? EMPTY_COLUMNS

  const updateColumn = (columnIndex, { block, blockId, childrenIds }) => {
    const nColumns = [...columnsValue]
    nColumns[columnIndex] = { childrenIds }
    setDocument({
      [blockId]: block,
      [currentBlockId]: {
        type: "ColumnsContainer",
        data: ColumnsContainerPropsSchema.parse({
          style,
          props: {
            ...restProps,
            columns: nColumns
          }
        })
      }
    })
    setSelectedBlockId(blockId)
  }

  return (
    <BaseColumnsContainer
      props={restProps}
      style={style}
      columns={[
        <EditorChildrenIds
          childrenIds={columns?.[0]?.childrenIds}
          onChange={change => updateColumn(0, change)}
        />,
        <EditorChildrenIds
          childrenIds={columns?.[1]?.childrenIds}
          onChange={change => updateColumn(1, change)}
        />,
        <EditorChildrenIds
          childrenIds={columns?.[2]?.childrenIds}
          onChange={change => updateColumn(2, change)}
        />
      ]}
    />
  )
}
