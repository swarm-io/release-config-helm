# template-release-config
semantic-release release configuration template repository

# How do I use it?
1. modify `index.js` to export whatever release config you want, this is the shareable config that other releases will use.
2. Replace all instances of `template-release-config` with the name of your release config. It should follow the convention `release-config-{your name here}`
3. PR to main following conventional commits. Make sure your squash message follows conventional commits.
4. The release workflow should run, and publish your shareable config to npm so you can use it in releases via extends as `@swarm-io/release-config-{your name here}`