const puppeteer = require('puppeteer')

const CITY = '成都'
const URL = `http://touch.piao.qunar.com/touch/index_${CITY}.html`

const sleep = time => new Promise(resolve => {
  setTimeout(resolve, time)
})

;(async () => {
  console.log('Start visit the target page')

  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
    dumpio: false
  })

  const page = await browser.newPage()
  await page.goto(URL, {
    waitUntil: 'networkidle2'
  })

  await sleep(500)

  // await page.waitForSelector('.more')

  // for (let i = 0; i < 2; i++) {
  //   await sleep(3000)
  //   await page.click('.more')
  // }

  const results = await page.evaluate(() => {
    let $ = window.$
    let result = {}

    // 轮播图
    let $swiper = $('#img-slider .mpw-swipe-wrap')
    let swiperItems = []
    $swiper.find('.mpw-swipe-item').forEach(v => {
      let src = $(v).find('img').attr('src')
      swiperItems.push({
        src
      })
    })

    // menu icon和名字
    let $menu = $('#category-container .mpw-swipe-wrap')
    let menuItems = []
    $menu.find('.mpw-swipe-item').forEach(item => {
      $(item).find('.mp-category-item').forEach(v => {
        let title = $(v).find('.keywords').text()
        let src = $(v).find('img').attr('src')
        menuItems.push({
          title,
          src
        })
      })
    })

    let $recommend = $('.mp-hotsale-list')
    let recommendItems = []
    $recommend.find('.mp-hotsale-item').forEach(v => {
      let src = $(v).find('img').attr('src')
      let title = $(v).find('.mp-hotsale-sight').text()
      let price = $(v).find('.mpg-price-num').text()
      recommendItems.push({
        src,
        title,
        price
      })
    })

    let $like = $('.mp-like-list')
    let likeItems = []
    $like.find('.mp-like-item').forEach(v => {
      let src = $(v).find('.mp-like-img').attr('src')
      let title = $(v).find('.mp-like-title').text()
      let star = $(v).find('.mpg-iconfont').text().length
      let price = $(v).find('.mpg-price-num').text()
      let commentNum = ($(v).find('.mp-comment-num').text()).replace('条评论', '')
      let addr = $(v).find('.mp-like-address').text()
      let popular = $(v).find('.mp-like-feature').text() || ''
      likeItems.push({
        src,
        title,
        star,
        commentNum,
        addr,
        price,
        popular
      })
    })

    let $weekly = $('#weekend-trip')
    let weeklyItems = []
    $weekly.find('.mp-product-item').forEach(v => {
      let src = $(v).find('.product-imgcontainer img').attr('src')
      let title = $(v).find('.product-name').text()
      let desc = $(v).find('.product-desc').text()
      weeklyItems.push({
        src,
        title,
        desc
      })
    })

    result.swiperItems = swiperItems
    result.menuItems = menuItems
    result.recommendItems = recommendItems
    result.likeItems = likeItems
    result.weeklyItems = weeklyItems
    return result
  })

  browser.close()

  // process.send({result})
  console.log(results)
  process.exit(0)
})()
