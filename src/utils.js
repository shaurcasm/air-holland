/**
 * slicer: Function
 * Return false if array/string within limit, else slice the array/para and return two parts.
 * 
 * @param {String} original
 * @param {Number} limit 
 * @returns {Object} sliceNeeded: bool, initial, extra: Array/String
 */
 export function slicer(original, limit) {
    if(!original) return { sliceNeeded: false, initial: null }
    if (original.length <= limit) return { sliceNeeded: false, initial: original }

    let initial = original.slice(0, limit);
    let extra = original.slice(limit, original.length)

    return { sliceNeeded: true, initial, extra }
}


export function groupByDate(list = []) {

    const grouped = list.reduce((acc, item) => {
        if(!acc[item?.Date]) {
            acc[item?.Date] = [];
        }

        acc[item?.Date].push(item);
        return acc;
    }, {});

    return grouped;
}