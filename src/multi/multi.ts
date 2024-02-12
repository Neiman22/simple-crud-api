import { config } from 'dotenv';
import cluster from 'cluster';
import { server } from '../server/server';
import { availableParallelism } from 'os';
import process from 'process';

config();
const PORT = Number(process.env.PORT || 4000);
const numCPUs = availableParallelism();

if (cluster.isPrimary) {
    console.log(`Primary process is running on port ${PORT}`);

    for (let i = 1; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker) => {
        console.log(`Worker ${worker.process.pid} is dead`);
    });
} else {
  if (cluster.worker) {
    const workerPort = PORT + cluster.worker.id;
    server.listen(workerPort, () => {
      console.log(`Worker is listening on port ${workerPort}`);
    })
  }
}