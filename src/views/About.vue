<template lang="pug">
div
  Parallax(
    :parallaxImage="parallaxImagePath"
    overlayColor="rgba(38,145,66,.3)" 
    translationKey="about"
    :smallImgPath="smallImgPath"
    imgAlt="Leo Giesen Profil")

  //- About me texts alternating with corresponding images
  article
    section#scroll
      h3.display-1.font-weight-thin.text-center {{ $t("introHeader") }}
      v-container.text-justify
        //- friends and family
        v-row.justify-center
          v-col.col-11.col-md-6
            v-img(alt="Leo Giesen Familie" src="@/assets/about/standesamt-familie.webp" :max-width="imageWidth")
          v-col.col-11.col-md-6
            p {{ $t("friendsAndFamily") }}
            //- career
            p(v-html="$t('career')")
          //- TODO Link Erfahrungsbericht & Projekt does not work
          //- sport
        v-row.justify-center
          v-col.col-11.col-md-6(order-md="2")
            v-img(alt="Ski fahren mit HSP" src="@/assets/about/ski-aufsteigen.webp" :max-width="imageWidth" max-height="400px")
          v-col.col-11.col-md-6(order-md="1")
            p(v-html="$t('sport')")
        //- travel
        v-row.justify-center
          v-col.col-11.col-md-6(order-md="2")
            p(v-html="$t('travel')")
            p {{ $t("quote") }}
            Quote(:quoteText="this.quotes[0].quoteText" :quoteAuthor="this.quotes[0].quoteAuthor")
          v-col.col-11.col-md-6(order-md="1")
            v-img(alt="Reisen Japan Landschaft" src="@/assets/about/Fujiyoshida, Japan.webp" :max-width="imageWidth")
  section
    v-container.grey--text.px-5.text-justify
      h2.mb-5 {{ isDE ? "Literaturverzeichnis" : "Bibliography" }}
      p McCandless, C. unknown. "The joy of life comes from our 
        | encounters with new experiences, and hence there is no greater joy 
        | than to have an endlessly changing horizon, for each day to have a 
        | new and different sun." BrainyQuote. (
        a.text-break(:href="quotes[0].quoteLink" target="_blank") {{ quotes[0].quoteLink }}
        | , accessed April 3, 2021).
</template>

<script>
import Parallax from "@/components/Parallax.vue";
import Quote from "@/components/Quote.vue";
import { mapGetters } from "vuex";

export default {
  name: "About",
  components: {
    Quote,
    Parallax,
  },
  data: () => ({
    parallaxImagePath: require("@/assets/background/Glatthorn.webp"),
    smallImgPath: require("@/assets/profile/leo-giesen.webp"),
    quotes: [
      {
        quoteText:
          "The joy of life comes from our encounters with new experiences, and hence there is no greater joy than to have an endlessly changing horizon, for each day to have a new and different sun.",
        quoteAuthor: "Christopher McCandless",
        quoteLink:
          "https://www.brainyquote.com/quotes/christopher_mccandless_473529",
      },
    ],
  }),
  computed: {
    ...mapGetters(["isDE", "isMobile"]),
    imageWidth() {
      if (this.isMobile) return "90vw";
      else return "50vw";
    },
  },
  i18n: {
    messages: {
      de: {
        intro: {
          title: "Über Leo",
          subtitle:
            "Ich liebe es komplexe und abstrakte Probleme runterzubrechen und zu lösen!",
        },
        introHeader: "Was ist für Dich am wichtigsten?",
        friendsAndFamily: `Für mich haben meine Familie und Freunde die höchste Priorität, 
        denn ohne ein tolles soziales Leben als Fundament kann man leicht unausgeglichen sein, 
        ausbrennen und den Blick für das Wesentliche im Leben 
        verlieren.
        Deswegen versuche ich mich so oft es geht mit meiner Familie und meinen Freunden tolle Erinnerungen 
        an zum Beispiel faszinierende Ausflüge und tolle Partys zu kreiren. Dazu gehören z. B. unsere jährlichen 
        Skiausflüge, Wochenendtrips oder Karneval mit einer Gruppe von Freunden und meiner 
        Familie in Köln.`,
        career: `
        <p>
          Neben meinem Privatleben investiere ich viel Energie in meine Arbeit und Karriere 
          da ich eine Leidenschaft für verschiedene IT-Themen habe. Deswegen studiere ich 
          Information Systems (M. Sc.) in Münster und habe zwei Nebenjobs mit IT-Fokus. 
          Die Jobs sind am Lehrstuhl für Wirtschaftsinformatik und Informationsmanagement als studentische Hilfskraft
          und als Werkstudent bei viadee in der Forschung und Entwicklung im Data Science Bereich.
          Zudem konnte ich mein Skillset durch Consulting-Projekte bei 
            <a href="https://move-ev.de/" target="_blank">move e. V.</a> 
          erweitern. Außerdem habe ich weitere Projekte abgeschlossen in meiner Freizeit oder in der Universiät. 
          Weitere Einblicke in diese und 
          andere Projekte können in meiner
            <a href="/experience">Erfahrungsübersicht</a>
          gefunden werden.
        </p>`,
        sport: `Neben der Arbeit und meinem Privatleben bin ich auch sportlich sehr ambitioniert, denn ich möchte auf verschiedene Weise an meine Grenzen gehen: Zum Beispiel versuche ich, mein Laufen zu verbessern. Außerdem bin ich mit 16 Jahren einen Halbmarathon gelaufen und laufe knapp unter 4 min/km auf meiner Strecke von 10 km. Innerhalb der letzten Jahre habe ich mich auf einen Halbmarathon in unter 1h 30 min gesteigert (siehe <a href="https://www.strava.com/athletes/17923080" target="_blank">Strava</a>). Zur Schulzeit habe ich ein Jahrzehnt lang Fußball gespielt und konnte mich in der Bezirksliga beweisen. Aktuell spiele ich nur entspannt mit Freunden. Dafür mache ich Tennis, Home-Workouts und Beach- und Hallenvolleyball aktiver.
          </br>
          Mein Lieblings-Sport ist das Skifahren, weil ich das unglaubliche Gefühl liebe, wenn man schnell durch den Schnee gleitet und die tolle Aussicht genießen kann. Es macht auch Spaß Touren im Gelände mit Aufsteigen zu machen und dann durch unberührten Schnee zu fahren.
          Deshalb fahre ich jedes Jahr mit meiner Familie zum Skifahren nach <a href="https://www.bergfex.com/lech-zuers-arlberg/" target="_blank">Lech</a> (Österreich), mit Freunden nach <a href="https://www.bergfex.com/soelden/" target="_blank">Sölden</a> oder mit dem Hoschulsport nach  
            <a href="https://www.bergfex.com/portes-du-soleil/" target="_blank">Portes du Soleil</a> (Schweiz-Frankreich), was immer ein ereignisreiches und spannendes Erlebnis ist, denn man lernt viele coole Leute kennen.`,
        travel: `
          Außerdem möchte ich gerne neue Orte erkunden und verschiedene Kulturen kennenlernen, z.B. 
          Asien und Süd- oder Mittelamerika. Konkret würde ich gerne nach Japan und Argentinien reisen, 
          Chile oder Nicaragua. Außerdem würde ich gerne Kanada besuchen, weil 
          ich tolle Landschaften mag und nach dem, was ich gehört habe, hat es viel zu bieten.
        `,
        quote:
          "Zum Schluss möchte ich mit einem Zitat abschließen, das meine Lebenseinstellung auf den Punkt bringt:",
      },
      en: {
        intro: {
          title: "About Leo",
          subtitle:
            "I love breaking down and solving complex and abstract problems!",
        },
        introHeader: "What is most important to you?",
        friendsAndFamily: `For me, my family and friends are the highest priority, 
        because without a great social life as a foundation, it's easy to become unbalanced, 
        burn out and lose sight of what's important in life. 
        That is why I try to make great memories with my family and friends as often as possible. 
        These include our annual ski trips, weekend getaways, or carnival with a group of friends and my family in Cologne.`,
        career: `
          Besides my private life I invest a lot of energy in my work and career because 
          I have a passion for different IT topics. That's why I study Information Systems (M. Sc.) 
          in Münster and have two part-time jobs with IT focus. The jobs are at the Chair of 
          Information Systems and Information Management as a student assistant and 
          as a working student at viadee in research and development in the Data Science area. 
          In addition, I was able to expand my skillset through consulting projects at 
            <a href="https://move-ev.de/" target="_blank">move e. V.</a>. 
          I also completed other projects in my spare time or at the university. 
          More insights into these and other projects can be found in my 
          <a href="/experience">experience overview</a>.`,
        sport: `
        "In addition to work and my private life, I am also very ambitious in sports, as I want to push my limits in various ways: For example, I try to improve my running. Moreover, I ran a half marathon at the age of 16 and run just under 4 min/km on my 10 km route. Over the last few years, I have improved to running a half marathon in under 1h 30 min (see <a href="https://www.strava.com/athletes/17923080" target="_blank">Strava</a>). During my school years, I played football for a decade and was able to prove myself in the district league. Currently, I only play casually with friends. Instead, I am more active in tennis, home workouts, and beach and indoor volleyball.
        </br>
        My favorite sport is skiing because I love the incredible feeling of gliding quickly through the snow and enjoying the great views. It is also fun to do off-piste tours with ascents and then ski through untouched snow.
        "Therefore, I go skiing every year with my family to <a href="https://www.bergfex.com/lech-zuers-arlberg/" target="_blank">Lech</a> (Austria), with friends to <a href="https://www.bergfex.com/soelden/" target="_blank">Sölden</a>, or with the university sports to  
            <a href="https://www.bergfex.com/portes-du-soleil/" target="_blank">Portes du Soleil</a> (Switzerland-France), which is always an eventful and exciting experience because you get to meet many cool people.
        `,
        travel: `
          What is more, I would like to explore new places and get to know different cultures, e.g. 
          Asia and South or Central America. Specifically, I would like to travel to Japan and Argentina, 
          Chile or Nicaragua. Additionally, I would like to visit Canada because 
          I enjoy great landscapes and from what I have heard, it has a lot to offer.`,
        quote:
          "Lastly, I'd like to conclude with a quote, which sums up my life attitude:",
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
