const superagent = require('superagent')
const cheerio = require('cheerio')
const URL = 'http://touch.piao.qunar.com/touch/toNewCityList.htm'

// 发起请求
superagent.get(URL).end((err, res) => {
  // 错误处理
  if (err) return new Error(err)

  // 包含未解析前的响应内容
  // cheerio.load解析整个文档
  let $ = cheerio.load(res.text)
  
  // 分析页面数据 

  // 爬到了字母表
  let character = []
  $('#city-domestic .mp-character-list li').each((i, elem) => {
    let e = $(elem)    
    character.push(e.text())
  })
  
  // let result = []
  // $('#city-domestic .mp-list').each(function(i, elem) {
  //   let e = $(elem)
  //   let list = []
  //   e.find('li').each(function(idx, element) {
  //     let _this = $(element)
  //     list.push(_this.text())
  //   })
  //   result.push(list)
  // })

  console.log(character)
})