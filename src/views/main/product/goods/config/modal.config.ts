import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formTitle: '商品对话框',
  itemStyle: { padding: '10px 20px' },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名'
    },
    {
      field: 'newPrice',
      type: 'input',
      label: '现价格',
      placeholder: '请输入现价格'
    },
    {
      field: 'imgUrl',
      type: 'input',
      label: '商品图片',
      placeholder: '请输入图片地址'
    },
    {
      field: 'status',
      type: 'select',
      label: '状态',
      placeholder: '请选择状态',
      options: [
        { title: '启用', value: '1' },
        { title: '禁用', value: '0' }
      ]
    }
  ],
  colLayout: { span: 24 }
}
