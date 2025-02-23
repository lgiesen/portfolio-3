<template lang="pug">
div
  section.fullwidth
    div
      HeroBackgroundGradientGroup.p-absolute
      v-container.text-center
        v-row.pa-md-12.pb-md-0.align-center.justify-center.h-100vh-less(fill-height fluid)
          v-col.col-12.col-md-6
            //- The v-card makes the title visible, because the SVG background was more prominent
            v-card.white--text.transparent-background(outlined)
              h1.display-2.font-weight-thin {{ $t("homeHero.title") }}
              h1.subtitle-1 {{ $t("homeHero.subtitle") }}
            ScrollHero
          v-col.col-12.col-md-6.col-lg-4
            v-card
              v-img(alt="Leo Giesen Profil" src="@/assets/profile/leo-giesen.webp" max-height="60vh")
    //- Intro card text
    //- Create another section to create overlap with hero area 
    //- while still maintaining the max-width of all sections
    section
      v-container#scroll
        v-card.pa-4
          v-row
            v-col
              //- with other column: .col-12.col-md-6.pr-4
              v-card-title.justify-center {{ $t("homeIntro.title") }}
              v-card-text.center-items.text-justify {{ $t("homeIntro.text") }}
                v-btn.gradient-btn.pa-6.ma-8.mt-12(rounded
                  :href="'/CV/CV-Leo-Giesen-' + this.$i18n.locale.toUpperCase() +'.pdf'")
                  v-icon mdi-account-tie
                  | {{ $t("homeIntro.downloadCV") }}
  article
    section
      h2.display-1 Skills
      v-container
        v-row.d-flex.flex-wrap.justify-space-between
          //- skillCardGroup holds the title and where to find the corresponding text of the skill card in i18n 
          v-col.col-12.col-md-6(v-for="card in skillCardGroup" :key="card.title")
            v-card(height="100%" tile max-width="94vw")
              div.animated-gradient-box.in
                v-img.d-flex.white--text.align-end(max-height="200px" :src="card.backgroundImage" :alt="card.aria"
                  :gradient="$store.getters.isDarkTheme ? 'rgba(0,0,0,.6), rgba(0,0,0,.9)' : 'rgb(255,255,255,.6), rgb(255,255,255,.9)'")
                  //- single line requires .justify-center and multiline .text-center
                  v-card-title.justify-center.text-center
                    pre
                      h2.gradient-text(width="94vw" max-width="94vw" min-height="400") {{ $t("skills." + card.title) }}
              v-col.seperatorIcon.py-0
                v-btn(elevation="15" fab color="background")
                  v-icon(color="primary") mdi-{{ card.icon }}
              v-card-text
                p.my-0.py-0.text-justify(v-html="$t('skills.' + card.textSrc)")
</template>

<script>
import HeroBackgroundGradientGroup from "@/assets/background/HeroBackgroundGradientGroup.vue";
import ScrollHero from "@/components/scroll/ScrollHero.vue";
export default {
  name: "Home",
  components: {
    HeroBackgroundGradientGroup,
    ScrollHero,
  },
  data: () => ({
    skillCardGroup: [
      {
        title: "mlbiTitle",
        textSrc: "mlbi",
        backgroundImage: require("@/assets/home/machine_learning.webp"),
        icon: "language-python",
        aria: "Machine Learning and Artificial Intelligence",
      },
      {
        title: "dataScienceTitle",
        textSrc: "dataScienceText",
        backgroundImage: require("@/assets/home/data-science.webp"),
        icon: "database-search",
        aria: "Data Science and Data Analysis",
      },
      {
        title: "feTitle",
        textSrc: "frontend",
        backgroundImage: require("@/assets/home/web_dev.webp"),
        icon: "vuejs",
        aria: "Front-end Web Development Vue.js",
      },
      {
        title: "beTitle",
        textSrc: "backend",
        backgroundImage: require("@/assets/home/backend.webp"),
        icon: "database", //api
        aria: "API and backend Web Development",
      },
      {
        title: "itArchitectureTitle",
        textSrc: "itArchitecture",
        backgroundImage: require("@/assets/home/it-architecture.webp"),
        icon: "lan-connect", // progress-wrench
        aria: "It Architecture",
      },
      {
        title: "officeTitle",
        textSrc: "office",
        backgroundImage: require("@/assets/home/microsoft_office_365.webp"),
        icon: "microsoft-office",
        aria: "Microsoft Office and Microsoft 365",
      },
      // {
      //   title: "pmTitle",
      //   textSrc: "processManagement",
      //   backgroundImage: require("@/assets/home/process.webp"),
      //   icon: "arrow-decision",
      //   aria: "Process Management"
      // },
      {
        title: "sdevTitle",
        textSrc: "softwareDev",
        backgroundImage: require("@/assets/home/software_development.webp"),
        icon: "language-java",
        aria: "Software Development",
      },
      {
        title: "otherTitle",
        textSrc: "other",
        backgroundImage: require("@/assets/home/desk.webp"),
        icon: "star",
        aria: "Other",
      },
      // {
      //   title: "Soft Skills",
      //   textSrc: "softSkills",
      //   backgroundImage: require("@/assets/home/office.webp"),
      //   icon: "account-group",
      //   aria: ""
      // }
    ],
  }),
  i18n: {
    messages: {
      en: {
        homeHero: {
          title: "Progress with Passion",
          subtitle:
            "Fascination for revolutionizing information technologies and their application in business",
        },
        homeIntro: {
          title: "I love to learn and apply my knowledge in dynamic teams!",
          text: `
            I am fascinated by information technologies, especially Machine Learning. This passion drives me to study Information Systems at the University of Münster with a focus on Business Intelligence. Through internships and part-time work, I have applied my theoretical knowledge in practice. In personal leisure projects and practical projects at the student consultancy move, I continuously enhance my analytical and conceptual skills. Currently, I aim to further develop my leadership qualities as Chairman of the Board and project manager at move.I am fascinated by information technologies, especially Machine Learning. This passion drives me to study Information Systems at the University of Münster with a focus on Business Intelligence. Through internships and part-time work, I have applied my theoretical knowledge in practice. In personal leisure projects and practical projects at the student consultancy move, I continuously enhance my analytical and conceptual skills. Currently, I aim to further develop my leadership qualities as Chairman of the Board and project manager at move.
          `,
          downloadCV: "CV",
        },
        skills: {
          mlbiTitle: `Artificial Intelligence \n& Machine Learning`,
          mlbi: `
          My journey in machine learning started with acquiring the basics of Python during my studies and through online courses in my spare time. 
          Through a 
            <a href="/#/projects#DLCaseStudy">case study</a>  
          in the advanced module "Deep Learning with Python" and the preparation of a lecture on the introduction to machine learning, 
          I gained insights into how artificial intelligence works, its current limitations, and possibilities. 
          I deepened my machine learning knowledge in an 
            <a href="/#/projects#NLP">internship</a>, 
          another
            <a href="/#/projects#ForestHeight">case study</a> 
          about regressing the tree heights in the German Black Forest, and my 
            <a href="/#/projects#BA">bachelor thesis</a> 
          on the semantic segmentation of trees in South Africa using satellite imagery. 
          Moreover, I touched on machine learning in further projects, such as a 
            <a href="/#/projects#DImensaToday">smart dining recommender system</a> and the 
            <a href="/#/projects#AutomationOfDocumentChecks">automation of document checks</a>.
          This fascination led me to choose it as a focus in my Information Systems studies. 
          The application of these technologies in various projects not only broadened my expertise but also reinforced my passion for developing innovative solutions that address real-world problems and create genuine value.
          `,
          dataScienceTitle: `Data Science &\nData Analysis`,
          dataScienceText: `
          During my tenure as a Data Scientist at the IT consultancy 
            <a href="/#/experience#card-viadee">viadee</a>, 
          I gained invaluable experience in data science and data analysis. 
          My work focused on improving target business processes in Industry 4.0, 
          utilizing BPMN 2.0, Machine Learning, Data Analytics, Process Mining, and research. 
          These activities allowed me to deepen my theoretical knowledge and practical implementation of machine learning models and data analysis techniques. 
          Participating in a Microsoft PowerBI workshop from the 
            <a href="https://bdsu.de/unternehmen/" target="_blank">BDSU</a>
          expanded my capabilities in visual data analysis, 
          enabling me to effectively interpret and visualize complex datasets. 
          A notable related project is the 
            <a href="/#/projects#UASentimentAnalysis">analysis</a> 
          of political sentiment towards Donald Trump and Boris Johnson through social media, 
          where I employed advanced data analysis methods to gain geographical insights into public opinion. 
          These experiences highlight my ability to apply data science and analysis to obtain meaningful insights and support strategic decisions.
          `,
          feTitle: "Frontend Web\nDevelopment",
          frontend: `
          My web development skills comprise from webscraping, frontend to backend development, utilized in a myriad of projects.
          I have developed the <strong>frontend</strong> of multiple websites, including a <a href="/#/projects#goc">web-based simulation platform</a> and the notable project of a <a href="/#/projects#DImensaToday">smart dining recommender system</a>. 
          My own <a href="/#/projects#portfolioWebDevelopment">portfolio website</a> and the frontend for the <a href="/#/projects#AutomationOfDocumentChecks">automation of document checks</a> project were independently executed by me.
          Additionally, I worked on the frontend of <a href="/#/projects#watchtrainer">watchTrainer</a>.
          These projects were programmed using the Vue.js framework, and I am also comfortable with CMS like WordPress, achieving customer-focused results in projects, as seen in the <a href="/#/projects#eBusinessWebDevelopment">development of an eBusiness</a> and <a href="/#/projects#lawFirmWebDevelopment">law firm website</a>.
          `,

          beTitle: "Backend &\nDatabases",
          backend: `
          Primarily, I communicated with the backend via REST or GraphQL API calls.
          I have some experience with it and <strong>databases</strong>, e.g., building an Entity-Relationship Model (ERM) and retrieving data in SQL.
          These skills were acquired and applied at university and in projects like <a href="/#/projects#watchtrainer">watchTrainer</a> and <a href="/#/projects#goc">Game of Competences</a>. 
          I extracted data from websites in multiple projects.
          For example, I built a <a href="/#/projects#forum_web_scraper">scalable web scraper</a> for discussion forums to identify innovation potential.
          Additionally, I applied <strong>webscraping</strong> at <a href="/#/experience#card-move">move</a> in an internal competition to determine the winner of Bundesliga matches with high certainty.
          `,

          itArchitectureTitle: "IT-Architecture",
          itArchitecture: `
          In the Enterprise Architecture Management module, I honed my skills in modeling the structure of organizations with an IT focus using ArchiMate.
          This foundation allowed me to conduct a detailed case study and leverage the TOGAF Framework by The Open Group.
          A significant project at 
            <a href="/#/experience#card-move">move</a> 
          involved analyzing and 
          <a href="/#/projects#ITArchitecture">optimizing the IT infrastructure</a> 
          of a public transportation company, employing TOGAF and ArchiMate to address efficiency bottlenecks in areas such as drive access, calendar management, decision-making, and video conferencing.
          Developing a comprehensive transformation plan, I spearheaded the integration of Microsoft 365 to enhance collaboration and communication, paving the way for cloud transition.
          The customer was so pleased with the project performance that the company commissioned another consulting project with me as a project lead.
          Leading this project, I demonstrated my adeptness in IT project management, mastery of modern IT architectures, and the innovation of solutions for complex technical issues.
          `,

          officeTitle: "Microsoft Office 365",
          office: `
          Since seventh grade, I've been using <strong>Microsoft PowerPoint</strong>, <strong>Word</strong>, and <strong>Excel</strong> almost daily, honing my skills further while preparing lectures in PowerPoint as a student assistant at the <a href="/#/experience#experience">Chair of Information Systems</a> at the University of Münster.
          My expertise with Microsoft Office deepened through creating various presentations at <a href="/#/experience#card-move">move</a> and attending workshops like BCG and BCG Platinion, enhancing my presentation skills.
          I've dedicated considerable time to the fast generation and optimization of presentations in university projects and at move, including correcting presentations for several candidate projects.
          Moreover, I've earned PowerPoint and Excel certifications at the University of Münster, which only scratch the surface of my abilities.
          I enjoy using ThinkCell, and I'm proficient with Efficient Elements and macros.
          Recently, I've worked in the IT department at move, utilizing <strong>Microsoft PowerApps</strong> and <strong>Flows</strong> integrated with <strong>SharePoint</strong> databases, showcasing my versatility and capability to leverage Microsoft Office 365's full suite to streamline processes and enhance productivity.
          `,

          otherTitle: "Other Skills",
          other: `
          At university, I studied and applied <strong>Process Mining</strong> and <strong>Modelling</strong> 
          with BPMN and EPK. Additionally, I learned the
            <strong>SCRUM</strong> at my university and in a 
            <a href="https://www.lhconsulting.com/" target="_blank">Lufthansa Consulting</a> 
          workshop at the 
            <a href="https://consultingcontact.de/" target="_blank">Consulting Contact</a>. 
          This helped me to apply it in real-life situations, such as the project seminar
            <a href="/#/projects#goc">Game of Competences</a> 
          and two web development projects at 
            <a href="/#/experience#card-move">move</a>.`,

          // pmTitle: "Process Management",
          // processManagement: `PM`,

          sdevTitle: "Software\nDevelopment",
          softwareDev: `A Software Developer needs to have a mathematical understanding and aptitude 
          as well as <strong>problem-solving</strong> skills. These were taught in my Information Systems course along 
          with programming languages like <strong>Java</strong>. In all honesty, I prefer <strong>JavaScript</strong> and already 
          implemented a 
            <a href="/#/projects#goc">web app</a>  with it.
          In the project, I enhanced my organizational, teamwork, and 
          <strong>time management</strong> skills as I led a team of seven fellow students. Thorough work and attention 
          to detail are rewarded in the long term, as I have discovered in the creation process of the 
          web app.
          I am looking forward to gaining further experience in Software Development and continually 
          expand my horizon and adapt to the ever- and fast-changing technology trends. `,
        },
      },
      de: {
        homeHero: {
          title: "Fortschritt mit Leidenschaft",
          subtitle:
            "Faszination für revolutionäre Informationstechnologien und deren Anwendung in der Wirtschaft",
        },
        homeIntro: {
          title: `Ich liebe es zu lernen und mein Wissen in dynamischen Teams anzuwenden!`,
          text: `
            Ich bin fasziniert von Informations-Technologien, insbesondere Machine Learning. Diese Leidenschaft treibt mich an, Information Systems an der Universität Münster mit Schwerpunkt Business Intelligence zu studieren. Durch Praktika und Werkstudententätigkeiten habe ich mein theoretisches Wissen in die Praxis umgesetzt. In persönlichen und Praxisprojekten bei der studentischen Unternehmensberatung move erweitere ich kontinuierlich meine analytischen und konzeptionellen Fähigkeiten. Derzeit strebe ich an, meine Führungsqualitäten als Vorstandsvorsitzender und Projektleiter bei move weiter auszubauen.Ich bin fasziniert von Informations-Technologien, insb. Machine Learning. Diese Leidenschaft treibt mich an, Information Systems an der Universität Münster mit Schwerpunkt Business Intelligence zu studieren. Durch Praktika und Werkstudententätigkeiten habe ich mein theoretisches Wissen in die Praxis umgesetzt. In persönlichen und Praxisprojekten bei der studentischen Unternehmensberatung move erweitere ich kontinuierlich meine analytischen und konzeptionellen Fähigkeiten. Derzeit strebe ich an, meine Führungsqualitäten als Vorstandsvorsitzender und Projektleiter bei move weiter auszubauen.
          `,
          downloadCV: "Lebenslauf",
        },
        skills: {
          mlbiTitle: `Artificial Intelligence \n& Machine Learning`,
          mlbi: `
          Meine Reise im Bereich Machine Learning begann mit dem Erlernen der Python-Grundlagen während meines Studiums und durch Online-Kurse in meiner Freizeit. 
          Durch eine 
            <a href="/#/projects#DLCaseStudy">Fallstudie</a>  
          im fortgeschrittenen Modul „Deep Learning mit Python“ und die Vorbereitung einer Vorlesung zur Einführung in Machine Learning 
          erlangte ich Einblicke, wie künstliche Intelligenz funktioniert, ihre aktuellen Grenzen und Möglichkeiten. 
          Mein Wissen im Bereich Machine Learning vertiefte ich in einem 
            <a href="/#/projects#NLP">Praktikum</a>, 
          einer weiteren 
            <a href="/#/projects#ForestHeight">Fallstudie</a> 
          über die Regression der Baumhöhen im Schwarzwald, und meiner 
            <a href="/#/projects#BA">Bachelorarbeit</a> 
          zur semantischen Segmentierung von Bäumen in Südafrika mit Satellitenbildern. 
          Darüber hinaus befasste ich mich in weiteren Projekten mit Machine Learning, wie einem 
            <a href="/#/projects#DImensaToday">intelligenten Empfehlungssystem für die Mensa</a> und der 
            <a href="/#/projects#AutomationOfDocumentChecks">Automatisierung von Dokumentenprüfungen</a>.
          Aufgrund von dieser Faszination für Machine Learning habe ich es auch als Schwerpunkt in meinem Studium gewählt.
          Die Anwendung dieser Technologien in verschiedenen Projekten erweiterte nicht nur mein Fachwissen, sondern verstärkte auch meine Leidenschaft für die Entwicklung innovativer Lösungen, die reale Probleme adressieren und echten Mehrwert schaffen.
          `,

          dataScienceTitle: `Data Science &\nData Analysis`,
          dataScienceText: `
          In meiner Zeit als Data Scientist bei der IT-Beratung 
            <a href="/#/experience#card-viadee">viadee</a> 
          habe ich wertvolle Erfahrungen im Bereich Data Science und Datenanalyse gesammelt.
          Meine Arbeit konzentrierte sich auf die Verbesserung von Geschäftsprozessen in der Industrie 4.0, unter Einsatz von BPMN 2.0, Machine Learning, Datenanalytik, Process Mining und Forschung.
          Diese Tätigkeiten ermöglichten es mir, meine theoretischen Kenntnisse und die praktische Umsetzung von Machine Learning-Modellen sowie Datenanalysemethoden zu vertiefen.
          Durch die Teilnahme an einem Microsoft PowerBI-Workshop bei dem 
            <a href="https://bdsu.de/unternehmen/" target="_blank">BDSU</a>
          erweiterte ich meine Fähigkeiten in der visuellen Datenanalyse, was mir ermöglichte, komplexe Datensätze effektiv zu interpretieren und zu visualisieren.
          Ein markantes Projekt in diesem Kontext war die 
            <a href="/#/projects#UASentimentAnalysis">Analyse</a> 
          der politischen Stimmung zu Donald Trump und Boris Johnson durch soziale Medien, wo ich mittels fortschrittlicher Datenanalysemethoden geografische Einblicke in die öffentliche Meinung gewann.
          Diese Erfahrungen unterstreichen meine Fähigkeit, Datenwissenschaft und -analyse anzuwenden, um fundierte Einblicke zu gewinnen und strategische Entscheidungen zu unterstützen.
          `,

          feTitle: "Web\nDevelopment",
          frontend: `
          In meinem Portfolio erstrecken sich die Webentwicklungskompetenzen vom Frontend über Webscraping bis hin zu Backend und Datenbanken, zum Einsatz gekommen in einer Vielzahl von Projekten.
          Ich habe das <strong>Frontend</strong> mehrerer Websites entwickelt, einschließlich einer <a href="/#/projects#goc">webbasierten Simulationsplattform</a> und einem bemerkenswerten <a href="/#/projects#DImensaToday">intelligenten Mensa-Empfehlungssystem</a>. 
          Auch meine eigene <a href="/#/projects#portfolioWebDevelopment">Portfolio-Website</a> sowie das Frontend für das Projekt <a href="/#/projects#AutomationOfDocumentChecks">zur Automatisierung von Dokumentenprüfungen</a> stammen aus meiner Hand.
          Darüber hinaus war ich beim Frontend von <a href="/#/projects#watchtrainer">watchTrainer</a> maßgeblich beteiligt.
          Diese Projekte wurden mit Vue.js realisiert. Ebenso sicher bewege ich mich im Umgang mit CMS wie WordPress, was in Projekten wie der <a href="/#/projects#eBusinessWebDevelopment">Entwicklung eines eBusiness</a> und der <a href="/#/projects#lawFirmWebDevelopment">Webentwicklung für eine Anwaltskanzlei</a> zum Ausdruck kommt, die ich eigenständig umgesetzt habe. 
          `,

          beTitle: "Backend &\nDatenbanken",
          backend: `
          Für die Kommunikation mit dem Backend nutzte ich vorrangig REST oder GraphQL API-Aufrufe und sammelte Erfahrungen mit <strong>Datenbanken</strong>, beispielsweise beim Erstellen von Entity-Relationship-Modellen (ERM) und beim Umgang mit SQL. Diese Fähigkeiten kamen sowohl in universitären Projekten als auch in Arbeiten wie <a href="/#/projects#watchtrainer">watchTrainer</a> und <a href="/#/projects#goc">Game of Competences</a> zur Anwendung.
          Beim <strong>Webscraping</strong> konnte ich in mehreren Projekten wertvolle Daten von Websites extrahieren. So entwickelte ich beispielsweise für Diskussionsforen einen <a href="/#/projects#forum_web_scraper">skalierbaren Web-Scraper</a>, um Innovationspotenziale zu erkennen. Zusätzlich setzte ich Webscraping bei <a href="/#/experience#card-move">move</a> in einem internen Wettbewerb ein, um mit hoher Sicherheit den Gewinner von Bundesliga-Spielen vorherzusagen.
          `,

          itArchitectureTitle: "IT-Architektur",
          itArchitecture: `
          Im Modul für Enterprise Architekturmanagement spezialisierte ich mich auf die Modellierung der (IT)-Unternehmensstruktur mit ArchiMate. 
          Diese Grundlage ermöglichte es mir, eine detaillierte Fallstudie durchzuführen und das TOGAF-Framework von The Open Group zu nutzen. 
          Ein bedeutendes Projekt bei 
            <a href="/#/experience#card-move">move</a> 
          umfasste die Analyse und 
            <a href="/#/projects#ITArchitecture">Optimierung der IT-Infrastruktur</a> 
          eines Unternehmens im öffentlichen Verkehrsbereich, unter Einsatz von TOGAF und ArchiMate, um Effizienzengpässe in Bereichen wie Laufwerkzugriff, Kalendermanagement, Entscheidungsfindung und Videokonferenzen zu beheben. 
          Mit der Entwicklung eines umfassenden Transformationsplans führte ich die Integration von Microsoft 365 durch, um die Zusammenarbeit und Kommunikation zu verbessern und den Weg für den Übergang in die Cloud zu ebnen. 
          Der Kunde war mit der Leistung des Projekts so zufrieden, dass das Unternehmen mich für ein weiteres Beratungsprojekt als Projektleiter beauftragte. 
          Die Leitung dieses Projekts unterstrich meine Geschicklichkeit im IT-Projektmanagement, meine Beherrschung moderner IT-Architekturen und die Innovation von Lösungen für komplexe technische Herausforderungen.
          `,

          officeTitle: "Microsoft Office 365",
          office: `
          Seit der siebten Klasse arbeite ich nahezu täglich mit <strong>Microsoft PowerPoint</strong>, <strong>Word</strong> und <strong>Excel</strong>, was ich als studentische Hilfskraft am <a href="/#/experience#experience">Lehrstuhl für Wirtschaftsinformatik</a> an der Universität Münster durch die Vorbereitung von PowerPoint-Vorlesungen weiter vertiefte.
          Meine Expertise in Microsoft Office wurde durch die Erstellung verschiedener Präsentationen bei <a href="/#/experience#card-move">move</a> und die Teilnahme an Workshops wie BCG und BCG Platinion weiter gefördert, was meine Präsentationsfähigkeiten erheblich verbesserte.
          In Uni-Projekten und bei move verbrachte ich viel Zeit mit der schnellen Erstellung und Optimierung von Präsentationen, unter anderem durch die Korrektur von Präsentationen für mehrere Anwärterprojekte.
          Zudem habe ich an der Universität Münster Zertifikate für PowerPoint und Excel erworben, die jedoch meine Fähigkeiten nur ansatzweise widerspiegeln.
          Ich setze gerne ThinkCell ein und beherrsche Efficient Elements sowie Makros.
          Zuletzt arbeitete ich bei move in der IT-Abteilung mit <strong>Microsoft PowerApps</strong> und <strong>Flows</strong>, verbunden mit <strong>SharePoint</strong>-Datenbanken, was meine Fähigkeit unterstreicht, das volle Potenzial von Microsoft Office 365 zu nutzen, um Prozesse zu optimieren und die Produktivität zu steigern.
            `,

          // pmTitle: "Prozess Management",
          // processManagement: `PM`,

          sdevTitle: "Software\nEntwicklung",
          softwareDev: `Ein Softwareentwickler muss mathematisches Verständnis und 
            <strong>Problemlösungsfähigkeiten</strong> besitzen. Diese habe ich mir in meinem 
          Studiengang Wirtschaftsinformatik zusammen mit Programmiersprachen wie <strong>Java</strong> angeeignet. 
          Um ehrlich zu sein, bevorzuge ich <strong>JavaScript</strong> und habe damit bereits z.B. eine 
            <a href="/#/projects#goc">Web-App</a> 
          implementiert. In diesem Projekt konnte ich ebenfalls mein 
          <strong>Zeitmanagement</strong>, meine Selbstorganisation als auch die Koordination im Team verbessern, 
          da ich ein Team von sieben Kommilitonen leitete. Gründliches und detailliertes Arbeiten werden langfristig 
          belohnt, wie ich im Verlaufe der Web-App Implementation festgestellt habe. 
          </br>
          Ich freue mich darauf, weitere Erfahrungen in der Softwareentwicklung zu sammeln und meinen Horizont 
          kontinuierlich zu erweitern und mich den sich ständig und schnell ändernden Technologietrends anzupassen.`,

          otherTitle: "Weitere Fähigkeiten",
          other: `An der WWU habe ich <strong>Process Mining</strong> und 
            <strong>Prozessmodellierung</strong> mit BPMN und EPK gelernt. 
          Darüber hinaus habe ich 
            <strong>SCRUM</strong> an meiner Universität und in einem 
            <a href="https://www.lhconsulting.com/" target="_blank">Lufthansa Consulting</a> 
          Workshop bei der 
            <a href="https://consultingcontact.de/" target="_blank">Consulting Contact</a> gelernt. 
          Dieses theoretische Wissen habe ich habe ich in realen Situationen angewendet, wie zum 
          Beispiel im Projektseminar
            <a href="/#/projects#goc">Game of Competences</a> 
          und in zwei Webentwicklungsprojekten bei 
            <a href="/#/experience#card-move">move</a>.`,
        },
      },
    },
  },
};
</script>

<style lang="scss" scoped>
$primary: var(--v-primary-base);
$primaryDark: var(--v-primaryDark-base);
$secondaryLight: var(--v-secondaryLight-base);
$primaryLight: var(--v-primaryLight-base);
$secondary: var(--v-secondary-base);

.seperatorIcon {
  // center icon
  display: flex;
  align-items: center;
  justify-content: center;
  // move icon to top
  position: relative;
  top: -30px;
  // make button not clickable
  pointer-events: none;
}

.gradient-text {
  background: -webkit-linear-gradient(120deg, $secondary, $primaryDark);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.animated-gradient-box {
  position: relative;

  &::after {
    --border-width: 3px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(120deg, $secondary, $primary, $secondary);
    background-size: 300% 300%;
    clip-path: polygon(
      0 100%,
      0 calc(100% - var(--border-width)),
      100% calc(100% - var(--border-width)),
      100% 100%,
      0 100%
    );
    // 0 100%,
    // 0 calc(100% - 3px),
    // 100% calc(100% - 3px),
    // 100% 100%,
    // 0 100%

    // Explanation: https://beyond-paper.com/clip-path-polygons-explained/
    // polygon( We use coordinates to draw: 0 0 is top-left and 100% 0 is the top-right
    //   0% 100%, -> We start in the bottom left (= 0 100%) => result: .
    //   0 calc(100% - 3px), -> Now we define the thinkness of the line, by moving up => result: |
    //   100% calc(100% - 3px), -> Then we move to the right side => result: |‾‾‾‾‾‾‾‾‾‾‾
    //   100% 100%, -> then to the bottom left to mind the border thickness => result: |‾‾‾‾‾‾‾‾‾‾‾|
    //   0 100% -> now we move back to where we began to complete the line
    // );
  }
}

.animated-gradient-box.in:after {
  animation: gradient-animation 4s ease-in-out infinite;
  // With enter-animation:
  // animation: frame-enter 1s forwards ease-in-out reverse,
  //   gradient-animation 4s ease-in-out infinite;
}

/* motion */
@keyframes gradient-animation {
  0% {
    background-position: 15% 0%;
  }

  50% {
    background-position: 85% 100%;
  }

  100% {
    background-position: 15% 0%;
  }
}
</style>
