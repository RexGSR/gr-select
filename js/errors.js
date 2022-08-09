export class MissingElementError extends Error{
    super(message) {
        this.name = "MissingElementError";
        this.message = message;
        this.date = new Date();

       
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }

    }
    
}

