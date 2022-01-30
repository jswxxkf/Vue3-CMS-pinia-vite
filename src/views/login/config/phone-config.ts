// 表单验证规则
export const rules = {
  number: [
    {
      required: true,
      message: '手机号不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^\d{8,12}$/,
      message: '用户名必须是5-10个字母或数字',
      trigger: 'blur'
    }
  ],
  verification: [
    {
      required: true,
      message: '验证码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^\d{6}$/,
      message: '密码必须是6位数字',
      trigger: 'blur'
    }
  ]
}
