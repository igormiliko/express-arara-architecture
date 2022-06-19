import { Worker } from "cluster";
import app from "./app";
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
const PORT = 3331;

// if (cluster.isMaster) {
//    console.log('Master process is running');
//    cluster.fork();
//    cluster.fork();
//  } else {
//    app.listen(PORT, () => {
//       console.log(`App running in http://localhost:${PORT}`)
//    })
//  }

//  cluster.on('exit', (worker: Worker, code: any, signal: any) => {
//    console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
//    console.log('Starting a new worker');
//    cluster.fork();
//  });

app.listen(PORT, () => {
  console.log(`App running in http://localhost:${PORT}`);
});
