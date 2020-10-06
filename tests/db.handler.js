require('dotenv').config()
const util = require('util')
const exec = util.promisify(require('child_process').exec)

module.exports = () => {
    class DbHandler {
        constructor() {
            this.header = process.env.ACCESS_TOKEN
        }

        async create() {
            await this.run('sequelize db:create')
        }

        async drop() {
            await this.run('sequelize db:drop')
        }

        async migrate() {
            await this.run('sequelize db:migrate')
        }

        async run(command) {
            try {
                const {
                    stdout,
                    stderr
                } = await exec(command)

                if (stderr) {
                    console.log(`error: ${stderr}`)
                }

                console.log(`stdout: ${stdout}`)

            } catch (err) {

            }
        }
    }

    return new DbHandler()
}