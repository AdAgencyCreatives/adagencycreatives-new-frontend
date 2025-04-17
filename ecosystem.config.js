module.exports = {
    apps: [
        {
            name: 'next-app',
            script: 'node_modules/next/dist/bin/next',
            args: 'start',
            env: {
                NODE_ENV: 'production',
                PORT: 3000, // Or any port you want to use
            },
        },
    ],
};