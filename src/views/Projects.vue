<script setup lang="ts">
import Parallax from '@/components/Parallax.vue';
import { useGoTo } from 'vuetify';
const parallaxImagePath = new URL('@/assets/background/Glatthorn.webp', import.meta.url).href;
const smallImgPath = new URL('@/assets/profile/Glatthorn_Aufstieg.webp', import.meta.url).href;
const projects = [
  // MensaToday Recommender System Data Integration
  {
    translationKey: "DImensaToday",
    year: "2023",
    link: "https://github.com/MensaToday/mensa-today",
    imgSrc: new URL('@/assets/projects/mensaToday.png', import.meta.url).href,
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
    imgSrc: new URL("@/assets/projects/SpringboardLogo.jpeg", import.meta.url).href,
    img_width: "150px",
    files: [],
  },
  // Bachelor Thesis
  {
    translationKey: "BA",
    year: "2022",
    link: null,
    imgSrc: new URL("@/assets/projects/unet-no-nums-wide.jpeg", import.meta.url).href,
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
    imgSrc: new URL("@/assets/projects/forest-height.png", import.meta.url).href,
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
    imgSrc: new URL("@/assets/projects/ml_case_study.png", import.meta.url).href,
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
    imgSrc: new URL("@/assets/projects/svm.jpg", import.meta.url).href,
    img_width: "250px",
    files: [],
  },
  // Seminar Urban Analytics
  {
    year: "2024",
    link: "https://github.com/lgiesen/twitter-sentiment-analysis-politicians",
    imgSrc: new URL("@/assets/projects/UA_SemanticSegmentation-trump-cities-normalized_tweet_count.png", import.meta.url).href,
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
  // {
  //   year: "2024",
  //   link: "https://github.com/lgiesen/title-case",
  //   imgSrc: new URL("@/assets/projects/title-case.png", import.meta.url).href,
  //   img_width: "170px",
  //   translationKey: "TitleCase",
  //   files: [],
  // },
  // pivoty: Scalable Web Scraper
  {
    year: "2021",
    link: null,
    imgSrc: new URL("@/assets/projects/pivoty-logo.png", import.meta.url).href,
    img_width: "100px",
    translationKey: "forum_web_scraper",
    files: [],
  },
  // Bachelor PS: Game of Competences web application
  {
    year: "2020-2021",
    link: null,
    imgSrc: new URL("@/assets/projects/GoC.svg", import.meta.url).href,
    img_width: "80px",
    translationKey: "goc",
    files: [],
  },
  // portfolio website
  {
    year: null,
    link: null,
    imgSrc: new URL("@/assets/logo/light/logo.svg", import.meta.url).href,
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
    imgSrc: new URL("@/assets/projects/watchtrianer_logo.svg", import.meta.url).href,
    img_width: "80px",
    translationKey: "watchtrainer",
    files: [],
  },
]

const goTo = useGoTo();

function fileIcon(translationKey: string): string {
  const key = translationKey.toLowerCase();
  if (key.includes("presentation")) return "mdi-presentation";
  if (key.includes("poster")) return "mdi-image";
  if (key.includes("demo")) return "mdi-movie-roll";
  if (key.includes("documentation")) return "mdi-wrench";
  if (key.includes("thesis")) return "mdi-text-box-multiple";
  return "mdi-file-document-outline";
}

function scrollBibliography() {
  goTo('#bibliography');
}
</script>


<template>
  <div>
    <Parallax :parallaxImage="parallaxImagePath" overlayColor="rgba(61, 103, 62,.3)" translationKey="projects"
      :smallImgPath="smallImgPath" imgAlt="Leo Giesen Projects" />

    <!-- Projects -->
    <article id="scroll">
      <section>
        <v-container>
          <div v-for="project in projects" :id="project.translationKey" :key="project.translationKey">
            <v-row justify="center">
              <v-col cols="11" md="7" class="text-center">
                <h2 class="text-h4 font-weight-light mb-0" style="word-break: break-word;">
                  {{ $t('projects.projects.' + project.translationKey + '.title') }}
                </h2>

                <!-- Links to repository and/or files -->
                <div class="mt-5" :id="project.translationKey">
                  <span class="mr-2" v-if="project.year">{{ project.year }}</span>

                  <v-btn class="text-capitalize text-caption ma-2" v-if="project.link" :href="project.link"
                    target="_blank">
                    <v-icon size="small" class="mr-2">mdi-code-tags</v-icon>
                    {{ $t('projects.projects.links.repository') }}
                  </v-btn>

                  <span v-for="(file, index) in project.files" :key="index">
                    <v-btn class="text-capitalize text-caption ma-2" v-if="project.files.length > 0" :href="file.link"
                      target="_blank">
                      <v-icon size="small" class="mr-2">{{ fileIcon(file.translationID) }}</v-icon>
                      {{ $t('projects.projects.' + project.translationKey + '.files.' + file.translationID) }}
                    </v-btn>
                  </span>
                </div>

                <!-- Image -->
                <v-img class="ma-7 mx-auto" :src="project.imgSrc" :width="project.img_width" max-width="80vw"></v-img>

                <!-- Description -->
                <p class="text-body-1 text-justify"
                  v-html="$t('projects.projects.' + project.translationKey + '.desc')"></p>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </section>

      <!-- Bibliography -->
      <section id="bibliography">
        <v-container class="text-grey px-5 text-justify">
          <h2 class="mb-5"> {{ $t('projects.bibliography') }}</h2>
          <p>
            [RFB15] Olaf Ronneberger, Philipp Fischer, and Thomas Brox. “U-Net: Convolutional Networks for Biomedical
            Image Segmentation”. In: Proceedings of the International Conference on Medical Image Computing and
            Computer-Assisted Intervention. Cham, DE: Springer, 2015, pp. 234–241.
          </p>
          <p>
            [SLEa] Schäper, D. T., Lauterjung, J., and Everding, J. S. 2021a. “pivoty - Simplifying Innovation.” (<a
              href="https://www.pivoty.de/" target="_blank">https://www.pivoty.de/</a>, accessed June 29, 2021).
          </p>
          <p>
            [SLEb] Schäper, D. T., Lauterjung, J., and Everding, J. S. 2021b. “pivoty” LinkedIn. (<a
              href="https://www.linkedin.com/company/pivoty/"
              target="_blank">https://www.linkedin.com/company/pivoty/</a>,
            accessed June 30, 2021).
          </p>
        </v-container>
      </section>
    </article>
  </div>
</template>
