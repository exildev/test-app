export interface Proyecto {
    pk: number;
    grupo: number;
    nombre: string;
    ordenes: Orden[];
}

export interface Orden {
    pk: number;
    fecha: Date;
    fecha_creacion: Date;
    nombre_corto: string;
    actividades: Actividad[];
    materiales: Material[];
}

export interface Actividad {
    id: number;
    completado: boolean;
    dias_estimados: number;
    fecha_completado: Date;
    formato_id: number;
    nombre: string;
    orden_id: number;
    poscicion: number;
    registro_id: number;
}

export interface Material {
    id: number;
    material_id: number;
    orden_id: number;
    precio: string;
    tipo_id: number;
}
