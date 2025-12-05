import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
   constructor(private reflector: Reflector) {}
  canActivate( context: ExecutionContext, ): boolean | Promise<boolean> | Observable<boolean> {
    const roles=this.reflector.get('roles',context.getHandler());
    
    if(!roles){
      return true;
    }
    const request= context.switchToHttp().getRequest();
    const user=request.user;
    if(!user){
      throw new ForbiddenException;
    }
    console.log(roles.includes(user.role));
    return roles.includes(user.role);
  }
}
