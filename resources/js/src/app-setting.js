import store from "./store";
import { $themeConfig } from "./theme.config";

export default {
    init() {
        // set default styles
        let val = localStorage.getItem("dark_mode"); // light, dark, system
        if (!val) {
            val = $themeConfig.theme;
        }
        store.commit("toggleDarkMode", val);

        val = localStorage.getItem("menu_style"); // vertical, collapsible-vertical, horizontal
        if (!val) {
            val = $themeConfig.navigation;
        }
        store.commit("toggleMenuStyle", val);

        val = localStorage.getItem("layout_style"); // full, boxed-layout, large-boxed-layout
        if (!val) {
            val = $themeConfig.layout;
        }
        store.commit("toggleLayoutStyle", val);

        val = localStorage.getItem("i18n_locale"); // en, da, de, el, es, fr, hu, it, ja, pl, pt, ru, sv, tr, zh
        if (!val) {
            val = $themeConfig.lang;

            const list = store.state.countryList;
            const item = list.find((item) => item.code === val);
            if (item) {
                this.toggleLanguage(item);
            }
        }
    },

    toggleLanguage(item) {
        let lang = null;
        if (item) {
            lang = item;
        } else {
            let code = store.state.locale;
            if (!code) {
                code = localStorage.getItem("i18n_locale");
            }

            item = store.state.countryList.find((d) => d.code === code);
            if (item) {
                lang = item;
            }
        }

        if (!lang) {
            lang = store.state.countryList.find((d) => d.code === "en");
        }

        store.commit("toggleLocale", lang.code);
        return lang;
    },

    toggleMode(mode) {
        if (!mode) {
            let val = localStorage.getItem("dark_mode"); //light|dark|system
            mode = val;
            if (!val) {
                mode = "light";
            }
        }
        store.commit("toggleDarkMode", mode || "light");
        return mode;
    },
};
