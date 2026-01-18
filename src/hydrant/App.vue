<template>
    <v-app>
        <page_loader :loading = 'loading' />
        <title_nav />

        <v-main>
            <v-container class = 'align-content-center text-center' min-height = 100vh>
                <v-card title = 選擇場域種類 class = ma-3>
                    <v-row>
                        <v-col v-for = 'i, j in pre' :key = i cols = 12 md = 4>
                            <v-card :title = i[0] :color = 'selected == j ? i[1] : undefined' @click = 'select(j)'></v-card>
                        </v-col>
                    </v-row>
                </v-card>
                <v-row>
                    <v-col cols = 12 md = 6 lg = 4 v-for = 'i, j in f' :key = i>
                        <v-card :title = '`${j + 1} F`' class = 'ma-3'>
                            <v-text-field variant = outlined label = 面積 v-model = f[j] :rules = '[rules.number]' />
                        </v-card>
                    </v-col>
                    <v-col cols = 12 md = 6 lg = 4>
                        <v-card class = 'glass ma-3' prepend-icon = 'fa-solid fa-plus' title = 新增樓層 subtitle = 新的一層樓 @click = 'f.push(0)' v-ripple>
                            <v-input-field></v-input-field>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
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
            pre: [['甲(高風險、高密集度)', 'teal'], ['乙 (一般民生與公共場所)', 'cyan'], ['丙(工廠、工作場、屠宰場)', 'pink'], ['丁(倉庫、露天堆置場)', 'orange'], ['戊(停車場、飛機庫)', 'purple'], ['己(殯儀館、電信機器室、其他不具名場所)', 'brown']],
            selected: 0,
            f: [],
            rules: {
                number: /^\d+$/ || 'Invalid Area'
            }
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
    },
    methods: {
        select(x) {
            // M.toast({html: x, classes: 'amber rounded'});
            this.selected = x;
            $('body').css({
                'background-color': this.pre[x][1],
                // background: `linear-gradient(45deg, ${this.pre[(x + 1) % this.pre.length][1]}, ${this.pre[x][1]})`
            });
        }
    }
}
</script>

<style>
* {
  transition: 1s all;
}
</style>
