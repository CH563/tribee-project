<template>
  <div class="layout-content">
    <div class="layout-content-main">
      <div class="wel-title">您好！欢迎登录 微三蜂科技平台！</div>
      <div class="title">概要数据</div>
      <div class="content">
        <ul class="tote-list">
          <li>
            <p>334,439</p>
            <span>产品总数</span>
          </li>
          <li>
            <p>1,051</p>
            <span>经销商</span>
          </li>
          <li>
            <p>20,032</p>
            <span>品牌</span>
          </li>
          <li>
            <p>325</p>
            <span>渠道</span>
          </li>
          <li>
            <p>10,454</p>
            <span>人员</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    }
  }

</script>

<style lang="less" scoped>
  .wel-title{
    padding: 10px;
    font-size: 18px;
    color:#777;
    text-align: center;
  }
  .tote-list{
    overflow: hidden;
    font-size: 0;
    text-align: center;
    li{
      display: inline-block;
      padding:10px;
      text-align: left;
      p{
        font-size: 40px;
        line-height: 50px;
      }
      &+li{
        margin-left: 20px;
      }
      span{
        color:#999;
        font-size: 14px;
      }
    }
  }
</style>
