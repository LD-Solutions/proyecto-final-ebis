interface MiembroEquipo {
    name: string;
    role: string;
    image: string;
}
interface Departamento {
    name: string;
    members: MiembroEquipo[];
}
interface DatosEquipo {
    [departamentoNombre: string]: Departamento;
}
declare function obtenerDatosEquipo(): Promise<DatosEquipo>;
declare function pintarDatosEquipo(): Promise<void>;
