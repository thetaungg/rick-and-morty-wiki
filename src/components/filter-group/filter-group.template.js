import "./filter-group.styles.scss";
import { FilterGroupModel } from "./filter-group.model";

export const filterGroupTemplate = () => `
  <div class="filter-group">
    <div class="filter-group__input-container">
      <input id="filterSearch" type="search" placeholder="Search by name" value="${FilterGroupModel.search}">
    </div>
    <div class="filter-group__select-container">
      <select id="filterSelect" name="status">
        <option value="all">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  </div>
`;
