<template>
  <section class="city-list" ref="cityListScroll">
    <div class="wrapper">
      <dl class="list-hot">
        <dt class="hot-title">热门城市</dt>
        <dd class="hot-box">
          <!-- <div class="item" v-for="v in hotCity" :key="v">{{v}}</div> -->
          <div class="item">北京</div>
          <div class="item">北京</div>
          <div class="item">北京</div>
          <div class="item">北京</div>
          <div class="item">北京</div>
          <div class="item">北京</div>
        </dd>
      </dl>
      <dl class="list-letter">
        <dt class="letter-title">字母排序</dt>
        <dd class="zimu-box">
          <div class="item" v-for="v in letterArr" :key="v">{{v}}</div>
        </dd>
      </dl>
      <dl class="letter-a">
        <dt class="letter-title">A</dt>
        <dd class="letter-box">
          <div class="item">阿里</div>
          <div class="item">阿里</div>
          <div class="item">阿里</div>
          <div class="item">阿里</div>
          <div class="item">阿里</div>
          <div class="item">阿里</div>
        </dd>
      </dl>
      <ul>
        <li>01</li>
        <li>02</li>
        <li>03</li>
        <li>04</li>
        <li>05</li>
        <li>06</li>
        <li>07</li>
        <li>08</li>
        <li>09</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
      </ul>
      <ul>
        <li>01</li>
        <li>02</li>
        <li>03</li>
        <li>04</li>
        <li>05</li>
        <li>06</li>
        <li>07</li>
        <li>08</li>
        <li>09</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
      </ul>
      <ul>
        <li>01</li>
        <li>02</li>
        <li>03</li>
        <li>04</li>
        <li>05</li>
        <li>06</li>
        <li>07</li>
        <li>08</li>
        <li>09</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
      </ul>
    </div>
  </section>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data() {
    return {
      letterArr: [
        'A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U',
        'V', 'W', 'X', 'Y', 'Z'
      ]
    }
  },
  methods: {
    _initScroll() {
      this.cityListScroll = new BScroll(this.$refs.cityListScroll, {
        click: true
      })
    },
    _initData() {

    }
  },
  created() {
    this.$nextTick(() => {
      this._initScroll()
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~@css/base.styl';

.city-list
  position absolute
  left 0
  right 0
  top 234px
  bottom 0
  dl
    dt
      background-color #f5f5f5
      font-size 40px
      color #000
      padding 0.4rem 0 0.4rem 0.7rem
    dd
      display flex
      align-items center
      flex-wrap wrap
  .hot-box
    .item
      flex 0 0 33.33%
      padding 0.5rem
      border-right 3px solid #dedede
      border-bottom 3px solid #dedede
      text-align center
      font-size 45px
      ellipsis()
      &:nth-last-child(1), &:nth-last-child(2), &:nth-last-child(3)
        border-bottom: 0
      &:nth-child(3n)
        border-right 0
  .zimu-box
    display flex
    padding 0.5rem 0
    align-items center
    flex-wrap wrap
    .item
      flex 0 0 16.66%
      height 120px
      line-height 120px
      text-align center
      font-size 44px
</style>
