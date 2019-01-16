module.exports = {
  apps : [{
    name: 'td',
    script: 'pm2-td.toe',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    //args: 'one two',
    //instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    interpreter: 'C:/Program Files/Derivative/TouchDesigner099/bin/TouchDesigner099.exe'
    // env: {
    //   NODE_ENV: 'development'
    // },
    // env_production: {
    //   NODE_ENV: 'production'
    // }
  }]
};
