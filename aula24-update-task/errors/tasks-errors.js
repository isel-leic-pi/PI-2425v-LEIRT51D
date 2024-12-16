export const errors = {
    NOT_FOUND: notFound,
    NOT_AUTHORIZE: notAuthorize
}

export default errors


function notFound(id) {
    return {
        code: "e1",
        error: `${id} not found`
    }
}

function notAuthorize() {
    return {
        code: "e2",
        error: `is not authorize`
    }
}



