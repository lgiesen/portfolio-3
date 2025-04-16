<script setup lang="ts">
import darkBg from '@/assets/background/dark/rectangle.svg';
import lightBg from '@/assets/background/light/rectangle.svg';
import CardGroup from '@/components/CardGroup.vue';
import Parallax from '@/components/Parallax.vue';
import SocialContactSection from '@/components/SocialContactSection.vue';
import { computed } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme()
const currentTheme = computed(() => theme.global.name.value) // 'light' oder 'dark'
const rectangleBackground = computed(() =>
currentTheme.value === 'dark' ? darkBg : lightBg
)
const parallaxImagePath = new URL('@/assets/background/Aegina_port.webp', import.meta.url).href;
const smallImgPath = new URL('@/assets/workExperience/kongress-presentation.webp', import.meta.url).href;
const employment = [
  {
    title_en: "First Chairman - Human Resources, Quality Management and IT",
    title_de:
      "Vorstandsvorsitzender für Personal, Qualitätsmanagement und IT",
    institution: "move",
    link: "https://move-ev.de/",
    imageSrc: require("@/assets/workExperience/move-title.png"),
    location: "Münster",
    startDate: "08/2023",
    endDate: "07/2024",
    description_en: `Through unwavering dedication and a relentless pursuit of knowledge, I honed my leadership skills to become the inaugural chairman overseeing Human Resources, Quality Management, and IT within our student consultancy. Early on, I recognized the power of effective communication and empathy in fostering a collaborative environment. Delving into diverse projects, I cultivated a keen eye for quality and a methodical approach to problem-solving. Embracing the rapid evolution of technology, I immersed myself in IT solutions, ensuring our consultancy operated seamlessly. This journey has not only shaped me into a leader but also instilled a deep sense of responsibility to empower and inspire others in their professional journeys.`,
    description_de: `Durch unerschütterliches Engagement und unermüdliches Streben nach Wissen habe ich meine Führungsqualitäten verfeinert und wurde zum ersten Vorsitzenden, der für die Bereiche Personalwesen, Qualitätsmanagement und IT in unserer studentischen Unternehmensberatung zuständig ist. Schon früh erkannte ich, wie wichtig effektive Kommunikation und Einfühlungsvermögen für die Förderung eines kollaborativen Umfelds sind. Indem ich mich in verschiedene Projekte einarbeitete, entwickelte ich ein scharfes Auge für Qualität und einen methodischen Ansatz zur Problemlösung. Mit der rasanten Entwicklung der Technologie beschäftigte ich mich eingehend mit IT-Lösungen und sorgte dafür, dass unser Beratungsunternehmen reibungslos funktioniert. Dieser Weg hat mich nicht nur zu einer Führungspersönlichkeit gemacht, sondern mir auch ein tiefes Verantwortungsgefühl dafür vermittelt, andere auf ihrem beruflichen Weg zu unterstützen und zu inspirieren.`,
  },
  {
    title_en: "Software Developer",
    title_de: "Software Developer",
    institution: "zeb",
    link: "https://zeb-consulting.com/en-DE",
    imageSrc: require("@/assets/workExperience/zeb.png"),
    location: "Münster",
    startDate: "08/2021",
    endDate: "12/2021",
    description_en: `During my software development internship at zeb, I worked on a Machine 
        Learning (ML) project where I gained experience with Natural Language Processing (NLP). 
        By selecting and implementing an alternative Support Vector Machine (SVM) approach, I 
        was able to increase the accuracy of the ML algorithm from 50% to 83%.`,
    description_de: `Im Software Development Praktikum bei zeb habe ich an einem Machine 
        Learning (ML) Projekt gearbeitet, wo ich Erfahrung mit Natural Language Processing (NLP) 
        gemacht habe. Durch die Auswahl und Implementation eines alternativen Support Vector Machine 
        (SVM) Ansatzes konnte ich die ML-Algorithmus Genauigkeit von 50% auf 83% erhöhen.`,
  },
  {
    title_en: "Working Student in Data Science",
    title_de: "Werkstudent in Data Science",
    institution: "viadee",
    link: "https://www.viadee.de/",
    imageSrc: require("@/assets/workExperience/viadee.png"),
    location: "Münster",
    startDate: "09/2022",
    endDate: "08/2023",
    description_en: `Application of Machine Learing in IT-projects. Analysis and visualization of data in a Data Science context.`,
    description_de: `Anwendung von Machine Learing in IT-Projekten. Analyse und Visualisierung von Daten in einem Data Science-Kontext.`,
  },
  {
    title_en: "Student Assistant",
    title_de: "Studentische Hilfskraft",
    institution: "ERCIS / Uni Münster",
    link: "https://www.ercis.org/",
    imageSrc: require("@/assets/workExperience/ERCIS.png"),
    location: "Münster",
    startDate: "10/2019",
    endDate: "03/2023",
    description_en: `I enthusiastically work as a student assistant for Dr. Chasin 
        at the chair of Information Systems and Information Management
        for IT projects and contribute to scientific research at the European Research 
        Center for Information Systems / University of Münster, where I gained insights 
        into modern technologies and co-create and prepare lectures.`,
    description_de: `Mit Begeisterung arbeite ich als studentische Hilfskraft für 
        Dr. Chasin an IT- Projekten und wirke an der wissenschaftlichen Forschung am 
        European Research Center for Information Systems und Uni Münster mit, wo ich Einblicke in 
        moderne Technologien gewinnen und Vorlesungen mitgestalten und vorbereiten konnte.`,
  },
  {
    title_en: "Student Consultant",
    title_de: "Studentischer Berater",
    institution: "move",
    link: "https://move-ev.de/",
    imageSrc: require("@/assets/workExperience/move-title.png"),
    location: "Münster",
    startDate: "03/2019",
    endDate: "",
    description_en: `At move, I developed excellent communication skills and learned 
        how to contribute an innovative perspective to foster productive teamwork. 
        Through intense group work in projects, my work became very goal-orientated, and 
        I improved my time management and developed the ability of precise project planning.`,
    description_de: `Bei move habe ich große Kommunikationsfähigkeiten entwickelt und
        gelernt, eine innovative Perspektive einzubringen, um produktive Teamarbeit zu fördern. 
        Durch den Verlauf meiner Projekte mit intensiver Gruppenarbeit erwarb ich die Fähigkeit 
        zu zielorientiertem Arbeiten, überzeugendem Zeitmanagement und präziser Projektplanung.`,
  },
  // {
  //   title_en: "Online Payment Internship",
  //   title_de: "Online Payment Praktikum",
  //   institution: "SEPAone",
  //   link: "https://www.sepaone.com/",
  //   imageSrc: require("@/assets/workExperience/SEPAone.png"),
  //   location: "Gütersloh",
  //   startDate: "04/2018",
  //   endDate: "05/2018",
  //   description_en: `Data Process Management for Customers: Customer support on how to
  //   get started with the online payment process.`,
  //   description_de: `Datenprozessmanagement für Kunden: Kundenunterstützung bei der
  //   Einstieg in den Online-Zahlungsprozess.`
  // },
  // {
  //   title_en: "Assistant of Insolvency Administrator",
  //   title_de: "Insolvenzverwaltung Praktikum",
  //   institution: "BRL",
  //   link: "https://www.brl.de/de/disziplinen/sanierung-und-insolvenz",
  //   imageSrc: require("@/assets/workExperience/BRL.png"),
  //   location: "Hamburg",
  //   startDate: "06/2016",
  //   endDate: "07/2016",
  //   description_en: `Through the assistance of insolvency administrators and writing insolvency
  //   reports at Boege Rohde Luebbehuesen, I gained experience in the inisolvency process.`,
  //   description_de: `Durch die Unterstützung von Insolvenzverwaltern und das Schreiben von
  //   Insolvenzberichten bei Boege Rohde Luebbehuesen konnte ich Erfahrungen im Insolvenzverfahren sammeln.`
  // }
]
const education = [
  {
    title_en: "Information Systems M. Sc.",
    title_de: "Information Systems M. Sc.",
    institution: "Uni Münster",
    link: "https://www.wi.uni-muenster.de/de/willkommen",
    imageSrc: require("@/assets/workExperience/Uni Münster.png"),
    location: "Münster",
    startDate: "04/2022",
    endDate: "",
    description_en: `I am currently studying at the University of Münster with a focus on Business Intelligence. 
        Other domains of study are Process Management, Information Systems Development and Business Networks.`,
    description_de: `Aktuell studiere ich an der Universität Münster mit dem Schwerpunkt Business Intelligence. 
        Weitere Studienschwerpunkte sind Prozessmanagement, Entwicklung von Informationssystemen und Business Networks.`,
  },
  {
    title_en: "Business Informatics B. Sc.",
    title_de: "Wirtschaftsinformatik B. Sc.",
    institution: "Uni Münster",
    link: "https://www.wi.uni-muenster.de/de/willkommen",
    imageSrc: require("@/assets/workExperience/Uni Münster.png"),
    location: "Münster",
    startDate: "10/2018",
    endDate: "03/2022",
    description_en: `At the University of Münster, I acquired foundational knowledge
        about economics, information systems, and computer science. Additionally, I 
        picked up modeling languages and various programming languages, which I 
        improved in my free time. Moreover, my project seminar team successfully
        implemented a complex web application, where I led the frontend team. 
        In addition, I acquired important deep learning skills in the advanced module "Deep Learning with Python".
        These have paved the way and laid a foundation for my bachelor thesis, where I implemented a U-Net 
        (technological Deep Learning approach) to derive the tree stock from satellite images.`,
    description_de: `An der Uni Münster eignete ich mir grundlegendes Wissen der BWL, Wirtschafts- 
        und Informatik an. Zusätzlich habe ich mir Modellierungs- und verschiedene Programmiersprachen 
        angeeignet, die ich in meiner Freizeit verbessert habe. Außerdem leitete ich das 
        Projektseminar Frontend-Team, in dem eine komplexe Webanwendung erfolgreich implementiert wurde. 
        Darüber hinaus habe ich im Vertiefungsmodul "Deep Learning mit Python" wichtige Deep Learning 
        Kenntnisse erworben. Diese haben eine Basis für meine Bachelorarbeit gelegt, wo ich ein U-Net 
        (technologischer Deep Learning Ansatz) implementieren habe, um aus Satelitenbilder 
        Baumbestände abzuleiten.`,
  },
  {
    title_en: "Abitur (= A-levels)",
    title_de: "Abitur",
    institution: "ESG",
    link: "https://esg-guetersloh.de/",
    imageSrc: require("@/assets/workExperience/ESG.png"),
    location: "Gütersloh",
    startDate: "06/2016",
    endDate: "06/2018",
    description_en: `I completed my Abitur with a GPA of 2.1 at the Evangelisch 
        Stiftischem Gymnasium, which is a technology-oriented secondary school. My advanced modules were Maths and English.`,
    description_de: `Mit einem Notendurchschnitt von 2,1 habe ich mein Abitur an 
        einem technisch orientierten Gymnasium abgeschlossen. Meine Leistungskurse waren Mathe und Englisch.`,
  },
]
</script>

<template>
  <div>
    <!-- Parallax section -->
    <Parallax :parallaxImage="parallaxImagePath" overlayColor="rgba(37,81,126,.5)" translationKey="experience"
      :smallImgPath="smallImgPath" imgAlt="Leo Giesen Presentation" />

    <!-- Main content (avoid wrapping in <section> to keep background full width) -->
      <article>
      <v-img :src="rectangleBackground">
        <section id="scroll">
          <!-- Work Experience -->
          <CardGroup id="experience" :sectionTitle="$t('experience.workExperience')" :iterableObject="employment" />
          <!-- Education -->
          <CardGroup id="education" :sectionTitle="$t('experience.education')" :iterableObject="education" />
        </section>
      </v-img>
    </article>
    
    <!-- Social contact section -->
    <SocialContactSection class="mt-12" />
  </div>

  <!-- Recommendation
  section
    v-container 
      h1.display-2.font-weight-thin.mb-12.text-center {{ $t("recommendationsTitle") }}
      v-carousel
        v-carousel-item(v-for="(recommendation, index) in recommendations" 
          :key="index" :src="recommendation.src" 
          reverse-transition="fade-transition" transition="fade-transition")
          v-row.fill-height(align="center")
            v-col.text-center.pa-12
              v-container.pa-12
                h2.mb-5.display-1 {{ recommendation.title }}
                h4.ma-5.overline {{ recommendation.location }}
                p.mt-10.font-italic.text-justify 
                  | "{{ isDE ? recommendation.description_de : recommendation.description_en }}" -->

</template>