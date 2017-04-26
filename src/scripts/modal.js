import "../styles/modal.scss";
import { isDOMElement, addClickHandler } from './utils.js';
import { getOilCookie, oilOptIn, oilGlobalOptIn,  oilOptLater } from "./optin.js";


/**
 * Returns html content for our OIL overlay
 */
export function defineOilContent() {
  return (
    `
      <h1 class="oil__heading">
        Axel Springer Optin Layer
      </h1>
      <p class="oil__intro-text">
        Hi, this is a little intro text.
      </p>
      <button class="oil__button oil__button--primary js-optin-goi" data-qa="oil-goi-YesButton">
        Yes, I want GOI!
      </button>
      <button class="oil__button oil__button--primary js-optin" data-qa="oil-YesButton">
        Yes, I want!
      </button>
      <button class="oil__button oil__button--secondary js-optlater" data-qa="oil-NotNowButton">
        Not now
      </button>
    `
  );
}


/**
 * Injects OIL into DOM at entry point
 */
export function injectOil(entryPoint) {
  // Cookie should be present...
  let cookieData = getOilCookie();
  if (typeof (cookieData) !== 'undefined' && isDOMElement(entryPoint)) {
    // Create overlay container
    let oil = document.createElement('div');

    // Add classes for styling Oil overlay, use setAttribute('class', ...) instead of classList to
    // get IE9 compatibiity
    oil.setAttribute('class', `oil optin-${cookieData.optin} expanded-${cookieData.expanded}`);

    // Add data attribute for testing purposes
    oil.setAttribute('data-qa', 'oil-Layer');

    // Add overlay content
    oil.innerHTML = defineOilContent();

    // Add to DOM
    entryPoint.appendChild(oil);
  }
}


/**
 * Update Oil overlay class names
 */
export function updateOilOverlay(dataObj) {
  let oilOverlay = document.getElementsByClassName('oil')[0]

  // Reset CSS class to Oil base class
  oilOverlay.setAttribute('class', 'oil')

  // Add classes from data object
  oilOverlay.setAttribute('class', `oil optin-${dataObj.optin} expanded-${dataObj.expanded}`);
}


/**
 * Add click handler
 */
export function addOilClickHandler() {
  let btnOptIn = document.getElementsByClassName('js-optin')[0],
    btnGoiOptIn = document.getElementsByClassName('js-optin-goi')[0],
    btnOptLater = document.getElementsByClassName('js-optlater')[0];
  addClickHandler(btnOptIn, () => oilOptIn().then((cookieData) => updateOilOverlay(cookieData)));
  addClickHandler(btnGoiOptIn, () => oilGlobalOptIn().then((cookieData) => updateOilOverlay(cookieData)));
  addClickHandler(btnOptLater, () => oilOptLater().then((cookieData) => updateOilOverlay(cookieData)));
}