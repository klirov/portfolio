<template>
    <div
        class="min-h-screen bg-brandDark text-slate-200 font-sans overflow-x-hidden relative p-6 md:p-12 selection:bg-brandAccent selection:text-white"
    >
        <div
            class="pointer-events-none fixed inset-0 z-30 transition-duration-300 hidden md:block"
            :style="{
                background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.12), transparent 80%)`,
            }"
        />

        <div class="max-w-7xl mx-auto relative z-40">
            <header class="flex justify-between items-center mb-12">
                <div
                    class="flex items-center gap-2 text-sm bg-slate-800/40 border border-slate-700/50 px-4 py-2 rounded-full backdrop-blur-md"
                >
                    <span
                        class="w-2 h-2 rounded-full bg-brandGreen animate-pulse"
                    ></span>
                    <span>Доступен для заказов в Кольцово / Удаленно</span>
                </div>
                <div class="text-xs text-slate-500">2026 / Portfolio</div>
            </header>

            <main
                class="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px] mb-20"
            >
                <div
                    class="md:col-span-2 md:row-span-2 bg-gradient-to-br from-slate-900 to-slate-900/60 p-8 rounded-3xl flex flex-col justify-between backdrop-blur-sm relative overflow-hidden group"
                >
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-brandAccent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    ></div>
                    <div>
                        <h1
                            class="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight"
                        >
                            Делаю быстрые сайты и
                            <span class="text-brandAccent">автоматизацию</span>
                            для вашего бизнеса.
                        </h1>
                        <p class="text-slate-400 text-sm md:text-base">
                            Привет! Меня зовут Денис. Я имею опыт в
                            IT-разработке более 4-х лет.
                            <br />
                            Работал как в командном бигтехе, так и над
                            самостоятельными проектами.
                            <br />
                            Помогаю компаниям запускать современные лендинги,
                            ботов и настраивать софт под ключ.
                        </p>
                    </div>
                    <div class="flex gap-4 mt-6">
                        <a
                            href="#projects"
                            class="bg-brandAccent hover:bg-indigo-600 text-white font-medium px-6 py-3 rounded-xl transition-all shadow-lg shadow-brandAccent/20 text-sm"
                        >
                            Посмотреть работы
                        </a>
                        <a
                            href="https://t.me/klirov"
                            target="_blank"
                            class="bg-slate-800 hover:bg-slate-700 text-slate-300 px-6 py-3 rounded-xl transition-all text-sm"
                        >
                            Связаться в Telegram </a
                        ><a
                            href="mailto:clearpiece86@gmail.com"
                            target="_blank"
                            class="bg-slate-800 hover:bg-slate-700 text-slate-300 px-6 py-3 rounded-xl transition-all text-sm"
                        >
                            Написать на почту
                        </a>
                    </div>
                </div>

                <div
                    class="bg-slate-900/40 p-6 rounded-3xl md:row-span-2 flex flex-col justify-between backdrop-blur-sm"
                >
                    <div>
                        <h3
                            class="text-lg font-semibold text-white mb-4 flex items-center gap-2"
                        >
                            <span
                                class="i-ph-cpu-duotone text-brandAccent"
                            ></span>
                            Мой Стек
                        </h3>
                        <div class="flex flex-wrap gap-2">
                            <span
                                class="text-xs bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700/60 text-slate-300"
                                >Клиентская часть (Frontend)</span
                            >
                            <span
                                class="text-xs bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700/60 text-slate-300"
                                >Серверная часть (Backend)</span
                            >
                            <span
                                class="text-xs bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700/60 text-slate-300"
                                >Базы данных (SQL/NoSQL)</span
                            >
                            <span
                                class="text-xs bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700/60 text-slate-300"
                                >Запуск и поддержка продуктов (DevOps)</span
                            >
                            <span
                                class="text-xs bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700/60 text-slate-300"
                                >Лендинги</span
                            >
                            <span
                                class="text-xs bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700/60 text-slate-300"
                                >Боты (Telegram, Whatsapp и т.д.)</span
                            >
                            <span
                                class="text-xs bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700/60 text-slate-300"
                                >Деплой проектов (Хостинг, Домен, SSL,
                                TLS)</span
                            >
                        </div>
                    </div>
                    <div class="text-xs text-slate-500 pt-4">
                        Использую ИИ инструменты для кратного ускорения
                        разработки без потери качества.
                    </div>
                </div>

                <div
                    class="bg-slate-900/40 p-6 rounded-3xl flex items-center gap-4 backdrop-blur-sm"
                >
                    <div
                        class="p-3 bg-brandAccent/10 text-brandAccent rounded-2xl text-2xl"
                    >
                        <span class="i-ph-map-pin-line-duotone"></span>
                    </div>
                    <div>
                        <h4 class="font-medium text-white text-sm">
                            Рядом с вами
                        </h4>
                        <p class="text-xs text-slate-400 mt-1">
                            Нахожусь в Кольцово, Новосибирская область. Есть
                            возможность обсудить детали лично.
                        </p>
                    </div>
                </div>

                <div
                    class="md:col-span-2 bg-slate-900/40 p-6 rounded-3xl grid grid-cols-1 sm:grid-cols-2 gap-6 backdrop-blur-sm"
                >
                    <div class="flex gap-4 items-center">
                        <div
                            class="p-3 bg-brandAccent/10 text-brandAccent rounded-2xl text-2xl flex-shrink-0"
                        >
                            <span class="i-ph-telegram-logo-duotone"></span>
                        </div>
                        <div>
                            <h4
                                class="font-medium text-white text-sm transition-colors duration-300 group-hover:text-brandAccent"
                            >
                                Разработка ботов
                            </h4>
                            <p class="text-xs text-slate-400 mt-1">
                                Создаю умных Telegram-ботов для автоматизации
                                продаж, воронки квалификации лидов и интеграции
                                с вашими CRM-системами.
                            </p>
                        </div>
                    </div>

                    <div class="flex flex-col items-center justify-center">
                        <div>
                            <h4 class="font-medium text-white text-sm">
                                Протестируйте решение
                            </h4>
                            <p class="text-xs text-slate-400 mt-1">
                                Пример интерактивного меню, сценариев сбора
                                заявок и мгновенных уведомлений в действии.
                            </p>
                        </div>
                        <a
                            href="https://t.me/koltsovo_dev_bot"
                            target="_blank"
                            class="mt-3 w-full sm:w-auto text-center bg-brandAccent hover:bg-indigo-600 text-white font-medium px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-brandAccent/10 hover:shadow-brandAccent/25 text-xs flex items-center justify-center gap-1.5"
                        >
                            Открыть демо бота
                            <span
                                class="i-ph-arrow-square-out-bold text-xs"
                            ></span>
                        </a>
                    </div>
                </div>
            </main>

            <section id="projects" class="mb-20">
                <h2
                    class="text-2xl font-bold text-white mb-2 flex items-center gap-2"
                >
                    <span
                        class="i-ph-folder-open-duotone text-brandAccent"
                    ></span>
                    Реализованные кейсы
                </h2>
                <p class="text-slate-400 text-sm mb-8 max-w-md">
                    Примеры систем и решений, которые я могу адаптировать и
                    внедрить под задачи вашего бизнеса.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        title: "CRM-система управления процессами",
        description:
            "Внутренний сервис для контроля задач, управления досками и автоматизации работы команды. Помогает бизнесу избавиться от хаоса в мессенджерах и контролировать дедлайны сотрудников.",
        tags: ["Vue 3", "Hono.js", "MySQL", "Оптимизация процессов"],
        icon: "i-ph-kanban-duotone",
    },
    {
        title: "Интеграция умных каталогов и баз данных",
        description:
            "Высокоскоростной веб-сервис с умной системой фильтрации и рекомендаций на основе API. Отлично адаптирован под мобильные устройства, обеспечивая мгновенную загрузку страниц.",
        tags: ["Astro", "API Integration", "UX/UI Optimization"],
        icon: "i-ph-film-strip-duotone",
    },
    {
        title: "Кастомные десктоп-виджеты для Windows",
        description:
            "Легкое автономное приложение для рабочего стола, интегрированное с внешними погодными провайдерами. Пример создания утилит для мониторинга внутренних данных компании без открытия браузера.",
        tags: ["Wails (Go)", "Vue 3", "Desktop App"],
        icon: "i-ph-desktop-duotone",
    },
]);
</script>

<style>
* {
    scroll-behavior: smooth;
}
</style>
