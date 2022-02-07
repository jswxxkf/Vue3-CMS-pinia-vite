export const contentTableConfig = {
  tableTitle: '部门列表',
  propList: [
    { prop: 'name', label: '部门名称', minWidth: '120' },
    { prop: 'parentId', label: '上级部门id', minWidth: '60' },
    { prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateAt' },
    { prop: 'leader', label: '部门领导', minWidth: '120' },
    { label: '操作', minWidth: '120', slotName: 'oper' }
  ],
  showIndexColumn: false,
  showSelectColumn: false
}
