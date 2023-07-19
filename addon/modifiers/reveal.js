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
    width: "1280",
    height: "720",
    margin: 0.1,
    center: false,
    hash: true,
    display: 'flex',
    dependencies: [
        // { src: '/plugin/markdown/marked.js' },
        // { src: '/plugin/markdown/markdown.js' },
        // { src: '/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        // { src: '/plugin/notes/notes.js', async: true }
      ]
  });
});


// script>
//   if(typeof FastBoot === 'undefined') {
//     Reveal.initialize({
//       transition: 'none',
//       backgroundTransition: 'none',
//       width: "1280",
// 			height: "720",
// 			margin: 0.1,
// 			center: false,
//       hash: true,
//       display: 'flex',
//       dependencies: [
// 					{ src: '/plugin/markdown/marked.js' },
// 					{ src: '/plugin/markdown/markdown.js' },
// 					{ src: '/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
// 					{ src: '/plugin/notes/notes.js', async: true }
// 				]
//     });
//   }
// </script>
