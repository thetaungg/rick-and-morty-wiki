import AlienIcon from "static/icons/alien.svg";
import HumanIcon from "static/icons/human-handsdown.svg";
import HeartPulseIcon from "static/icons/heart-pulse.svg";
import SkullIcon from "static/icons/skull-crossbones.svg";
import UnknownIcon from "static/icons/help.svg";
import "./card.styles.scss";

export const cardTemplate = (item) => `
  <li class="card-list-item">
    <div class="card-list-item__image">
      <img src="${item.image}" alt="${item.name}">
    </div>
    <div class="card-list-item__info">
      <span class="card-list-item__info__name">${item.name}</span>
      <div class="card-list-item__info__more-info">
        <div title="species">
          ${
            item?.species === "Human"
              ? `<img src="${HumanIcon}" alt="alien" title="human" />`
              : `<img src="${AlienIcon}" alt="alien" title="alien" />`
          }
        </div>
        <div title="status">
          ${
            item?.status.toLowerCase() === "alive"
              ? `<img src="${HeartPulseIcon}" alt="alive" title="alive">`
              : item?.status.toLowerCase() === "dead"
              ? `<img src="${SkullIcon}" alt="dead" title="dead">`
              : `<img src="${UnknownIcon}" alt="unknown" title="unknown">`
          }
        </div>
      </div>
    </div>
  </li>
`;
