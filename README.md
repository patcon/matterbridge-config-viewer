# Matterbridge Config Viewer

A viewer for creating a one-page app that renders the config file as a
webpage.

## Local Development

```
npm install
npm run-script heroku-postbuild

# Optionally set the relative or absolute url of the Matterbridge config file.
# Default: https://raw.githubusercontent.com/edgi-govdata-archiving/matterbridge-heroku/master/config/config-heroku-template.toml
# export CONFIG_URL=/config-heroku-template.custom.toml
# export CONFIG_URL=https://example.com/config-heroku-template.custom.toml

# Optionally set port for serving. Default: 3000
export PORT=3001

npm start
```

## Heroku Deploy

**Requirements:**
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

```
cd path/to/matterbridge-config-viewer
heroku create my-matterbridge-config-viewer
# Set your config url. (Optional)
heroku config:set CONFIG_URL=https://example.com/config-heroku-template.custom.toml
git push heroku master
```

## Notes

* Auto-deploys `master` branch to our heroku app:
  `matterbridge-heroku-viewer`
