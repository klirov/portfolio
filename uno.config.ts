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
    preflights: [
        {
            getCSS: () => `
                :root {
                    --brand-dark: #090d16;

                    --brand-accent: #10b981;
                    --brand-accent-hover: #059669;
                    --brand-accent-glow: rgba(16, 185, 129, 0.2);

                    --brand-border: rgba(255, 255, 255, 0.08);
                }
            `,
        },
    ],
    theme: {
        colors: {
            brandDark: "var(--brand-dark)",
            brandAccent: "var(--brand-accent)",
            brandAccentHover: "var(--brand-accent-hover)",
        },
    },
});
