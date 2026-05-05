import { neon } from '@neondatabase/serverless';

export const sql = neon('postgresql://[usuario]:[senha]@[host-do-neon]/[nome-do-banco]?sslmode=require');