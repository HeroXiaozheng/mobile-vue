<template>
    <div class="downlaod_wrapper">
        <div class="download_header">
            <div class="download_header__logo"></div>
            <div class="download_header__name"></div>
            <div class="download_header__slogan"></div>
        </div>
        <div class="download_foot">
            <div class="download_foot__install_btn">
                <cube-button @click="handleInstall">{{ $t('install') }}</cube-button>
            </div>
        </div>
    </div>
</template>
<script>
import { Locale } from 'cube-ui'
export default {
    data() {
        return {}
    },

    //导入英文语言包
    mixins: [Locale.localeMixin],
    methods: {
        handleInstall () {
            
        },
    }
}
</script>

<style lang="postcss">

</style>