<h2>Step</h2>
copy .env.example<br>
POST http://localhost:3000/api/auth/login<br>
<pre>
admin@mail.com
admin@123
</pre>
how to change password<br>
becyrpt(10) yourpassword<br>
update password user in (src/models/user.models.ts)<br>
future use actual database<br>

<h2>Next PR<h2>
strict jwt token cookies<br>
actual postgree database