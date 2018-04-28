const puppeteer = require('puppeteer')

const url = `https://book.douban.com/subject/26745943/`

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
  await page.goto(url, {
    waitUntil: 'networkidle2'
  })

  await sleep(3000)

  // await page.waitForSelector('.more')

  // for (let i = 0; i < 2; i++) {
  //   await sleep(3000)
  //   await page.click('.more')
  // }

  const result = await page.evaluate(() => {
    var $ = window.$
    // var items = $('.list-wp a')
    var it = $('#wrapper')
    var v = {}
    // var links = []

    let img = it.find('#mainpic img').attr('src')
    let title = it.find('#mainpic img').attr('alt')
    let desc = it.find('#link-report .intro p').text().trim()
    let info = it.find('#info').text().trim().replace(/\s{2,}/g, '|')
    v.title = title
    v.img = img
    v.desc = desc
    v.info = info
    
    return v
  })

  browser.close()

  // process.send({result})
  console.log(result)
  process.exit(0)
})()
