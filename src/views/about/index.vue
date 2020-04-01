<template>
  <div class="about">
    <figure>
      <figcaption>
        <h1>关于我们</h1><br>
        <p></p>
      </figcaption>
      <img src="../../../static/img/about/head.jpg" width="100%" height="300px">
    </figure>

    <div class="about-head">
      <div class="about-container">
        <h1>简介</h1>
        <p>南方科技大学深圳海底地震仪设备与工程实验室（SUSTech OBS Lab）是响应“建设海洋强国”的国家战<br>
          略和深圳市“海洋未来产业”的发展规划，由深圳市发改委和南方科技大学共同组建.这一高起点的实验室<br>
          致力于高性能海底探测设备的研发，并进行海底地震和 海啸灾害防御、海底资源开发以及揭示地球内部<br>
          结构和动力学过程等科学研究。
        </p>
      </div>
    </div>

    <div class="head-box">
      <div class="container">
        <div class="photo">
          <img src="../../../static/img/about/yang.png">
        </div>
        <div class="text-info">
          <h2>杨挺 教授<br>
            PI and Director
          </h2>
        </div>
      </div>
      <p>
      I'm a paragraph. Click here to add your own text and edit me. It’s easy.
      Just click “Edit Text” or double click me to add your own content and make
      changes to the font. I’m a great place for you to tell a story and let your
      users know a little more about you.
      </p>
    </div>

    <div class="partner-box" v-for="(memberGroup,index) in memberGroups" :key="index">
      <div :class="member.class" v-for="(member,index) in memberGroup">
        <div class="head-box">
          <div class="container">
            <div class="photo">
              <img :src="'../../../static/img/about/'+ member.avator" width="140px" height="140px">
            </div>
            <div class="text-info">
              <h2>{{member.name}}<br>
               {{member.position}}
              </h2>
            </div>
          </div>
          <p>
            {{member.description}}
          </p>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'interchange',
    data() {
      return {
        memberGroups: [
          [{
            name: '王宜志',
            position: '电子工程师',
            avator:'left.png',
            description:" I'm a paragraph. Click here to add your own text and edit me." +
              " It’s easy.Just click “Edit Text” or double click me to add your own content and make " +
              "changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
            class:'left'
          },{
            name: '刘丹',
            position: '机械工程师',
            avator:'right.png',
            description:" I'm a paragraph. Click here to add your own text and edit me." +
              " It’s easy.Just click “Edit Text” or double click me to add your own content and make " +
              "changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
            class:'right'
          }],
          [{
            name: '黄信锋',
            position: '软件工程师',
            avator:'right.png',
            description:" I'm a paragraph. Click here to add your own text and edit me." +
              " It’s easy.Just click “Edit Text” or double click me to add your own content and make " +
              "changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
            class:'left'
          },{
            name: '黄志鹏',
            position: '机械工程师',
            avator:'left.png',
            description:" I'm a paragraph. Click here to add your own text and edit me." +
              " It’s easy.Just click “Edit Text” or double click me to add your own content and make " +
              "changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
            class:'right'
          }],
          [{
            name: '王建',
            position: '博士后',
            avator:'right.png',
            description:" I'm a paragraph. Click here to add your own text and edit me." +
              " It’s easy.Just click “Edit Text” or double click me to add your own content and make " +
              "changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
            class:'left'
          },{
            name: '黎伯孟',
            position: '博士后',
            avator:'left.png',
            description:" I'm a paragraph. Click here to add your own text and edit me." +
              " It’s easy.Just click “Edit Text” or double click me to add your own content and make " +
              "changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
            class:'right'
          }
          ],
          [{
            name: '潘谟晗',
            position: '博士研究生',
            avator:'left.png',
            description:" I'm a paragraph. Click here to add your own text and edit me." +
              " It’s easy.Just click “Edit Text” or double click me to add your own content and make " +
              "changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
            class:'left'
          },{
            name: '戴宇航',
            position: '研究助理',
            avator:'right.png',
            description:" I'm a paragraph. Click here to add your own text and edit me." +
              " It’s easy.Just click “Edit Text” or double click me to add your own content and make " +
              "changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
            class:'right'
          }
          ],
        ]
      }
    },
    created(){
      this.$emit('headFix', ['fixed',false]);
    },
  }
</script>

<style lang="scss" scoped>
  .about {
    figure {
      figcaption {
        color: #ffffff;
        text-align: left;
        position: absolute;
        left: 6%;
        top: 10%;
        h1 {
          font-size: 2.5rem;
        }
      }
    }
    .about-head {
      margin-top: 1%;
      height: 25vh;
      padding: 20px 0;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      &::before {
        position: absolute;
        width: 100%;
        height: 100%;
        //            background: rgba(0, 0, 0, 0.4);
        content: "";
        left: 0;
        top: 0;
      }
      .about-container {
        padding-right: 15px;
        padding-left: 15px;
        position: relative;
        h1 {
          font-size: 45px;
          color: #0086b3;
          &::before {
            left: 50%;
            top: 144%;
            width: 29.5px;
          }
          &::after {
            height: 12px;
            left: 50%;
            top: 130.5%;
            width: 12px;
          }
        }
        p{
          margin: 20px;
          font-size: 20px;
          color: #0086b3;
          &::before {
            left: 50%;
            top: 144%;
            width: 29.5px;
          }
          &::after {
            height: 12px;
            left: 50%;
            top: 130.5%;
            width: 12px;
          }
        }
      }
    }

    .partner-box{
      padding: 5%;
      margin:0 auto;
      width:1050px;
      .left{
        float:left;
        width:450px;
      }
      .right{
        float:right;
        width:450px;
      }
    }
    .head-box{
      margin:0 auto;
      width:500px;
      text-align: left;
      font-size: 18px;
      .container{
        margin: 0 auto;
        width: 100%;
        height: 140px;
        background-color: #0086b3;
        .photo{
          float:left;
          width: 30%;
          img{
            width:140px;
          }
        }
        .text-info{
          margin-top: 40px;
          text-align: left;
          -webkit-text-fill-color: #ffffff;
          font-size: 15px;
          float: right;
          width: 65%;
        }
      }
      p{
        margin: 20px 0;
        color: #0086b3;
        width: 500px;
      }
    }
  }

</style>
