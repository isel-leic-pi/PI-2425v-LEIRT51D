const ERRORS_MAPPER = {
    e1: 404,
    e2: 401
}

const DEFAULT_ERROR = {
    status: 500, 
    body:  {
        description: `An internal error occurred. Contact your system administrator`
    } 
 }

export function convertToHttpError(error) {
    const status = ERRORS_MAPPER[error.code]
    return status ?  
        {
            status: status, 
            body:  {
                description: error.error
            } 
        } 
        : DEFAULT_ERROR
}