import app from "./app"
import "reflect-metadata"

declare module 'express-serve-static-core' {
    interface Request {
        user: { id: string }
    }
}


export default function main() {
    app.listen(3000, 'localhost', () => {
        console.log("O SERVIDOR TA SERVINDO")
    })
}

main()