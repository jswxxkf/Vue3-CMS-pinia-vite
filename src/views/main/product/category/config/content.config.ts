export const contentTableConfig = {
  tableTitle: '分类列表',
  propList: [
    { prop: 'name', label: '类别名', minWidth: '120' },
    { prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateAt' },
    { label: '操作', minWidth: '120', slotName: 'oper' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
