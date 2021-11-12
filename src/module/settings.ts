import { MonksTokenBarAPI } from './../lib/tokenbarapi/MonksTokenBarAPI';

export const moduleName = 'environment-interaction';

/**
 * Because typescript doesn't know when in the lifecycle of foundry your code runs, we have to assume that the
 * canvas is potentially not yet initialized, so it's typed as declare let canvas: Canvas | {ready: false}.
 * That's why you get errors when you try to access properties on canvas other than ready.
 * In order to get around that, you need to type guard canvas.
 * Also be aware that this will become even more important in 0.8.x because no canvas mode is being introduced there.
 * So you will need to deal with the fact that there might not be an initialized canvas at any point in time.
 * @returns
 */
export function getCanvas(): Canvas {
  if (!(canvas instanceof Canvas) || !canvas.ready) {
    throw new Error('Canvas Is Not Initialized');
  }
  return canvas;
}
/**
 * Because typescript doesn't know when in the lifecycle of foundry your code runs, we have to assume that the
 * canvas is potentially not yet initialized, so it's typed as declare let canvas: Canvas | {ready: false}.
 * That's why you get errors when you try to access properties on canvas other than ready.
 * In order to get around that, you need to type guard canvas.
 * Also be aware that this will become even more important in 0.8.x because no canvas mode is being introduced there.
 * So you will need to deal with the fact that there might not be an initialized canvas at any point in time.
 * @returns
 */
export function getGame(): Game {
  if (!(game instanceof Game)) {
    throw new Error('Game Is Not Initialized');
  }
  return game;
}

export function getMonkTokenBarAPI(): MonksTokenBarAPI {
  //@ts-ignore
  return getGame().MonksTokenBar;
}

export const registerSettings = function () {
  // Automatically close interaction selection dialog
  getGame().settings.register(moduleName, 'closeDialog', {
    name: getGame().i18n.localize(`${moduleName}.settings.closeDialog.name`),
    hint: '',
    scope: 'world',
    config: true,
    type: Boolean,
    default: true,
  });

  // Automatically add proficiency to attack rolls
  getGame().settings.register(moduleName, 'autoProficiency', {
    name: getGame().i18n.localize(`${moduleName}.settings.autoProficiency.name`),
    hint: '',
    scope: 'world',
    config: true,
    type: Boolean,
    default: true,
  });
};