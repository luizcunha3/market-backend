import * as express from 'express'
import UserController from '../controller/UserController'
import cors from 'cors'

class UserRoutes {
    router: express.Router
    constructor(server: express.Express) {
        this.router = express.Router()
        this.router.options('*', cors());

        this.router.get('/:uid', (req: express.Request, res: express.Response) => {
            UserController.testConection()
            res.json({
                nice: "nice"
            })
        })
    }
}

export default UserRoutes;