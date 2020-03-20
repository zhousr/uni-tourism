<template>
  <div class="my-page">
    <div class="header flex between">
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
      <div class="addGoods-btn" @click="popUpVisible = true"><text class="mr">+</text> 添加商品</div>
    </div>
    <div class="cate-box flex">
      <p class="cate-li" v-for="(item,index) in arr" :key="index" 
        :class="{'active':index === activeIndex}"
        @click="tabCate(index)">{{item}}</p>
    </div>
    <div class="dividing-line relative"></div>
    <!-- 商品 -->
    <view class="scenicSpot relative"  v-for="(item,index) in goodsArr" :key="index"
        @touchstart="touchstart($event,index)" @touchmove="touchmove($event,index)" @touchend="touchend($event,index)"
        :style="{'left':item.offsetX + 'px','transition':transition?'left 0.5s':''}">
      <div class="flex stretch between">
        <view class="sceneryImg relative">
          <image src="/static/logo.png" mode="aspectFill"></image>
          <text>限时特惠</text>
        </view>
        <view class="sceneryDesc">
          <view class="desc1 ell">延吉起止·长白山北坡一日游，限时特价17800元。</view>
          <view class="desc2 ells">延吉出发长白山北坡一日游纯玩自由行免费排队特惠出游延吉出发长白山北坡一日游纯玩自由行免费排队特惠出游</view>
          <view class="desc3">
            <text class="text1">分享</text>
            <text class="text2">最高可获得<text>3.5</text>元佣金</text>
          </view>
          <view class="desc4">
            <text class="text3">¥17800</text>
            <text class="text4">¥19800</text>
          </view>
        </view>
      </div>
      <div class="del-btn flex center" :class="{'moving': -item.offsetX >= 5}">删除</div>
    </view>
    <!-- 弹窗 -->
    <my-popup v-if="popUpVisible" :visible.sync="popUpVisible" />
  </div>
</template>

<script>
import myPopup from '../../components/myPopup'
  export default {
    data() {
      return {
        title: 'Hello',
        arr:['全部','酒店','景区门票','景区门票','景区门票','景区门票'],
        activeIndex:0,
        popUpVisible:false,
        goodsArr:[{offsetX: 0},{offsetX: 0},{offsetX: 0},{offsetX: 0},{offsetX: 0},{offsetX: 0}],

        startClientX:0,
        transition:false,
        isLeftoRight:false,
        allOffset:0
      }
    },
    onLoad() {
    },
    mounted(){
      this.$nextTick(()=>{
        uni.createSelectorQuery().select('.scenicSpot .del-btn').boundingClientRect(data => {
          this.allOffset = (data.width - data.width * (200 - 190) / 200 * 2) - 1
        }).exec();
      })
    },
    components:{myPopup},
    methods: {
      tabCate(index){
        this.activeIndex = index
      },
      touchstart(e,index){
        this.transition = false
        this.startClientX = e.changedTouches[0].clientX
      },
      touchmove(e,index){
        let n = e.changedTouches[0].clientX - this.startClientX
        let offsetX = this.goodsArr[index].offsetX
        if(Math.abs(n)>=this.allOffset || Math.abs(n)>=this.allOffset) return
        if(!this.isLeftoRight && n<= 0){
          this.goodsArr[index].offsetX = n
        }else if(this.isLeftoRight && n>= 0){
          this.goodsArr[index].offsetX = -this.allOffset + n
        }
      },
      touchend(e,index){
        this.transition = true
        let n = e.changedTouches[0].clientX - this.startClientX
        if(!this.isLeftoRight && -n<15 || this.isLeftoRight && n>15){
          this.goodsArr[index].offsetX = 0
          this.isLeftoRight = false
        }else{
          this.goodsArr[index].offsetX = -this.allOffset
          this.isLeftoRight = true
        }
      },
    }
  }
</script>

<style>
  .header{
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
    display: inline-block;
    width: 50vw;
    height: 4rpx;
    margin-bottom: 26rpx;
  }
  .dividing-line::before{
    background-image: linear-gradient(270deg, #FFAE00 0%, #FFFFFF 100%);
  }
  .dividing-line::after{
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
  .scenicSpot{
    width: calc(100% - 30rpx);
    margin: 0 auto;
    background: rgba(255,255,255,0.10);
    box-shadow: 0 4rpx 15rpx 0 #D8D8D8;
    border-radius: 12rpx;
    height: auto;
    margin: 25rpx auto;
    padding: 24rpx 28rpx;
    overflow: visible;
    white-space: nowrap;
    position: relative;
  }
  .sceneryImg>image{
    width: 240rpx;
    height: 208rpx;
    border-radius: 10rpx;
  }
  .sceneryImg>text{
    position: absolute;
    font-family: STHeiti;
    font-size: 21rpx;
    color: #000000;
    background-image: linear-gradient(180deg, #F1E1B3 0%, #DFC07C 100%);
    border-radius: 6rpx;
    top: 15rpx;
    left: 0;
    padding: 5rpx 9rpx;
  }
  .del-btn{
    font-family: STHeiti;
    font-size: 33rpx;
    color: #FFFFFF;
    letter-spacing: 8.68rpx;
    background: #FF0000;
    border-radius: 12rpx;
    border-radius: 12rpx;
    position: absolute;
    top: 0;
    height: 100%;
    width: 200rpx;
    right: -220rpx;
    transition: right 0.3s;
  }
  .del-btn.moving{
    right: -190rpx;
    box-shadow: 0 4rpx 15rpx 0 #D8D8D8;
  }
  .sceneryDesc{
    width: 380rpx;
    height: 208rpx;
    overflow: hidden;
  }
  .desc1{
    width: 100%;
    height: 40rpx;
    font-family: STHeiti;
    font-size: 30rpx;
    color: #000000;
  }
  .desc2{
    font-family: STHeiti;
    font-size: 24rpx;
    color: rgba(0,0,0,0.50);
    letter-spacing: 0.3rpx;
    line-height: 30rpx;
    margin: 9rpx 0;
    height: 60rpx;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    white-space: pre-wrap;
  }
  .desc3>.text1{
    background-image: linear-gradient(180deg, #ECD9B3 0%, #D5A85E 56%, #EFC378 100%);
    border-radius: 18rpx;
    font-family: STHeiti;
    font-size: 22rpx;
    color: #FFFFFF;
    padding: 7rpx 12rpx;
  }
  .desc3>.text2{
    font-family: STHeiti;
    font-size: 22rpx;
    color: rgba(0,0,0,0.50);
    letter-spacing: 0;
    line-height: 22rpx;
    margin-left: 10rpx;
  }
  .desc3>.text2>text{
    color: #000E0E;
  }
  .desc4{
    margin-top: 14rpx;
  }
  .desc4>.text3{
    font-family: LucidaGrande-Bold;
    font-size: 32rpx;
    color: #FF9000;
  }
  .desc4>.text4{
    font-family: Times-Roman;
    font-size: 30rpx;
    color: rgba(0,0,0,0.50);
    margin-left: 33rpx;
  }
  .delete{
    height: 100%;
    background: #FF0000;
    flex:none;
  }
</style>
