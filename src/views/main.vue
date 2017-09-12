<template>
  <div class="layout">
    <div class="layout-header">
      <h1><a href="javascript:;" title="返回首页"><img src="../static/img/logo.png"></a></h1>
      <div class="header-right">
        <div class="notice">
          <Icon type="android-notifications" size="20"></Icon>
        </div>
        <Dropdown class="mine" placement="bottom-end">
          <a href="javascript:void(0)">
            <Icon type="android-person" size="20"></Icon>
            <span>admin</span>
            <Icon type="android-arrow-dropdown" size="16"></Icon>
          </a>
          <DropdownMenu slot="list" class="mine-info">
              <p><Icon type="android-person" size="20"></Icon><span>admin</span></p>
              <div class="mine-btn">
                  <Button type="ghost">个人中心</Button>
                  <Button type="ghost" @click="exitLogin">退出</Button>
              </div>
          </DropdownMenu>
      </Dropdown>
      </div>
    </div>
    <div class="layout-menu-left scroll">
      <Menu :active-name="$route.path" theme="dark" width="auto" @on-select="turnUrl">
        <MenuItem name="/default">
        <Icon type="ios-navigate"></Icon>
        <span class="layout-text">概要</span>
        </MenuItem>
        <MenuItem name="/productLists">
        <Icon type="ios-keypad"></Icon>
        <span class="layout-text">产品列表</span>
        </MenuItem>
        <MenuItem name="3">
        <Icon type="plus-round"></Icon>
        <span class="layout-text">添加产品</span>
        </MenuItem>
        <MenuItem name="4">
        <Icon type="social-snapchat"></Icon>
        <span class="layout-text">经销商管理</span>
        </MenuItem>
        <MenuItem name="5">
        <Icon type="ios-analytics"></Icon>
        <span class="layout-text">品牌管理</span>
        </MenuItem>
        <MenuItem name="6">
        <Icon type="android-bar"></Icon>
        <span class="layout-text">产品分配</span>
        </MenuItem>
        <MenuItem name="7">
        <Icon type="ios-rose"></Icon>
        <span class="layout-text">产品类型</span>
        </MenuItem>
        <MenuItem name="8">
        <Icon type="ios-cart"></Icon>
        <span class="layout-text">渠道维护</span>
        </MenuItem>
        <MenuItem name="9">
        <Icon type="android-person-add"></Icon>
        <span class="layout-text">人员管理</span>
        </MenuItem>
        <MenuItem name="10">
        <Icon type="android-contacts"></Icon>
        <span class="layout-text">角色管理</span>
        </MenuItem>
        <MenuItem name="11">
        <Icon type="android-settings"></Icon>
        <span class="layout-text">功能管理</span>
        </MenuItem>
      </Menu>
    </div>
    <div class="layout-breadcrumb">
      <Breadcrumb>
        <BreadcrumbItem href="/default">首页</BreadcrumbItem>
        <BreadcrumbItem>{{$route.name}}</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="layout-body">
      <router-view></router-view>
      <div class="layout-copy">
        2017 &copy; TriBEE 微三蜂科技
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      spanLeft: 5,
      spanRight: 19
    }
  },
  methods: {
    turnUrl (name) {
      this.$router.push(name)
    },
    exitLogin () {
      let _this = this
      this.$Message.success('您已成功退出！')
      setTimeout(function () {
        _this.$router.push('/')
      }, 1000)
    }
  }
}
</script>
<style scoped lang="less">
</style>