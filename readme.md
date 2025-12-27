<h2>Step</h2>
1. copy .env.example<br>
2. npm install
3. docker compose up -d
4. npx prisma migrate dev --name init

<h2>Add user</h2>

add new user using becyrpt(10) as password

postgres connection
<pre>
postgresql://postgres:postgres@localhost:5432/app_db
username:postgres
password:postgres
</pre>

<h2>Getting token</h2>
POST http://localhost:3000/api/auth/login<br>
use token as header auth bearer


<h2>Next PR</h2>
strict jwt token cookies<br>
actual postgree database dengan prisma orm