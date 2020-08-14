import { RolesI } from './roles';

export interface JwtResponseI {
  dataUser: {
    dni: string;
    apellido_paterno: string;
    apellido_materno: string;
    nombres: string;
    email: string;
    tipo_ambito: string;
    descripcion_ambito: string;
    estado: string;
    isLogged: string;
    accessToken: string;
    expiresIn: string;
  };

  roles: RolesI;
}
