import {
    defineConfig,
    presetWind3,
    presetAttributify,
    presetIcons,
    presetWebFonts,
} from "unocss";

export default defineConfig({
    presets: [
        presetWind3(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
            extraProperties: {
                display: "inline-block",
                "vertical-align": "middle",
            },
        }),
        presetWebFonts({
            provider: "google",
            fonts: {
                sans: "Montserrat",
            },
        }),
    ],
    theme: {
        colors: {
            brandDark: "#090d16",
            brandAccent: "#6366f1",
            brandGreen: "#10b981",
        },
    },
});
