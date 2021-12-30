import { Node } from './Node.js';

export class Light extends Node {

    constructor() {
        super();
        Object.assign(this, {
            position         : [2, 3, 3],
            ambient          : 0.3,
            diffuse          : 0.1,
            specular         : 1,
            shininess        : 0.1,
            color            : [255, 255, 255],
            attenuatuion     : [1.0, 0, 0.02]
        });
    }

}