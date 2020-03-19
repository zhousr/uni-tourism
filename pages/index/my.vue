<template>
  <div class="my-page">
    <div class="page-header flex between">
      <div class="flex">
        <img class="header-avatar" src="/static/logo.png" mode="aspectFill">
        <div class="a">
          <text class="header-userName">用户名字</text>
          <div class="flex">
            <div class="heaer-userGrade-box flex">
              <img class="heaer-userGrade-icon" src="/static/WechatIMG431.png" mode="widthFix">
              <p class="heaer-userGrade-text">Svip</p>
              <p class="">V1</p>
            </div>
            <div class="heaer-userGrade-box flex">
              <img class="heaer-userGrade-icon" src="/static/WechatIMG431.png" mode="widthFix">
              <p class="heaer-userGrade-text">铂金会员</p>
              <p class="">V9</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="header-shareBtn flex">
          <img class="header-shareBtn-img" src="/static/WechatIMG387.png" mode="widthFix">
          <text class="header-shareBtn-text">分享链接</text>
        </div>
        <div class="header-shareBtn flex">
          <img class="header-shareBtn-img" src="/static/WechatIMG387.png" mode="widthFix">
          <text class="header-shareBtn-text">分享海报</text>
        </div>
      </div>
    </div>
    <div class="addGoods flex between">
      <p>共有商品：3件</p>
      <div class="addGoods-btn"><text class="mr">+</text> 添加商品</div>
    </div>
    <div  class="cate-box flex">
      <p class="cate-li" v-for="(item,index) in nav" :key="index" :class="{'active':index === activeIndex}">{{item}}</p>
    </div>
    <div class="dividing-line relative"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello',
        nav:['全部','酒店','景区门票','景区门票','景区门票','景区门票'],
        activeIndex:0
      }
    },
    onLoad() {
    },
    methods: {
    }
  }
</script>

<style>
.page-header{
  background: #FFB301;
  border-radius: 0 0 45rpx 45rpx;
  padding: 23rpx 13rpx 41rpx 19rpx;
}
.header-avatar{
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  margin-right: 10rpx;
}
.header-userName{
  font-family: PingFangSC-Semibold;
  line-height: 49rpx;
  font-size: 35rpx;
  color: rgba(0,0,0,0.85);
}
.heaer-userGrade-box{
  background-image: linear-gradient(95deg, #7E7A7B 0%, #292222 99%);
  border-radius: 20.5rpx;
  font-family: Helvetica;
  font-size: 16rpx;
  color: #FCE1A2;
  padding: 5rpx 8rpx 5rpx 11rpx;
  margin-right: 10rpx;
}
.heaer-userGrade-box:last-child{
  background: rgba(#F59828,0.64);
  color:#fff;
}
.heaer-userGrade-icon{
  width: 23rpx;
}
.heaer-userGrade-text{
  padding: 0 4rpx;
}

.header-shareBtn{
  padding: 2rpx 8rpx;
  background: #FFFFFF;
  box-shadow: 2rpx 3rpx 4rpx 0 rgba(0,0,0,0.50), inset 1rpx 2rpx 3rpx 0 rgba(0,0,0,0.50);
  border-radius: 28.5rpx;
  font-family: STHeiti;
  font-size: 28rpx;
  color: #FFAF00;
}
.header-shareBtn:last-child{
  margin-top: 26rpx;
}
.header-shareBtn-img{
  width: 42rpx;
  margin-right: 2rpx
}
.addGoods{
  padding: 18rpx 24rpx 25rpx;
  font-family: STHeiti;
  font-size: 30rpx;
  color: #000000;
}
.addGoods-btn{
  background: #FFB301;
  border-radius: 28.5rpx;
  padding: 14rpx;
}
.addGoods-btn .mr{
  margin-right: 1rpx;
  font-size: 32rpx;
}

.cate-box{
  padding: 24rpx;
  overflow-x: scroll;
  white-space: nowrap;
  position: relative;
}
.cate-box::-webkit-scrollbar {
  display: none;
}
.dividing-line::before,.dividing-line::after{
  content:'';
  display: block;
  width: 50vw;
  height: 4rpx;
  position: absolute;
  bottom: 0;
  border-radius: 5rpx;
  margin-bottom: 26rpx;
}
.dividing-line::before{
  left: 0;
  background-image: linear-gradient(270deg, #FFAE00 0%, #FFFFFF 100%);
}
.dividing-line::after{
  right: 0;
  background-image: linear-gradient(90deg, #FFAE00 0%, #FFFFFF 100%);
}
.cate-li{
  padding: 0 18rpx 30rpx;
  font-family: PingFangSC-Light;
  font-size: 28rpx;
  color: rgba(0,0,0,0.85);
  position: relative;
}
.cate-li.active{
  font-family: PingFangSC-Semibold;
  font-size: 28rpx;
  color: rgba(0,0,0,0.85);
  font-weight: bold;
}
.cate-li.active::before{
  content:'';
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20rpx;
  width: 64rpx;
  height: 10rpx;
  background-image: linear-gradient(90deg, #FFAE00 0%, #FFFFFF 100%, #FFFFFF 100%);
  border-radius: 5rpx;
}
</style>
