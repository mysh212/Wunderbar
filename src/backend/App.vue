<template>
    <v-app>
        <page_loader :loading = 'loading' />
        <title_nav />

        <v-main>
            <!-- <br v-for = 'i in 3' :key = i /> -->
            
            <v-container class = 'align-content-center' min-height = 100vh>
                <v-card class = 'glass text-center ma-2' title = 選擇你的配料>
                    <template v-for = 'i in N' :key = i>
                        <v-hover v-if = '!checked[i - 1]'>
                            <template #default = '{isHovering, props}'>
                                <v-chip :text = 'label[i - 1]' v-ripple class = 'ma-1 pa-3' v-bind = props :color = 'isHovering ? `amber` : undefined' @click = 'this.update_money(i - 1);'/>
                            </template>
                        </v-hover>
                    </template>
                </v-card>

                <v-card class = 'glass text-center ma-2' title = 已經選好的配料 :subtitle = '`累計金額 ${this.money} USD`'>
                    <template v-for = 'i in N' :key = i>
                        <v-hover v-if = 'checked[i - 1]'>
                            <template #default = '{isHovering, props}'>
                                <v-chip :text = 'label[i - 1]' v-ripple class = 'ma-1 pa-3' v-bind = props :color = 'isHovering ? `amber` : undefined' @click = 'this.update_money(i - 1);'/>
                            </template>
                        </v-hover>
                    </template>
                </v-card>

                <v-hover>
                    <template #default = '{isHovering, props}'>
                        <v-card v-bind = props class = 'glass text-center ma-2' title = '確定' prepend-icon = 'fa-solid fa-circle-check' @click = submit :color = 'isHovering ? `teal` : undefined' v-ripple />
                    </template>
                </v-hover>
            </v-container>

            <div class = 'screen text-center align-content-center' v-if = checkout>
                <v-row align = center justify = center>
                    <v-col cols = 12 md = 6 lg = 4>
                        <v-card title = 完成 prepend-icon = 'fa-solid fa-circle-check' :subtitle = '`總共是 ${money} USD`' variant = outlined v-ripple />
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
            checked: [],
            label: [
                "證券交易",
                "併購",
                "保險業務",
                "稅務",
                "關稅貿易",
                "公平交易",
                "反壟斷",
                "消費者保護",
                "職業安全",
                "資遣",
                "不動產",
                "建築",
                "都市計畫",
                "公共工程",
                "政府採購",
                "消防",
                "災害防救",
                "環境保護",
                "廢棄物處理",
                "氣候變遷",
                "能源法",
                "電力法規",
                "礦業",
                "交通運輸",
                "道路交通",
                "航運海事",
                "物流",
                "生醫",
                "藥事",
                "醫療器材",
                "公共衛生",
                "傳染病防治",
                "食品安全",
                "化粧品管理",
                "校園安全",
                "兒童及少年保護",
                "婚姻",
                "繼承",
                "性別平權",
                "隱私權",
                "資安",
                "電子商務",
                "數位平台",
                "人工智慧",
                "資料治理",
                "智慧財產權",
                "著作權",
                "專利",
                "商標",
                "營業秘密",
                "廣告法規",
                "媒體與言論",
                "新聞法規",
                "出版",
                "文化資產",
                "宗教法規",
                "選舉罷免",
                "政治獻金",
                "公職人員",
                "廉政反貪",
                "國家安全",
                "國防",
                "外交",
                "人權",
                "移民",
                "入出境",
                "外籍移工",
                "農業",
                "漁業",
                "動物保護",
                "野生動物",
                "寵物管理",
                "娛樂產業",
                "體育法規",
                "觀光旅遊",
                "旅宿管理",
                "餐飲管理"
            ],
            N: 0,
            money: 0,
            checkout: false
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
        this.N = this.label.length;
        this.checked = new Array(this.N);
    },
    methods: {
        submit() {
            this.update_money(-1);
            this.checkout = true;
        },
        update_money(x) {
            if(x != -1) this.checked[x] = !this.checked[x];
            this.money = 0;
            for(var i of this.checked) if(i) this.money += 20;
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
body {
    background: linear-gradient(45deg, pink 20%, cyan);
}
</style>
