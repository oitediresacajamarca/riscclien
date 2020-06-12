export interface JwtResponseI {
  dataUser: {
    dni: string;
    password: string;
    email: string;
    apellido_paterno: string;
    apellido_materno: string;
    nombres: string;
    tipo_ambito: string;
    descripcion_ambito: string;
    accesToken: string;
    expiresIn: string;
  };
}
