<template>
  <div class="project">
    <figure>
      <figcaption>
        <h1>科研项目</h1><br>
        <p></p>
      </figcaption>
      <img src="../../../static/img/project/head.jpg" width="100%" height="300px">
    </figure>

    <div class="container">
      <div class="photo"><img src="../../../static/img/project/project02.png"></div>
      <div class="text-info">
        <h2>深圳市基础学科布局项目</h2>
        <br>
        <p>017/08-2019/07 深圳市科创委国际合作研究项目： 宽频带海底地震仪关键技术研发
          (批准号：2017-173）<br>
          2017/05-2019/04 深圳市科创委自由探索项目 ：利用海底界面波反演南海海底沉积层的物理性质
          (批准号：2017-131）<br>
          2016/09-2019/08 深圳发改委专项：南方科技大学海底地震仪（OBS）工程与设备实验室建设</p>
      </div>
    </div>

    <div class="container">
      <div class="photo"><img src="../../../static/img/project/project02.png"></div>
      <div class="text-info">
        <h2>国家自然基金项目</h2>
        <br>
        <p>02017/01-2020/12 国家自然科学基金（面上）： 南海残留洋脊的俯冲：基于海底地震观测的层析成像和各向异性约束 （批准号：41676033）<br>
          2012/01-2015/12 国家自然科学基金（重点）：海陆联合天然地震观测研究南海岩石圈及上地幔结构与过程 （批准号：91128029）<br>
          2010/01-2013/12 国家自然科学基金（面上）：南海之下转换带及深部地幔的地震学特征（批准号：41076019）
        </p>
      </div>
    </div>

    <div class="container">
      <div class="photo"><img src="../../../static/img/project/project02.png"></div>
      <div class="text-info">
        <h2>PROJECT 3 </h2>
        <br>
        <p>2010/09-2013/08 重点高校基本科研专项-印支地块岩石圈结构与南海扩张的“碰撞-挤出”模型<br>
          2009/01-2011/12 国家重点实验室自主项目：利用越南流动地震台站进行南海深部岩石圈结构研究（批准号：MG200905）<br>
          2008-2010 浦江人才项目：三峡水库诱发地震与其次生地质灾害的关系研究<br>
          2008-2010 上海市教委创新重点项目：有限频率地震层析方法研究
        </p>
      </div>
    </div>

    <div class="container">
      <div class="photo"><img src="../../../static/img/project/project02.png"></div>
      <div class="text-info">
        <h2>PROJECT 4</h2>
        <br>
        <p>02009-2011 “863”计划：大洋钻探（IODP）站位调查关键技术研究—（参与）<br>
          2007-2011 “973”计划：南海大陆边缘动力学及油气资源潜力 —（参与）
        </p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'project',
    created(){
      this.$emit('headFix', ['fixed',false]);
    },
  }
</script>

<style lang="scss" scoped>
  .project {
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
    .container{
      padding: 2% 5%;
      margin: 0 auto;
      width: 1000px;
      height: 180px;
      .photo{
        float:left;
        width: 30%;
      }
      .text-info{
        text-align: left;
        float: right;
        width: 65%;
      }
    }

  }

</style>
