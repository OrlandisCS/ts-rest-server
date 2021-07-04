import { Request, Response } from 'express';
import Usuario from '../models/usuario';
export const getUsuarios = async (req: Request, res: Response) => {
	const usuarios = await Usuario.findAll({
		where: {
			estado: true,
		},
	});

	res.json({
		usuarios,
	});
};
export const getUsuario = async (req: Request, res: Response) => {
	const { id } = req.params;
	const usuario = await Usuario.findByPk(id);
	if (usuario) {
		res.json({
			usuario,
		});
	} else {
		res.status(400).json({
			msg: `El usuario con el id:${id} no existe`,
		});
	}
};
export const postUsuario = async (req: Request, res: Response) => {
	const { body } = req;
	try {
		const existeEmail = await Usuario.findOne({
			where: {
				email: body.email,
			},
		});
		if (existeEmail)
			return res.status(400).json({
				msg: `Ya existe un usuario con el email: ${body.email}`,
			});
		const usuario = Usuario.build(body);
		await usuario.save();

		res.json({
			usuario,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Ocurrio un error al realizar dicha operación, hable con el admin',
		});
	}
};
export const putUsuario = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { body } = req;
	try {
		const usuario = await Usuario.findByPk(id);
		if (!usuario) {
			return res.status(404).json({
				msg: `No existe el ningún usuario con el id: ${id}`,
			});
		}
		if (body.email) {
			const existeEmail = await Usuario.findOne({
				where: {
					email: body.email,
				},
			});
			if (existeEmail)
				return res.status(400).json({
					msg: `Ya existe un usuario con el email: ${body.email}`,
				});
		}
		await usuario.update(body);
		res.json({
			usuario,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Ocurrio un error al realizar dicha operación, hable con el admin',
		});
	}
};
export const deleteUsuario = async (req: Request, res: Response) => {
	const { id } = req.params;
	const usuario = await Usuario.findByPk(id);
	if (!usuario) {
		return res.status(404).json({
			msg: `No existe el ningún usuario con el id: ${id}`,
		});
	}
	//Eliminación fisica del usuario
	//await usuario.destroy();
	await usuario.update({
		estado: false,
	});
	res.json({ 
		msg: 'Usuario eliminado Correctamente',
	});
};
