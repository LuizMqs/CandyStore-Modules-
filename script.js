import { loadBrigadeiro } from "./modules/brigadeiro.js";
import { loadCupcake } from "./modules/cupcake.js";
import { loadDoces } from "./modules/doces.js";
import { loadHome } from "./modules/home.js";

window.history.pushState({}, '',
`/home`);
loadHome();

function load_content(id) {
    console.log("Loading content for {" + id + "}");
    // Update text "Content loading for {id}..."
    // Here you would do content loading magic...
    // Perhaps run Fetch API to update resources
    if(id == "brigadeiro") loadBrigadeiro();
    if(id == "cupcake") loadCupcake();
    if(id == "doces") loadDoces();
    if(id == "home") loadHome();
}
function push(event) {
    // Get id attribute of the button or link clicked
    let id = event.target.id;
    // Update Title in Window's Tab
    document.title = id;
    // Load content for this tab/page
    load_content(id);
    // Finally push state change to the address bar
    window.history.pushState({id}, `${id}`,
                          `/${id}`);
}

window.onload = event => {
    // Add history push() event when boxes are clicked
    window["brigadeiro"].addEventListener("click",
    event => push(event))
    window["cupcake"].addEventListener("click",
    event => push(event))
    window["doces"].addEventListener("click",
    event => push(event))
    window["home"].addEventListener("click",
    event => push(event))

    e.target.dispatchEvent(evento)
}

const evento = new CustomEvent('olaf', {
    detail: {
        id: e.target.id
    }
})

// Listen for PopStateEvent
// (Back or Forward buttons are clicked)
window.addEventListener("olaf", event => {
    // Grab the history state id
    let stateId = event.detail.id;
    // Show clicked id in console (just for fun)
    console.log("stateId = ", stateId);
    
    // Load content for this tab/page
    load_content(stateId);
});