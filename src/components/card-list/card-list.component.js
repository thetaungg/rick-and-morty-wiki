import { CardListModel } from "./card-list.model";
import { cardListTemplate } from "./card-list.template";
import { FilterGroupModel } from "components/filter-group/filter-group.model";

export const CardListComponent = {
  init() {
    this.cardListContainer = document.getElementById("cardListContainer");
    this.render();
  },
  render() {
    const filteredCharacters = CardListModel.characters.filter(
      (item) =>
        item.name.toLowerCase().includes(FilterGroupModel.search.toLowerCase()) &&
        (FilterGroupModel.select === "all" || item.status.toLowerCase() === FilterGroupModel.select)
    );
    this.cardListContainer.innerHTML = cardListTemplate(filteredCharacters);
  },
};
