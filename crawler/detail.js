const puppeteer = require('puppeteer')

// const CITY = '成都'
const URL = `http://touch.piao.qunar.com/touch/detail.htm?id=10265&from=as_recommend_sight`

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
    // let result = {}

    // // baseInfo
    // let posterImg = $('#imgcontainer img').attr('src')
    // let title = $('.mp-headfeagure-info .mp-headfeagure-title').text()
    // let score = $('.mp-commentcard-score').text()
    // let commentNum = $($('.mp-totalcommentnum')[0]).text()
    // let gonglueNum = $($('.mp-totalcommentnum')[1]).text()
    // let addr = ($('.mp-baseinfo-address-txt').text()).slice(1, ($('.mp-baseinfo-address-txt').text()).length - 1)
    // result.baseInfo = {
    //   posterImg,
    //   title,
    //   score,
    //   commentNum,
    //   gonglueNum,
    //   addr
    // }

    // let recommendList = []
    // $('.mp-promote .mp-ticket-item').forEach(item => {
    //   let title = $(item).find('.mp-ticket-onedaytitle').text()
    //   let price = $(item).find('.mp-price-num').text()
    //   recommendList.push({
    //     title,
    //     price
    //   })
    // })
    // result.recommendList = recommendList

    let commentList = []
    $('.mp-comment-list .mp-comment-item').forEach(item => {
      let star = $(item).find('.mpf-starlevel-gain').text()
      let date = $(item).find('.mp-comment-date').text()
      let content = $(item).find('.mp-comment-content').text()
      let imgs = []
      let $imgs = $(item).find('.mp-comment-imgs .mp-comment-imgouter')
      $imgs.forEach(v => {
        imgs.push($(v).find('.mp-comment-imginner img').attr('data-original-src'))
      })

      commentList.push({
        star,
        date,
        content,
        imgs
      })
    })
    // result.commentList = commentList

    return commentList
  })

  browser.close()

  // process.send({result})
  console.log(results)
  process.exit(0)
})()
