<template>
    <div
        class="min-h-screen bg-zinc-950 text-zinc-300 font-sans overflow-x-hidden relative p-4 sm:p-6 md:p-12 selection:bg-emerald-500 selection:text-white"
    >
        <!-- Глобальное свечение за курсором -->
        <div
            class="pointer-events-none fixed inset-0 z-30 transition-duration-300 hidden md:block mix-blend-screen"
            :style="{
                background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.05), transparent 80%)`,
            }"
        />

        <div class="max-w-7xl mx-auto relative z-40">
            <!-- Шапка -->
            <header class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-8 md:mb-12">
                <div class="flex items-center gap-2 text-xs sm:text-sm bg-zinc-900/60 border border-zinc-800/80 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-md w-full sm:w-auto justify-center sm:justify-start">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                    <span class="text-center sm:text-left text-zinc-200">Свободен для новых задач</span>
                </div>
                <div class="text-xs text-zinc-500 self-end sm:self-auto px-1 tracking-wider uppercase font-medium">
                    2026 / Портфолио
                </div>
            </header>

            <!-- Главный Bento Grid -->
            <main class="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto md:auto-rows-auto mb-8 md:mb-12">
                <!-- Главная карточка -->
                <div class="md:col-span-2 md:row-span-2 bg-zinc-900/40 border border-white/5 p-6 sm:p-10 rounded-[2rem] flex flex-col justify-between backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/20 transition-colors duration-500">
                    <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    <div>
                        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                            Делаю быстрые сайты и <br class="hidden sm:block"/>
                            <span class="text-emerald-500">автоматизацию</span><br class="hidden sm:block"/>
                            для вашего бизнеса.
                        </h1>
                        <p class="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl">
                            Привет! Меня зовут Денис. Я помогаю сфере услуг расти за счет современных IT-решений. Создаю инструменты, которые привлекают клиентов, избавляют от рутины в мессенджерах и увеличивают повторные продажи.
                        </p>
                    </div>
                    <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-8 w-full relative z-10">
                        <a href="#projects" class="w-full sm:w-auto text-center bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold px-6 py-3.5 rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] text-sm">
                            Смотреть решения
                        </a>
                        <a href="https://t.me/klirov" target="_blank" class="w-full sm:w-auto text-center bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-6 py-3.5 rounded-xl transition-all text-sm border border-zinc-700/50">
                            Написать в Telegram
                        </a>
                    </div>
                </div>

                <!-- Стек технологий -->
                <div class="bg-zinc-900/40 border border-white/5 p-6 rounded-[2rem] md:row-span-2 flex flex-col justify-between backdrop-blur-xl hover:border-zinc-700/50 transition-colors duration-500">
                    <div>
                        <h3 class="text-base sm:text-lg font-semibold text-white mb-5 flex items-center gap-2">
                            <span class="i-ph-cpu-duotone text-emerald-500 text-xl"></span>
                            Мой Стек
                        </h3>
                        <div class="flex flex-wrap gap-2">
                            <span class="text-[11px] sm:text-xs bg-zinc-800/80 px-3 py-1.5 rounded-lg border border-zinc-700/50 text-zinc-300">Клиентская часть (Frontend)</span>
                            <span class="text-[11px] sm:text-xs bg-zinc-800/80 px-3 py-1.5 rounded-lg border border-zinc-700/50 text-zinc-300">Серверная часть (Backend)</span>
                            <span class="text-[11px] sm:text-xs bg-zinc-800/80 px-3 py-1.5 rounded-lg border border-zinc-700/50 text-zinc-300">Базы данных (SQL/NoSQL)</span>
                            <span class="text-[11px] sm:text-xs bg-zinc-800/80 px-3 py-1.5 rounded-lg border border-zinc-700/50 text-zinc-300">Запуск и поддержка продуктов (DevOps)</span>
                            <span class="text-[11px] sm:text-xs bg-zinc-800/80 px-3 py-1.5 rounded-lg border border-zinc-700/50 text-zinc-300">Лендинги</span>
                            <span class="text-[11px] sm:text-xs bg-zinc-800/80 px-3 py-1.5 rounded-lg border border-zinc-700/50 text-zinc-300">Боты (Telegram, Whatsapp и т.д.)</span>
                            <span class="text-[11px] sm:text-xs bg-zinc-800/80 px-3 py-1.5 rounded-lg border border-zinc-700/50 text-zinc-300">Деплой проектов (Хостинг, Домен, SSL, TLS)</span>
                        </div>
                    </div>
                    <div class="text-[11px] sm:text-xs text-zinc-500 pt-6 border-t border-zinc-800/50 mt-4">
                        Использую ИИ-инструменты для кратного ускорения разработки без потери качества кода.
                    </div>
                </div>

                <!-- Локация -->
                <div class="bg-zinc-900/40 border border-white/5 p-6 rounded-[2rem] flex items-start gap-4 backdrop-blur-xl hover:border-emerald-500/30 transition-all duration-500 group">
                    <div class="p-3.5 bg-zinc-800 border border-zinc-700 text-emerald-500 rounded-2xl text-xl flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-colors duration-300">
                        <span class="i-ph-map-pin-line-duotone"></span>
                    </div>
                    <div>
                        <h4 class="font-semibold text-white text-base">
                            Где я нахожусь
                        </h4>
                        <p class="text-sm text-zinc-400 mt-1.5 leading-relaxed">
                            Новосибирск (UTC+7). Работаю удаленно, всегда на связи в мессенджерах.
                        </p>
                    </div>
                </div>

                <!-- Блок демо-бота -->
                <div class="md:col-span-2 bg-gradient-to-br from-emerald-950/20 to-zinc-900/40 border border-emerald-500/20 p-6 rounded-[2rem] flex flex-col lg:flex-row justify-between items-start gap-6 backdrop-blur-xl relative overflow-hidden">
                    <div class="flex gap-4 items-start max-w-lg relative z-10">
                        <div class="p-3.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl text-xl flex-shrink-0">
                            <span class="i-ph-telegram-logo-duotone"></span>
                        </div>
                        <div>
                            <h4 class="font-semibold text-white text-base">
                                Готовые Telegram-боты для бизнеса
                            </h4>
                            <p class="text-sm text-zinc-400 mt-1.5 leading-relaxed">
                                Автоматизирую прием заказов, бронирование столов или запись на услуги. Ваши клиенты смогут выбирать время и оформлять покупки в мессенджере за пару кликов.
                            </p>
                        </div>
                    </div>

                    <!-- Кнопка и статус -->
                    <div class="w-full lg:w-auto flex-shrink-0 bg-zinc-950/50 border border-emerald-500/30 p-4 rounded-2xl flex flex-col items-center gap-2 backdrop-blur-md relative z-10">
                        <span class="text-[10px] font-bold tracking-wider uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">Демо-версия</span>
                        <a href="https://t.me/koltsovo_dev_bot" target="_blank" class="w-full text-center bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold px-5 py-2.5 rounded-xl transition-all shadow-[0_0_15px_-3px_rgba(16,185,129,0.4)] text-xs flex items-center justify-center gap-1.5">
                            Открыть бота
                            <span class="i-ph-arrow-right-bold text-sm"></span>
                        </a>
                    </div>
                </div>
            </main>

            <!-- Услуги -->
            <ServicesSection class="mb-16 md:mb-24" />

            <!-- Проекты -->
            <section id="projects" class="mb-20 scroll-mt-24">
                <div class="mb-10 px-2 flex flex-col items-center text-center max-w-2xl mx-auto">
                    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-4">
                        <span class="i-ph-folder-open-duotone text-lg"></span>
                        <span>Кейсы</span>
                    </div>
                    <h2 class="text-2xl sm:text-3xl font-bold text-white mb-3">
                        Реализованные проекты
                    </h2>
                    <p class="text-zinc-400 text-sm">
                        Примеры веб-сервисов и систем автоматизации, разработанные для решения конкретных задач предпринимателей.
                    </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <ProjectCard
                        v-for="project in projects"
                        :key="project.title"
                        v-bind="project"
                    />
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ProjectCard from "./components/ProjectCard.vue";
import ServicesSection from "./components/ServicesSection.vue";
import { useMouse } from "./composables/useMouse.ts";

const { mouseY, mouseX } = useMouse();

const projects = ref([
    {
        title: "Модернизация магазина упаковочных материалов",
        description:
            "Обновление технической базы сайта, ускорение загрузки для мобильного интернета. Настроена стабильная работа каталога при массовых наплывах покупателей, внедрена система определения языка.",
        tags: ["Ускорение сайта", "Highload", "Оптимизация"],
        icon: "i-ph-buildings-duotone",
        link: "https://www.komupak.ru/",
    },
    {
        title: "Оптимизация ювелирного интернет-магазина",
        description:
            "Исправление багов в корзине крупной федеральной сети. Оптимизация внутреннего обмена данными, что помогло значительно снизить процент «брошенных корзин» и повысить общую конверсию.",
        tags: ["E-commerce", "Конверсия", "Bugfix"],
        icon: "i-ph-shopping-cart-duotone",
        link: "https://ourgold.ru/",
    },
    {
        title: "Интернет-магазин «Flowerhome» под ключ",
        description:
            "Полноценный онлайн-магазин цветов с удобным каталогом. Сайт полностью адаптирован для смартфонов и оптимизирован под SEO для привлечения органического трафика из Яндекса и Google.",
        tags: ["Разработка под ключ", "SEO", "Адаптив"],
        icon: "i-ph-storefront-duotone",
        link: "https://flowerhome.ru/",
    },
    {
        title: "CRM-система управления процессами",
        description:
            "Внутренний сервис для команды. Берет на себя учет текущих заказов, ведение клиентской базы, хранение документов и контроль дедлайнов сотрудников, избавляя от хаоса в рабочих чатах.",
        tags: ["Управление", "CRM", "Учет заказов"],
        icon: "i-ph-kanban-duotone",
    },
    {
        title: "Сверхбыстрые каталоги товаров",
        description:
            "Веб-решение с умной системой моментальной фильтрации на основе сложных запросов. Идеально для бизнесов с широким ассортиментом, где клиенту критически важно найти товар за секунды.",
        tags: ["Умный поиск", "UX", "Скорость"],
        icon: "i-ph-film-strip-duotone",
    },
    {
        title: "Автономные мини-виджеты для метрик",
        description:
            "Компактное desktop-приложение, которое в реальном времени собирает и выводит ключевые метрики компании (выручка, заявки). Избавляет от необходимости постоянно проверять админки.",
        tags: ["Утилита для ПК", "Дашборд", "Мониторинг"],
        icon: "i-ph-desktop-duotone",
    },
]);
</script>

<style>
* {
    scroll-behavior: smooth;
}
</style>
