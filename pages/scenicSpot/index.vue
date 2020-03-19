<template>
	<view class="scenicSpot flex">
		<view class="sceneryImg">
			<image src="../../static/image/sceneryImg.jpg" mode="aspectFill"></image>
			<text>限时特惠</text>
		</view>
		<view class="sceneryDesc">
			<view class="desc1">
				延吉起止·长白山北坡一日游，限时特价17800元。
			</view>
			<view class="desc2">
				延吉出发长白山北坡一日游纯玩自由行免费排队特惠出游
			</view>
			<view class="desc3">
				<text class="text1">分享</text>
				<text class="text2">最高可获得<text>3.5</text>元佣金</text>
			</view>
			<view class="desc4">
				<text class="text3">¥17800</text>
				<text class="text4">¥19800</text>
			</view>
		</view>
		<!-- <view class="delete">
			删除
		</view> -->
	</view>
	
</template>

<script>
</script>

<style scoped>
	.scenicSpot{
		width: calc(100% - 30rpx);
		margin: 0 auto;
		background: rgba(255,255,255,0.10);
		box-shadow: 0 4rpx 15rpx 0 #D8D8D8;
		border-radius: 12rpx;
		height: auto;
		margin: 25rpx auto;
		padding: 23rpx 0 28rpx 27rpx;
		overflow: hidden;
		white-space: nowrap;
	}
	.sceneryImg{
		width: 240rpx;
		height: 208rpx;
		position: relative;
		flex:none;
	}	
	.sceneryImg>image{
		width: 100%;
		height: 100%;
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
	.sceneryDesc{
		flex:none;
		width: calc(100% - 240rpx);
		height: 208rpx;
		padding-left: 30rpx;
		padding-right: 27rpx;
		overflow: hidden;
	}
	.desc1{
		height: 40rpx;
		font-family: STHeiti;
		font-size: 30rpx;
		color: #000000;
		white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
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
