# Saisho

Saisho is our starting point for UI prototypes at Heroku. It includes components
that make it easy for designers to write single-page Javascript apps that help
illustrate flow and behavior of a design.

## What's included?

- [Bootstrap][bootstrap]
- [jQuery][jquery]
- [Ember][ember]

## Getting Started

Saisho uses [Harp][harp], a static web server with built-in preprocessing. That
means you can try out all the fancy tools the cool kids are using (LESS, Sass,
and Coffeescript). If you're not familiar with those gizmos you needn't worry.
Harp can serve plain 'ol HTML and CSS just as well.

To install Harp you need to [download Node.js][node] from the official website
and follow the on-screen instructions. Once that's done simply run the following
command from Terminal.app – don't be scared, we're right here with you:

```shell
sudo npm install harp -g
```

This will ask you for your administrator password. Enter the password and watch
the matrix fly by. If everything went well you're all set up.

Next, download the source of this project either using the Download button to
the right or with Git:

```shell
git clone git@github.com:max/saisho.git ~/Documents/saisho
```

With your Terminal.app navigate to the downloaded or cloned Saisho directory –
this assumes you cloned Saisho into your OS X Documents folder – and start Harp:

```shell
cd ~/Documents/saisho
harp server
```

You're prototype is now running on http://localhost:9000/. Go check it out.

## Customizing the prototype

There are three files in your prototype directory:

- `index.html`: This is where all your HTML and templates are located.
- `styles.scss`: The home for all your styles.
- `app.js`: A simple Ember app to map templates to URLs.

### Templates

If you open the `index.html` file you will see some boilerplate HTML, a sample
template, and a layout. Saisho uses [Handlebar][handlebars] templates. Here's
how you use them:

The layout gets applied as a wrapper to all your individual templates and is
useful to add common markup like a `.container`.

The other templates are visible when the URL in the browser is mapped to a
template name available in `index.html`. Here are the relevant sections of the
example code:

#### index.html

```js
// Note the template name "home"
<script type="text/x-handlebars" data-template-name='home'>
  // ...
</script>
```

#### app.js

```js
...
  // The mapping of / (e.g. localhost:9000/) to the home template
  this.resource('home', { path: '/' });
...
```

You can add as many templates with the appropriate URL mappings as you like.

### Linking between templates

Let's assume we have two templates mapped to two routes:

#### app.js

```js
// ...
  this.resource('home', { path: '/' });
  this.resource('blog', { path: '/blog' });
// ...
```

If you want to link to the `blog` template from your `home` template here just
create a link as follows:

```html
<script type="text/x-handlebars" data-template-name='home'>
  // Note the use of the # sign
  <a href='#/blog'>Blog</a>
</script>
```

That's pretty much it. Now you can link template to template to template...

[bootstrap]: http://getboostrap.com/
[jquery]: http://jquery.com/
[ember]: http://emberjs.com/
[harp]: http://harpjs.com/
[node]: http://nodejs.org/
[handlebars]: http://handlebarsjs.com/
