<h2>Step</h2>
<pre>
DEVELOPMENT

cp .env.example .env
npm install
docker compose -f docker-compose.dev.yml up --build
</pre>


<pre>
PRODUCTION

cp .env.example .env.production
npm install
docker compose up --build -d
</pre>


<h2>Add user</h2>

add new user using becyrpt(10) as password
at local dbms postgree refer to .env configuration

<h2>Getting token</h2>
POST http://localhost:3000/api/auth/login<br>
use token as header auth bearer


<h2>Next PR</h2>
strict jwt token cookies<br>
node demon<br>