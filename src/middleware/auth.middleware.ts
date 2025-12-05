import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
export function AuthMiddleware(req: Request, res: Response, next: () => void) {
  const authHeader =req.headers.authorization;
  if (!authHeader) {
    return res
      .status(HttpStatus.UNAUTHORIZED)
      .json({ message: 'Unauthorized' });
  }
  const token = authHeader.split(' ')[1];

  try {
    const user = jwt.verify(token,"mySuperSecretKey123");
    req['user']=user;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token' });
  }
}
