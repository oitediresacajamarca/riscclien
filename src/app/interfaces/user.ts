export interface UserI {
  dni?: string;
  password?: string;
  email?: string;
  apellido_paterno?: string;
  apellido_materno?: string;
  nombres?: string;
  tipo_ambito?: string;
  descripcion_ambito?: string;
  estado?: string;
  isLogged?: string;
  fecha_creacion?: Date;
  roles_asignados?: string;
  roles_removidos?: string;
}
