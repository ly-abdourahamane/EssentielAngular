import { Injectable } from '@angular/core';

@Injectable()
export class DialogueService {

  constructor() { }

  /**
   * service de fenetre modal asynchrone. On peut faire mieux, c'est juste pour
   * un exemple pour l'instant
   * @param {string} message
   * @returns {Promise<boolean>}
   */
  confirm(message?: string): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      return resolve(window.confirm(message || 'C\'est OK'));
    });
  }

}
