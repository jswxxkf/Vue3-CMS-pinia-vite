import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formTitle: '菜单对话框',
  itemStyle: { padding: '10px 20px' },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '菜单名称',
      placeholder: '请输入菜单名称'
    },
    {
      field: 'type',
      type: 'select',
      label: '类型',
      placeholder: '请选择类型',
      options: [
        {
          title: '一级菜单',
          value: 1
        },
        {
          title: '二级菜单',
          value: 2
        },
        {
          title: '三级菜单',
          value: 3
        }
      ]
    },
    {
      field: 'url',
      type: 'input',
      label: '菜单url',
      placeholder: '请输入菜单url'
    },
    {
      field: 'icon',
      type: 'select',
      label: '菜单图标',
      placeholder: '请选择菜单图标',
      options: [
        {
          title: 'setting',
          value: 'el-icon-setting'
        },
        {
          title: 'monitor',
          value: 'el-icon-monitor'
        },
        {
          title: 'goods',
          value: 'el-icon-goods'
        },
        {
          title: 'chatLineRound',
          value: 'el-icon-chat-line-round'
        }
      ],
      disabled: true
    },
    {
      field: 'permission',
      type: 'input',
      label: '按钮权限',
      placeholder: '请输入按钮权限',
      disabled: true
    }
  ],
  colLayout: { span: 24 }
}
