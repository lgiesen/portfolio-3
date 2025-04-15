import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title:
        "Leo Giesen Portfolio | Progress with Passion in Information Technologies",
      metaTags: [
        {
          name: "description",
          content:
            "Entdecke meine Leidenschaft für Informationstechnologien, einschließlich KI und Machine Learning, und wie ich mein Wissen in dynamischen Teams anwende. Erfahre mehr über meine Studienrichtung Informationssysteme an der Universität Münster mit Schwerpunkt Business Intelligence und meine Führungsrolle bei move.",
        },
        {
          name: "keywords",
          content:
            "Informationstechnologie, Machine Learning, Business Intelligence, Datenanalyse, Frontend-Entwicklung, Backend-Entwicklung, Datenbanken, IT-Architektur, Microsoft Office 365, Softwareentwicklung",
        },
      ],
    },
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "Über Leo - Leidenschaft für IT und Abenteuer",
      metaTags: [
        {
          name: "description",
          content:
            "Erfahre mehr über Leo, einen enthusiastischen IT-Studenten mit einer Passion für das Lösen komplexer Probleme, einem reichen sozialen Leben und einer Liebe zum Sport. Entdecke, wie Leo Work-Life-Balance durch Familie, Freunde, Sport und Reisen rund um den Globus priorisiert.",
        },
        {
          name: "keywords",
          content:
            "Leo, IT, Informationssysteme, Data Science, Sport, Reisen, Lebensbalance, Skifahren, Laufen, Tennis, Volleyball, Abenteuer, Kultur, Japan, Kanada, Südamerika",
        },
      ],
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/experience",
    name: "Experience",
    meta: {
      title: "Erfahrung - Führungsrolle, Softwareentwicklung und Bildungsweg",
      metaTags: [
        {
          name: "description",
          content:
            "Erfahre mehr über Leos vielfältige Berufserfahrung, von Führungspositionen in studentischen Beratungen über Softwareentwicklung bis hin zu Data Science. Einblick in seinen Bildungsweg in Informationssystemen, einschließlich eines Bachelorabschlusses in Wirtschaftsinformatik und eines Masterstudiums mit Fokus auf Business Intelligence an der Universität Münster.",
        },
        {
          name: "keywords",
          content:
            "Führungsqualitäten, Softwareentwicklung, Machine Learning, Data Science, Studentische Beratung, Wirtschaftsinformatik, Business Intelligence, Universität Münster, Projektmanagement, Zeitmanagement",
        },
      ],
    },
    component: () =>
      import(/* webpackChunkName: "experience" */ "../views/Experience.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    meta: {
      title:
        "Projekte - Ein Portfolio technischer Innovation und Führungsstärke",
      metaTags: [
        {
          name: "description",
          content:
            "Tauche ein in die Projektwelt von Leo, die von Machine Learning-Analysen politischer Sentiments bis hin zur Optimierung von IT-Architekturen und der Entwicklung von Webapplikationen reicht. Erfahre, wie Leos Leidenschaft für Technologie und sein Streben nach Exzellenz in vielfältigen Projekten zum Ausdruck kommen, die sowohl akademische Forschung als auch praktische Anwendungen umfassen.",
        },
        {
          name: "keywords",
          content:
            "Technologie, Machine Learning, NLP, IT-Architektur, Webentwicklung, Vue.js, Data Science, politische Analyse, Softwareentwicklung, Digitalisierung, Innovation",
        },
      ],
    },
    component: () =>
      import(/* webpackChunkName: "projects" */ "../views/Projects.vue"),
  },
  {
    path: "/links",
    name: "Links",
    meta: { title: "Leo Giesen Linktree" },
    component: () =>
      import(/* webpackChunkName: "links" */ "../views/Links.vue"),
  },
  {
    path: "/sandbox",
    name: "Sandbox",
    meta: { title: "Sandbox" },
    component: () =>
      import(/* webpackChunkName: "sandbox" */ "../views/Sandbox.vue"),
  },
  // {
  //   path: "/contact",
  //   name: "Contact",
  //   component: () =>
  //     import(/* webpackChunkName: "contact" */ "../views/Contact.vue")
  // },
  // Policy and other law-related pages
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    meta: { title: "Leo Giesen Datenschutz" },
    component: () =>
      import(
        /* webpackChunkName: "privacyPolicy" */ "../views/policy/PrivacyPolicy.vue"
      ),
  },
  {
    path: "/Imprint",
    name: "Imprint",
    meta: { title: "Leo Giesen Impressum" },
    component: () =>
      import(/* webpackChunkName: "imprint" */ "../views/policy/Imprint.vue"),
  },

  // 404-page needs to be at the end so that the wildcard
  // (*) does not get matched with any other URLs
  {
    path: "/*",
    name: "Not Found",
    meta: { title: "Leo Giesen Portfolio" },
    component: () =>
      import(
        /* webpackChunkName: "404NotFound" */ "../views/errors/404NotFound.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // scroll to element based on URL
  // scrollBehavior(to, from, savedPosition) {
  //   if (to.hash) {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         if (document.querySelector(to.hash)) {
  //           resolve({ selector: to.hash, behavior: "smooth" });
  //         } else {
  //           resolve({ x: 0, y: 0 });
  //         }
  //       }, 500); // Delay to ensure that the element is present
  //     });
  //   } else if (savedPosition) {
  //     return savedPosition;
  //   } else {
  //     return { x: 0, y: 0 };
  //   }
  // },
});

// router.afterEach((to, from) => {
//   Vue.nextTick(() => {
//     // define a fallback title
//     document.title = to.meta.title || "Leo Giesen Portfolio";

//     // remove previous meta-tags
//     document
//       .querySelectorAll(
//         'head meta[name="description"], head meta[name="keywords"]'
//       )
//       .forEach((el) => el.remove());

//     // define new meta-tags based on the current route
//     if (to.meta.metaTags) {
//       to.meta.metaTags.forEach((tag) => {
//         const tagElement = document.createElement("meta");
//         tagElement.name = tag.name;
//         tagElement.content = tag.content;
//         document.head.appendChild(tagElement);
//       });
//     }
//   });
// });


export default router;
