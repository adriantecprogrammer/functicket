import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import { createApp } from "vue";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import Carousel from "primevue/carousel";
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css";
import router from "./router";
import DataView from "primevue/dataview";
import Drawer from "primevue/drawer";
import CascadeSelect from "primevue/cascadeselect";

const app = createApp(App);


app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});



app.component("InputText", InputText);
app.component("Button", Button);
app.component("Menubar", Menubar);
app.component("Carousel", Carousel);
app.component("Menubar", Menubar);
app.component("DataView", DataView);
app.component("Drawer", Drawer);
app.component("CascadeSelect", CascadeSelect);

app.use(router);
app.mount("#app");
