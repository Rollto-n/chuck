import { v4 as uuid } from 'uuid'
import images from '../img'

export const galleryMock = [
    {
        id: uuid(),
        title: 'chuck',
        src: images.q,
        tag: 'nelâsina'
    },
    {
        id: uuid(),
        title: 'lennon',
        src: images.w, //"./img/doberman.png",
        tag: 'nelâsina'
    },
    {
        id: uuid(),
        title: 'sarcosi',
        src: images.e, //"./img/flcl.png",
        tag: 'nelâsina'
    },
    {
        id: uuid(),
        title: 'diesel',
        src: images.a, //"./img/ftp.png",
        tag: 'lâsina'
    },
    {
        id: uuid(),
        title: 'sins',
        src: images.s, //./img/grime.png",
        tag: 'lâsina'
    },
    {
        id: uuid(),
        title: 'willis',
        src: images.d, //"./img/half.png",
        tag: 'lâsina'
    },

]
