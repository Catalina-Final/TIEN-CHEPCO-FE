export default function (payload) {
    return payload.products.reduce((acc, el) => {
        const foundIdx = acc.findIndex((e) => e._id === el._id);
        if (foundIdx === -1) {
            el.qty = 1
            acc.push(el)
        } else {
            acc[foundIdx].qty += 1
        }
        return acc
    }, [])
} 