<template>
  <Layout>
        <div class="container mx-auto px-2 p-5">
            <div class="text-center">
                <h1 class="py-1 text-center">Blog</h1>
                <p class="text-grey-darken text-center text-xs">ブログ投稿</p>
                <p class="mt-4">
                    Gridsomeによるブログ投稿の一覧を表示します。
                </p>
            </div>

            <div class="flex flex-wrap justify-center">

                <div
                class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
                v-for="{ node } in $page.allBlogPost.edges"
                :key="node._id"
                >

                    <article class="overflow-hidden rounded-lg shadow-lg">

                        <g-link
                        :to="node.path"
                        >
                            <g-image class="block h-auto w-full" :src="node.image" :alt="node.title" />
                        </g-link>
                        <div class="p-2 md:px-4">
                            <p class="my-1 text-sm text-grey-darker">
                                <span class="text-grey-darker text-sm">
                                    {{ node.createdAt }}
                                    <svg class="h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" fill="currentColor"><path d="M1639 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z"></path></svg>
                                    {{ node.updatedAt }}
                                </span>
                            </p>

                            <h3 class="my-3 text-lg">
                                <g-link
                                :to="node.path"
                                class="no-underline text-black font-bold text-xl py-1"
                                >
                                {{ node.title }}
                                </g-link>
                            </h3>
                            <p class="text-grey-darker text-sm mb-4"
                                v-html="node.description"
                            />
                            <div class="my-1">
                                <span
                                    class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"
                                    v-for="tag in node.tags.split(' ')"
                                    :key="tag"
                                    v-text="`#${tag}`"
                                />
                            </div>
                        </div>

                    </article>

                </div>
            </div>
            <div class="flex justify-center my-5">
                <div class="inline-flex">
                    <g-link
                        class="no-underline bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded-l"
                        :class="{ 'cursor-not-allowed pointer-events-none opacity-50': prev < 1 }"
                        :to="prevPage"
                    >
                        前のページ
                    </g-link>
                    <g-link
                        class="no-underline bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded-r"
                        :class="{ 'cursor-not-allowed pointer-events-none opacity-50': $page.allBlogPost.pageInfo.totalPages < next }"
                        :to="nextPage"
                    >
                        次のページ
                    </g-link>
                </div>
            </div>
        </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Blog'
  },
  computed: {
    prev () {
        return this.$page.allBlogPost.pageInfo.currentPage - 1
    },
    next () {
        return this.$page.allBlogPost.pageInfo.currentPage + 1
    },
    prevPage() {
        const prev = this.$page.allBlogPost.pageInfo.currentPage - 1
        if (prev <= 1) {
            return '/blog'
        }

        return `/blog/${prev}`
    },
    nextPage() {
        const next = this.$page.allBlogPost.pageInfo.currentPage + 1
        if (next > this.$page.allBlogPost.pageInfo.totalPages) {
            return `/blog/${this.$page.allBlogPost.pageInfo.totalPages - 1}`
        }

        return `/blog/${next}`
    }
  },
}
</script>

<page-query>
query Blog ($page: Int) {
  allBlogPost (perPage: 3, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        _id
        title
        image
        createdAt (format: "YYYY.MM.D")
        updatedAt (format: "YYYY.MM.D")
        description
        path
        tags
      }
    }
  }
}
</page-query>
