const puppeteer = require('puppeteer')

// const CITY = '成都'
const URL = `http://touch.piao.qunar.com/touch/toNewCityList.htm`

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
    let it = $('#city-domestic')
    let result = []
    it.find('.mp-list').forEach(item => {
      let arr = []
      $(item).find('li').forEach(v => {
        let text = $(v).find('a').text()
        arr.push(text)
      })
      result.push(arr)
    })

    return result
  })

  browser.close()

  // process.send({result})
  console.log(results)
  process.exit(0)
})()
