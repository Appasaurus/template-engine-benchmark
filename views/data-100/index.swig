<!doctype html>
<html>
  <head>
    <title>{{ title }}</title>
  </head>
  <body>
    {% for person in people %}
      <h1>{{ person.name }}</h1>
      <p>{{ person.email }}</p>
    {% endfor %}
  </body>
</html>
