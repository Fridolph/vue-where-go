<template>
  <div class="page-home">
    <home-header></home-header>
    <!-- <h1>Home</h1> -->
    <home-swiper :items="swiperItems"></home-swiper>
    <home-menu :items="menuItems"></home-menu>
    <split />
    <home-recommend :items="recommendItems"></home-recommend>
    <split />
    <home-like :items="likeItems"></home-like>
  </div>
</template>

<script>
import HomeHeader from './HomeHeader'
import HomeSwiper from './HomeSwiper'
import HomeMenu from './HomeMenu'
import HomeRecommend from './HomeRecommend'
import Split from '../../components/split'
import HomeLike from './HomeLike'

export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeMenu,
    Split,
    HomeRecommend,
    HomeLike
  },
  data() {
    return {
      swiperItems: [
        {
          img: 'http://img1.qunarzz.com/piao/fusion/1803/4d/f2cc9b0ab8a31f02.jpg_640x200_49b1df69.jpg'
        },
        {
          img: 'http://img1.qunarzz.com/piao/fusion/1804/66/60ca5c5498293002.jpg_640x200_3224af33.jpg'
        },
        {
          img: 'http://img1.qunarzz.com/piao/fusion/1804/c7/15d167c86f961a02.jpg_640x200_e9d5a5ff.jpg'
        }
      ],
      menuItems: [
        {
          img: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          title: '景点门票'
        },
        {
          img: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
          title: '踏青赏花'
        },
        {
          img: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          title: '必游榜单'
        },
        {
          img: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          title: '一日游'
        },
        {
          img: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
          title: '情迷九寨'
        },
        {
          img: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          title: '蓉城七景'
        },
        {
          img: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
          title: '成都周边'
        },
        {
          img: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
          title: '亲子游'
        }
      ],
      recommendItems: [
        {
          img: 'http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_150x150_7d086c07.jpg',
          title: '成都熊猫基地',
          price: '54'
        },
        {
          img: 'http://img1.qunarzz.com/sight/p0/1409/15/fa993263e4dfe285dd21cbcf1c47400a.jpg_150x150_85ae45c4.jpg',
          title: '成都武侯祠',
          price: '36'
        },
        {
          img: 'http://img1.qunarzz.com/sight/p0/201407/03/a584374ee80b738e2600d6bcaf1299e3.jpg_150x150_0ecaf69c.jpg',
          title: '都江堰',
          price: '88'
        },
        {
          img: 'http://img1.qunarzz.com/sight/p0/1707/f6/f60edcaa8934d4fda3.img.jpg_150x150_2b239db6.jpg',
          title: '天府花溪谷',
          price: '38'
        },
        {
          img: 'http://img1.qunarzz.com/sight/p0/1505/b0/b0132e78efa00572.water.jpg_150x150_00f95876.jpg',
          title: '青城山',
          price: '88'
        },
        {
          img: 'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_150x150_34c42dfd.jpg',
          title: '成都海昌极地海洋公园',
          price: '75'
        },
        {
          img: 'http://img1.qunarzz.com/sight/p0/201307/23/b8db11dca4378903c8d65eac.jpg_150x150_9f38e41e.jpg',
          title: '成都动物园',
          price: '10'
        },
        {
          img: 'http://img1.qunarzz.com/sight/p0/1706/c4/c4b6c51a2ac942cfa3.img.jpg_150x150_a5bcb3fb.jpg',
          title: '花舞人间',
          price: '55'
        },
        {
          img: 'http://img1.qunarzz.com/sight/p0/1712/5d/5d4f18e64813d0f6a3.img.jpg_150x150_8ce74016.jpg',
          title: '成都欢乐谷',
          price: '69'
        },
        {
          img: 'http://img1.qunarzz.com/sight/p64/201211/04/9173ff9f33e97f3193835fbb.jpg_150x150_d00231ec.jpg',
          title: '杜甫草堂',
          price: '58'
        }
      ],
      likeItems: [
        {
          today: true,
          img: 'http://img1.qunarzz.com/sight/p0/1712/5d/5d4f18e64813d0f6a3.img.jpg_200x200_2a260ea1.jpg',
          title: '成都欢乐谷',
          star: 4,
          commentNum: '2121',
          price: '67',
          addr: '金牛区'
        },
        {
          today: true,
          img: 'http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_200x200_6064e939.jpg',
          title: '国色天乡·陆地乐园',
          star: 5,
          commentNum: '2121',
          price: '28',
          addr: '国色天香'
        },
        {
          today: true,
          img: 'http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_200x200_697c3b3f.jpg',
          title: '成都熊猫基地',
          star: 4,
          commentNum: '666666',
          price: '54',
          addr: '成华区',
          popular: true
        },
        {
          today: true,
          img: 'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
          title: '成都海昌极地海洋公园',
          star: 4,
          commentNum: '8888',
          price: '75',
          addr: '天府新区'
        }
      ]
    }
  }
}
</script>
