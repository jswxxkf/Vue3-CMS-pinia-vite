import { IForm } from '@/base-ui/form/types'

export const modalConfig: IForm = {
  formTitle: '角色对话框',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    }
  ],
  colLayout: { span: 24 }
}
