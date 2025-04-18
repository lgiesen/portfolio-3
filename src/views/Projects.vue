<template lang="pug">
div
  Parallax(
    :parallaxImage="parallaxImagePath"
    overlayColor="rgba(225,191,156,0)" 
    translationKey="projects"
    imgAlt="Leo Giesen Projects"
    )
  //- Ideas to include:
  //- Share Insights, Best Practices, Learnings
  //- Add what tools I have worked with, which positions I fulfilled
  //- What skills I learned and applied

  //- Projects
  article#scroll
    section
      v-container
        div(v-for="project in projects" :id="project.translationKey")
          v-row.justify-center
            v-col.col-11.col-md-7.text-center
              h2.display-1.font-weight-thin.mb-0(style="word-break: break-word;")
                | {{ $t('projects.projects.' + project.translationKey + '.title') }}
              //- Links to repository and/or website
              div.mt-5(:id="project.translationKey")
                span(v-if="project.year") {{project.year}}
                v-btn.text-capitalize.text-caption.ma-2(text outlined v-if="project.link != null" :href="project.link" target="_blank") 
                  v-icon.mr-2(small) mdi-code-tags
                  | {{ $t('projects.projects.links.repository') }}

                //- files
                span(v-for="(file, index) in project.files")
                  v-btn.text-capitalize.text-caption.ma-2(text outlined v-if="project.files.length > 0" :href="project.files[index].link" target="_blank")
                    v-icon.mr-2(small) {{ fileIcon(project.files[index].translationID) }}
                    | {{ $t('projects.projects.' + project.translationKey + '.files.' + file.translationID) }}

              //- Icon or image of project
              v-img.ma-7.mx-auto(:src="project.imgSrc" :width="project.img_width" max-width="80vw")
              //- Project description
              p.text-justify(v-html="$t('projects.projects.' + project.translationKey + '.desc')")

  //- Bibliography
  section#bibliography
    v-container.grey--text.px-5.text-justify
      h2.mb-5 {{ this.$store.getters.isDE ? "Literaturverzeichnis" : "Bibliography" }}
      p [RFB15] Olaf Ronneberger, Philipp Fischer, and Thomas Brox. “U-Net: Convolutional Networks for Biomedical Image 
        | Segmentation”. In: Proceedings of the International Conference on Medical Image Computing and Computer-Assisted 
        | Intervention. Cham, DE: Springer, 2015, pp. 234–241.
      p [SLEa] Schäper, D. T., Lauterjung, J., and Everding, J. S. 2021a. “pivoty - Simplifying Innovation.” (
        a(href="https://www.pivoty.de/" target="_blank") https://www.pivoty.de/
        | , accessed June 29, 2021).
      p [SLEb] Schäper, D. T., Lauterjung, J., and Everding, J. S. 2021b. “pivoty” LinkedIn. (
        a(href="https://www.linkedin.com/company/pivoty/" target="_blank") https://www.linkedin.com/company/pivoty/
        | , accessed June 30, 2021).
</template>

<script>
import Parallax from "@/components/Parallax.vue";
export default {
  name: "Projects",
  components: {
    Parallax,
  },
  data: () => ({
    parallaxImagePath: require("@/assets/background/Aasee.webp"),
    smallImgPath: require("@/assets/profile/leo-giesen-nature.webp"),
    projects: [
      // MensaToday Recommender System Data Integration
      {
        translationKey: "DImensaToday",
        year: "2023",
        link: "https://github.com/MensaToday/mensa-today",
        imgSrc: require("@/assets/projects/mensaToday.png"),
        img_width: "120px",
        files: [
          {
            translationID: "mensaToday_poster",
            link: "projects/MensaToday/MensaToday_Poster.svg",
          },
          {
            translationID: "mensaToday_demo",
            link: "projects/MensaToday/MensaToday-Demo-2023-02-23.mp4",
          },
          {
            translationID: "mensaToday_documentation",
            link: "projects/MensaToday/MensaToday_documentation.pdf",
          },
        ],
      },
      // Master Project Seminar
      {
        translationKey: "AutomationOfDocumentChecks",
        year: "2023",
        link: null,
        imgSrc: require("@/assets/projects/SpringboardLogo.jpeg"),
        img_width: "150px",
        files: [],
      },
      // Bachelor Thesis
      {
        translationKey: "BA",
        year: "2022",
        link: null,
        imgSrc: require("@/assets/projects/unet-no-nums-wide.jpeg"),
        // U-Net von mir oder von dem original publisher - Bild von Predictions (unpatchified am besten)
        img_width: "",
        files: [
          {
            translationID: "BAThesis",
            link: "projects/BA/Deep_Learning_Semantic_Segmentation_of_Tree_Stock_in_South_Africa_Using_Satellite_Images.pdf",
          },
        ],
      },
      // DA II Case Study: Forest Height
      {
        translationKey: "ForestHeight",
        year: "2023",
        link: "https://github.com/lgiesen/forest_height",
        imgSrc: require("@/assets/projects/forest-height.png"),
        img_width: "100px",
        files: [
          {
            translationID: "poster_overview",
            link: "https://github.com/lgiesen/forest_height/blob/main/group-6-poster.pdf",
          },
        ],
      },
      // VM DL Case Study: Land Usage
      {
        translationKey: "DLCaseStudy",
        year: "2021",
        link: null,
        imgSrc: require("@/assets/projects/ml_case_study.png"),
        img_width: "",
        files: [
          {
            translationID: "seminar_thesis",
            link: "projects/ML/Machine_Learning_Segmentation_Case_Study__Land_Usage_and_Land_Coverage.pdf",
          },
          {
            translationID: "poster_overview",
            link: "projects/ML/ML_Case_Study_LULC_Poster.pdf",
          },
          {
            translationID: "transfer_learning_presentation",
            link: "projects/ML/Transfer_Learning_Presentation.pdf",
          },
        ],
      },
      // Internship at zeb: NLP, ML
      {
        translationKey: "NLP",
        year: "2021",
        link: null,
        imgSrc: require("@/assets/projects/svm.jpg"),
        img_width: "250px",
        files: [],
      },
      // Seminar Urban Analytics
      {
        year: "2024",
        link: "https://github.com/lgiesen/twitter-sentiment-analysis-politicians",
        imgSrc: require("@/assets/projects/UA_SemanticSegmentation-trump-cities-normalized_tweet_count.png"),
        img_width: "",
        translationKey: "UASentimentAnalysis",
        files: [
          {
            translationID: "seminar_thesis",
            link: "projects/UASentimentAnalysis/UA__Awareness_Level_and_Popularity_of_Presidents__A_Location_Based_Sentiment_Analysis_of_Donald_Trump_and_Boris_Johnson.pdf",
          },
          {
            translationID: "final_presentation",
            link: "projects/UASentimentAnalysis/UA-final-presentation.pdf",
          },
          {
            translationID: "genAI_reflection_report",
            link: "projects/UASentimentAnalysis/UA___Reflection_Report.pdf",
          },
        ],
      },
      // IT Architecture
      {
        year: "2022",
        link: null,
        imgSrc: null,
        img_width: "",
        translationKey: "ITArchitecture",
        files: [],
      },
      // Digital Workflow
      {
        year: "2023",
        link: null,
        imgSrc: null,
        img_width: "",
        translationKey: "DigitalCollaboration",
        files: [],
      },
      // Title Case Free Time Project
      {
        year: "2024",
        link: "https://github.com/lgiesen/title-case",
        imgSrc: require("@/assets/projects/title-case.png"),
        img_width: "170px",
        translationKey: "TitleCase",
        files: [],
      },
      // pivoty: Scalable Web Scraper
      {
        year: "2021",
        link: null,
        imgSrc: require("@/assets/projects/pivoty-logo.png"),
        img_width: "100px",
        translationKey: "forum_web_scraper",
        files: [],
      },
      // Bachelor PS: Game of Competences web application
      {
        year: "2020-2021",
        link: null,
        imgSrc: require("@/assets/projects/GoC.svg"),
        img_width: "80px",
        translationKey: "goc",
        files: [],
      },
      // portfolio website
      {
        year: null,
        link: null,
        imgSrc: require("@/assets/logo/light/logo.svg"),
        img_width: "100px",
        translationKey: "portfolioWebDevelopment",
        files: [],
      },
      // move Web-Konzeption und -Implementierung Kanzlei
      {
        year: "2020-2021",
        link: null,
        imgSrc: "",
        img_width: "100px",
        translationKey: "lawFirmWebDevelopment",
        files: [],
      },
      // move Entwicklung eines eBusiness einschließlich Online Branding
      {
        year: "2019-2020",
        link: null,
        imgSrc: "",
        img_width: "100px",
        translationKey: "eBusinessWebDevelopment",
        files: [],
      },
      // research: WatchTrainer
      {
        year: "2019-2020",
        link: null,
        imgSrc: require("@/assets/projects/watchtrianer_logo.svg"),
        img_width: "80px",
        translationKey: "watchtrainer",
        files: [],
      },
    ],
  }),
  methods: {
    fileIcon(translationKey) {
      translationKey = translationKey.toLowerCase();
      if (translationKey.includes("presentation")) return "mdi-presentation";
      else if (translationKey.includes("poster")) return "mdi-image";
      else if (translationKey.includes("demo")) return "mdi-movie-roll";
      else if (translationKey.includes("documentation")) return "mdi-wrench";
      else if (translationKey.includes("thesis"))
        return "mdi-text-box-multiple";
      else {
        return "mdi-file-document-outline";
      }
    },
    scrollBibliography() {
      this.$vuetify.goTo("#bibliography");
    },
  }
};
</script>
