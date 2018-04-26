<template>
  <div class="homePage">
    <div class="imgBox">
      <img class="img" :src='imgUrl' v-show="imgShow" @click="getImg" id="img" crossorigin="anonymous">
      <div class="loader" v-show="loading">
        <div class="loader-inner">
          <div class="loader-line-wrap" v-for="v in lines" :key="v">
            <div class="loader-line"></div>
          </div>          
        </div>
      </div>
    </div>
    <div class="color">
      <a href="https://github.com/Fridolph/colorful-gallery.git" target="_blank">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-GitHub"></use>
        </svg>
      </a>
      <img src="http://blog.fueson.top/avatar/me.jpg" alt="" class="author">
      <div class="title">ColorfulImg</div>
      <div class="describe">
        <svg aria-hidden="true" class="left">
          <use xlink:href="#icon-left"></use>
        </svg>Click it to get the main color from the picture</div>
      <div class="Dominant">Dominant Color :</div>

      <div class="colorBox">
        <div id="color"></div>
        <div class="rgb">{{ rgb }}</div>
      </div>
      <!-- <div class="imgFile">
        <input type="file" id="photoFileUpload" />
        <div class="saveImgButton" id="dropArea">UP AN IMAGE HERE</div>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import colorfulImg from '../../plugins/colorful-img'

@Component({})
export default class HomePage extends Vue {
  msg: string = 'Welcome to your typescript - gallery App'
  lines: number[] = [1, 2, 3, 4, 5]
  imgUrl: string = ''
  img = null
  loading: boolean = true
  imgShow: boolean = false
  rgb: string = ''
  inverseRgb: string = ''

  mounted() {
    this.getImg()
  }

  getImg(): void {
    let i = Math.floor(Math.random() * (1000 + 1))
    let color = document.getElementById('color')
    this.img = document.getElementById('img')
    this.imgUrl = `https://picsum.photos/580/600/?image=${i}`
    this.loading = true
    this.imgShow = false

    this.img.onload = (): void => {
      this.loading = false
      this.imgShow = true
      let rgb = colorfulImg(this.img)
      this.rgb = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
      this.inverseRgb = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
      document.body.style.backgroundColor = this.rgb
      color.style.background = this.rgb
      color.style.color = this.rgb
    }

    this.img.onrror = (): void => {
      console.log('error')
      this.getImg()
    }
  }

  saveImg() {
    let color = document.getElementById('color')
    this.loading = true
    this.imgShow = false
    let fileUploadControl: any = document.getElementById('photoFileUpload')
    if (fileUploadControl.files.length > 0) {
      // let localFile = fileUploadControl.files[0]
      // let name = 'avatar.jpg'

      let file = null
      file.save().then(
        file => {
          // 文件保存成功
          console.log(file.url())
          this.img.src = file.url()
          this.img.onload = () => {
            let rgb = colorfulImg(this.img)
            this.rgb = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')'
            document.body.style.backgroundColor = this.rgb
            color.style.background = this.rgb
            color.style.color = this.rgb
            this.loading = false
            this.imgShow = true
          }
          this.img.onerror = () => {
            console.log('error')
            this.getImg()
          }
        }
      )
    }
  }
}
</script>

<style scoped lang="scss">
.homePage {
  height: 600px;
  width: 1020px;
  display: flex;
  .imgBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 580px;
    height: 600px;
    img {
      width: 580px;
      height: 600px;
    }
  }
  .color {
    background: rgb(253, 245, 237);
    flex: 1;
    padding: 60px 30px 60px 40px;
    position: relative;
    .icon {
      position: absolute;
      right: 20px;
      bottom: 20px;
      width: 30px;
      height: 30px;
    }
    .author {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
    .title {
      font-size: 40px;
      font-weight: bold;
      margin: 50px 0;
    }
    .describe {
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      .left {
        width: 15px;
        height: 15px;
        color: black;
        margin-right: 5px;
      }
    }
    .colorBox {
      display: flex;
      align-items: center;
      margin-top: 20px;
      #color {
        width: 100px;
        height: 50px;
        overflow: hidden;
      }
      .rgb {
        margin-left: 40px;
        height: 50px;
        line-height: 50px;
      }
    }
    .imgFile {
      margin: 40px 0;
      width: 250px;
      height: 50px;
      position: relative;
      .saveImgButton {
        width: 250px;
        height: 50px;
        background: rgb(9, 19, 35);
        border-radius: 20px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      #photoFileUpload {
        width: 250px;
        height: 50px;
        opacity: 0;
        position: absolute;
      }
    }
  }
}
</style>