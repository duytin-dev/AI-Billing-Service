import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
export class HttpExceptionFilter implements ExceptionFilter {
    //error response

    catch(exception: unknown, host: ArgumentsHost) {
        console.error(
            '[Backend error]',
            exception instanceof Error
                ? exception.message
                : 'Unknown error',
        );
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception instanceof HttpException ? exception.getStatus() : 500;
        const exceptionResponse = exception instanceof HttpException ? exception.getResponse() : "Internal server error !";
        const message = typeof exceptionResponse === 'string' ? exceptionResponse : (exceptionResponse as any).message;

        response.status(status).json({
            status: 'error',
            message: message,
            timestamp: new Date().toISOString(),
        })


    }
    //constructor(
    //private readonly logger: LoggerService, -> when have inject service in GLOBALEXCEPTIONFILTER,
    // after that we define this in app.modules.ts
    //) {}

}