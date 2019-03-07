<template>
  <Layout>
    <div class="container mx-auto sm:py-10 flex justify-center">
        <div class="max-w-lg rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4 border-b mb-2">
                <p class="my-1 text-sm text-grey-darker">
                    <span class="text-grey-darker text-sm">
                        {{ $page.blogPost.createdAt }}
                        <svg class="h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" fill="currentColor"><path d="M1639 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z"></path></svg>
                        {{ $page.blogPost.updatedAt }}
                    </span>
                </p>
                <h1 class="my-2">{{ $page.blogPost.title }}</h1>
                <p class="my-2 text-sm text-grey-darker">{{ $page.blogPost.description }}</p>
                <div class="my-1">
                    <span
                        class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"
                        v-for="tag in tags"
                        :key="tag"
                        v-text="`#${tag}`"
                    />
                </div>
                <g-image class="mt-5" :src="$page.blogPost.image" :alt="$page.blogPost.title" />
            </div>
            <div class="px-6 py-4 content" v-html="$page.blogPost.content" />
        </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.blogPost.title
    }
  },
  computed: {
    tags () {
      return this.$page.blogPost.tags.split(' ');
    },
    totalCount () {
      return this.$page.allPost.totalCount
    }
  },
}
</script>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      description
      createdAt (format: "YYYY.MM.D")
      updatedAt (format: "YYYY.MM.D")
      content
      image
      tags
    }
  }
</page-query>

<style>
.content {
    @apply text-base;
}
.content > h1 {
    font-size: 1.5rem;
    @apply py-2;
}
.content > p {
    @apply text-grey-darker mb-2;
}
</style>