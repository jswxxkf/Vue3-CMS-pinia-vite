import { IForm } from '@/base-ui/form/types'

export const modalConfig: IForm = {
  formTitle: '部门对话框',
  itemStyle: { padding: '10px 20px' },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      field: 'parentId',
      type: 'input',
      label: '上级部门id',
      placeholder: '请输入上级部门id'
    },
    {
      field: 'leader',
      type: 'input',
      label: '部门领导',
      placeholder: '请输入部门领导'
    }
  ],
  colLayout: { span: 24 }
}
