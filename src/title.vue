<template>
    <v-progress-linear
        v-model = scroll.progress
        style = 'position:fixed; z-index: 101;'
        color = '#004733'
        buffer-color = 'green lighten-2'
        height = 5
        :buffer-value = scroll.progress_bottom
        buffer-opacity = .3
     />
    
    <v-hover>
        <template #default = '{isHovering, props}'>
            <div class = 'navibar' :class = 'isHovering ? `elevation-3` : `elevation-1`' v-bind = props>
                <a href = '/'> <b class = navi-title> Wunderbar </b> </a>
            </div>
        </template>
    </v-hover>

</template>

<script>
// import $ from 'jquery'
import M from 'materialize-css'
import { useGoTo } from 'vuetify/lib/composables/goto';

// import { animate } from 'animejs';

export default {
    name: 'title_nav',
    data() {
        return {
            show_nav: false,
            scroll: {
                progress: 0,
                progress_bottom: 0,
                now: 0,
                length: 0,
                height: 0
            },
            hide: [],
            goto: useGoTo(),
            show_top: false
        }
    },
    mounted() {
        M.AutoInit();
        window.addEventListener('scroll', this.update_scroll);
    },
    methods: {
        update_scroll() {
            this.scroll.length = document.body.clientHeight;
            this.scroll.height = window.innerHeight;
            this.scroll.now = window.scrollY;
            this.scroll.progress = this.scroll.now / this.scroll.length * 100 + this.scroll.height * this.scroll.now / ((this.scroll.length - this.scroll.height) * this.scroll.length) * 100;
            // this.scroll.progress_bottom = (this.scroll.now + this.scroll.height) / this.scroll.length * 100;
        }
    }
}
</script>

<style scoped>
* {
    transition: all 0.3s;
}
.bold {
  font-weight: 700;
}
a.unfocused, a.unfocused:visited, a.unfocused:hover, a.unfocused:active {
    color: inherit;
}
.navi-title {
    color: transparent !important;
    background: linear-gradient(45deg, purple, blue);
    background-clip: text;
    padding: 10px 100px 10px 20px;
}
.navibar {
    width: calc(100vw - 20px);
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    background-color: rgba(255, 255, 255, .3);
    backdrop-filter: blur(30px);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 100000;
}
</style>