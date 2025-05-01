type menuOptions = '' | 'dog' | 'all' | 'cat' | 'fish'; 

export const createMenuObject = (activeMenu: menuOptions) => {
    let returnObject: any = {
        all: false,
        dog: false,
        cat: false,
        fishes: false
    }

    if(activeMenu !== ''){
        returnObject[activeMenu] = true;
    }

    return returnObject;
}