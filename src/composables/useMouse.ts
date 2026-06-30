import { onMounted, onUnmounted, ref } from "vue";

export function useMouse() {
  const mouseX = ref(0);
  const mouseY = ref(0);

  function updateMousePosition(e: MouseEvent) {
    mouseX.value = e.clientX;
    mouseY.value = e.clientY;
  }

  onMounted(() => {
    window.addEventListener("mousemove", updateMousePosition);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", updateMousePosition);
  });

  return {
    mouseX,
    mouseY,
  };
}
