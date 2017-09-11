<template>
  <div class="layout">
    <div class="layout-header">
    </div>
    <div class="layout-menu-left">
      <Menu active-name="1" theme="dark">
        <MenuItem name="1">
        <Icon type="ios-navigate"></Icon>
        <span class="layout-text">概要</span>
        </MenuItem>
        <MenuItem name="2">
        <Icon type="ios-keypad"></Icon>
        <span class="layout-text">产品列表</span>
        </MenuItem>
        <MenuItem name="3">
        <Icon type="ios-analytics"></Icon>
        <span class="layout-text">添加产品</span>
        </MenuItem>
        <MenuItem name="4">
        <Icon type="ios-analytics"></Icon>
        <span class="layout-text">经销商管理</span>
        </MenuItem>
        <MenuItem name="5">
        <Icon type="ios-analytics"></Icon>
        <span class="layout-text">品牌管理</span>
        </MenuItem>
        <MenuItem name="6">
        <Icon type="ios-analytics"></Icon>
        <span class="layout-text">产品分配</span>
        </MenuItem>
        <MenuItem name="7">
        <Icon type="ios-analytics"></Icon>
        <span class="layout-text">产品类型</span>
        </MenuItem>
        <MenuItem name="8">
        <Icon type="ios-analytics"></Icon>
        <span class="layout-text">渠道维护</span>
        </MenuItem>
        <MenuItem name="9">
        <Icon type="ios-analytics"></Icon>
        <span class="layout-text">人员管理</span>
        </MenuItem>
        <MenuItem name="10">
        <Icon type="ios-analytics"></Icon>
        <span class="layout-text">角色管理</span>
        </MenuItem>
        <MenuItem name="11">
        <Icon type="ios-analytics"></Icon>
        <span class="layout-text">功能管理</span>
        </MenuItem>
      </Menu>
    </div>
    <div class="layout-body">
      <div class="layout-breadcrumb">
        <Breadcrumb>
          <BreadcrumbItem href="#">首页</BreadcrumbItem>
          <BreadcrumbItem href="#">应用中心</BreadcrumbItem>
          <BreadcrumbItem>某应用</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="layout-content">
        <div class="layout-content-main">内容区域</div>
      </div>
      <div class="layout-copy">
        2011-2016 &copy; TalkingData
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
  }
}
</script>
<style scoped lang="less">
.layout {
  background: #f5f7f9;
}
.layout-header {
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  position: fixed;
  width:100%;
  z-index: 2;
  background-color: #f4d72c;
  background-image: linear-gradient(143deg,#f4d72c 20%,#ffe442 81%,#ffd042);
}
.layout-body{
  position: absolute;
  top:60px;
  left: 200px;
  right:0;
  bottom:0;
  z-index: 1;
}

.layout-menu-left {
  background: #495060;
  position: fixed;
  width:200px;
  left: 0;
  top:60px;
  bottom:0;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 2px
  }

  &::-webkit-scrollbar-track,&::-webkit-scrollbar-track-piece {
    background-color: #495060;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8f99af;
  }

  &::-webkit-scrollbar-button {
    background-color: #495060;
    display: none
  }
}
.ivu-menu-vertical.ivu-menu-light:after{
  display: none;
}
.layout-breadcrumb {
  padding: 10px 15px 0;
}

.layout-content {
  min-height: 200px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}

.layout-content-main {
  padding: 10px;
}

.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
.layout-ceiling-main a {
  color: #9ba7b5;
}

.layout-hide-text .layout-text {
  display: none;
}

.ivu-col {
  transition: width .2s ease-in-out;
}
</style>