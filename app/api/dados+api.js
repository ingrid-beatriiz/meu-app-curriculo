import pool from '../../lib/db';

export async function GET(request) {
  try {
    const client = await pool.connect();
    
    // Busca dados de todas as tabelas
    const perfil = await client.query('SELECT * FROM perfil LIMIT 1');
    const academico = await client.query('SELECT * FROM academico');
    const profissional = await client.query('SELECT * FROM profissional');
    const projetos = await client.query('SELECT * FROM projetos');
    
    client.release();

    const dados = {
      perfil: perfil.rows[0],
      academico: academico.rows,
      profissional: profissional.rows,
      projetos: projetos.rows
    };

    return Response.json(dados);

  } catch (err) {
    return Response.json({ error: 'Erro ao conectar ao banco de dados', detalhe: err.message }, { status: 500 });
  }
}