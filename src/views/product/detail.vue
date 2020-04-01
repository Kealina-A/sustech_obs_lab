<template>
    <div class="product-detail">
        <figure>
            <figcaption>
                <h1>磐龟OBS</h1><br>
                <p></p>
            </figcaption>
            <img :src="`../../../static/img/product/work0${$route.params.id}.jpg`" width="100%" height="500px">
        </figure>
        <div class="detail-content">
            <div class="detail-block">
                <div class="elem-quote"><h2>设备概述</h2></div>
                <div class="product-info">
                    此OBS可以达到深海6000米的深度，续航时间可达一年零三个月
                </div>
            </div>
            <div class="detail-block">
                <div class="elem-quote"><h2>技术参数</h2></div>
                <ul>
                    <li>描述1；</li>
                    <li>描述2；</li>
                    <li>描述3；</li>
                    <li>描述4；</li>
                    <li>描述5；</li>
                    <li>描述6；</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'product-detail',
    data(){
        return {

        }
    },
    mounted(){
        window.scroll(0,0);
        this.$emit('headFix', ['fixed',false]);
    },
    methods:{

    }

}
</script>
<style lang="scss" scoped>
    .product-detail {
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
        .detail-content {
            padding: 2% 5%;
            .detail-block {
                margin-bottom: 5%;
                .elem-quote {
                    text-align: left;
                    text-indent: 1em;
                    margin-bottom: 10px;
                    line-height: 22px;
                    border-left: 5px solid #009688;
                    border-radius: 0 2px 2px 0;
                }
                .product-info {
                    text-align: left;
                    font-size: 15px;
                    line-height: 25px;
                }
                ul {
                    text-align: left;
                    padding-left: 2%;
                    list-style-type: disc;
                }
            }
        }

    }

</style>
