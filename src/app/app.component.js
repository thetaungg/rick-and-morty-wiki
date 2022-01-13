import { appTemplate } from "./app.template";
import { AppModel } from "./app.model";
import { CardListModel } from "components/card-list/card-list.model";

export const AppComponent = {
  async init() {
    this.appElement = document.querySelector("#app");
    await this.fetchData();
    this.render();
  },

  async fetchData() {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const { results } = await res.json();

    CardListModel.characters = [...results];
    CardListModel.filteredCharacters = [...results];

    if (results.length) {
      // lazy loading
      import("../components/filter-group/filter-group.module")
        .then((lazyModule) => lazyModule.FilterGroupModule.init())
        .catch((error) => "An error occurred while loading Module");

      import("../components/card-list/card-list.module")
        .then((lazyModule) => lazyModule.CardListModule.init())
        .catch((error) => "An error occurred while loading Module");
    }
  },

  render() {
    this.appElement.innerHTML = appTemplate(AppModel);
  },
};
