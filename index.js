
const { h, app } = hyperapp;
/** @jsx h */
const state = {
  parsed: `` };


const actions = {
  parseString: str => state => ({
    parsed: marked(str, {
      sanitize: true }) }) };




const dangerouslySetInnerHTML = (el, str) => {
  el ? el.innerHTML = str : null;
};

const TextArea = ({ parse }) =>
h("textarea", {
  oninput: debounce(parse, 200),
  placeholder: "Type some markdown here" });



const view = (state, actions) =>
h("div", { id: "editor" },
h(TextArea, { parse: e => actions.parseString(e.target.value) }),
h("div", { onupdate: el => dangerouslySetInnerHTML(el, state.parsed) }));



app(state, actions, view, document.body);