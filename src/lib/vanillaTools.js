export function $(id) { return document.getElementById(id); }
export function attr(el, name) { return el.getAttribute(name) }
export function setAttr(el, name, value) { return el.setAttribute(name, value) }
export function delAttr(el, name) { return el.removeAttribute(name) }
export function qsParam(name) { return new URLSearchParams(document.location.search).get(name) }
