module.exports = {
  // apps: [
  //   {
  //     script: 'npm start',
  //   },
  // ],
  apps: [
    {
      name: 'backend',
      script: 'cd server && npm run dev',
      watch: true,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'frontend',
      script: 'npm start',
      watch: true,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
  deploy: {
    production: {
      user: 'root',
      host: '149.50.136.81',
      ref: 'origin/main',
      repo: 'git@github.com:palosantoweb/palo-santo-app.git',
      path: '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy':
        'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      ssh_options: 'ForwardAgent=yes',
      password: '5xpmvTU2rC6k',
    },
  },
};
