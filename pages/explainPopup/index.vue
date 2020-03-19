<template>
  <view class="explainPopup flex center">
    <view class="popupContainer">
      <view class="popupTitle">如何添加商品</view>
      <view class="dividing-line"></view>
      <view class="contentArea">
        <view class="content">第一步：进入商城任意选择您想添加的商品进入详情</view>
        <view class="content"><image src="/static/image/popup.png" mode="widthFix" class="explainImg"></image>
        </view>
        <view class="content">第二步：在进入详情页后信息栏中有个图标按钮点击添加</view>
        <view class="content">第三步：添加成功后，返回个人店铺查看即可</view>
      </view>
      <button type="default" class="btn">去添加商品</button>
    </view>
  </view>
</template>

<script>
</script>

<style scoped>
  .explainPopup{
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.6);
  }
  .popupContainer{
    width: 621rpx;
    height: auto;
    max-height: 90%;
    background: #fff;
    border-radius: 40rpx;
    overflow-y: auto;
  }
  .popupTitle{
    font-family: PingFangSC-Semibold;
    font-size: 32rpx;
    color: #000000;
    letter-spacing: 4rpx;
    text-align: center;
    margin-top: 59rpx;
  }
  .dividing-line{
    height: 10rpx;
    background-image: linear-gradient(270deg, #FFFFFF 0%, #FFAE00 50%, #FFFFFF 100%);
    margin: 30rpx 0 39rpx 0;
  }
  .contentArea{
    padding: 0 45rpx;
  }
  .contentArea>.content{
    font-family: STHeiti;
    font-size: 28rpx;
    color: #000000;
    margin: 30rpx 0;
  }
  .contentArea>.content>.explainImg{
    max-width: 100%;
    height: auto;
  }
  .btn{
    width: 568rpx;
    height: 84rpx;
    background: #FFB300;
    border-radius: 58.5rpx;
    font-family: STHeiti;
    font-size: 38rpx;
    color: #000000;
    line-height: 84rpx;
    margin: 46rpx auto 24rpx auto;
  }
</style>
