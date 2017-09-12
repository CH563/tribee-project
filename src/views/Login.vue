<template>
  <div class="login-wrap">
    <div class="login-title">TriBEE微三蜂科技</div>
    <div class="login">
      <Form ref="loginForm" :model="loginForm" :rules="ruleInline">
        <FormItem prop="user">
          <Input type="text" v-model="loginForm.user" placeholder="Username" size="large">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="loginForm.password" placeholder="Password" size="large">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('loginForm')" long size="large">登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        loginForm: {
          user: 'admin',
          password: '123456'
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
            let _this = this
            this.$Message.success('登录成功!')
            setTimeout(function () {
              _this.$router.push({ path: '/default' })
            }, 1000)
          } else {
            this.$Message.error('输入有误!')
          }
        })
      }
    }
  }

</script>

<style lang="less" scoped>
</style>
