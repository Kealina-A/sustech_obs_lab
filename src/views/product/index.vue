<template>
    <div class="product">
        <figure>
            <figcaption>
                <h1>设备中心</h1><br>
                <p>强大的设备矩阵，如深海设备、陆地设备、回收信标...</p>
            </figcaption>
            <img src="../../../static/img/head-view/device1.jpg" width="100%" height="555px">
        </figure>
        <ul class="category" :class="{fix: fix}">
            <li v-for="(item,index) in category" :key="index">
                <div class="outcircle" :style="{backgroundColor: item.color}" @click="selected(item)">
                    {{ item.title }}
                    <div class="incircle" :class="{active: active == item.title}"></div>
                </div>
            </li>
        </ul>
        <ul class="products">
            <transition-group enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
                <li v-for="(item,index) in products" :key="index">
                    <router-link :to="'/product/'+item.id">
                        <img :src="'../../../static/img/product/'+ item.img" width="250px" height="250px" />
                    </router-link>
                    <div class="inner-text">
                        <h4>{{ item.title }}</h4>
                    </div>
                </li>
            </transition-group>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'product',
    data(){
        return {
            active: '所有',
            fix: false,
            category: [
                {
                    kind: 0,
                    title: '所有',
                    color: '#2F4056'
                },
                {
                    kind: 1,
                    title: '深海设备',
                    color: '#009688'
                },
                {
                    kind: 2,
                    title: '陆地设备',
                    color: '#5FB878'
                },
                {
                    kind: 3,
                    title: '回收信标',
                    color: '#1873FF'
                }
            ],
            products: [
                {
                    id: 1,
                    kind: 1,
                    img: 'work01.jpg',
                    title: '深海设备1'
                },
                {
                    id: 2,
                    kind: 2,
                    img: 'work02.jpg',
                    title: '陆地设备1'
                },
                {
                    id: 3,
                    kind: 3,
                    img: 'work03.jpg',
                    title: '回收设备1'
                },
                {
                    id: 4,
                    kind: 2,
                    img: 'work04.jpg',
                    title: '陆地设备2'
                },
                {
                    id: 5,
                    kind: 3,
                    img: 'work05.jpg',
                    title: '回收设备2'
                },
                {
                    id: 6,
                    kind: 3,
                    img: 'work06.jpg',
                    title: '回收设备3'
                }
            ],
            copy_products: []
        }
    },
    mounted(){
        this.copy_products = JSON.parse(JSON.stringify(this.products));
        this.$emit('headFix', ['absolute',true]);
        window.addEventListener('scroll', this.handleScroll);
    },
    methods:{
        selected(item){
            this.active = item.title;
            if(item.kind == 0){
                this.products = this.copy_products;
            }else {
                this.products = this.copy_products.filter(it=>it.kind===item.kind);
            }
        },
        handleScroll(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            console.log(scrollTop)
            if(scrollTop >= 555){
                this.fix = true;
            }else {
                this.fix = false;
            }
        }
    }

}
</script>
<style lang="scss" scoped>
    .product {

        figure {
            figcaption {
                color: #ffffff;
                text-align: left;
                position: absolute;
                left: 6%;
                top: 30%;
                h1 {
                    font-size: 2.5rem;
                }
            }
        }
        .fix {
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            z-index: 2;
        }
        .category {
            height: 15vh;
            padding: 1% 25% 0;
            display: grid;
            grid-template-columns: repeat(4, 25%);
            background-color: rgba(0,0,0,.5);      // #393D49;
            margin-top: -1%;
            li {
                position: relative;
                .outcircle {
                    width: 50%;
                    height: 80%;
                    border-radius: 50%;
                    color: #ffffff;
                    line-height: 12vh;
                    position: relative;
                    cursor: pointer;
                    transition: all .5s;
                    &:hover {
                        width: 60%;
                        height: 100%;
                        line-height: 15vh;
                        font-size: 18px;
                    }
                    .incircle {
                        width: 80%;
                        height: 80%;
                        position: absolute;
                        left: 0;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        border-radius: 50%;
                        margin: auto;
                        border: 0px solid transparent;
                        &.active {
                            color: rgba(255,255,255,.4);
                            border: 3px solid rgba(255,255,255,.4);
                            animation: self-zoomIn .5s linear;
                        }
                    }
                }

            }

        }
        .products>span{
            margin: 15vh auto;
            width: 80%;
            display: grid;
            grid-template-columns: repeat(3, 33.33333%);
            row-gap: 3%;
            li {
                position: relative;
                overflow: hidden;
                img {
                    transition: all .5s ease-out;
                }
                &:hover img {
                    opacity: 0.8;
                }
                &:hover .inner-text{
                    visibility: visible;
                    top: 78.5%;
                }
                .inner-text {
                    position: absolute;
                    left: 50%;
                    right: 10%;
                    top: 100%;
                    transform: translateX(-50%);
                    background: transparent;
                    height: 20%;
                    width: 250px;
                    background-color: rgba(0,0,0,.5);
                    color: #ffffff;
                    visibility: hidden;
                    transition: all .5s ease-out;
                    h4 {
                        margin-top: 5%;
                    }
                }
            }
        }
    }
// 动画
@keyframes self-zoomIn {
  from {
    border: 0px solid transparent;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    border: 3px solid #ffffff;
  }

  80% {
    border: 3px solid #ffffff;
  }

  100% {
    border: 3px solid rgba(255,255,255,.4);
  }
}
</style>
