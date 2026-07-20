<template>
    <div
        ref="cardRef"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
        class="bg-zinc-900/30 border border-white/5 p-6 rounded-[2rem] backdrop-blur-sm transition-all duration-300 ease-out will-change-transform group relative overflow-hidden flex flex-col justify-between hover:bg-zinc-900/50 hover:border-zinc-700/50"
        :style="{ transform: transformStyle }"
    >
        <!-- Динамический блик за мышкой -->
        <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"
            :style="{
                background: `radial-gradient(circle 250px at ${localMouseX}px ${localMouseY}px, rgba(255, 255, 255, 0.08), transparent 100%)`
            }"
        />

        <div class="flex flex-col h-full justify-between relative z-10 pointer-events-none">
            <div>
                <div class="w-14 h-14 rounded-2xl bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-2xl text-emerald-500 mb-5 group-hover:bg-emerald-500 group-hover:text-zinc-950 group-hover:border-emerald-400 transition-all duration-500 shadow-sm">
                    <span :class="icon" />
                </div>

                <h3 class="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {{ title }}
                </h3>

                <p class="text-zinc-400 text-sm leading-relaxed mb-6">
                    {{ description }}
                </p>
            </div>

            <div class="pointer-events-auto">
                <!-- Теги -->
                <div class="flex flex-wrap gap-2 mb-6">
                    <span
                        v-for="tag in tags"
                        :key="tag"
                        class="text-[11px] font-medium bg-zinc-950/50 px-2.5 py-1 rounded-md border border-zinc-800/80 text-zinc-400"
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
                    class="inline-flex items-center gap-2 text-xs bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-zinc-950 font-semibold px-4 py-2.5 rounded-xl transition-all duration-300 group/btn border border-emerald-500/20 hover:border-emerald-500"
                >
                    Перейти на сайт
                    <span class="i-ph-arrow-up-right-bold text-sm transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>

                <div
                    v-else
                    class="inline-flex items-center gap-2 text-xs text-zinc-500 bg-zinc-950/30 border border-zinc-800 px-4 py-2.5 rounded-xl font-medium select-none"
                >
                    <span class="w-2 h-2 rounded-full bg-zinc-600"></span>
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
const localMouseX = ref(0);
const localMouseY = ref(0);

const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.value) return;

    const card = cardRef.value;
    const box = card.getBoundingClientRect();

    // Координаты для 3D наклона
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;

    // Координаты для блика внутри карточки
    localMouseX.value = e.clientX - box.left;
    localMouseY.value = e.clientY - box.top;

    const maxTilt = 6; // Сделал наклон чуть мягче, чтобы было премиальнее
    const rotateX = -((y / (box.height / 2)) * maxTilt).toFixed(2);
    const rotateY = ((x / (box.width / 2)) * maxTilt).toFixed(2);

    transformStyle.value = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
};

const handleMouseLeave = () => {
    transformStyle.value = `perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
};
</script>
