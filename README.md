# Hugo Source for www.dns.icann.org


## Local preview

Install Hugo, then run:

```sh
hugo server
```

Build production output with:

```sh
hugo --minify
```

The generated site will be in `public/`.


## Navigation

The main navigation and submenus are defined explicitly in `hugo.yaml`. Desktop browsers show child pages as dropdown menus; narrow/mobile layouts show child links expanded beneath their parent.

## Media

Site images and documents are stored in `static/media/uploads/` and are published at `/media/uploads/`.

## Content review

Operational content must be reviewed by its owner before publication. To display a verified review date on a page, add these front matter fields after that review:

```yaml
content_owner: "ICANN DNS Engineering"
last_reviewed: "YYYY-MM-DD"
```
