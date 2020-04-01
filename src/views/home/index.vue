<template>
    <div>
        <el-carousel trigger="click" height="500px" @change="loadAnimate">
            <el-carousel-item v-for="(item,index) in sliderList" :key="index">
                <figure>
                    <img :src="'../../static/img/slider/'+item.img" width="100%"/>
                    <figcaption>
                        <h1 :class="{ bounceInDown:slider_index==index }">{{ item.title }}</h1><br>
                        <p :class="{ fadeInUp:slider_index==index }">{{ item.abstract }}</p><br>
                        <router-link :to="item.link">
                            <el-button class="slider-button" round :class="{ fadeInUp:slider_index==index }">了解详情 >></el-button>
                        </router-link>
                    </figcaption>
                </figure>
            </el-carousel-item>
        </el-carousel>
        <ul class="home-kind">
            <li v-for="(item,index) in kind" :key="index">
                <h3>{{ item.title }}<div></div></h3>
                <p>{{ item.info }}</p>
            </li>
        </ul>
      <div class="home-friends">
        <h1>简介</h1>
        <p>南方科技大学深圳海底地震仪设备与工程实验室（SUSTech OBS Lab）<br>
          是响应“建设海洋强国”的国家战略和深圳市“海洋未来产业”的发展规划，<br>
          由深圳市发改委和南方科技大学共同组建。这一高起点的实验室致力于高性能海底探测设备的<br>
          研发，并进行海底地震和海啸灾害防御、海底资源开发以及揭示地球内部结构和动力学过程等科学研究。</p>
      </div>

      <div class="home-service">
        <h1>优秀的团队，最佳的解决方案</h1>
            <p>团队由教授牵头博士及专业工程师等组成，聚集行业先进的产品与技术，满足不同的客户需求并提供最优解决方案，共创价值</p>
            <ul>
                <li v-for="(item,index) in services" :key="index">
                    <div class="service-box">
                        <img :src="`../../../static/img/services/${index+1}.jpg`">
                        <div class="service-info"><p>{{ item.info }}</p></div>
                    </div>
                    <br>
                    <p>{{ item.title }}</p>
                </li>
            </ul>
        </div>
        <div class="home-friends">
            <div class="friends-container">
                <h1>合作单位</h1>
                <p>每年，我们都要求国内外知名的海洋地球物理和地震学专家来实验室访问交流，此外，我们也经常参加在国内外开展的学术会议如AGU，中国地球科学联合会年会等。实验室也常常送学生去其他等高校交流和学习。</p>
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
import { home } from '../../http/home';

export default {
    name: "Home",
    data(){
        return {
            slider_index: 0,
            sliderList: [
                {
                    title: '研发高性能海底探测设备',
                    abstract: '诚邀您的加盟',
                    img: 'slider01.png',
                    link: ''
                },
                {
                    title: '设备共享,让科研变得更专注',
                    abstract: '始于足下',
                    img: 'slider02.png',
                    link: ''
                },
                {
                    title: '实验,检验真理的唯一标准',
                    abstract: '',
                    img: 'slider03.png',
                    link: ''
                }
            ],
            kind:[
                {
                    title: '构建共享服务生态',
                    info: ''
                },
                {
                    title: '研制高水平数采',
                    info: ''
                },
                {
                    title: '培养优秀人才',
                    info: ''
                },
                {
                    title: '降低OBS仪器使用门槛',
                    info: ''
                }
            ],
            services:[
                {
                    title: '深海OBS',
                    info: '此处可有简介'
                },
                {
                    title: '短周期OBS',
                    info: '此处可有简介'
                },
                {
                    title: '陆地版数采',
                    info: '此处可有简介'
                }
            ]
        }
    },
    created(){
        this.$emit('headFix', ['fixed',false]);
        // home()
        // .then(data=>{
        //     console.log(data)
        // })
        // .catch(err => {
        //     this.$message.error(err.message);
        // });
    },
    methods:{
        loadAnimate(index){
            this.slider_index = index;
        }
    }
}
</script>
<style lang="scss" scoped>
    @mixin self_icon {
        &::before {
            border-left: 50px solid #DADADA;
            border-right: 50px solid #DADADA;
            bottom: 0;
            content: "";
            height: 1px;
            margin-left: -70px;
            position: absolute;
        }
        &::after {
            background: #1873FF none repeat scroll 0 0 padding-box content-box;
            /*background: #1873FF none repeat scroll 0 0 padding-box content-box;*/
            border-bottom: 1px solid #DADADA;
            border-left: 1px solid #DADADA;
            bottom: -10px;
            content: "";
            left: 50%;
            margin-left: -16px;
            padding: 0 0 8px 8px;
            position: absolute;
            transform: rotate(-45deg);
        }
    }
    figure {
        color: #ffffff;
        text-align: left;
        &::before {
            background: rgba(0, 0, 0, 0.4) none repeat scroll 0 0;
            content: "";
            height: 100%;
            position: absolute;
            width: 100%;
        }
        figcaption {
            bottom: 0;
            left: 6%;
            margin: 0 auto;
            position: absolute;
            right: 6%;
            top: 40%;
            width: 1170px;
            padding: 0 15px;
            h1 {
                font-size: 46px;
            }
            p {
                font-size: 18px;
                font-weight: 400;
            }
            .slider-button {
                background-color: #1873FF;
                border-color: #1873FF;
                color: #ffffff;
                width: 180px;
                height: 40px;
                font-size: 18px;
                transition: transform 2s;
                &:hover {
                    transform: translateY(10px);
                }
            }
        }
    }
    .home-kind {
        box-sizing: border-box;
        background-color: #EBEEF5;
        padding: 0 5%;
        display: flex;
        li {
            padding: 1%;
            text-align: left;
            position: relative;
            box-sizing: border-box;
            width: 25%;
            h3{
                display: inline-block;
                div {
                    margin-top: 1%;
                    height: 2px;
                    width: 40px;
                    background-color: #0984E3;
                }
            }
            p {
                margin-top: 1.5%;
                font-size: 14px;
                color: gray;
            }
            h3>div {
                transition: width .5s;
            }
            &:hover {
                background-color: #ffffff;
                transition: background-color .5s;
                h3>div{
                    width: 100%;
                }
            }
            &:not(:first-child)::before {
                content: '';
                position: absolute;
                width: 1px;
                height: 80%;
                left: 0;
                background-color: #D6D6D6;
            }

        }
    }
    .home-service {
        margin-top: 3%;
        h1 {
            position: relative;
            @include self_icon;
            &::before {
                left: 49.9%;
                top: 174%;
                width: 43px;
            }
            &::after {
                height: 22px;
                left: 50%;
                top: 140%;
                width: 22px;
            }
        }
        &>p {
            margin-top: 5%;
            color: gray;
        }
        ul {
            margin-top: 5%;
            padding: 0 10%;
            display: grid;
            grid-template-columns: repeat(3,33.33333%);
            li {
                .service-box {
                    margin-left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    overflow: hidden;
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    img, .service-info {
                        transition: all 0.4s ease-in-out 0s;
                    }
                    &:hover {
                        img, .service-info {
                            transform: translateX(-80%);
                        }
                    }
                    img {
                        width: 100%;
                        height: auto;
                    }
                    .service-info {
                        width: 80%;
                        height: 100%;
                        background: #f1f1f1;
                        padding: 20% 25% 0 5%;
                        position: absolute;
                        top: 0;
                        right: -110%;
                        p {
                            font-weight: 600;
                        }
                    }
                }
            }
        }
    }
    .home-friends {
        margin-top: 5%;
        height: 35vh;
        padding: 20px 0;
        background: url(../../../static/img/head-view/clients-bg.jpg);
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
                color: #ffffff;
                @include self_icon;
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
                display: flex;
                margin-top: 5%;
                position: absolute;
                margin-left: 50%;
                transform: translateX(-50%);
            }
        }
    }
// 动画类
.bounceInDown {
    animation: bounceInDown 1s linear;
}
.fadeInUp {
    animation: fadeInUp 1s linear;
}
</style>
