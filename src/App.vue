<template>
    <div
        class="min-h-screen bg-brandDark text-slate-200 font-sans overflow-x-hidden relative p-4 sm:p-6 md:p-12 selection:bg-brandAccent selection:text-white"
    >
        <div
            class="pointer-events-none fixed inset-0 z-30 transition-duration-300 hidden md:block"
            :style="{
                background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.12), transparent 80%)`,
            }"
        />

        <div class="max-w-7xl mx-auto relative z-40">
            <header
                class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-8 md:mb-12"
            >
                <div
                    class="flex items-center gap-2 text-xs sm:text-sm bg-slate-800/40 border border-slate-700/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-md w-full sm:w-auto justify-center sm:justify-start"
                >
                    <span
                        class="w-2 h-2 rounded-full bg-brandGreen animate-pulse flex-shrink-0"
                    ></span>
                    <span class="text-center sm:text-left"
                        >Свободен для новых задач</span
                    >
                </div>
                <div class="text-xs text-slate-500 self-end sm:self-auto px-1">
                    2026 / Портфолио
                </div>
            </header>

            <main
                class="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto md:auto-rows-[200px] mb-12 md:mb-20"
            >
                <div
                    class="md:col-span-2 md:row-span-2 bg-gradient-to-br from-slate-900 to-slate-900/60 p-5 sm:p-8 rounded-3xl flex flex-col justify-between backdrop-blur-sm relative overflow-hidden group"
                >
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-brandAccent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    ></div>
                    <div>
                        <h1
                            class="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight"
                        >
                            Делаю быстрые сайты и
                            <span class="text-brandAccent">автоматизацию</span>
                            для вашего бизнеса.
                        </h1>
                        <p
                            class="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed"
                        >
                            Привет! Меня зовут Денис. Я помогаю бизнесам и сфере
                            услуг расти за счет современных IT-решений. Создаю
                            инструменты, которые привлекают новых клиентов,
                            избавляют вас от рутины в мессенджерах и увеличивают
                            повторные продажи. Опыт работы в разработке — более
                            4 лет.
                        </p>
                    </div>
                    <div
                        class="flex flex-col sm:flex-row flex-wrap gap-3 mt-6 w-full"
                    >
                        <a
                            href="#projects"
                            class="w-full sm:w-auto text-center bg-brandAccent hover:bg-indigo-600 text-white font-medium px-5 py-3 rounded-xl transition-all shadow-lg shadow-brandAccent/20 text-sm"
                        >
                            Посмотреть готовые решения
                        </a>
                        <a
                            href="https://t.me/klirov"
                            target="_blank"
                            class="w-full sm:w-auto text-center bg-slate-800 hover:bg-slate-700 text-slate-300 px-5 py-3 rounded-xl transition-all text-sm"
                        >
                            Связаться в Telegram
                        </a>
                        <a
                            href="mailto:clearpiece86@gmail.com"
                            target="_blank"
                            class="w-full sm:w-auto text-center bg-slate-800 hover:bg-slate-700 text-slate-300 px-5 py-3 rounded-xl transition-all text-sm"
                        >
                            Написать на почту
                        </a>
                    </div>
                </div>

                <div
                    class="bg-slate-900/40 p-5 sm:p-6 rounded-3xl md:row-span-2 flex flex-col justify-between backdrop-blur-sm"
                >
                    <div>
                        <h3
                            class="text-base sm:text-lg font-semibold text-white mb-4 flex items-center gap-2"
                        >
                            <span
                                class="i-ph-cpu-duotone text-brandAccent"
                            ></span>
                            Мой Стек
                        </h3>
                        <div class="flex flex-wrap gap-1.5">
                            <span
                                class="text-[11px] sm:text-xs bg-slate-800 px-2.5 py-1.5 rounded-lg border border-slate-700/60 text-slate-300"
                                >Клиентская часть (Frontend)</span
                            >
                            <span
                                class="text-[11px] sm:text-xs bg-slate-800 px-2.5 py-1.5 rounded-lg border border-slate-700/60 text-slate-300"
                                >Серверная часть (Backend)</span
                            >
                            <span
                                class="text-[11px] sm:text-xs bg-slate-800 px-2.5 py-1.5 rounded-lg border border-slate-700/60 text-slate-300"
                                >Базы данных (SQL/NoSQL)</span
                            >
                            <span
                                class="text-[11px] sm:text-xs bg-slate-800 px-2.5 py-1.5 rounded-lg border border-slate-700/60 text-slate-300"
                                >Запуск и поддержка продуктов (DevOps)</span
                            >
                            <span
                                class="text-[11px] sm:text-xs bg-slate-800 px-2.5 py-1.5 rounded-lg border border-slate-700/60 text-slate-300"
                                >Лендинги</span
                            >
                            <span
                                class="text-[11px] sm:text-xs bg-slate-800 px-2.5 py-1.5 rounded-lg border border-slate-700/60 text-slate-300"
                                >Боты (Telegram, Whatsapp и т.д.)</span
                            >
                            <span
                                class="text-[11px] sm:text-xs bg-slate-800 px-2.5 py-1.5 rounded-lg border border-slate-700/60 text-slate-300"
                                >Деплой проектов (Хостинг, Домен, SSL,
                                TLS)</span
                            >
                        </div>
                    </div>
                    <div class="text-[11px] sm:text-xs text-slate-500 pt-4">
                        Использую ИИ инструменты для кратного ускорения
                        разработки без потери качества.
                    </div>
                </div>

                <div
                    class="bg-slate-900/40 p-5 sm:p-6 rounded-3xl flex items-center gap-4 backdrop-blur-sm border border-slate-800/30"
                >
                    <div
                        class="p-3 bg-brandAccent/10 text-brandAccent rounded-2xl text-xl sm:text-2xl flex-shrink-0"
                    >
                        <span class="i-ph-map-pin-line-duotone"></span>
                    </div>
                    <div>
                        <h4 class="font-medium text-white text-sm">
                            Где я нахожусь
                        </h4>
                        <p class="text-xs text-slate-400 mt-1 leading-normal">
                            Новосибирск (UTC+7). Работаю полностью в удаленном формате, всегда на связи в мессенджерах.
                        </p>
                    </div>
                </div>

                <div
                    class="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-900/40 p-5 sm:p-6 rounded-3xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 backdrop-blur-sm"
                >
                    <div class="flex gap-4 items-start max-w-xl">
                        <div
                            class="p-3 bg-brandAccent/10 text-brandAccent rounded-2xl text-xl sm:text-2xl flex-shrink-0 mt-0.5"
                        >
                            <span class="i-ph-telegram-logo-duotone"></span>
                        </div>
                        <div>
                            <h4
                                class="font-semibold text-white text-sm sm:text-base"
                            >
                                Telegram-боты и онлайн-запись клиентов
                            </h4>
                            <p
                                class="text-xs text-slate-400 mt-1.5 leading-relaxed"
                            >
                                Автоматизирую прием заказов, бронирование столов
                                или запись на услуги в салоны красоты. Ваши
                                клиенты смогут выбирать время и оформлять
                                покупки прямо внутри мессенджера за пару кликов,
                                а вы моментально получите готовые уведомления.
                            </p>
                        </div>
                    </div>

                    <div
                        class="w-full lg:w-auto flex-shrink-0 bg-slate-800/30 border border-slate-700/40 p-4 rounded-2xl flex flex-col items-center lg:items-start gap-1.5 backdrop-blur-md"
                    >
                        <span
                            class="text-[10px] font-bold tracking-wider uppercase text-brandAccent bg-brandAccent/10 px-2 py-0.5 rounded-md self-center lg:self-start"
                            >Демо-версия</span
                        >
                        <p
                            class="text-[11px] text-slate-400 text-center lg:text-left max-w-none lg:max-w-[190px]"
                        >
                            Пример бота автоматизации заказов для вашего бизнеса
                        </p>
                        <a
                            href="https://t.me/koltsovo_dev_bot"
                            target="_blank"
                            class="w-full text-center bg-brandAccent hover:bg-indigo-600 text-white font-medium px-4 py-2 rounded-xl transition-all shadow-lg shadow-brandAccent/10 text-xs flex items-center justify-center gap-1.5 mt-1"
                        >
                            Протестировать бота
                            <span
                                class="i-ph-arrow-square-out-bold text-xs"
                            ></span>
                        </a>
                    </div>
                </div>
            </main>

            <section id="projects" class="mb-20">
                <div class="mb-8 px-1">
                    <h2
                        class="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2"
                    >
                        <span
                            class="i-ph-folder-open-duotone text-brandAccent"
                        ></span>
                        Реализованные проекты
                    </h2>
                    <p class="text-slate-400 text-xs sm:text-sm max-w-md">
                        Реальные примеры сайтов и систем автоматизации,
                        разработанные для решения конкретных задач
                        предпринимателей.
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
import { useMouse } from "./composables/useMouse.ts";

const { mouseY, mouseX } = useMouse();

const projects = ref([
    {
        title: "Модернизация крупного магазина упаковочных материалов",
        description:
            "Провел масштабное обновление технической базы сайта, кардинально ускорив загрузку страниц для пользователей мобильного интернета. Настроил стабильную работу каталога при массовых наплывах покупателей, внедрил систему определения языка и поддержки клиентов на 21 языке.",
        tags: [
            "Ускорение сайта",
            "Обновление системы",
            "Стабильность под нагрузкой",
        ],
        icon: "i-ph-buildings-duotone",
        link: "https://www.komupak.ru/",
    },
    {
        title: "Оптимизация ювелирного интернет-магазина",
        description:
            "Исправил технические ошибки в корзине и на этапе оформления заказа крупной федеральной сети. Оптимизировал внутренние процессы обмена данными, что помогло значительно снизить процент «брошенных корзин» и повысить общую конверсию в успешную покупку.",
        tags: [
            "Оптимизация корзины",
            "Повышение конверсии",
            "Устранение сбоев",
        ],
        icon: "i-ph-shopping-cart-duotone",
        link: "https://ourgold.ru/",
    },
    {
        title: "Интернет-магазин «Flowerhome» под ключ",
        description:
            "Полноценный онлайн-магазин цветов с удобным каталогом, фильтрацией и обратной связью. Сайт полностью адаптирован для идеальной работы на смартфонах и оптимизирован под требования поисковиков (SEO), чтобы привлекать бесплатных клиентов из Яндекса и Google.",
        tags: [
            "Интернет-магазин",
            "Разработка под ключ",
            "Продажи онлайн",
            "Адаптация под телефоны",
        ],
        icon: "i-ph-storefront-duotone",
        link: "https://flowerhome.ru/",
    },
    {
        title: "CRM-система управления рабочими процессами",
        description:
            "Специальный внутренний сервис для наведения порядка в работе команды. Помогает бизнесу полностью избавиться от хаоса в рабочих чатах: берет на себя учет текущих заказов, ведение клиентской базы, хранение документов и контроль дедлайнов сотрудников.",
        tags: ["Управление командой", "Учет заказов", "Организация работы"],
        icon: "i-ph-kanban-duotone",
    },
    {
        title: "Сверхбыстрые каталоги товаров с мгновенным поиском",
        description:
            "Веб-решение с умной системой моментальной фильтрации и подбора позиций на основе сложных запросов. Идеально подходит для бизнесов с широким или динамичным ассортиментом, где клиенту критически важно найти товар за секунды без зависаний сайта.",
        tags: ["Умный поиск", "Быстрые фильтры", "Удобство для клиентов"],
        icon: "i-ph-film-strip-duotone",
    },
    {
        title: "Автономные мини-виджеты для мониторинга показателей",
        description:
            "Компактное приложение для рабочего стола компьютера, которое в реальном времени собирает и выводит ключевые метрики компании (выручку, новые заявки, складские остатки). Избавляет руководителя от рутинной необходимости постоянно заходить в разные админки.",
        tags: ["Контроль метрик", "Утилита для ПК", "Мониторинг бизнеса"],
        icon: "i-ph-desktop-duotone",
    },
]);
</script>

<style>
* {
    scroll-behavior: smooth;
}
</style>
