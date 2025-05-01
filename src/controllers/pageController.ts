import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject'
import { Pet } from '../models/pet';

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();
    res.render('pages/page', {
        menu: createMenuObject('all'),
        list,
        banner : {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    });
}

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');
    res.render('pages/page', {
        menu: createMenuObject('dog'),
        list,
        banner : {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        }
    });
}

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');
    res.render('pages/page', {
        menu: createMenuObject('cat'),
        list,
        banner : {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }
    });
}

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');
    res.render('pages/page', {
        menu: createMenuObject('fish'),
        list,
        banner : {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        }
    });
}