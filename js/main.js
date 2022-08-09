import { MissingElementError } from "./errors.js";

export class Init {
    #element;
    #data;
    #mode;
    constructor() {
        this.#element = [...document.querySelectorAll("select")];
    }

    grSelect() {
        try {
            console.log(this.#element)
            
            if (!this.#element.length) throw new MissingElementError("gr-select: DOM  select element missing error");

            this.#data = [...this.#element.options].map(el => ({ label: el.text, value: el.value }));
            this.#mode = this.#element.attributes["gr-mode"].value || "single";

        } catch (error) {
            console.error(error);
            return true;
        }

    }
}







