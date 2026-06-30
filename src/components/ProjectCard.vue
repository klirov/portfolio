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

    const maxTilt = 10;
    const rotateX = -((y / (box.height / 2)) * maxTilt).toFixed(2);
    const rotateY = ((x / (box.width / 2)) * maxTilt).toFixed(2);

    transformStyle.value = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
};

const handleMouseLeave = () => {
    transformStyle.value = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
};
</script>

<template>
    <div
        ref="cardRef"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
        class="bg-slate-900/50 p-6 rounded-3xl backdrop-blur-sm transition-all duration-150 ease-out will-change-transform cursor-pointer group relative overflow-hidden"
        :style="{ transform: transformStyle }"
    >
        <div
            class="absolute inset-0 bg-gradient-to-br from-brandAccent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />

        <div class="flex flex-col h-full justify-between relative z-10">
            <div>
                <div
                    class="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-2xl text-brandAccent mb-4 group-hover:text-white transition-colors"
                >
                    <span :class="icon" />
                </div>

                <h3
                    class="text-xl font-bold text-white mb-2 group-hover:text-brandAccent transition-colors"
                >
                    {{ title }}
                </h3>

                <p class="text-slate-400 text-sm leading-relaxed mb-4">
                    {{ description }}
                </p>
            </div>

            <div>
                <div class="flex flex-wrap gap-1.5 mb-4">
                    <span
                        v-for="tag in tags"
                        :key="tag"
                        class="text-[11px] bg-slate-805 px-2 py-1 rounded-md border border-slate-800 text-slate-400"
                    >
                        {{ tag }}
                    </span>
                </div>

                <div
                    v-if="link"
                    class="text-xs text-brandAccent font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                    Посмотреть проект <span class="i-ph-arrow-right" />
                </div>
            </div>
        </div>
    </div>
</template>
