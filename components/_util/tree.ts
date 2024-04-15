import remove from 'lodash/remove'
import pick from 'lodash/pick'
import omit from 'lodash/omit'

export function convertTree2Map(tree: any, rule: any = {}, map: any = {}, parentMapKeyValue?: any) {
  const { mapKey = 'key', parentMapKey = 'parentMapKey', childrenKey = 'children', pickedKeys, omittedKeys, original } = rule
  tree.forEach((node: any) => {
    let result
    if (pickedKeys) {
      result = pick(node, pickedKeys)
    } else if (omittedKeys) {
      result = omit(node, omittedKeys)
    } else {
      result = original ? node : Object.assign({}, node)
    }
    result[parentMapKey] = parentMapKeyValue
    map[node[mapKey]] = result
    if (node[childrenKey]) convertTree2Map(node[childrenKey], rule, map, node[mapKey])
  })
  return map
}

export function traverseTreeNode(node: any, callback?: (arg: any) => any) {
  callback && callback(node)
  const { children } = node
  if (!(children && children.length)) return
  children.forEach((item: any) => traverseTreeNode(item, callback))
}

export function deleteAncestorTreeNodes(map: any, node: any, values: any[]) {
  const { parentValue } = node
  if (parentValue) remove(values, (_v: any) => _v === parentValue)
  const parent = map[parentValue]
  if (parent) deleteAncestorTreeNodes(map, parent, values)
}

export function deleteTreeNodes(node: any, values: any[]) {
  const idx = values.findIndex((_v: any) => _v === node.value)
  if (idx < 0) return
  values.splice(idx, 1)
  const { children } = node
  if (children) children.forEach((child: any) => deleteTreeNodes(child, values))
}

export function getOptions(tree: any[], values: any[], titleProp: string = 'title') {
  const map = convertTree2Map(tree, { mapKey: 'value', parentMapKey: 'parentValue' })
  const results: any[] = []
  let item: any
  values.forEach((value: any) => {
    item = map[value]
    if (item) results.push({ value, label: item[titleProp] })
  })
  return results
}
