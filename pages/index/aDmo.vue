<template>
  <view class="content">
    <!-- 高度自适应 -->
    <image class="logo1"  mode="widthFix" src="/static/logo.png"></image> 
    <!-- 比例不变，充满容器，超出剪裁 -->
    <image class="logo2"  mode="widthFix" src="/static/logo.png"></image> 

    <view class="text-area">
      <text class="title">{{title}}</text>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello'
      }
    },
    onLoad() {
    },
    methods: {
    }
  }
</script>

<style>
.logo1{
	width: 100%;
	display: block;
}
.logo2{
  width: 300rpx;
  height: 200rpx;
}
</style>
