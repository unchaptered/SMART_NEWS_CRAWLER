export interface IException extends Error {

    name: string;
    message: string;
    statusCode: number;

}

export class Exception implements IException {

    name: string;
    message: string;
    statusCode: number;

    constructor(name: string, message: string, statusCode: number) {

        this.name = name;
        this.message = message;
        this.statusCode = statusCode;

    }

}

/**
 * 400 BadRequest
 */
export class BadRequestException extends Exception {

    constructor(message: string) {

        super('BadRequestException', message, 400);

    }

};

/**
 * 401 Unauthorized
 */
export class UnauthorizedException extends Exception {

    constructor(message: string) {
        super('UnauthorizedException', message, 401);
    }
};

/**
 * 404 NotFound
 */
export class NotFoundException extends Exception {

    constructor(message: string) {
        super('NotFoundException', message, 404);
    }

};


/**
 * 409 Conflict
 */
export class ConflictException extends Exception {

    constructor(message: string) {

        super('ConflictException', message, 409);

    }
};

export class IntervalServerError extends Exception {


    constructor(message: string) {

        super('IntervalServerError', message, 500);

    }

};

export class UnkownServerError extends Exception {

    constructor(message: string) {

        super('UnkownServerError', message, 500);

    }

};