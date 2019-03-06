<template>
  <Layout>
    <div class="container mx-auto px-2 p-5 md:p-10 flex justify-center">
      <div class="max-w-lg">

        <h1 class="py-1 text-center">About</h1>
        <p class="text-grey-darken text-center text-xs">本サイトについて</p>
        <p class="mt-4">
          Gridsome入門として構築したデモサイトです。mdファイルを利用したブログ投稿やTailwind CSSを利用したUI構築を行なっています。<br>
          Gridsomeを利用してWebサイトやブログを構築したい初学者をターゲットにしています。
        </p>

      </div>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About'
  }
}
</script>
