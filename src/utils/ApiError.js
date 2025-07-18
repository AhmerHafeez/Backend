class ApiError extends Error {

    constructor (
        statusXode,
        message = "Something went wrong",
        error = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.errors = errors
    }
}
export {ApiError}