import { modifier } from 'ember-modifier';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.js';

export default modifier(function reveal(element /*, positional, named*/) {
  let deck = new Reveal({
    plugins: [Markdown, RevealHighlight],
  });
  deck.initialize({
    transition: 'none',
    backgroundTransition: 'none',
    hash: true,
    dependencies: []
  });
});
