class Watch {

    addAttrs(obj: Object, attrName: string, cb: Function): Watch{
        let fakeName = `_fake_${attrName}`;
        obj[fakeName] = obj[attrName];
        Object.defineProperty(obj, fakeName, {
            enumerable: false
        });
        Object.defineProperty(obj, attrName, {
            get: () => {
                return obj[fakeName];
            },
            set: (val) => {
                obj[fakeName] = val;
                cb.call(obj,obj);
                return obj[fakeName];
            } 
        })
        return this;
    }
}

export const $watch = new Watch().addAttrs;
