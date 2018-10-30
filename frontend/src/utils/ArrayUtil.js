const ArrayUtil = {
    AddOrUpdate: (element, context, compareKey, updateMethod = null) => {
        let updated = false
        let newContext
        newContext = context.map(_el => {
            if (_el[compareKey] === element[compareKey]) {
                updated = true
                if (!updateMethod){
                    return element
                }
                return updateMethod(_el, element)
            }
            return _el;
        });
        if (!updated) {
            newContext = context.concat(element);
        }
        return newContext;
    }
    
}

export default ArrayUtil
