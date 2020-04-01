<template>
  <div class="interchange">
    <figure>
      <figcaption>
        <h1>交流与合作</h1><br>
        <p></p>
      </figcaption>
      <img src="../../../static/img/interchange/head.jpg" width="100%" height="300px">
    </figure>

    <div class="interchange-friends">
      <div class="friends-container">
        <h1>合作交流</h1>
        <p>每年，我们都要求国内外知名的海洋地球物理和地震学专家来实验室访问交流，此外，<br>
          我们也经常参加在国内外开展的学术会议如AGU，中国地球科学联合会年会等。实验室也<br>
          常常送学生去其他等高校交流和学习。
        </p>
        <ul>
          <li v-for="item in 6" :key="item">
            <img :src="`../../../static/img/friends/clients-logo1${item}.png`">
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'interchange',
    created(){
      this.$emit('headFix', ['fixed',false]);
    },
  }
</script>

<style lang="scss" scoped>
  .interchange {
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
    .interchange-friends {
      margin-top: 1%;
      height: 55vh;
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
      .friends-container {
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
          margin-top: 20px;
          font-size: 30px;
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
        ul {
          margin-top: 5%;
          position: absolute;
          margin-left: 50%;
          transform: translateX(-50%);
          width: 50%;
          display: grid;
          grid-template-columns: repeat(3, 33.33333%);
        }
      }
    }
  }

</style>
