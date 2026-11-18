import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    // Add your authentication logic here
    const authHeader = request.headers['authorization'];
    // return authHeader && authHeader.startsWith('Bearer ');
    return authHeader  === "Bearer my-secret-token"; // Example check for a specific token  

  }
}
