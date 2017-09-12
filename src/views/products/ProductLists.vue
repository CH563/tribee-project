<template>
  <div class="layout-content">
    <div class="layout-content-main">
      <div class="content-tool">
        <Button type="primary" shape="circle" icon="plus-round">添加产品</Button>
        <Input v-model="search" icon="ios-search" placeholder="请输入..." style="width: 200px; float:right"></Input>
      </div>
      <div class="title">产品列表</div>
      <div class="content">
        <p style="text-align:center;color:#999">暂无数据</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        search: ''
      }
    }
  }

</script>

<style lang="less" scoped>
</style>
