module.exports = {
  apps: [
    {
      script: 'npm start',
    },
  ],

  deploy: {
    production: {
      user: 'root',
      host: '149.50.136.81',
      ref: 'origin/main',
      repo: 'https://palosanto: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@github.com/palosantoweb/palo-santo',
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
