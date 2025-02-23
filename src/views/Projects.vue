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
                | {{ $t('projects.' + project.translationKey + '.title') }}
              //- Links to repository and/or website
              div.mt-5(:id="project.translationKey")
                span(v-if="project.year") {{project.year}}
                v-btn.text-capitalize.text-caption.ma-2(text outlined v-if="project.link != null" :href="project.link" target="_blank") 
                  v-icon.mr-2(small) mdi-code-tags
                  | {{ $t('projects.links.repository') }}

                //- files
                span(v-for="(file, index) in project.files")
                  v-btn.text-capitalize.text-caption.ma-2(text outlined v-if="project.files.length > 0" :href="project.files[index].link" target="_blank")
                    v-icon.mr-2(small) {{ fileIcon(project.files[index].translationID) }}
                    | {{ $t('projects.' + project.translationKey + '.files.' + file.translationID) }}

              //- Icon or image of project
              v-img.ma-7.mx-auto(:src="project.imgSrc" :width="project.img_width" max-width="80vw")
              //- Project description
              p.text-justify(v-html="$t('projects.' + project.translationKey + '.desc')")

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
  },
  i18n: {
    messages: {
      en: {
        intro: {
          title: "Project <br>Experience",
          subtitle: "Get Inspired by My Projects",
        },
        projects: {
          links: {
            repository: "repository",
            website: "website",
            file: "file",
          },
          preview: {
            hide: "Hide Preview",
            show: "Show Preview",
          },
          DImensaToday: {
            title:
              "Smart Dining in Münster: A Personalized Mensa Meal Recommender System",
            desc: `The University of Münster is a distributed 
            across the city with various canteens and bistros that serve different ranges of food which 
            change weekly. As a student who eats at those places frequently, you have to look through all 
            dishes of every canteen to find a meal that serves your needs. The idea this recommender system 
            is to suggest mensa meals based on various different factors, such as your eating habits, 
            location (based on semester schedule), weather and many more.
            This project was awarded the highest possible score for a grade of 1.0, which exceeded the professors' expectations in terms of performance. This reflects my ability to work in a team, develop innovative solutions, and ensure high-quality implementation. For instance, the professors positively highlighted the integration of a variety of data sources, the use of a state-of-the-art technology stack, and the development of a production-ready user interface.`,
            files: {
              mensaToday_poster: "Poster",
              mensaToday_demo: "Demo",
              mensaToday_documentation: "Documentation",
            },
          },
          AutomationOfDocumentChecks: {
            title: "Automation of Document Checks with AI",
            desc: `As part of the market area conversion, around five million gas appliances will 
            be converted from L-gas to H-gas by 2030, as H-gas has more calories and therefore requires less 
            volume than L-gas. The project with Springboard successfully facilitated the proof of work of the conversion. 
            Using several machine learning models, the type plates can be automatically recorded and evaluated 
            in batches and in parallel. Classification (InceptionResNetV2), Object Detection (Mask R-CNN), 
            Perspective Correction and Optical Character Recognition were used for this. In addition, cases 
            of suspected fraud and upload errors were detected using duplicate detection (perceptual hashing).`,
          },
          NLP: {
            title: "Language Analysis with Machine Learning",
            desc: `<p style="text-align:center;">
              (<a href="#bibliography">The MathWorks 2021</a>)
            </p>
            During my software development internship at zeb, I worked on a Machine Learning (ML) 
            project where I gained experience with Natural Language Processing (NLP). By selecting and 
            implementing an alternative Support Vector Machine (SVM) approach, I was able to increase 
            the accuracy of the ML algorithm from 50% to 83%.`,
            files: {},
          },
          DLCaseStudy: {
            title:
              "Advancements in Land Use Classification: A Deep Learning Approach",
            desc: `In a joint effort, we developed a deep learning approach that semantically segments satellite images into ten classes of land use and coverage. This was implemented using a 3D CNN and a sliding window approach, achieving an accuracy of 73%. The project enabled us to apply deep learning concepts in a practical setting. Despite limitations that prevented the use of U-Net architectures, we explored data augmentation and utilized TensorFlow for model training. The seminar also introduced transfer learning, highlighting its potential to enhance model performance, although our unique requirements posed challenges. This case study not only demonstrates our proficiency in applying machine learning techniques but also emphasizes our ability to navigate and solve complex data challenges, making us valuable contributors to environmental monitoring and data-driven projects.`,
            files: {
              seminar_thesis: "Seminar Thesis",
              poster_overview: "Poster",
              transfer_learning_presentation: "Transfer Learning Presentation",
            },
          },
          BA: {
            title:
              "Advancing Environmental Monitoring: Tree Segmentation in South Africa with Deep Learning",
            desc: `<p style="text-align:center;" > (adapted from <a href = "#bibliography">Ronneberger, Fischer, and Brox [RFB15]</a>)</p>
            This project represents a significant step forward in environmental monitoring in South Africa's drylands. Utilizing deep learning with the U-Net architecture, we have devised a method to accurately detect individual trees and shrubs from satellite images. These non-forest trees, growing isolated without canopy closure, are vital for biodiversity, carbon storage, and providing resources to both humans and animals. By assessing tree numbers, we gain insights into the biomass of these areas, which is essential for sustainability initiatives. The project showcases an effective approach to environmental analysis, demonstrating my expertise in machine learning and programming. The findings aim to be shared on a sustainability-focused website, to increase awareness on critical issues such as land degradation, deforestation, and reforestation.`,
            files: {
              BAThesis: "Bachelor Thesis",
            },
          },
          ForestHeight: {
            title:
              "Elevating Environmental Insights: Forest Height Analysis Using Machine Learning",
            desc: `
            The Federal Ministry for the Environment is interested in the height of German forests. Given the sparse nature of labels within satellite images, this project required innovative approaches to successfully complete this regression task.
            In this case study, I employed various machine learning strategies to meet these challenges, which underscores my profound expertise in both machine learning and programming. This project not only highlights my ability to navigate complex data tasks but also underscores my commitment to making valuable contributions to environmental protection efforts.
            This initiative proves my capacity for critical thinking, innovative problem-solving, and adapting to technical challenges, making me an invaluable member of any team.
            `,
            files: {
              poster_overview: "Poster",
            },
          },
          UASentimentAnalysis: {
            title:
              "Geographical Insights into Political Sentiment: Analyzing Donald Trump and Boris Johnson through Social Media",
            desc: `In this seminar thesis, titled "Popularity and Controversy: A Location-Based Event and Sentiment Analysis of Donald Trump and Boris Johnson", I explored the influence of geographic location on public perceptions of these political figures from 2018 to 2022, using Twitter/X posts from cities like Los Angeles, New York City, Birmingham, and London. The analysis employed advanced machine learning techniques, including sentiment scoring with VADER and event analysis, to gauge public sentiment and attention towards these leaders. Throughout this project, I extensively utilized generative AI to streamline numerous tasks efficiently, such as literature research, programming, and the synthesis of findings. This work demonstrates my ability to apply cutting-edge AI and data analysis techniques in academic research, showcasing skills that are invaluable in today's data-driven decision-making processes.`,
            files: {
              final_presentation: "Presentation",
              seminar_thesis: "Seminar Thesis",
              genAI_reflection_report: "Generative AI",
            },
          },
          forum_web_scraper: {
            title:
              "Uncovering Hidden Gems: Gaining Innovation Potential From Discussion Forums",
            desc: `The Information Systems specialization module 'Principles 
            of Entrepreneurship' was supplemented by the project group work with the startup 
            pivoty. The basic business process idea of the start-up is that extracted information 
            from discussion forums (using web scraping) is used to derive hidden innovation 
            potentials with an AI analysis. In the project, I have built 
            a scalable web scraper with Scrapy, so that it can be applied to as many discussion forums as possible. 
            The structure of the most widespread forum frameworks was used to cover almost 
            90% of all german discussion forums. 
            <br/>
            <br/>
            pivoty is located in Münster and develops “an AI-based analytics software that 
            tries to discover innovation potentials” 
              (<a href="#bibliography">Schäper et al. 2021a</a>)
            for companies “by analyzing unbiased customer insights” 
              (<a href="#bibliography">Schäper et al. 2021a</a>)
            . To clarify, 
            the extracted ideas are subjective, but the positivity bias may be overcome. 
            These insights “draw on a variety of online sources like social networks, 
            forums, blogs, and product reviews to systematically derive inspirations for 
            new products and services” 
              (<a href="#bibliography">Schäper et al. 2021b</a>).`,
          },
          goc: {
            title:
              "Shaping Tomorrow's Leaders: A Web-Based Simulation for Public Administration",
            desc: `We've significantly improved how public administration personnel engage with training using 'Game of Competences,' a web-based simulation platform developed with Vue.js and Flask. Leading the frontend team, I guided and trained my colleagues in advanced frontend techniques using Vue.js 2. This project was not only highly rewarding but also achieved considerable success, marked by an overall grade of 1.3.`,
          },
          ITArchitecture: {
            title: "Enhancing Efficiency by Optimizing IT-Architecture",
            desc: `In this project, the IT infrastructure of a company in the public transportation sector was thoroughly analyzed and optimized using the TOGAF framework and ArchiMate modeling language. By identifying and addressing efficiency issues in the existing IT structure, especially regarding drive access, calendar management, decision-making, and video conferencing software, I demonstrated my skills in IT infrastructure and transformation. The project included developing a detailed transformation plan and implementing Microsoft 365 as a central platform for improved collaboration and communication. My role as project leader and the successful execution of this complex initiative highlight my proficiency in managing IT projects, understanding modern IT architectures, and my ability to devise innovative solutions to technical challenges.`,
          },
          DigitalCollaboration: {
            title:
              "Digital Workflow Optimization: A Guide to Efficient Collaboration",
            desc: `In this follow-up project to the one above, we continued to optimize the digital workflows of a leading company in the public transportation sector, where I once again took on the role of project lead. This underscores the customer's confidence in my capabilities and satisfaction with the preceding project. Through effective application of feedback loops and the implementation of innovative solutions such as Shared Folders over Remote Desktop and enhanced use of Microsoft Forms in Teams meetings, we significantly improved internal communication and process efficiency. Utilizing an IT-supported workflow to manage email distribution lists and optimizing the attendance plan and desk sharing showcases my ability to navigate complex challenges and deliver high-quality solutions that exceed customer expectations.`,
          },
          TitleCase: {
            title: "Streamlining Academic Excellence: The Capitalization Tool",
            desc: `In the pursuit of academic rigor and coherence, the capitalization guidelines tool emerges as a pivotal innovation, offering a standardized approach to title capitalization within the realm of academic writing. This project is designed to enhance the clarity and uniformity of titles across scholarly publications by adhering to APA style title case capitalization. It is a testament to the importance of presenting work in a manner that is both accessible and memorable to readers.
              The tool simplifies the application of title case to texts and entire bibliographies, significantly boosting efficiency in academic research and presentations. Through the integration of existing code, modified and optimized for this purpose, this project not only showcases my ability to understand and adapt the work of fellow programmers but also highlights my competency in collaborative development. Written in Rust and Python, the implementation facilitates the work of scholars, thereby enriching the academic community's ability to communicate research findings effectively.`,
          },
          lawFirmWebDevelopment: {
            title: "Enhancing Digital Presence: Web Development for a Law Firm",
            desc: `As part of a team, I contributed to the implementation of a website aimed at creating online brand awareness for the consultancy services of a law firm. The website was developed using WordPress, incorporating multiple plugins and customizations to ensure both functionality and visual appeal. My close collaboration with the customer, taking their preferences into account through multiple feedback loops, resulted in a customer-centric solution. This project showcases my skills in implementation, communication, and teamwork, highlighting my value as a team member capable of successfully executing sophisticated digital projects.`,
          },
          portfolioWebDevelopment: {
            title: "My Digital Showcase: Portfolio Website with Vue.js",
            desc: `Since 2021, I have been maintaining my portfolio website, implemented using Vue.js 2. This project serves not only as a digital showcase of my work but also highlights my creative approach and capabilities in the web development domain. Opting for Vue.js 2 for its development demonstrates my proficiency with modern JavaScript frameworks and my ability to create engaging and user-friendly web applications. The ongoing maintenance and updating of the site reflect my commitment to quality work and pursuit of technical excellence. This project effectively showcases how I leverage innovative technologies to produce creative solutions that are both aesthetically pleasing and functional.`,
          },
          eBusinessWebDevelopment: {
            title: "Development of an eBusiness Including Online Branding",
            desc: `As a key member of the project team, I contributed significantly to the development of an online video shop, focusing on modern design, innovative content creation, and explanatory product videos. The platform was developed using WordPress, along with various plugins and customizations, to ensure both visual appeal and content richness. Through close teamwork and continuous coordination with the customer, their preferences were effectively integrated into the project, showcasing my skills in implementation, communication, and customer-centricity. This project highlights my ability to develop and implement innovative digital solutions within a team context.`,
          },
          watchtrainer: {
            title:
              "Empowering Athletes: Frontend Innovation for Wearable Sports Platform",
            desc: `
            WatchTrainer played a significant role in the advancement of wearable sports technology, introducing a sports platform that utilizes the capabilities of devices like the Apple Watch. In this innovative project, I was responsible for leading the frontend development with Vue.js, aiming to provide an intuitive and seamless user experience. This project highlighted my ability to craft engaging digital solutions that blend smoothly with the latest technology.`,
          },
        },
      },
      de: {
        intro: {
          title: "Projekt-Erfahrung",
          subtitle: "Inspiration durch Projektes",
        },
        projects: {
          links: {
            repository: "Code",
            website: "Website",
            file: "Dokument",
          },
          preview: {
            hide: "Vorschau verbergen",
            show: "Vorschau anzeigen",
          },
          DImensaToday: {
            title:
              "Intelligentes Speisen in Münster: Ein personalisiertes Mensa-Empfehlungssystem",
            desc: `Die Universität Münster ist über das gesamte Stadtgebiet verteilt und verfügt 
            über verschiedene Mensen und Bistros, die ein wöchentlich wechselndes Angebot an Speisen haben. Als Student, 
            der häufig in diesen Mensen isst, muss man alle Gerichte der einzelnen Mensen durchsehen, um eine Mahlzeit zu 
            finden, die den eigenen Bedürfnissen entspricht. Die Idee dieses Empfehlungssystems ist es, Mensa-Gerichte 
            auf der Grundlage verschiedener Faktoren wie Essgewohnheiten, Standort (basierend auf dem Semesterplan), 
            Wetter und vielem mehr vorzuschlagen.
            Dieses Projekt wurde mit der höchstmöglichen Punktzahl für die Note 1,0 bewertet, was hinsichtlich der Leistungsfähigkeit die Erwartungen der Professoren übertroffen hat. Dies spiegelt meine Fähigkeit wider, im Team zu arbeiten, innovative Lösungen zu entwickeln und eine hohe Qualität in der Umsetzung zu gewährleisten. Die Professoren haben beispielsweise positiv hervorgehoben, dass eine Vielzahl von Datenquellen integriert wurden, ein state-of-the-art Technologie-Stack genutzt wurde und eine produktionsreife Benutzeroberfläche entwickelt wurde.`,
            files: {
              mensaToday_poster: "Poster",
              mensaToday_demo: "Demo",
              mensaToday_documentation: "Documentation",
            },
          },
          AutomationOfDocumentChecks: {
            title: "Automatisierung von Dokumentenprüfung mit AI",
            desc: `Im Rahmen der Marktrahmenumstellung werden bis 2030 etwa fünf Millionen Gasgeräte von L- auf 
            H-Gas umgerüstet werden, da H-Gas mehr Kalorien hat und somit weniger Volumen als L-Gas benötigt. 
            Das Projekts mit Springboard hat den Proof of Work der Umrüstung erfolgreich erleichtert. Durch mehrere 
            Machine Learning Modelle, können die Typenschilder batchweise und parallel automatisiert erfasst und 
            ausgewertet werden. Dafür wurde Klassifikation (InceptionResNetV2), Object Detection (Mask R-CNN), 
            Perspective Correction und Optical Character Recognition genutzt. Außerdem wurden Fälle mit Betrugsverdacht 
            und Fehler bei dem Upload mithilfe von Duplicate Detection (Perceptual Hashing) erkannt.`,
          },
          NLP: {
            title: "Sprachanalyse mit Machine Learning",
            desc: `
              <p style="text-align:center;">
                (<a href="#bibliography">The MathWorks 2021</a>)
              </p>
              Im Software Development Praktikum bei zeb habe ich an einem Machine Learning (ML) Projekt gearbeitet, 
              wo ich Erfahrung mit Natural Language Processing (NLP) gemacht habe. Durch die Auswahl und Implementation 
              eines alternativen Support Vector Machine (SVM) Ansatzes konnte ich die ML-Algorithmus Genauigkeit 
              von 50% auf 83% erhöhen.`,
            files: {},
          },
          ForestHeight: {
            title:
              "Förderung der Umweltüberwachung: Baumsegmentierung in Südafrika mittels Deep Learning",
            desc: `Das Bundesministerium für Umwelt ist an der Höhe von den deutschen Wäldern. Angesichts der spärlichen Natur der Labels innerhalb der Satellitenbilder erforderte dieses Projekt innovative Ansätze, um diese Regressionsaufgabe erfolgreich durchzuführen.
            In dieser Fallstudie setzte ich verschiedene Strategien des maschinellen Lernens ein, um diesen Herausforderungen zu begegnen, was meine tiefgreifende Expertise sowohl im maschinellen Lernen als auch in der Programmierung unterstreicht. Dieses Projekt hebt nicht nur meine Fähigkeit hervor, komplexe Datenaufgaben zu navigieren, sondern unterstreicht auch mein Engagement für wertvolle Beiträge zu Umweltschutzanstrengungen.
            Diese Initiative beweist meine Fähigkeit zu kritischem Denken, innovativer Problemlösung und Anpassung an technische Herausforderungen, was mich zu einem unschätzbaren Mitglied jedes Teams macht.`,
            files: {
              poster_overview: "Poster",
            },
          },
          DLCaseStudy: {
            title:
              "Fortschritte in der Klassifizierung von Landnutzung: Ein Deep-Learning-Ansatz",
            desc: `In gemeinsamer Anstrengung, entwickelten wir einen Deep Learning Ansatz, der Satellitenbilder in zehn Klassen der Landnutzung und -bedeckung semantisch segmentiert. Dies wird mit einem 3D CNN und Sliding-Window-Ansatz umgesetzt, der eine Genauigkeit von 73% erreicht. Das Projekt ermöglichte uns, Deep-Learning-Konzepte praktisch anzuwenden. Trotz Einschränkungen, die die Verwendung von U-Net-Architekturen verhinderten, erforschten wir Datenanreicherung und nutzten TensorFlow für das Training des Modells. Das Seminar führte auch Transer Learning ein und hob dessen Potenzial zur Leistungssteigerung des Modells hervor, obwohl unsere einzigartigen Anforderungen Herausforderungen darstellten. Diese Fallstudie zeigt nicht nur unsere Geschicklichkeit im Anwenden von Machine-Learning-Techniken, sondern betont auch unsere Fähigkeit, komplexe Datenherausforderungen zu navigieren und zu lösen, was uns zu wertvollen Mitgliedern in Umweltüberwachungs- und datengesteuerten Projekten macht.`,
            files: {
              seminar_thesis: "Seminararbeit",
              poster_overview: "Poster",
              transfer_learning_presentation: "Transfer Learning Präsentation",
            },
          },
          BA: {
            title:
              "Umweltmonitoring-Innovation: Deep Learning zur Baumsegmentierung in Südafrika",
            desc: `<p style="text-align:center;"> (angepasst von
              <a href="#bibliography">Ronneberger, Fischer, and Brox [RFB15]</a>)
              </p>
              Dieses Projekt leistet einen wichtigen Beitrag zur Umweltüberwachung in den Trockengebieten Südafrikas. Durch den Einsatz von Deep Learning und der U-Net-Architektur wurde eine Methode zur genauen Detektion von einzelnen Bäumen und Sträuchern aus Satellitenbildern entwickelt. Diese isoliert wachsenden Nicht-Wald-Bäume sind entscheidend für die Biodiversität, die Kohlenstoffspeicherung und die Versorgung von Menschen und Tieren. Die Ermittlung der Baumzahl ermöglicht Einblicke in die Biomasse der Regionen, was für Nachhaltigkeitsbestrebungen unerlässlich ist. Das Projekt präsentiert einen effektiven Ansatz zur Umweltanalyse und unterstreicht meine Fachkenntnisse im Machine Learning und in der Programmierung. Die Ergebnisse sollen auf einer auf Nachhaltigkeit ausgerichteten Website geteilt werden, um das Bewusstsein für wichtige Themen wie Landdegradation, Entwaldung und Aufforstung zu schärfen.`,
            files: {
              BAThesis: "Bachelorarbeit",
            },
          },
          UASentimentAnalysis: {
            title:
              "Geographische Einblicke in Politische Stimmungen: Analyse von Donald Trump und Boris Johnson durch Soziale Medien",
            desc: `In dieser Seminararbeit mit dem Titel "Popularity and Controversy: Eine standortbezogene Ereignis- und Stimmungsanalyse von Donald Trump und Boris Johnson" untersuchte ich den Einfluss geografischer Standorte auf die öffentliche Wahrnehmung dieser politischen Persönlichkeiten von 2018 bis 2022, unter Verwendung von Twitter/X-Beiträgen aus Städten wie Los Angeles, New York City, Birmingham und London. Die Analyse nutzte fortschrittliche Machine Learning Methoden, einschließlich Stimmungsbewertung mit VADER und Ereignisanalyse, um die öffentliche Stimmung und Aufmerksamkeit gegenüber diesen Staatsoberhäuptern zu messen. Im Laufe dieses Projekts setzte ich umfangreich generative AI ein, um zahlreiche Aufgaben effizient zu optimieren, wie Literaturrecherche, Programmierung und die Zusammenfassung der Ergebnisse. Diese Arbeit demonstriert meine Fähigkeit, modernste AI- und Datenanalysetechniken in der akademischen Forschung anzuwenden und unterstreicht Fähigkeiten, die im heutigen datengetriebenen Entscheidungsprozess von unschätzbarem Wert sind.`,
            files: {
              final_presentation: "Präsentation",
              seminar_thesis: "Seminararbeit",
              genAI_reflection_report: "Generative AI",
            },
          },
          ITArchitecture: {
            title: "Effizienzsteigerung durch Optimierung der IT-Architektur",
            desc: `In diesem Projekt wurde die IT-Infrastruktur eines Unternehmens aus dem öffentlichen Nahverkehrssektor unter Verwendung des TOGAF-Frameworks und der ArchiMate-Modellierungssprache umfassend analysiert und optimiert. Durch die Identifizierung und Behebung von Effizienzproblemen in der bestehenden IT-Infrastruktur, insbesondere im Hinblick auf den Zugriff auf Laufwerke, Kalenderverwaltung, Beschlussfassung und Videokonferenz-Software, konnte ich meine Fähigkeiten im Bereich der IT-Infrastruktur und -Transformation unter Beweis stellen. Das Projekt umfasste die Entwicklung eines detaillierten Transformationsplans und die Implementierung von Microsoft 365 als zentrale Plattform für eine verbesserte Zusammenarbeit und Kommunikation. Meine Rolle als Projektleiter und die erfolgreiche Durchführung dieses komplexen Vorhabens unterstreichen meine Kompetenz in der Leitung von IT-Projekten, mein Verständnis für moderne IT-Architekturen und meine Fähigkeit, innovative Lösungen für technische Herausforderungen zu entwickeln.`,
          },
          DigitalCollaboration: {
            title:
              "Optimierung Digitaler Arbeitsprozesse: Ein Leitfaden für Effiziente Zusammenarbeit",
            desc: `In diesem Folgeprojekt haben wir die digitalen Arbeitsabläufe eines führenden Unternehmens im öffentlichen Nahverkehrssektor weiter optimiert, wobei ich erneut die Rolle des Projektleiters übernahm. Dies unterstreicht das Vertrauen des Kunden in meine Fähigkeiten und die Zufriedenheit mit dem vorangegangenen Projekt. Durch die effektive Anwendung von Feedback-Schleifen und die Implementierung innovativer Lösungen wie Shared Folder über Remote Desktop und verbesserte Nutzung von Microsoft Forms in Teams-Meetings, konnten wir die interne Kommunikation und Prozesseffizienz signifikant steigern. Die Verwendung eines IT-gestützten Workflows zur Verwaltung von E-Mail-Verteilern und die Optimierung des Anwesenheitsplans und Desk Sharings zeigen meine Fähigkeit, komplexe Herausforderungen zu navigieren und qualitativ hochwertige Lösungen zu liefern, die über die Kundenerwartungen hinausgehen.`,
          },
          forum_web_scraper: {
            title:
              "Verborgene Schätze Aufdecken: Innovationspotenziale aus Diskussionsforen Gewinnen",
            desc: `Das Vertiefungsmodul Principles of Entrepreneurship wurde durch 
            die Projektgruppenarbeit mit dem Startup pivoty ergänzt. Die grundlegende 
            Geschäftsprozess-Idee von pivoty ist, dass extrahierte Informationen (mittels Web 
            Scraping) aus Diskussionsforen genutzt werden, um mit einer AI-Analyse versteckte 
            Innovationspotenziale abzuleiten. In dem Projekt habe ich mit zwei anderen Projektmitgliedern 
            einen skalierbaren Web Scraper mit Scrapy gebaut, sodass dieser auf so viele Foren wie möglich angewendet werden kann. 
            Hierbei wurde sich an der Struktur von den am weit verbreitensten Forenframeworks orientiert, um knapp 90% 
            aller deutschsprachigen Diskussionsforen abzudecken. 
            <br/>
            <br/>
            pivoty ist in Münster ansässig und entwickelt "eine AI-basierte Analysesoftware, die 
            Innovationspotenziale" 
              (<a href="#bibliography">Schäper et al. 2021a</a>)
            für Unternehmen "durch die Analyse von unvoreingenommenen Customer Insights" 
              (<a href="#bibliography">Schäper et al. 2021a</a>)
            versucht zu entdecken. Die extrahierten Ideen sind zwar subjektiv, aber der 
            Positivitätsbias kann überwunden werden. 
            Diese Erkenntnisse "stützen sich auf eine Vielzahl von Online-Quellen wie soziale Netzwerke, 
            Foren, Blogs und Produktrezensionen, um systematisch Inspirationen für neue 
            neue Produkte und Dienstleistungen abzuleiten" 
            (<a href="#bibliography">Schäper et al. 2021b</a>).`,
          },
          goc: {
            title:
              "Förderung der Führungskräfte von Morgen: Eine Webbasierte Simulation für die Öffentliche Verwaltung",
            desc: `Wir haben die Fortbildung für das Personal im öffentlichen Dienst durch 'Game of Competences', eine webbasierte Simulationsplattform entwickelt mit Vue.js und Flask, erheblich verbessert. Als Leiter des Frontend-Teams hatte ich die Gelegenheit, meine Kollegen in fortgeschrittenen Frontend-Techniken mit Vue.js 2 zu schulen und weiterzubilden. Dieses Projekt war nicht nur außerordentlich bereichernd, sondern erreichte auch einen beachtlichen Erfolg, gekennzeichnet durch eine Gesamtnote von 1,3.`,
          },
          TitleCase: {
            title:
              "Förderung der Akademischen Exzellenz: Das Tool zur Titel-Kapitalisierung",
            desc: `Mit dem Ziel, wissenschaftliche Präzision und Konsistenz zu fördern, stellt das Titel-Kapitalisierungs-Werkzeug eine außerordentliche Innovation dar. Es bietet einen standardisierten Ansatz für die Kapitalisierung von Titeln im akademischen Schreiben, um Klarheit und Einheitlichkeit in wissenschaftlichen Publikationen zu gewährleisten. Dieses Projekt dient der Verbesserung der Zugänglichkeit und Prägnanz von Titeln, was deren Verständlichkeit und Einprägsamkeit für Leser erhöht.
              Das Werkzeug ermöglicht eine einfache Anwendung der Titel-Kapitalisierung auf Texte und gesamte Bibliografien, was die Effizienz in der akademischen Forschung und bei Präsentationen erheblich steigert. Durch die Integration und Optimierung bestehender Programmierarbeit illustriert dieses Projekt meine Fähigkeit, den Code anderer zu verstehen, anzupassen und effektiv im Team zu arbeiten. Die Umsetzung in Rust und Python erleichtert die wissenschaftliche Arbeit und steigert deren Effizienz um ein Vielfaches.`,
          },
          lawFirmWebDevelopment: {
            title:
              "Digitale Präsenz stärken: Web-Konzeption für eine Anwaltskanzlei",
            desc: `Im Rahmen eines Teams trug ich zur Implementierung einer Website bei, die das Ziel verfolgte, Online-Markenbewusstsein für die Beratungstätigkeit einer Anwaltskanzlei zu schaffen. Die Entwicklung erfolgte mittels WordPress, wobei zahlreiche Plugins und Anpassungen zum Einsatz kamen, um die Website nicht nur funktional, sondern auch visuell ansprechend zu gestalten. Durch die enge Zusammenarbeit mit dem Kunden und die Berücksichtigung seiner Wünsche in mehreren Feedbackschleifen, konnte eine kundenorientierte Lösung realisiert werden. Dieses Projekt demonstriert meine Fähigkeiten in der Implementierung, Kommunikation und Teamarbeit und unterstreicht meine Rolle als wertvolles Teammitglied, das in der Lage ist, anspruchsvolle digitale Projekte erfolgreich umzusetzen.`,
          },
          portfolioWebDevelopment: {
            title: "Mein Digitales Schaufenster: Portfolio-Website mit Vue.js",
            desc: `Seit 2021 betreue ich meine eigene Portfolio-Website, die mit Vue.js 2 implementiert wurde. Dieses Projekt dient nicht nur als digitales Schaufenster meiner bisherigen Arbeiten, sondern unterstreicht auch meinen kreativen Ansatz und meine Fähigkeiten im Bereich der Webentwicklung. Die Wahl von Vue.js 2 für die Umsetzung zeigt meine Kompetenz im Umgang mit modernen JavaScript-Frameworks und meine Fähigkeit, ansprechende sowie benutzerfreundliche Webanwendungen zu entwickeln. Die kontinuierliche Wartung und Aktualisierung der Website spiegeln mein Engagement für qualitativ hochwertige Arbeit und das Streben nach technischer Exzellenz wider. Dieses Projekt demonstriert effektiv, wie ich innovative Technologien einsetze, um kreative Lösungen zu schaffen, die sowohl ästhetisch als auch funktional überzeugen.`,
          },
          eBusinessWebDevelopment: {
            title: "Entwicklung eines eBusiness einschließlich Online Branding",
            desc: `Als Teil des Projektteams trug ich maßgeblich zur Entwicklung eines Online-Video-Shops bei, der sich durch modernes Design, kreative Content-Erstellung und integrierte erklärende Produktvideos auszeichnet. Die Plattform wurde mit WordPress und einer Reihe von Plugins und Anpassungen realisiert, um nicht nur optisch, sondern auch inhaltlich zu überzeugen. Durch die enge Zusammenarbeit im Team und die kontinuierliche Abstimmung mit dem Kunden wurden dessen Wünsche effektiv in das Projekt integriert, was meine Kompetenzen in den Bereichen Implementierung, Kommunikation und Kundenorientierung unter Beweis stellt. Dieses Projekt verdeutlicht meine Fähigkeit, innovative digitale Lösungen im Teamkontext zu entwickeln und umzusetzen.`,
          },
          watchtrainer: {
            title:
              "Sportler Stärken: Frontend-Innovation für eine Wearable-Sportplattform",
            desc: `WatchTrainer spielte eine bedeutende Rolle in der Weiterentwicklung tragbarer Sporttechnologien und bot eine auf dem Austausch basierende Sportplattform, die die Möglichkeiten von Geräten wie der Apple Watch nutzt. In diesem innovativen Projekt war ich für die Leitung der Frontend-Entwicklung mit Vue.js verantwortlich, um eine intuitive und nahtlose Benutzererfahrung zu sicherstellen. Diese Erfahrung hebt meine Fähigkeit hervor, ansprechende digitale Lösungen zu entwickeln, die sich reibungslos in die neueste Technologie einfügen.`,
          },
        },
      },
    },
  },
};
</script>
