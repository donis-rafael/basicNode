Executing (default): Select TABLE_CATALOG, TABLE_NAME, COLUMN_NAME, DATA_TYPE 
From INFORMATION_SCHEMA.COLUMNS Where TABLE_CATALOG Like 'TecRent_Proy_Usc_Ingenio' And TABLE_NAME Like 'DM_Ingenio'
[
  [
    {
      COLUMN_NAME: 'ingenio_id',
      DATA_TYPE: 'uniqueidentifier'
    },
    {
      COLUMN_NAME: 'nombre_ingenio',
      DATA_TYPE: 'varchar'
    }
  ],
  2
]
undefined
Executing (default): Select TABLE_CATALOG, TABLE_NAME, COLUMN_NAME, DATA_TYPE 
From INFORMATION_SCHEMA.COLUMNS Where TABLE_CATALOG Like 'TecRent_Proy_Usc_Ingenio' And TABLE_NAME Like 'DM_Frente'
[
  [
    {
      COLUMN_NAME: 'frente',
      DATA_TYPE: 'nvarchar'
    }
  ],
  1
]
undefined
Executing (default): Select TABLE_CATALOG, TABLE_NAME, COLUMN_NAME, DATA_TYPE 
From INFORMATION_SCHEMA.COLUMNS Where TABLE_CATALOG Like 'TecRent_Proy_Usc_Ingenio' And TABLE_NAME Like 'DM_Ingenio_Frente'
[
  [
    {
      COLUMN_NAME: 'id_cliente',
      DATA_TYPE: 'uniqueidentifier'
    },
    {
      COLUMN_NAME: 'Frente',
      DATA_TYPE: 'nvarchar'
    }
  ],
  2
]
undefined
Executing (default): Select TABLE_CATALOG, TABLE_NAME, COLUMN_NAME, DATA_TYPE 
From INFORMATION_SCHEMA.COLUMNS Where TABLE_CATALOG Like 'TecRent_Proy_Usc_Ingenio' And TABLE_NAME Like 'IndSemCal_ClienteXFrente'
[
  [
    {
      COLUMN_NAME: 'id_Cliente',
      DATA_TYPE: 'uniqueidentifier'
    },
    {
      COLUMN_NAME: 'Frente',
      DATA_TYPE: 'nvarchar'
    },
    {
      COLUMN_NAME: 'new_calendario',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'Periodo',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'Año',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'SemanadelAño',
      DATA_TYPE: 'varchar'
    },
    {
      COLUMN_NAME: 'Efi_Correctivo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Correctivo_Kpi',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Cuchillas',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Daño_Maquinaria',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Planificado',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Predictivo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Preventivo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'UtilizacionAcumulada',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'UtilizacionHorasxDia',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'EntregaDiariaCoseChadora',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'IngresoTotal',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'Eficiencia',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'Porc_Utilizacion_Equipos',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Porc_Disponibilidad',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Porc_DispoTecRent',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'MetaDisponibilidad',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'UtilizacionProgramada',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'Horas',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'HorasDisponibles',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'HorasTecrent',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Otros',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_Confiabilidad',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_Daño_Maquinaria',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_MTBD_Equipo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'MTTR_HORAS',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'MTBF_HORAS',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'KPI_No_Planeados',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_PMRS',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'HorasNODisponibles',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Cant_Casos_Daño_Maquinaria',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'Cant_Casos_Correctivo',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'ConteoEquipos',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'KPI_MTBD_Flota',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'ConteoFrentesXCliente',
      DATA_TYPE: 'int'
    }
  ],

Executing (default): Select TABLE_CATALOG, TABLE_NAME, COLUMN_NAME, DATA_TYPE 
From INFORMATION_SCHEMA.COLUMNS Where TABLE_CATALOG Like 'TecRent_Proy_Usc_Ingenio' And TABLE_NAME Like 'IndSemCal_Cliente'
[
  [
    {
      COLUMN_NAME: 'id_Cliente',
      DATA_TYPE: 'uniqueidentifier'
    },
    {
      COLUMN_NAME: 'new_calendario',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'Periodo',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'Año',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'SemanadelAño',
      DATA_TYPE: 'varchar'
    },
    {
      COLUMN_NAME: 'Efi_Correctivo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Correctivo_Kpi',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Cuchillas',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Daño_Maquinaria',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Planificado',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Predictivo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Preventivo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'UtilizacionAcumulada',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'UtilizacionHorasxDia',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'EntregaDiariaCoseChadora',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'IngresoTotal',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'Eficiencia',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'Porc_Utilizacion_Equipos',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Porc_Disponibilidad',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Porc_DispoTecRent',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'MetaDisponibilidad',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'UtilizacionProgramada',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'Horas',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'HorasDisponibles',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'HorasTecrent',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Otros',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_Confiabilidad',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_Daño_Maquinaria',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_MTBD_Equipo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'MTTR_HORAS',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'MTBF_HORAS',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'KPI_No_Planeados',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_PMRS',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'HorasNODisponibles',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Cant_Casos_Daño_Maquinaria',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'Cant_Casos_Correctivo',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'ConteoEquipos',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'KPI_MTBD_Flota',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'ConteoFrentesXCliente',
      DATA_TYPE: 'int'
    }
  ],
  39
]
undefined
Executing (default): Select TABLE_CATALOG, TABLE_NAME, COLUMN_NAME, DATA_TYPE From INFORMATION_SCHEMA.COLUMNS 
Where TABLE_CATALOG Like 'TecRent_Proy_Usc_Ingenio' And TABLE_NAME Like 'IndDiariosClienteXFrenteXFincaXEquipo'
[
  [
    {
      COLUMN_NAME: 'id_Cliente',
      DATA_TYPE: 'uniqueidentifier'
    },
    {
      COLUMN_NAME: 'Frente',
      DATA_TYPE: 'nvarchar'
    },
    {
      COLUMN_NAME: 'id_Finca',
      DATA_TYPE: 'nvarchar'
    },
    {
      COLUMN_NAME: 'Productid',
      DATA_TYPE: 'uniqueidentifier'
    },
    {
      COLUMN_NAME: 'new_calendario',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'Periodo',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'Fecha',
      DATA_TYPE: 'datetime'
    },
    {
      COLUMN_NAME: 'SemanaZafra',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'Efi_Correctivo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Correctivo_Kpi',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Cuchillas',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Daño_Maquinaria',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Planificado',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Predictivo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Preventivo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'UtilizacionAcumulada',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'UtilizacionHorasxDia',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'EntregaDiariaCoseChadora',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'IngresoTotal',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'Eficiencia',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'Porc_Utilizacion_Equipos',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Porc_Disponibilidad',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Porc_DispoTecRent',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'MetaDisponibilidad',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'UtilizacionProgramada',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'Horas',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'HorasDisponibles',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'HorasTecrent',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Otros',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_Confiabilidad',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_Daño_Maquinaria',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_MTBD_Equipo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'MTTR_HORAS',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'MTBF_HORAS',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'KPI_No_Planeados',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_PMRS',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'HorasNODisponibles',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Cant_Casos_Daño_Maquinaria',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'Cant_Casos_Correctivo',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'ConteoEquipos',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'KPI_MTBF_Flota',
      DATA_TYPE: 'numeric'
    }
  ],
  41
]
undefined
Executing (default): Select TABLE_CATALOG, TABLE_NAME, COLUMN_NAME, DATA_TYPE From INFORMATION_SCHEMA.COLUMNS Where 
TABLE_CATALOG Like 'TecRent_Proy_Usc_Ingenio' And TABLE_NAME Like 'DM_Ingenio_Frente_Finca'
[
  [
    {
      COLUMN_NAME: 'id_cliente',
      DATA_TYPE: 'uniqueidentifier'
    },
    {
      COLUMN_NAME: 'Frente',
      DATA_TYPE: 'nvarchar'
    },
    {
      COLUMN_NAME: 'id_Finca',
      DATA_TYPE: 'nvarchar'
    }
  ],
  3
]






//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------



[
  [
    {
      COLUMN_NAME: 'id_Cliente',
      DATA_TYPE: 'uniqueidentifier'
    },
    {
      COLUMN_NAME: 'Frente',
      DATA_TYPE: 'nvarchar'
    },
    {
      COLUMN_NAME: 'id_Finca',
      DATA_TYPE: 'nvarchar'
    },
    {
      COLUMN_NAME: 'new_calendario',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'Periodo',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'Fecha',
      DATA_TYPE: 'datetime'
    },
    {
      COLUMN_NAME: 'SemanaZafra',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'Efi_Correctivo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Correctivo_Kpi',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Cuchillas',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Daño_Maquinaria',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Planificado',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Predictivo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Preventivo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'UtilizacionAcumulada',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'UtilizacionHorasxDia',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'EntregaDiariaCoseChadora',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'IngresoTotal',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'Eficiencia',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'Porc_Utilizacion_Equipos',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Porc_Disponibilidad',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Porc_DispoTecRent',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'MetaDisponibilidad',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'UtilizacionProgramada',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'Horas',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'HorasDisponibles',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'HorasTecrent',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Otros',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_Confiabilidad',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_Daño_Maquinaria',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_MTBD_Equipo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'MTTR_HORAS',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'MTBF_HORAS',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'KPI_No_Planeados',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_PMRS',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'HorasNODisponibles',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Cant_Casos_Daño_Maquinaria',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'Cant_Casos_Correctivo',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'ConteoEquipos',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'KPI_MTBD_Flota',
      DATA_TYPE: 'numeric'
    }
  ],
  40
]
undefined
Executing (default): Select TABLE_CATALOG, TABLE_NAME, COLUMN_NAME, DATA_TYPE From INFORMATION_SCHEMA.COLUMNS 
Where TABLE_CATALOG Like 'TecRent_Proy_Usc_Ingenio' And TABLE_NAME Like 'IndSemClienteXFrenteXFinca'
[
  [
    {
      COLUMN_NAME: 'id_Cliente',
      DATA_TYPE: 'uniqueidentifier'
    },
    {
      COLUMN_NAME: 'Frente',
      DATA_TYPE: 'nvarchar'
    },
    {
      COLUMN_NAME: 'id_Finca',
      DATA_TYPE: 'nvarchar'
    },
    {
      COLUMN_NAME: 'new_calendario',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'Periodo',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'SemanaZafra',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'Efi_Correctivo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Correctivo_Kpi',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Cuchillas',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Daño_Maquinaria',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Planificado',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Predictivo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Preventivo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'UtilizacionAcumulada',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'UtilizacionHorasxDia',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'EntregaDiariaCoseChadora',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'IngresoTotal',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'Eficiencia',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'Porc_Utilizacion_Equipos',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Porc_Disponibilidad',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Porc_DispoTecRent',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'MetaDisponibilidad',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'UtilizacionProgramada',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'Horas',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'HorasDisponibles',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'HorasTecrent',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Otros',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_Confiabilidad',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_Daño_Maquinaria',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_MTBD_Equipo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'MTTR_HORAS',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'MTBF_HORAS',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'KPI_No_Planeados',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_PMRS',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'HorasNODisponibles',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Cant_Casos_Daño_Maquinaria',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'Cant_Casos_Correctivo',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'ConteoEquipos',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'KPI_MTBD_Flota',
      DATA_TYPE: 'numeric'
    }
  ],
  39
]
undefined
Executing (default): Select TABLE_CATALOG, TABLE_NAME, COLUMN_NAME, DATA_TYPE From INFORMATION_SCHEMA.COLUMNS 
Where TABLE_CATALOG Like 'TecRent_Proy_Usc_Ingenio' And TABLE_NAME Like 'DM_Finca'
[
  [
    {
      COLUMN_NAME: 'id_Finca',
      DATA_TYPE: 'nvarchar'
    },
    {
      COLUMN_NAME: 'Nombre_Finca',
      DATA_TYPE: 'nvarchar'
    }
  ],
  2
]
undefined
Executing (default): Select TABLE_CATALOG, TABLE_NAME, COLUMN_NAME, DATA_TYPE From INFORMATION_SCHEMA.COLUMNS 
Where TABLE_CATALOG Like 'TecRent_Proy_Usc_Ingenio' And TABLE_NAME Like 'IndSemCal_ClienteXFrenteXFinca'
[
  [
    {
      COLUMN_NAME: 'id_Cliente',
      DATA_TYPE: 'uniqueidentifier'
    },
    {
      COLUMN_NAME: 'Frente',
      DATA_TYPE: 'nvarchar'
    },
    {
      COLUMN_NAME: 'id_Finca',
      DATA_TYPE: 'nvarchar'
    },
    {
      COLUMN_NAME: 'new_calendario',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'Periodo',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'Año',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'SemanadelAño',
      DATA_TYPE: 'varchar'
    },
    {
      COLUMN_NAME: 'Efi_Correctivo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Correctivo_Kpi',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Cuchillas',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Daño_Maquinaria',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Planificado',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Predictivo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Preventivo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'UtilizacionAcumulada',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'UtilizacionHorasxDia',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'EntregaDiariaCoseChadora',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'IngresoTotal',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'Eficiencia',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'Porc_Utilizacion_Equipos',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Porc_Disponibilidad',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Porc_DispoTecRent',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'MetaDisponibilidad',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'UtilizacionProgramada',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'Horas',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'HorasDisponibles',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'HorasTecrent',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Otros',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_Confiabilidad',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_Daño_Maquinaria',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_MTBD_Equipo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'MTTR_HORAS',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'MTBF_HORAS',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'KPI_No_Planeados',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_PMRS',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'HorasNODisponibles',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Cant_Casos_Daño_Maquinaria',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'Cant_Casos_Correctivo',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'ConteoEquipos',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'KPI_MTBD_Flota',
      DATA_TYPE: 'numeric'
    }
  ],
  40
]
undefined
Executing (default): Select TABLE_CATALOG, TABLE_NAME, COLUMN_NAME, DATA_TYPE 
From INFORMATION_SCHEMA.COLUMNS Where TABLE_CATALOG Like 'TecRent_Proy_Usc_Ingenio' And TABLE_NAME Like 'DM_Maquina'
[
  [
    {
      COLUMN_NAME: 'productid',
      DATA_TYPE: 'uniqueidentifier'
    },
    {
      COLUMN_NAME: 'nombre_producto',
      DATA_TYPE: 'nvarchar'
    }
  ],
  2
]
undefined
Executing (default): Select TABLE_CATALOG, TABLE_NAME, COLUMN_NAME, DATA_TYPE 
From INFORMATION_SCHEMA.COLUMNS Where TABLE_CATALOG Like 'TecRent_Proy_Usc_Ingenio' And TABLE_NAME Like 'IndSemCal_ClienteXFrenteXFincaXEquipo'
[
  [
    {
      COLUMN_NAME: 'id_Cliente',
      DATA_TYPE: 'uniqueidentifier'
    },
    {
      COLUMN_NAME: 'Frente',
      DATA_TYPE: 'nvarchar'
    },
    {
      COLUMN_NAME: 'id_Finca',
      DATA_TYPE: 'nvarchar'
    },
    {
      COLUMN_NAME: 'Productid',
      DATA_TYPE: 'uniqueidentifier'
    },
    {
      COLUMN_NAME: 'new_calendario',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'Periodo',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'Año',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'SemanadelAño',
      DATA_TYPE: 'varchar'
    },
    {
      COLUMN_NAME: 'Efi_Correctivo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Correctivo_Kpi',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Cuchillas',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Daño_Maquinaria',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Planificado',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Predictivo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Preventivo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'UtilizacionAcumulada',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'UtilizacionHorasxDia',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'EntregaDiariaCoseChadora',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'IngresoTotal',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'Eficiencia',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'Porc_Utilizacion_Equipos',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Porc_Disponibilidad',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Porc_DispoTecRent',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'MetaDisponibilidad',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'UtilizacionProgramada',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'Horas',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'HorasDisponibles',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'HorasTecrent',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Efi_Otros',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_Confiabilidad',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_Daño_Maquinaria',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_MTBD_Equipo',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'MTTR_HORAS',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'MTBF_HORAS',
      DATA_TYPE: 'numeric'
    },
    {
      COLUMN_NAME: 'KPI_No_Planeados',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'KPI_PMRS',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'HorasNODisponibles',
      DATA_TYPE: 'float'
    },
    {
      COLUMN_NAME: 'Cant_Casos_Daño_Maquinaria',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'Cant_Casos_Correctivo',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'ConteoEquipos',
      DATA_TYPE: 'int'
    },
    {
      COLUMN_NAME: 'KPI_MTBF_Flota',
      DATA_TYPE: 'numeric'
    }
  ],
  41
]
undefined
Executing (default): Select TABLE_CATALOG, TABLE_NAME, COLUMN_NAME, DATA_TYPE 
From INFORMATION_SCHEMA.COLUMNS Where TABLE_CATALOG Like 'TecRent_Proy_Usc_Ingenio' And TABLE_NAME Like 'DM_Ingenio_Frente_Finca_Equipo'
[
  [
    {
      COLUMN_NAME: 'id_cliente',
      DATA_TYPE: 'uniqueidentifier'
    },
    {
      COLUMN_NAME: 'id_Finca',
      DATA_TYPE: 'nvarchar'
    },
    {
      COLUMN_NAME: 'Frente',
      DATA_TYPE: 'nvarchar'
    },
    {
      COLUMN_NAME: 'productid',
      DATA_TYPE: 'uniqueidentifier'
    }
  ],
  4
]






//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------

Executing (default): Select TABLE_CATALOG, TABLE_NAME, COLUMN_NAME, DATA_TYPE From INFORMATION_SCHEMA.COLUMNS 
Where TABLE_CATALOG Like 'TecRent_Proy_Usc_Ingenio' And TABLE_NAME Like 'IndSemClienteXFrenteXFincaXEquipo'

[
    [
      {
        COLUMN_NAME: 'id_Cliente',
        DATA_TYPE: 'uniqueidentifier'
      },
      {
        COLUMN_NAME: 'Frente',
        DATA_TYPE: 'nvarchar'
      },
      {
        COLUMN_NAME: 'id_Finca',
        DATA_TYPE: 'nvarchar'
      },
      {
        COLUMN_NAME: 'Productid',
        DATA_TYPE: 'uniqueidentifier'
      },
      {
        COLUMN_NAME: 'new_calendario',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'Periodo',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'SemanaZafra',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'Efi_Correctivo',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Correctivo_Kpi',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Cuchillas',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Daño_Maquinaria',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Planificado',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Predictivo',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Preventivo',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'UtilizacionAcumulada',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'UtilizacionHorasxDia',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'EntregaDiariaCoseChadora',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'IngresoTotal',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'Eficiencia',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'Porc_Utilizacion_Equipos',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Porc_Disponibilidad',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Porc_DispoTecRent',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'MetaDisponibilidad',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'UtilizacionProgramada',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'Horas',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'HorasDisponibles',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'HorasTecrent',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Otros',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'KPI_Confiabilidad',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'KPI_Daño_Maquinaria',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'KPI_MTBD_Equipo',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'MTTR_HORAS',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'MTBF_HORAS',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'KPI_No_Planeados',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'KPI_PMRS',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'HorasNODisponibles',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Cant_Casos_Daño_Maquinaria',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'Cant_Casos_Correctivo',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'ConteoEquipos',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'KPI_MTBF_Flota',
        DATA_TYPE: 'numeric'
      }
    ],
    40
  ]
  undefined
  Executing (default): Select TABLE_CATALOG, TABLE_NAME, COLUMN_NAME, DATA_TYPE From INFORMATION_SCHEMA.COLUMNS 
  Where TABLE_CATALOG Like 'TecRent_Proy_Usc_Ingenio' And TABLE_NAME Like 'PeriodoZafra'
  [
    [
      {
        COLUMN_NAME: 'new_calendario',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'RangoDias',
        DATA_TYPE: 'varchar'
      },
      {
        COLUMN_NAME: 'Periodo',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'SemanaZafra',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'FI',
        DATA_TYPE: 'datetime'
      },
      {
        COLUMN_NAME: 'FF',
        DATA_TYPE: 'datetime'
      }
    ],
    6
  ]
  undefined
  Executing (default): Select TABLE_CATALOG, TABLE_NAME, COLUMN_NAME, DATA_TYPE 
  From INFORMATION_SCHEMA.COLUMNS Where TABLE_CATALOG Like 'TecRent_Proy_Usc_Ingenio' And TABLE_NAME Like 'IndDiariosClienteXFrente'
  [
    [
      {
        COLUMN_NAME: 'id_Cliente',
        DATA_TYPE: 'uniqueidentifier'
      },
      {
        COLUMN_NAME: 'Frente',
        DATA_TYPE: 'nvarchar'
      },
      {
        COLUMN_NAME: 'new_calendario',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'Periodo',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'Fecha',
        DATA_TYPE: 'datetime'
      },
      {
        COLUMN_NAME: 'SemanaZafra',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'Efi_Correctivo',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Correctivo_Kpi',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Cuchillas',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Daño_Maquinaria',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Planificado',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Predictivo',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Preventivo',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'UtilizacionAcumulada',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'UtilizacionHorasxDia',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'EntregaDiariaCoseChadora',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'IngresoTotal',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'Eficiencia',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'Porc_Utilizacion_Equipos',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Porc_Disponibilidad',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Porc_DispoTecRent',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'MetaDisponibilidad',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'UtilizacionProgramada',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'Horas',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'HorasDisponibles',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'HorasTecrent',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Otros',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'KPI_Confiabilidad',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'KPI_Daño_Maquinaria',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'KPI_MTBD_Equipo',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'MTTR_HORAS',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'MTBF_HORAS',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'KPI_No_Planeados',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'KPI_PMRS',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'HorasNODisponibles',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Cant_Casos_Daño_Maquinaria',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'Cant_Casos_Correctivo',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'ConteoEquipos',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'KPI_MTBD_Flota',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'ConteoFrentesXCliente',
        DATA_TYPE: 'int'
      }
    ],
    40
  ]
  undefined
  Executing (default): Select TABLE_CATALOG, TABLE_NAME, COLUMN_NAME, DATA_TYPE From INFORMATION_SCHEMA.COLUMNS 
  Where TABLE_CATALOG Like 'TecRent_Proy_Usc_Ingenio' And TABLE_NAME Like 'IndDiariosCliente'
  [
    [
      {
        COLUMN_NAME: 'id_Cliente',
        DATA_TYPE: 'uniqueidentifier'
      },
      {
        COLUMN_NAME: 'new_calendario',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'Periodo',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'Fecha',
        DATA_TYPE: 'datetime'
      },
      {
        COLUMN_NAME: 'SemanaZafra',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'Efi_Correctivo',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Correctivo_Kpi',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Cuchillas',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Daño_Maquinaria',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Planificado',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Predictivo',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Preventivo',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'UtilizacionAcumulada',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'UtilizacionHorasxDia',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'EntregaDiariaCoseChadora',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'IngresoTotal',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'Eficiencia',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'Porc_Utilizacion_Equipos',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Porc_Disponibilidad',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Porc_DispoTecRent',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'MetaDisponibilidad',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'UtilizacionProgramada',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'Horas',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'HorasDisponibles',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'HorasTecrent',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Otros',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'KPI_Confiabilidad',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'KPI_Daño_Maquinaria',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'KPI_MTBD_Equipo',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'MTTR_HORAS',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'MTBF_HORAS',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'KPI_No_Planeados',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'KPI_PMRS',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'HorasNODisponibles',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Cant_Casos_Daño_Maquinaria',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'Cant_Casos_Correctivo',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'ConteoEquipos',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'KPI_MTBD_Flota',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'ConteoFrentesXCliente',
        DATA_TYPE: 'int'
      }
    ],
    39
  ]
  undefined
  Executing (default): Select TABLE_CATALOG, TABLE_NAME, COLUMN_NAME, DATA_TYPE From INFORMATION_SCHEMA.COLUMNS 
  Where TABLE_CATALOG Like 'TecRent_Proy_Usc_Ingenio' And TABLE_NAME Like 'IndSemClienteXFrente'
  [
    [
      {
        COLUMN_NAME: 'id_Cliente',
        DATA_TYPE: 'uniqueidentifier'
      },
      {
        COLUMN_NAME: 'Frente',
        DATA_TYPE: 'nvarchar'
      },
      {
        COLUMN_NAME: 'new_calendario',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'Periodo',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'SemanaZafra',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'Efi_Correctivo',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Correctivo_Kpi',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Cuchillas',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Daño_Maquinaria',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Planificado',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Predictivo',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Preventivo',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'UtilizacionAcumulada',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'UtilizacionHorasxDia',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'EntregaDiariaCoseChadora',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'IngresoTotal',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'Eficiencia',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'Porc_Utilizacion_Equipos',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Porc_Disponibilidad',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Porc_DispoTecRent',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'MetaDisponibilidad',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'UtilizacionProgramada',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'Horas',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'HorasDisponibles',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'HorasTecrent',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Otros',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'KPI_Confiabilidad',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'KPI_Daño_Maquinaria',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'KPI_MTBD_Equipo',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'MTTR_HORAS',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'MTBF_HORAS',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'KPI_No_Planeados',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'KPI_PMRS',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'HorasNODisponibles',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Cant_Casos_Daño_Maquinaria',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'Cant_Casos_Correctivo',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'ConteoEquipos',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'KPI_MTBD_Flota',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'ConteoFrentesXCliente',
        DATA_TYPE: 'int'
      }
    ],
    39
  ]
  undefined
  Executing (default): Select TABLE_CATALOG, TABLE_NAME, COLUMN_NAME, DATA_TYPE From INFORMATION_SCHEMA.COLUMNS 
  Where TABLE_CATALOG Like 'TecRent_Proy_Usc_Ingenio' And TABLE_NAME Like 'IndSemCliente'
  [
    [
      {
        COLUMN_NAME: 'id_Cliente',
        DATA_TYPE: 'uniqueidentifier'
      },
      {
        COLUMN_NAME: 'new_calendario',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'Periodo',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'SemanaZafra',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'Efi_Correctivo',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Correctivo_Kpi',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Cuchillas',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Daño_Maquinaria',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Planificado',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Predictivo',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Preventivo',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'UtilizacionAcumulada',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'UtilizacionHorasxDia',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'EntregaDiariaCoseChadora',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'IngresoTotal',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'Eficiencia',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'Porc_Utilizacion_Equipos',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Porc_Disponibilidad',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Porc_DispoTecRent',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'MetaDisponibilidad',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'UtilizacionProgramada',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'Horas',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'HorasDisponibles',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'HorasTecrent',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Efi_Otros',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'KPI_Confiabilidad',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'KPI_Daño_Maquinaria',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'KPI_MTBD_Equipo',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'MTTR_HORAS',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'MTBF_HORAS',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'KPI_No_Planeados',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'KPI_PMRS',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'HorasNODisponibles',
        DATA_TYPE: 'float'
      },
      {
        COLUMN_NAME: 'Cant_Casos_Daño_Maquinaria',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'Cant_Casos_Correctivo',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'ConteoEquipos',
        DATA_TYPE: 'int'
      },
      {
        COLUMN_NAME: 'KPI_MTBD_Flota',
        DATA_TYPE: 'numeric'
      },
      {
        COLUMN_NAME: 'ConteoFrentesXCliente',
        DATA_TYPE: 'int'
      }
    ],
    38
  ]