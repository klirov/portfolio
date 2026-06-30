<template>
    <div
        ref="cardRef"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
        class="bg-slate-900/50 p-6 rounded-3xl backdrop-blur-sm transition-all duration-150 ease-out will-change-transform group relative overflow-hidden flex flex-col justify-between"
        :style="{ transform: transformStyle }"
    >
        <div
            class="absolute inset-0 bg-gradient-to-br from-brandAccent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />

        <div class="flex flex-col h-full justify-between relative z-10">
            <div>
                <div
                    class="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-2xl text-brandAccent mb-4 group-hover:text-white group-hover:bg-brandAccent transition-all duration-300"
                >
                    <span :class="icon" />
                </div>

                <h3
                    class="text-xl font-bold text-white mb-2 group-hover:text-brandAccent transition-colors duration-300"
                >
                    {{ title }}
                </h3>

                <p class="text-slate-400 text-sm leading-relaxed mb-4">
                    {{ description }}
                </p>
            </div>

            <div>
                <!-- Теги -->
                <div class="flex flex-wrap gap-1.5 mb-6">
                    <span
                        v-for="tag in tags"
                        :key="tag"
                        class="text-[11px] bg-slate-800/60 px-2 py-1 rounded-md border border-slate-700/40 text-slate-400"
                    >
                        {{ tag }}
                    </span>
                </div>

                <!-- Экшен: Ссылка или Статус -->
                <a
                    v-if="link"
                    :href="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 text-xs bg-brandAccent/10 hover:bg-brandAccent text-brandAccent hover:text-white font-medium px-3 py-2 rounded-xl transition-all duration-300 group/btn"
                >
                    Перейти на сайт
                    <span
                        class="i-ph-arrow-square-out-bold text-sm transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                </a>

                <div
                    v-else
                    class="inline-flex items-center gap-1.5 text-[11px] text-slate-500 bg-slate-800/30 border border-slate-800 px-3 py-1.5 rounded-xl font-medium select-none"
                >
                    <span class="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                    Внутренний проект / NDA
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from "vue";

defineProps<{
    title: string;
    description: string;
    tags: string[];
    icon: string;
    link?: string;
}>();

const cardRef = useTemplateRef("cardRef");
const transformStyle = ref("");

const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.value) return;

    const card = cardRef.value;
    const box = card.getBoundingClientRect();

    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;

    const maxTilt = 8; // Чуть уменьшил наклон для лучшего контроля текста
    const rotateX = -((y / (box.height / 2)) * maxTilt).toFixed(2);
    const rotateY = ((x / (box.width / 2)) * maxTilt).toFixed(2);

    transformStyle.value = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
};

const handleMouseLeave = () => {
    transformStyle.value = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
};
</script>
