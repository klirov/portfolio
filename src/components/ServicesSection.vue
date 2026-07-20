<script setup lang="ts">
const services = [
  {
    title: 'Разработка сайтов',
    description: 'Быстрые, адаптивные и интерактивные сайты с высокой скоростью загрузки. Вёрстка, анимации и интеграция форм заявки.',
    icon: 'i-ph-layout-duotone'
  },
  {
    title: 'Telegram-боты',
    description: 'Боты для приёма заказов, записи клиентов, интеграции с CRM и автоматизации рутинных процессов бизнеса.',
    icon: 'i-ph-robot-duotone'
  },
  {
    title: 'Веб-приложения',
    description: 'Разработка сложных клиентских интерфейсов, личных кабинетов и интеграция с внешними API и базами данных.',
    icon: 'i-ph-code-block-duotone'
  },
  {
    title: 'Оптимизация',
    description: 'Исправление багов, рефакторинг кода, ускорение работы сайта и проведение SEO/технических доработок.',
    icon: 'i-ph-wrench-duotone'
  }
]
</script>

<template>
  <section class="py-12">
    <div class="mb-10 flex flex-col items-center text-center">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-4">
        <span class="i-ph-lightning-duotone text-lg"></span>
        <span>Экспертиза</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-bold mb-3 text-white">
        Чем могу <span class="text-emerald-500">помочь</span>
      </h2>
      <p class="text-zinc-400 text-sm max-w-xl mx-auto">
        Решаю задачи бизнеса с помощью современной веб-разработки и систем автоматизации, экономя ваше время и деньги.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
          v-for="service in services"
          :key="service.title"
          class="p-6 rounded-3xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-emerald-500/30 transition-all duration-300 group backdrop-blur-sm"
      >
        <div class="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 text-emerald-500 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
          <div :class="service.icon" />
        </div>
        <h3 class="text-lg font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors">
          {{ service.title }}
        </h3>
        <p class="text-zinc-400 leading-relaxed text-sm">
          {{ service.description }}
        </p>
      </div>
    </div>
  </section>
</template>
