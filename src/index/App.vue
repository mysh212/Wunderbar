<template>
    <v-app>
        <page_loader :loading = 'loading' />
        <title_nav />
        
        <v-main>
            <!-- <br v-for = 'i in 3' :key = i /> -->
            
            <v-img class = ai src = '/img/brand.png' />
            <v-container class = 'align-content-center' min-height = 100vh>
                <v-row align = center justify = center>
                    <!-- <v-col cols = 12>
                        <v-img src = 'img/DeltaLogic.png' max-height = 200px style = 'border-radius: 500%;' />
                    </v-col> -->
                    <v-col cols = 12 md = 6 lg = 4>
                        <v-hover>
                            <template #default = '{isHovering, props}'>
                                <a href = '/frontend.html'> <v-card class = text-center prepend-icon = 'fa-solid fa-users' v-bind = props :color = 'isHovering ? `orange` : undefined' title = 'Testers 介面' v-ripple /> </a>
                            </template>
                        </v-hover>
                    </v-col>
                    <v-col cols = 12 md = 6 lg = 4>
                        <v-hover>
                            <template #default = '{isHovering, props}'>
                                <a href = '/backend.html'> <v-card class = text-center prepend-icon = 'fa-solid fa-bag-shopping' v-bind = props :color = 'isHovering ? `teal` : undefined' title = '購買介面' v-ripple /> </a>
                            </template>
                        </v-hover>
                    </v-col>
                    <v-col cols = 12 md = 6 lg = 4>
                        <v-hover>
                            <template #default = '{isHovering, props}'>
                                <a href = '/hydrant.html'> <v-card class = text-center prepend-icon = 'fa-solid fa-fire' v-bind = props :color = 'isHovering ? `pink` : undefined' title = '消防設施填報介面' v-ripple /> </a>
                            </template>
                        </v-hover>
                    </v-col>
                </v-row>
                
                <div class = 'slogan text-center'> No more legal tragic, just Lawgic magic. </div>
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
            loading: true
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
    }
}
</script>

<style>
/* * {
  transition: 1s all;
} */

.slogan {
    font-size: 25px;
    font-family: 'Eras Bold ITC';
    color:rgb(218, 218, 215);
    
}

.ai {
    width: 6vw;
    height: 6vw;
    position:fixed;
    /* left:10vw;
    top:40vh; */
    left: calc(100vw - 120px); 
    top: calc(100vh - 8vw);
    z-index:1000;
    border-radius: 10px;
}

.ai:hover {
    width: 12vw;
    height: 12vw;
    left: 88vw; 
    top: calc(100vh - 12vw);
}

</style>
