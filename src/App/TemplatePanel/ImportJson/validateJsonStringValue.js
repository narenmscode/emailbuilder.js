import { EditorConfigurationSchema } from "../../../documents/editor/core"

export default function validateTextAreaValue(value) {
  let jsonObject = undefined
  try {
    jsonObject = JSON.parse(value)
  } catch {
    return { error: "Invalid json" }
  }

  const parseResult = EditorConfigurationSchema.safeParse(jsonObject)
  if (!parseResult.success) {
    return { error: "Invalid JSON schema" }
  }

  if (!parseResult.data.root) {
    return { error: 'Missing "root" node' }
  }

  return { data: parseResult.data }
}
