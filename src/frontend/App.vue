<template>
    <v-app>
        <page_loader :loading = 'loading' />
        <title_nav />

        <v-main>
            <!-- <br v-for = 'i in 3' :key = i /> -->
            
            <v-container class = 'align-content-center' min-height = 100vh>
                <v-row align = center height = 900px>
                    <v-col cols = 12>
                        <v-progress-linear :model-value = '100 * this.f.length / this.N' />
                        <v-card id = question>
                            <template #text>
                                <b id = question-text> {{ final_quote }} </b>
                            </template>
                        </v-card>
                    </v-col>
                    <v-col cols = 6>
                        <v-hover>
                            <template #default = '{isHovering, props}'>
                                <v-card v-bind = props :color = 'isHovering ? `cyan` : undefined' class = text-center v-ripple @click = submit(true)>
                                    <v-icon :color = '!isHovering ? `cyan` : undefined'> fa-solid {{ isHovering ? `fa-beat` : `` }} fa-check </v-icon>
                                </v-card>
                            </template>
                        </v-hover>
                    </v-col>
                    <v-col cols = 6>
                        <v-hover>
                            <template #default = '{isHovering, props}'>
                                <v-card v-bind = props :color = 'isHovering ? `red` : undefined' class = text-center v-ripple @click = submit(false)>
                                    <v-icon :color = '!isHovering ? `red` : undefined'> fa-solid {{ isHovering ? `fa-beat` : `` }} fa-x </v-icon>
                                </v-card>
                            </template>
                        </v-hover>
                    </v-col>
                    <!-- <v-col cols = 12>
                        <v-card variant = plain subtitle = 已提交答案 v-ripple>
                            <template v-for = 'i in f' :key = i>
                                <v-icon :color = 'i ? `green` : `red`'> fa-solid {{ i ? `fa-circle-check` : `fa-circle-xmark` }} </v-icon>
                            </template>
                            <template v-if = 'this.f.length < this.N'>
                                <template v-for = 'i in (this.N - this.f.length)' :key = i>
                                    <v-icon color = amber> fa-solid fa-circle </v-icon>
                                </template>
                            </template>
                        </v-card>
                    </v-col> -->
                </v-row>
            </v-container>

            <div class = 'screen align-content-center text-center' v-if = 'this.f.length >= this.N'>
                <v-row justify = center>
                    <v-col cols = 12 md = 6 lg = 4>
                        <v-card variant = text title = 你已經完成了 prepend-icon = 'fa-solid fa-crown' subtitle = '你已經收穫了 0.3 USD' text = 點按以繼續 append-icon = 'fa-solid fa-champagne-glasses' @click = 'this.f = []' v-ripple />
                    </v-col>
                </v-row>
            </div>
        </v-main>
    </v-app>

<site_footer></site_footer>
</template>

<script>
 /* eslint-disable */ 
import $ from 'jquery'
// import M from 'materialize-css'

import title_nav from '@/title.vue'
import page_loader from '@/loader.vue'

import { useDisplay } from 'vuetify'
import { animate, stagger, onScroll, text } from 'animejs';

export default {
    name: 'App',
    data() {
        return {
            loading: true,
            quote: [
                "未經同意錄下他人談話是否違法",
                "在公共場所抽菸是否一定違法",
                "路上撿到錢不歸還是否構成犯罪",
                "未滿十八歲購買酒類是否違法",
                "在網路上轉傳未經證實的謠言是否可能違法",
                "在路上拿刀削水果是否違法",
                "未經同意拍攝他人並上傳網路是否違法",
                "在捷運車廂內飲食是否違法",
                "假冒他人身分申辦門號是否違法",
                "在社群媒體辱罵他人是否構成犯罪",
                "闖紅燈但沒有發生事故是否違法",
                "在私人土地上未經同意進入是否違法",
                "未經授權使用他人照片作為商業用途是否違法",
                "散布他人個資是否違反法律",
                "酒後騎腳踏車是否違法",
                "在網路販售仿冒品是否違法",
                "未經允許打開他人信件是否違法",
                "在公園露營是否一定違法",
                "使用偷拍設備拍攝他人是否違法",
                "在考試中作弊是否觸犯刑法",
                "未經同意借用他人財物是否構成竊盜",
                "在公共場所裸露身體是否違法",
                "未經申請擺攤做生意是否違法",
                "網路上散布假投資資訊是否違法",
                "在上班時間從事私人工作是否違法",
                "未經同意錄製他人聲音是否違反法律",
                "在網路上下載盜版影片是否違法",
                "未成年自行簽訂高額合約是否有效",
                "偽造醫療證明是否違法",
                "在公共場所使用擴音器叫賣是否違法",
                "未經同意將他人加入群組是否違法",
                "在網路留言區威脅他人是否違法",
                "侵入他人電子郵件帳號是否違法",
                "未經許可砍伐路邊樹木是否違法",
                "在停車場佔用他人車位是否違法",
                "未經同意轉售他人作品是否違反著作權法",
                "散布不實疫情資訊是否違法",
                "在禁止攝影場所拍照是否違法",
                "酒後在車內睡覺是否構成酒駕",
                "未經同意使用公司資源是否違法",
                "冒充公務人員是否違法",
                "在網路上販售來路不明商品是否違法",
                "未經同意公開他人病史是否違法",
                "在考試前取得試題是否違法",
                "使用他人信用卡資料消費是否違法",
                "未經申請集會遊行是否違法",
                "在社群平台假冒名人是否違法",
                "故意不履行契約是否一定構成犯罪"
            ],
            final_quote: '',
            f: [],
            N: 20
        }
    },
    components: {
        title_nav,
        page_loader
    },
    mounted() {
        M.AutoInit();
        setTimeout(() => {
            this.loading = false;
        }, 500);
        this.submit(-1);
    },
    methods: {
        submit(x) {
            if(x != -1) this.f.push(x);
            // $('#question-text').css({
            //     filter: 'none'
            // });
            // animate('#question-text', {
            //     'filter': 'blur(30px)',
            //     reversed: true,
            //     duration: 700
            // })
            this.final_quote = this.quote[Math.floor(Math.random() * this.quote.length)];
        }
    }
}
</script>

<style>
/* * {
  transition: 1s all;
} */
.screen {
    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, .3);
}
</style>
