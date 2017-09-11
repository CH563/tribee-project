<template>
  <Row>
    <Col span="10" offset="7">
      <div class="login">
        <Form ref="loginForm" :model="loginForm" :rules="ruleInline">
          <FormItem prop="user">
            <Input type="text" v-model="loginForm.user" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="loginForm.password" placeholder="Password">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('loginForm')">登录</Button>
          </FormItem>
        </Form>
      </div>
    </Col>
  </Row>
</template>
<script>
  export default {
    data () {
      return {
        loginForm: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [{
            required: true,
            message: '请填写用户名',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请填写密码',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 6,
            message: '密码长度不能小于6位',
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!')
            this.router.push()
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      }
    }
  }

</script>

<style lang="less" scoped>
  .login {
    border:1px solid #e7e7e7;
    border-radius: 5px;
    padding:30px;
    margin-top:40px;
    box-shadow: 0 3px 5px #eee;
  }

</style>
