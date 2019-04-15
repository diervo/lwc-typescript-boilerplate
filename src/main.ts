import App from "lwc/helloWorld";
import { createElement } from "lwc";

const app = createElement("lwc-hello-world", { is: App });

function test(dom: Element, str: string) {
    return dom.getAttribute(str);
}

// eslint-disable-next-line @lwc/lwc/no-document-query
const container = document.getElementById("main");
if (container) {
    test(container, "test");
    container.appendChild(app);
}
