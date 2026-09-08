import { Injectable } from "@nestjs/common";
import { ApiResponse } from "../interfaces/api-response.interface.js";
import { Observable } from "rxjs";
import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { map } from "rxjs/operators";

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, ApiResponse<T>> {
    // success response
    // next.handle() return a Observable have result from Controller.
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<ApiResponse<T>> {
        return next.handle().pipe(
            map((data) => ({
                success: true,
                statusCode: context.switchToHttp().getResponse().statusCode,
                message: "Request successful",
                data: data,
                timestamp: new Date().toISOString(),
            })),
        );



    }
}