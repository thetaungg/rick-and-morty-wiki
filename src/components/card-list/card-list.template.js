import { cardTemplate } from "components/card/card.template";
import "./card-list.styles.scss";

export const cardListTemplate = (list) => `
    <ul class="card-list">
        ${list.map((item) => cardTemplate(item)).join("")}
    </ul>
`;
