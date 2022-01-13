import { filterGroupTemplate } from "./filter-group.template";
import { FilterGroupModel } from "./filter-group.model";
import { CardListComponent } from "components/card-list/card-list.component";

export const FilterGroupComponent = {
  init() {
    this.filterGroupContainer = document.getElementById("filterGroupContainer");
    this.render();
  },
  render() {
    this.filterGroupContainer.innerHTML = filterGroupTemplate();
    this.afterRender();
  },
  afterRender() {
    const filterSearch = document.getElementById("filterSearch");
    const filterSelect = document.getElementById("filterSelect");

    filterSearch.addEventListener("input", (e) => {
      FilterGroupModel.search = e.target.value;
      //explicitly re-rendering cardlist after search
      CardListComponent.render();
    });

    filterSelect.addEventListener("change", (e) => {
      FilterGroupModel.select = e.target.value;
      //explicitly re-rendering cardlist after search
      CardListComponent.render();
    });
  },
};
