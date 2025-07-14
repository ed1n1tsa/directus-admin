module.exports = {
    database: {
      client: 'pg',
      connection: {
        host: 'db.hzjnekficdnuitavybfz.supabase.co',
        port: 5432,
        user: 'postgres',
        password: '87077900576',
        database: 'postgres',
        ssl: {
          rejectUnauthorized: true,
          ca: require('fs').readFileSync('./supabase-ca.crt').toString()
        }
      }
    }
  }
  