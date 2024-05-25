const os = require("node:os")
const cluster = require("node:cluster")

const runPrimaryProcess = () =>{
    const processCount = 6
    console.log(`Primary ${process.pid} is running`)
    console.log(`Forking server with  ${processCount} process \n`)

    for (let i = 0; i < processCount; i++){
        cluster.fork()
    }
}

const runWorkerProcess = async () => {
    await import('../main')
}

cluster.isPrimary ? runPrimaryProcess() : runWorkerProcess()