<template>
  <div>
      <XHeader :title="title" @on-click-back="goBack()" />
      <div>
        <router-view :key="key"></router-view>
      </div>
  </div>
</template>

<script>
import {XHeader } from 'vux'
export default {
    components: {
        XHeader
    },
    computed: {
        key() {
            return this.$route.path
        },
        title() {
            return this.$route.meta.title
        }
    },
    data() {
        return {
        }
    },
    methods: {
        goBack () {
            this.$router.go(-1)
        }
    },
}
</script>

<style>

</style>