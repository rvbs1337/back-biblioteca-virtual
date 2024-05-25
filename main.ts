import app from "./app"

export default function main(){
    app.listen(3000, 'localhost', () => {
        console.log("O SERVIDOR TA SERVINDO")
    })
}

main()