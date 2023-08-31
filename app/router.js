import { AboutController } from "./controllers/AboutController.js";
import { GiftsController } from "./controllers/GiftsController.js";
import { GiftsSandboxController } from "./controllers/GiftsSandboxController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [GiftsController, GiftsSandboxController]
    //     view: /*html*/`
    //  this is the gift page
    //     `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */