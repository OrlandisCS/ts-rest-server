import express, { Application } from 'express';
import cors from 'cors';
import userRoutes from '../routes/usuario';
import db from '../db/connection';
class Server {
	private app: Application;
	private port: String;
	private apiPaths = {
		usuarios: '/api/usuarios',
	};
	constructor() {
		this.app = express();
		this.port = process.env.PORT || '8000';
		this.dbConection();
		this.middlewares();
		this.routes();
	}
	//TODO: Conectar la base de datos
	async dbConection() {
		try {
			await db.authenticate();
			console.log('Database Online');
		} catch (error) {
			throw new Error(error);
		}
	}
	//Middlewares de la app
	middlewares() {
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.static('public'));
	}
	//Routes de la app
	routes() {
		this.app.use(this.apiPaths.usuarios, userRoutes);
	}
	listen() {
		this.app.listen(this.port, () => {
			console.log(`app listen on http://localhost:${this.port}`);
		});
	}
}
export default Server;
