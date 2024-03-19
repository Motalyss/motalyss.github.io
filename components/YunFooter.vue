<script lang="ts" setup>
import { useScriptTag } from '@vueuse/core'
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'

useScriptTag('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')
</script>

<template>
  <YunFooter>
    <!-- 自定义页脚内容 -->
    <div>有<span id="busuanzi_value_site_uv" />个小可爱来看过我~ |ω·`)</div>
    <div>（ta们一共来了<span id="busuanzi_value_site_pv" />次~）</div>

    <VCLiveTime start-time="2024-03-17">
      <template #live-time-before>
        <span>已经存活</span>
      </template>
      <template #live-time-after>
        <span>啦！</span>
      </template>
    </VCLiveTime>

    <!--<div>现在看我表演喵！ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ</div>-->
  
   
  </YunFooter>
</template>