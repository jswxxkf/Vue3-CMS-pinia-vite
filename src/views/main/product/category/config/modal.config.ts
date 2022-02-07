import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formTitle: '分类对话框',
  itemStyle: { padding: '10px 20px' },
  formItems: [{ field: 'name', type: 'input', label: '类别名', placeholder: '请输入分类名' }],
  colLayout: { span: 24 }
}
