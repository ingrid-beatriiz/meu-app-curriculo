import { Pool } from 'pg';

const pool = new Pool({

  connectionString: 'postgresql://neondb_owner:npg_9bagxh2XUoMO@ep-raspy-dream-ac9utxsf-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
});

export default pool;