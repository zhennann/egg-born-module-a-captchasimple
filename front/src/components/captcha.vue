<template>
  <img :src="src" @click="onClick" class="captcha" crossorigin="use-credentials"></img>
</template>
<script>
export default {
  meta: {
    global: false,
  },
  props: {
    module: {
      type: String,
    },
    sceneName: {
      type: String,
    },
    context: {},
    providerInstance: {
      type: Object,
    },
  },
  data() {
    return {
      src: null,
    };
  },
  created() {
    this.changeSrc();
  },
  methods: {
    changeSrc() {
      this.src = this.$meta.util.combineFetchPath('a-captchasimple', `captcha/image?providerInstanceId=${this.providerInstance.providerInstanceId}&t=${Math.random()}`);
    },
    onClick() {
      this.changeSrc();
    },
  },
};

</script>
<style scoped>
.captcha {
  height: 48px;
  cursor: pointer;
}

</style>
