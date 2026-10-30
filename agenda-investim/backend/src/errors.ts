import type { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
export class HttpError extends Error { constructor(public status:number, message:string){super(message)} }
export const errors:ErrorRequestHandler=(error:unknown,_req,res,_next)=>{
 if(error instanceof ZodError){res.status(400).json({error:'Dados inválidos',details:error.flatten()});return;}
 if(error instanceof HttpError){res.status(error.status).json({error:error.message});return;}
 console.error(error);res.status(500).json({error:'Erro interno'});
};
