const touchDesigner = {
  name: 'TouchDesigner',
  interpreter:'C:/Program Files/Derivative/TouchDesigner099/bin/TouchDesigner099.exe',
  script: 'pm2-td.toe',
  env: {
    COMMON_VARIABLE: 'true'
  },
  env_production: {
    NODE_ENV: 'production'
  }
}

exports.apps = [touchDesigner]