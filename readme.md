<h2>Step</h2>
1. copy .env.example<br>
2. POST http://localhost:3000/api/auth/login<br>
3. generate token
<pre>
admin@mail.com
admin@123
</pre>
4. use token as header auth bearer



<h2>how to change password</h2>
becyrpt(10) new string<br>
update password user in (src/models/user.models.ts)<br>
create new token

<h2>Next PR</h2>
strict jwt token cookies<br>
actual postgree database dengan prisma orm