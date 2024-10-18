function invertObject(object: {[key: string]: string}) {
    const newObject: {[key: string]: string} = {};

    for (const key of Object.keys(object)) {
        const value = object[key];

        newObject[value] = key;
    }

    return newObject;
}
