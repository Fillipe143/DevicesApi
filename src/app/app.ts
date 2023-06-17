import express from "express";
import { router } from "./router";

class App {
    private server: express.Application;

    constructor() {
        this.server = express();
        this.server.use(router);
    }

    public listen(port: number): void {
        this.server.listen(port,
            () => console.log(`Server successfully started on port ${port}`)
        );
    }
}

export { App };