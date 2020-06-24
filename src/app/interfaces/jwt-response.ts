export interface JwtResponseI {
  dataUser: {
    dni: string;
    email: string;
    tipo_ambito: string;
    descripcion_ambito: string;
    estado: string;
    isLogged: string;
    accessToken: string;
    expiresIn: string;
  };
}
