<h2>Backend starter Express with Docker and Postgres</h2>


<h3>Step</h3>
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


<h3>Add user</h3>
add new user using becyrpt(10) as password
at local DBMS postgree refer to .env configuration

<h3>Getting token as cookies</h3>
POST http://localhost:3000/api/auth/login<br>

<h3>Testing api</h3>
GET http://localhost:3000/api/master/products

<h3>Next PR</h3>