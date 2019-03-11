<template>
  <div class="min-h-screen flex flex-col">

    <header class="bg-white py-6 lg:px-6 border-b border-grey-lighter">
      <div class="w-full max-w-screen-xl relative mx-auto px-6">
        <div class="flex items-center justify-between flex-wrap">
          <div class="flex items-center flex-no-shrink text-blue mr-6">
              <g-link to="/" class="logo text-grey-darkest text-xl lg:text-2xl">{{ $static.metaData.siteName }}</g-link>
          </div>
          <div class="w-full hidden lg:block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
              <g-link class="header-menu-link" to="/">Home</g-link>
              <g-link class="header-menu-link" to="/blog">Blog</g-link>
              <g-link class="header-menu-link" to="/about">About</g-link>
              <g-link class="header-menu-link" to="/term">Term</g-link>
            </div>
          </div>
          <div class="flex justify-start items-center">
            <a
              href="https://github.com/nakanakamu0828/gridsome-starter-site"
              target="_blank"
              rel="noopener"
              class="text-grey hover:text-grey-darker mr-6"
              aria-label="github"
            >
              <svg class="fill-current w-5 h-5" viewBox="0 0 438.549 438.549"><path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 0 1-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path></svg>
            </a>
            <a
              href="https://twitter.com/nakanakamu0828"
              target="_blank"
              rel="noopener"
              class="text-grey hover:text-grey-darker mr-6"
              aria-label="twitter"
            >
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Twitter</title><path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </header>

    <div class="flex-grow">
      <slot/>
    </div>

    <footer>    
      <section class="bg-grey-darkest py-8 w-full">
        <div class="container mx-auto px-8">
          <div class="flex flex-col lg:flex-row">
            <div class="lg:w-2/3 py-4 lg:p-4 text-white">
              <h2 class="py-2">
                <g-link
                  to="/"
                  class="logo text-white no-underline"
                >
                  {{ $static.metaData.siteName }}
                </g-link>
              </h2>
              <p class="mt-2 text-sm max-w-md">
                Gridsome入門として構築したデモサイトです。mdファイルを利用したブログ投稿やTailwind CSSを利用したUI構築を行なっています。
              </p>
            </div>
            <div class="lg:w-1/3 py-4 lg:p-4">
              <div class="">
                <p class="text-white text-md mb-6">
                  Site Links
                </p>
                <ul class="list-reset text-sm mb-6">
                  <li class="mr-3 inline-block">
                    <g-link class="text-white hover:text-grey-light no-underline" to="/">Home</g-link>
                  </li>
                  <li class="mr-3 inline-block">
                    <g-link class="text-white hover:text-grey-light no-underline" to="/blog">Blog</g-link>
                  </li>
                  <li class="mr-3 inline-block">
                    <g-link class="text-white hover:text-grey-light no-underline" to="/about">About</g-link>
                  </li>
                  <li class="mr-3 inline-block">
                    <g-link class="text-white hover:text-grey-light no-underline" to="/term">Term</g-link>
                  </li>
                </ul>
              </div>
              <div class="flex">
                <a
                  class="sns-btn mr-2"
                  href="https://github.com/nakanakamu0828/gridsome-starter-site"
                  target="_blank"
                  rel="noopener"
                  aria-label="github"
                >
                  <svg class="w-4 h-4" viewBox="0 0 438.549 438.549"><path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 0 1-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path></svg>
                </a>
                <a
                  class="sns-btn"
                  href="https://twitter.com/nakanakamu0828"
                  target="_blank"
                  rel="noopener"
                  aria-label="twitter"
                >
                  <svg
                    class="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20">
                      <title>Twitter</title>
                      <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-white text-grey-darkest">
        <div class="p-6 container mx-auto px-4">
          <div class="w-full text-xs sm:text-sm text-center">
            Copyright © 2018 @nnn All Rights Reserved.
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style scoped>
.logo {
  font-family: 'Bree Serif', serif;
  @apply no-underline;
}
.logo:hover {
  @apply text-grey;
}

.header-menu-link {
  @apply inline-block mr-3 mt-1 no-underline text-grey-darkest relative;
}
.header-menu-link:after {
  content: '';
  width: 0;
  height: 3px;
  display: block;
  bottom: -12px;
  left: 0;
  right: 0;
  margin: auto;
  transition: 0.3s ease-in-out;
  border-radius: 1.5px;
  @apply absolute bg-teal-dark;
}
.header-menu-link:hover {
  @apply text-grey;
}
.header-menu-link.active--exact {
  @apply font-semibold;
}
.header-menu-link:hover:after, .header-menu-link.active--exact:after {
  width: 40px;
}

.sns-btn {
  @apply bg-white w-10 h-10 rounded-full font-semibold flex items-center justify-center font-hairline no-underline;
}
</style>
