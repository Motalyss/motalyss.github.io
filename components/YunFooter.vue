<script lang="ts" setup>
import { useScriptTag } from '@vueuse/core'
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'

useScriptTag('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')
</script>

<template>
  <YunFooter>
    <!-- 自定义页脚内容 -->
    <div>有<span id="busuanzi_value_site_pv" />个小可爱来看过我~ |ω·`)</div>
    <!-- <div>有<span id="busuanzi_value_site_uv" />人来看过我哦！</div> -->

    <VCLiveTime mt="2" start-time="2024-03-17">
      <template #live-time-before>
        <div>
            <div><span>已经存活</span></div>
        </div>
      </template>
      <template #live-time-after>
        <div>
            <div><span>啦！</span></div>
        </div>
      </template>
    </VCLiveTime>

    <!--<div>现在看我表演喵！ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ</div>-->
  
   
  </YunFooter>
</template>