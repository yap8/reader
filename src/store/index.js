import { createStore } from 'vuex';

export default createStore({
  state: {
    wordSelected: false,
    title: `Je m’appelle Jessica`,
    text: `Je m’appelle Jessica. Je suis une fille, je suis française et j’ai treize ans. Je vais à l’école à Nice, mais j’habite à Cagnes-Sur-Mer. J’ai deux frères. Le premier s’appelle Thomas, il a quatorze ans. Le second s’appelle Yann et il a neuf ans. Mon papa est italien et il est fleuriste. Ma mère est allemande et est avocate. Mes frères et moi parlons français, italien et allemand à la maison. Nous avons une grande maison avec un chien, un poisson et deux chats.

Aujourd’hui, on est samedi, nous rendons visite à notre grand-mère. Elle a 84 ans et elle habite à Antibes. J’adore ma grand-mère, elle est très gentille. Elle fait des bons gâteaux.

Lundi, je retourne à l’école. Je suis contente, je vais voir Amélie. C’est ma meilleure amie. J’aime beaucoup l’école. Mes matières préférées sont le français et le sport. J’aime beaucoup lire et je nage très bien.`,
    translations: [],
  },
  getters: {},
  mutations: {
    setTitle(state, value) {
      state.title = value;
    },
    setText(state, value) {
      state.text = value;
    },
    setWordSelected(state, value) {
      state.wordSelected = value;
    },
    addTranslation(state, value) {
      state.translations.push(value);
    },
  },
  actions: {},
  modules: {},
});
