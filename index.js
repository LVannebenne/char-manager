"use strict";
// Character Manager project
//
// Team Ayse Akdede - Lindsay Vannebenne
// BeCode.org - Jepsen 2.14 / Hamilton 2.12
//
// Page started 30/09/2019 - Updated 02/10/2019
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_routes_1 = require("./api-routes");
var Utils = __importStar(require("./utils"));
var url = "https://character-database.becode.xyz/";
window.addEventListener('DOMContentLoaded', function () {
    if (document.location.pathname != "/newchar") {
        Utils.newButton.innerText = "New";
    }
    else {
        Utils.newButton.innerText = "Retour";
    }
});
Utils.newButton.addEventListener('click', function () {
    if (document.location.pathname != "/newchar") {
        document.location.href = "/newchar";
    }
    else {
        document.location.href = "/index";
    }
});
if (document.location.pathname == "/") {
    // affiche tous les personnages
    api_routes_1.getAllChar();
} /*  else if (document.location.pathname.startsWith("/viewChar")) {
    // Affiche le personnage sur lequel on a cliqué
    getCharAndDisplay(document.location.search.substring(3));
} else if (document.location.pathname.startsWith("/editChar")) {
    // Deploie le formulaire et le rempli
    Utils.formNewChar();
    populateForm(document.location.search.substring(3));
} else if (document.location.pathname.startsWith("/newchar")) {
    console.log('hello new char');
    Utils.formNewChar()
    Utils.newChar.addEventListener('click', () => {
        let form = <HTMLFormElement>document.querySelector("#form-new-char");
        let file = <unknown>form.querySelector("#form-image")!.files[0];
        let reader = new FileReader();
        let name = <HTMLInputElement>form.querySelector("#form-name")!;
        let shortDescription = <HTMLInputElement>form.querySelector("#form-short-description")!;
        let description = <HTMLInputElement>form.querySelector("#form-description")!;
        reader.onloadend = function () {
            let split = (<string>reader.result!).split(',');
            axios.post(`${url}characters`, {
                name: name.value,
                shortDescription: shortDescription.value,
                description: description.value,
                image: split[1],
            })
                .then(response => {
                    alert(`New character created : ${response.data.id}`);
                    document.location.href = "index";
                })
                .catch(err => console.error(err))
        }
        reader.readAsDataURL(<Blob>file);
    })
}*/
else {
    document.location.href = "/";
}
