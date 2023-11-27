/****** Object:  Table [dbo].[Actividad_frente_dia]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Actividad_frente_dia](
	[actividad_frente_dia_id] [uniqueidentifier] NOT NULL,
	[frente_id] [uniqueidentifier] NULL,
	[disponibilidad_total] [decimal](8, 2) NULL,
	[disponibilidad_tecrent] [decimal](8, 2) NULL,
	[meta_disponibilidad] [decimal](8, 2) NULL,
	[utilizacion] [decimal](8, 2) NULL,
	[utilizacion_programada] [decimal](8, 2) NULL,
	[casos_abiertos] [int] NULL,
	[fecha_actividad] [date] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[actividad_frente_dia_id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Actividad_frente_semana]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Actividad_frente_semana](
	[actividad_frente_semana_id] [uniqueidentifier] NOT NULL,
	[frente_id] [uniqueidentifier] NULL,
	[disponibilidad_total_acumulado] [decimal](8, 2) NULL,
	[disponibilidad_tecrent_acumulado] [decimal](8, 2) NULL,
	[ingreso_cania] [decimal](8, 2) NULL,
	[utilizacion] [decimal](8, 2) NULL,
	[eficiencia_ton_acumulada] [decimal](8, 2) NULL,
	[semana] [nvarchar](1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[actividad_frente_semana_id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Actividad_maquina_dia]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Actividad_maquina_dia](
	[actividad_maquina_dia_id] [uniqueidentifier] NOT NULL,
	[maquina_id] [uniqueidentifier] NULL,
	[entrega_cania] [decimal](8, 2) NULL,
	[disponibilidad_total] [decimal](8, 2) NULL,
	[disponibilidad_tecrent] [decimal](8, 2) NULL,
	[utilizacion_hora_dia] [decimal](8, 2) NULL,
	[prcnt_utilizacion] [decimal](8, 2) NULL,
	[casos_abiertos] [int] NULL,
	[fecha_actividad] [date] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[actividad_maquina_dia_id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Actividad_maquina_semana]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Actividad_maquina_semana](
	[actividad_semana_id] [uniqueidentifier] NOT NULL,
	[maquina_id] [uniqueidentifier] NULL,
	[disponibilidad_total] [decimal](8, 2) NULL,
	[disponibilidad_tecrent] [decimal](8, 2) NULL,
	[meta_disponibilidad] [decimal](8, 2) NULL,
	[pmrs] [decimal](8, 2) NULL,
	[mtbf] [decimal](8, 2) NULL,
	[mttr] [decimal](8, 2) NULL,
	[prcnt_danios] [decimal](8, 2) NULL,
	[no_planeados] [decimal](8, 2) NULL,
	[confiabilidad] [decimal](8, 2) NULL,
	[entrega_cania_diaria] [decimal](8, 2) NULL,
	[utilizacion_horaxdia] [decimal](8, 2) NULL,
	[utilizacion_acumulada] [decimal](8, 2) NULL,
	[prcnt_utilizacion] [decimal](8, 2) NULL,
	[eficiencia_ton_hora] [decimal](8, 2) NULL,
	[semana] [nvarchar](1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[actividad_semana_id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cargo]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cargo](
	[nombre_cargo] [varchar](100) NOT NULL,
	[cargo_id] [int] IDENTITY(1,1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[cargo_id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[nombre_cargo] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Caso]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Caso](
	[caso_id] [uniqueidentifier] NOT NULL,
	[maquina_id] [uniqueidentifier] NULL,
	[nombre_caso] [varchar](100) NOT NULL,
	[estado] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[caso_id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Credencial]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Credencial](
	[credencial_id] [int] IDENTITY(1,1) NOT NULL,
	[usuario_id] [int] NULL,
	[user] [varchar](100) NOT NULL,
	[contrasenia] [varchar](100) NOT NULL,
	[token] [varchar](512) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[credencial_id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[user] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DM_Finca]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DM_Finca](
	[id_Finca] [nvarchar](200) NOT NULL,
	[Nombre_Finca] [nvarchar](100) NULL,
 CONSTRAINT [PK_DM_Finca] PRIMARY KEY CLUSTERED 
(
	[id_Finca] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DM_Frente]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DM_Frente](
	[frente] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_DM_Frente] PRIMARY KEY CLUSTERED 
(
	[frente] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DM_Ingenio]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DM_Ingenio](
	[ingenio_id] [uniqueidentifier] NOT NULL,
	[nombre_ingenio] [varchar](200) NOT NULL,
 CONSTRAINT [PK_DM_Ingenio_1] PRIMARY KEY CLUSTERED 
(
	[ingenio_id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DM_Ingenio_Frente]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DM_Ingenio_Frente](
	[id_cliente] [uniqueidentifier] NOT NULL,
	[Frente] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_DM_Ingenio_Frente] PRIMARY KEY CLUSTERED 
(
	[id_cliente] ASC,
	[Frente] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DM_Ingenio_Frente_Finca]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DM_Ingenio_Frente_Finca](
	[id_cliente] [uniqueidentifier] NOT NULL,
	[Frente] [nvarchar](100) NOT NULL,
	[id_Finca] [nvarchar](200) NOT NULL,
 CONSTRAINT [PK_DM_Ingenio_Frente_Finca] PRIMARY KEY CLUSTERED 
(
	[id_cliente] ASC,
	[Frente] ASC,
	[id_Finca] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DM_Ingenio_Frente_Finca_Equipo]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DM_Ingenio_Frente_Finca_Equipo](
	[id_cliente] [uniqueidentifier] NOT NULL,
	[id_Finca] [nvarchar](200) NOT NULL,
	[Frente] [nvarchar](100) NOT NULL,
	[productid] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_DM_Ingenio_Frente_Finca_Equipo] PRIMARY KEY CLUSTERED 
(
	[id_cliente] ASC,
	[id_Finca] ASC,
	[Frente] ASC,
	[productid] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DM_Maquina]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DM_Maquina](
	[productid] [uniqueidentifier] NOT NULL,
	[nombre_producto] [nvarchar](200) NULL,
 CONSTRAINT [PK_DM_Maquina] PRIMARY KEY CLUSTERED 
(
	[productid] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Finca]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Finca](
	[finca_id] [varchar](100) NOT NULL,
	[nombre_finca] [varchar](100) NOT NULL,
	[ingenio_id] [uniqueidentifier] NULL,
 CONSTRAINT [PK__Finca__44DB40EE24BEC5A5] PRIMARY KEY CLUSTERED 
(
	[finca_id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Frente]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Frente](
	[frente_id] [uniqueidentifier] NOT NULL,
	[ingenio_id] [uniqueidentifier] NULL,
	[nombre_frente] [varchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[frente_id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[IndDiariosCliente]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IndDiariosCliente](
	[id_Cliente] [uniqueidentifier] NULL,
	[new_calendario] [int] NULL,
	[Periodo] [int] NULL,
	[Fecha] [datetime] NULL,
	[SemanaZafra] [int] NULL,
	[Efi_Correctivo] [float] NULL,
	[Efi_Correctivo_Kpi] [float] NULL,
	[Efi_Cuchillas] [float] NULL,
	[Efi_Daño_Maquinaria] [float] NULL,
	[Efi_Planificado] [float] NULL,
	[Efi_Predictivo] [float] NULL,
	[Efi_Preventivo] [float] NULL,
	[UtilizacionAcumulada] [numeric](38, 6) NULL,
	[UtilizacionHorasxDia] [numeric](38, 6) NULL,
	[EntregaDiariaCoseChadora] [numeric](38, 6) NULL,
	[IngresoTotal] [numeric](38, 2) NULL,
	[Eficiencia] [numeric](38, 6) NULL,
	[Porc_Utilizacion_Equipos] [float] NULL,
	[Porc_Disponibilidad] [float] NULL,
	[Porc_DispoTecRent] [float] NULL,
	[MetaDisponibilidad] [numeric](2, 2) NULL,
	[UtilizacionProgramada] [numeric](38, 6) NULL,
	[Horas] [float] NULL,
	[HorasDisponibles] [int] NULL,
	[HorasTecrent] [float] NULL,
	[Efi_Otros] [float] NULL,
	[KPI_Confiabilidad] [float] NULL,
	[KPI_Daño_Maquinaria] [float] NULL,
	[KPI_MTBD_Equipo] [float] NULL,
	[MTTR_HORAS] [float] NULL,
	[MTBF_HORAS] [numeric](38, 6) NULL,
	[KPI_No_Planeados] [float] NULL,
	[KPI_PMRS] [float] NULL,
	[HorasNODisponibles] [float] NULL,
	[Cant_Casos_Daño_Maquinaria] [int] NULL,
	[Cant_Casos_Correctivo] [int] NULL,
	[ConteoEquipos] [int] NULL,
	[KPI_MTBD_Flota] [numeric](38, 6) NULL,
	[ConteoFrentesXCliente] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[IndDiariosClienteXFrente]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IndDiariosClienteXFrente](
	[id_Cliente] [uniqueidentifier] NULL,
	[Frente] [nvarchar](100) NULL,
	[new_calendario] [int] NULL,
	[Periodo] [int] NULL,
	[Fecha] [datetime] NULL,
	[SemanaZafra] [int] NULL,
	[Efi_Correctivo] [float] NULL,
	[Efi_Correctivo_Kpi] [float] NULL,
	[Efi_Cuchillas] [float] NULL,
	[Efi_Daño_Maquinaria] [float] NULL,
	[Efi_Planificado] [float] NULL,
	[Efi_Predictivo] [float] NULL,
	[Efi_Preventivo] [float] NULL,
	[UtilizacionAcumulada] [numeric](38, 6) NULL,
	[UtilizacionHorasxDia] [numeric](38, 6) NULL,
	[EntregaDiariaCoseChadora] [numeric](38, 6) NULL,
	[IngresoTotal] [numeric](38, 2) NULL,
	[Eficiencia] [numeric](38, 6) NULL,
	[Porc_Utilizacion_Equipos] [float] NULL,
	[Porc_Disponibilidad] [float] NULL,
	[Porc_DispoTecRent] [float] NULL,
	[MetaDisponibilidad] [numeric](2, 2) NULL,
	[UtilizacionProgramada] [numeric](38, 6) NULL,
	[Horas] [float] NULL,
	[HorasDisponibles] [int] NULL,
	[HorasTecrent] [float] NULL,
	[Efi_Otros] [float] NULL,
	[KPI_Confiabilidad] [float] NULL,
	[KPI_Daño_Maquinaria] [float] NULL,
	[KPI_MTBD_Equipo] [float] NULL,
	[MTTR_HORAS] [float] NULL,
	[MTBF_HORAS] [numeric](38, 6) NULL,
	[KPI_No_Planeados] [float] NULL,
	[KPI_PMRS] [float] NULL,
	[HorasNODisponibles] [float] NULL,
	[Cant_Casos_Daño_Maquinaria] [int] NULL,
	[Cant_Casos_Correctivo] [int] NULL,
	[ConteoEquipos] [int] NULL,
	[KPI_MTBD_Flota] [numeric](38, 6) NULL,
	[ConteoFrentesXCliente] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[IndDiariosClienteXFrenteXFinca]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IndDiariosClienteXFrenteXFinca](
	[id_Cliente] [uniqueidentifier] NULL,
	[Frente] [nvarchar](100) NULL,
	[id_Finca] [nvarchar](200) NULL,
	[new_calendario] [int] NULL,
	[Periodo] [int] NULL,
	[Fecha] [datetime] NULL,
	[SemanaZafra] [int] NULL,
	[Efi_Correctivo] [float] NULL,
	[Efi_Correctivo_Kpi] [float] NULL,
	[Efi_Cuchillas] [float] NULL,
	[Efi_Daño_Maquinaria] [float] NULL,
	[Efi_Planificado] [float] NULL,
	[Efi_Predictivo] [float] NULL,
	[Efi_Preventivo] [float] NULL,
	[UtilizacionAcumulada] [numeric](38, 6) NULL,
	[UtilizacionHorasxDia] [numeric](38, 6) NULL,
	[EntregaDiariaCoseChadora] [numeric](38, 6) NULL,
	[IngresoTotal] [numeric](38, 2) NULL,
	[Eficiencia] [numeric](38, 6) NULL,
	[Porc_Utilizacion_Equipos] [float] NULL,
	[Porc_Disponibilidad] [float] NULL,
	[Porc_DispoTecRent] [float] NULL,
	[MetaDisponibilidad] [numeric](2, 2) NULL,
	[UtilizacionProgramada] [numeric](38, 6) NULL,
	[Horas] [float] NULL,
	[HorasDisponibles] [int] NULL,
	[HorasTecrent] [float] NULL,
	[Efi_Otros] [float] NULL,
	[KPI_Confiabilidad] [float] NULL,
	[KPI_Daño_Maquinaria] [float] NULL,
	[KPI_MTBD_Equipo] [float] NULL,
	[MTTR_HORAS] [float] NULL,
	[MTBF_HORAS] [numeric](38, 6) NULL,
	[KPI_No_Planeados] [float] NULL,
	[KPI_PMRS] [float] NULL,
	[HorasNODisponibles] [float] NULL,
	[Cant_Casos_Daño_Maquinaria] [int] NULL,
	[Cant_Casos_Correctivo] [int] NULL,
	[ConteoEquipos] [int] NULL,
	[KPI_MTBD_Flota] [numeric](38, 6) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[IndDiariosClienteXFrenteXFincaXEquipo]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IndDiariosClienteXFrenteXFincaXEquipo](
	[id_Cliente] [uniqueidentifier] NULL,
	[Frente] [nvarchar](100) NULL,
	[id_Finca] [nvarchar](200) NULL,
	[Productid] [uniqueidentifier] NULL,
	[new_calendario] [int] NULL,
	[Periodo] [int] NULL,
	[Fecha] [datetime] NULL,
	[SemanaZafra] [int] NULL,
	[Efi_Correctivo] [float] NULL,
	[Efi_Correctivo_Kpi] [float] NULL,
	[Efi_Cuchillas] [float] NULL,
	[Efi_Daño_Maquinaria] [float] NULL,
	[Efi_Planificado] [float] NULL,
	[Efi_Predictivo] [float] NULL,
	[Efi_Preventivo] [float] NULL,
	[UtilizacionAcumulada] [numeric](38, 6) NULL,
	[UtilizacionHorasxDia] [numeric](38, 6) NULL,
	[EntregaDiariaCoseChadora] [numeric](38, 6) NULL,
	[IngresoTotal] [numeric](38, 2) NULL,
	[Eficiencia] [numeric](38, 6) NULL,
	[Porc_Utilizacion_Equipos] [float] NULL,
	[Porc_Disponibilidad] [float] NULL,
	[Porc_DispoTecRent] [float] NULL,
	[MetaDisponibilidad] [numeric](2, 2) NULL,
	[UtilizacionProgramada] [numeric](38, 6) NULL,
	[Horas] [float] NULL,
	[HorasDisponibles] [int] NULL,
	[HorasTecrent] [float] NULL,
	[Efi_Otros] [float] NULL,
	[KPI_Confiabilidad] [float] NULL,
	[KPI_Daño_Maquinaria] [float] NULL,
	[KPI_MTBD_Equipo] [float] NULL,
	[MTTR_HORAS] [float] NULL,
	[MTBF_HORAS] [numeric](38, 6) NULL,
	[KPI_No_Planeados] [float] NULL,
	[KPI_PMRS] [float] NULL,
	[HorasNODisponibles] [float] NULL,
	[Cant_Casos_Daño_Maquinaria] [int] NULL,
	[Cant_Casos_Correctivo] [int] NULL,
	[ConteoEquipos] [int] NULL,
	[KPI_MTBF_Flota] [numeric](38, 6) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[IndSemCal_Cliente]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IndSemCal_Cliente](
	[id_Cliente] [uniqueidentifier] NULL,
	[new_calendario] [int] NULL,
	[Periodo] [int] NULL,
	[Año] [int] NULL,
	[SemanadelAño] [varchar](3) NULL,
	[Efi_Correctivo] [float] NULL,
	[Efi_Correctivo_Kpi] [float] NULL,
	[Efi_Cuchillas] [float] NULL,
	[Efi_Daño_Maquinaria] [float] NULL,
	[Efi_Planificado] [float] NULL,
	[Efi_Predictivo] [float] NULL,
	[Efi_Preventivo] [float] NULL,
	[UtilizacionAcumulada] [numeric](38, 6) NULL,
	[UtilizacionHorasxDia] [numeric](38, 6) NULL,
	[EntregaDiariaCoseChadora] [numeric](38, 6) NULL,
	[IngresoTotal] [numeric](38, 2) NULL,
	[Eficiencia] [numeric](38, 6) NULL,
	[Porc_Utilizacion_Equipos] [float] NULL,
	[Porc_Disponibilidad] [float] NULL,
	[Porc_DispoTecRent] [float] NULL,
	[MetaDisponibilidad] [numeric](2, 2) NULL,
	[UtilizacionProgramada] [numeric](38, 6) NULL,
	[Horas] [float] NULL,
	[HorasDisponibles] [int] NULL,
	[HorasTecrent] [float] NULL,
	[Efi_Otros] [float] NULL,
	[KPI_Confiabilidad] [float] NULL,
	[KPI_Daño_Maquinaria] [float] NULL,
	[KPI_MTBD_Equipo] [float] NULL,
	[MTTR_HORAS] [float] NULL,
	[MTBF_HORAS] [numeric](38, 6) NULL,
	[KPI_No_Planeados] [float] NULL,
	[KPI_PMRS] [float] NULL,
	[HorasNODisponibles] [float] NULL,
	[Cant_Casos_Daño_Maquinaria] [int] NULL,
	[Cant_Casos_Correctivo] [int] NULL,
	[ConteoEquipos] [int] NULL,
	[KPI_MTBD_Flota] [numeric](38, 6) NULL,
	[ConteoFrentesXCliente] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[IndSemCal_ClienteXFrente]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IndSemCal_ClienteXFrente](
	[id_Cliente] [uniqueidentifier] NULL,
	[Frente] [nvarchar](100) NULL,
	[new_calendario] [int] NULL,
	[Periodo] [int] NULL,
	[Año] [int] NULL,
	[SemanadelAño] [varchar](3) NULL,
	[Efi_Correctivo] [float] NULL,
	[Efi_Correctivo_Kpi] [float] NULL,
	[Efi_Cuchillas] [float] NULL,
	[Efi_Daño_Maquinaria] [float] NULL,
	[Efi_Planificado] [float] NULL,
	[Efi_Predictivo] [float] NULL,
	[Efi_Preventivo] [float] NULL,
	[UtilizacionAcumulada] [numeric](38, 6) NULL,
	[UtilizacionHorasxDia] [numeric](38, 6) NULL,
	[EntregaDiariaCoseChadora] [numeric](38, 6) NULL,
	[IngresoTotal] [numeric](38, 2) NULL,
	[Eficiencia] [numeric](38, 6) NULL,
	[Porc_Utilizacion_Equipos] [float] NULL,
	[Porc_Disponibilidad] [float] NULL,
	[Porc_DispoTecRent] [float] NULL,
	[MetaDisponibilidad] [numeric](2, 2) NULL,
	[UtilizacionProgramada] [numeric](38, 6) NULL,
	[Horas] [float] NULL,
	[HorasDisponibles] [int] NULL,
	[HorasTecrent] [float] NULL,
	[Efi_Otros] [float] NULL,
	[KPI_Confiabilidad] [float] NULL,
	[KPI_Daño_Maquinaria] [float] NULL,
	[KPI_MTBD_Equipo] [float] NULL,
	[MTTR_HORAS] [float] NULL,
	[MTBF_HORAS] [numeric](38, 6) NULL,
	[KPI_No_Planeados] [float] NULL,
	[KPI_PMRS] [float] NULL,
	[HorasNODisponibles] [float] NULL,
	[Cant_Casos_Daño_Maquinaria] [int] NULL,
	[Cant_Casos_Correctivo] [int] NULL,
	[ConteoEquipos] [int] NULL,
	[KPI_MTBD_Flota] [numeric](38, 6) NULL,
	[ConteoFrentesXCliente] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[IndSemCal_ClienteXFrenteXFinca]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IndSemCal_ClienteXFrenteXFinca](
	[id_Cliente] [uniqueidentifier] NULL,
	[Frente] [nvarchar](100) NULL,
	[id_Finca] [nvarchar](200) NULL,
	[new_calendario] [int] NULL,
	[Periodo] [int] NULL,
	[Año] [int] NULL,
	[SemanadelAño] [varchar](3) NULL,
	[Efi_Correctivo] [float] NULL,
	[Efi_Correctivo_Kpi] [float] NULL,
	[Efi_Cuchillas] [float] NULL,
	[Efi_Daño_Maquinaria] [float] NULL,
	[Efi_Planificado] [float] NULL,
	[Efi_Predictivo] [float] NULL,
	[Efi_Preventivo] [float] NULL,
	[UtilizacionAcumulada] [numeric](38, 6) NULL,
	[UtilizacionHorasxDia] [numeric](38, 6) NULL,
	[EntregaDiariaCoseChadora] [numeric](38, 6) NULL,
	[IngresoTotal] [numeric](38, 2) NULL,
	[Eficiencia] [numeric](38, 6) NULL,
	[Porc_Utilizacion_Equipos] [float] NULL,
	[Porc_Disponibilidad] [float] NULL,
	[Porc_DispoTecRent] [float] NULL,
	[MetaDisponibilidad] [numeric](2, 2) NULL,
	[UtilizacionProgramada] [numeric](38, 6) NULL,
	[Horas] [float] NULL,
	[HorasDisponibles] [int] NULL,
	[HorasTecrent] [float] NULL,
	[Efi_Otros] [float] NULL,
	[KPI_Confiabilidad] [float] NULL,
	[KPI_Daño_Maquinaria] [float] NULL,
	[KPI_MTBD_Equipo] [float] NULL,
	[MTTR_HORAS] [float] NULL,
	[MTBF_HORAS] [numeric](38, 6) NULL,
	[KPI_No_Planeados] [float] NULL,
	[KPI_PMRS] [float] NULL,
	[HorasNODisponibles] [float] NULL,
	[Cant_Casos_Daño_Maquinaria] [int] NULL,
	[Cant_Casos_Correctivo] [int] NULL,
	[ConteoEquipos] [int] NULL,
	[KPI_MTBD_Flota] [numeric](38, 6) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[IndSemCal_ClienteXFrenteXFincaXEquipo]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IndSemCal_ClienteXFrenteXFincaXEquipo](
	[id_Cliente] [uniqueidentifier] NULL,
	[Frente] [nvarchar](100) NULL,
	[id_Finca] [nvarchar](200) NULL,
	[Productid] [uniqueidentifier] NULL,
	[new_calendario] [int] NULL,
	[Periodo] [int] NULL,
	[Año] [int] NULL,
	[SemanadelAño] [varchar](3) NULL,
	[Efi_Correctivo] [float] NULL,
	[Efi_Correctivo_Kpi] [float] NULL,
	[Efi_Cuchillas] [float] NULL,
	[Efi_Daño_Maquinaria] [float] NULL,
	[Efi_Planificado] [float] NULL,
	[Efi_Predictivo] [float] NULL,
	[Efi_Preventivo] [float] NULL,
	[UtilizacionAcumulada] [numeric](38, 6) NULL,
	[UtilizacionHorasxDia] [numeric](38, 6) NULL,
	[EntregaDiariaCoseChadora] [numeric](38, 6) NULL,
	[IngresoTotal] [numeric](38, 2) NULL,
	[Eficiencia] [numeric](38, 6) NULL,
	[Porc_Utilizacion_Equipos] [float] NULL,
	[Porc_Disponibilidad] [float] NULL,
	[Porc_DispoTecRent] [float] NULL,
	[MetaDisponibilidad] [numeric](2, 2) NULL,
	[UtilizacionProgramada] [numeric](38, 6) NULL,
	[Horas] [float] NULL,
	[HorasDisponibles] [int] NULL,
	[HorasTecrent] [float] NULL,
	[Efi_Otros] [float] NULL,
	[KPI_Confiabilidad] [float] NULL,
	[KPI_Daño_Maquinaria] [float] NULL,
	[KPI_MTBD_Equipo] [float] NULL,
	[MTTR_HORAS] [float] NULL,
	[MTBF_HORAS] [numeric](38, 6) NULL,
	[KPI_No_Planeados] [float] NULL,
	[KPI_PMRS] [float] NULL,
	[HorasNODisponibles] [float] NULL,
	[Cant_Casos_Daño_Maquinaria] [int] NULL,
	[Cant_Casos_Correctivo] [int] NULL,
	[ConteoEquipos] [int] NULL,
	[KPI_MTBF_Flota] [numeric](38, 6) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[IndSemCliente]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IndSemCliente](
	[id_Cliente] [uniqueidentifier] NULL,
	[new_calendario] [int] NULL,
	[Periodo] [int] NULL,
	[SemanaZafra] [int] NULL,
	[Efi_Correctivo] [float] NULL,
	[Efi_Correctivo_Kpi] [float] NULL,
	[Efi_Cuchillas] [float] NULL,
	[Efi_Daño_Maquinaria] [float] NULL,
	[Efi_Planificado] [float] NULL,
	[Efi_Predictivo] [float] NULL,
	[Efi_Preventivo] [float] NULL,
	[UtilizacionAcumulada] [numeric](38, 6) NULL,
	[UtilizacionHorasxDia] [numeric](38, 6) NULL,
	[EntregaDiariaCoseChadora] [numeric](38, 6) NULL,
	[IngresoTotal] [numeric](38, 2) NULL,
	[Eficiencia] [numeric](38, 6) NULL,
	[Porc_Utilizacion_Equipos] [float] NULL,
	[Porc_Disponibilidad] [float] NULL,
	[Porc_DispoTecRent] [float] NULL,
	[MetaDisponibilidad] [numeric](2, 2) NULL,
	[UtilizacionProgramada] [numeric](38, 6) NULL,
	[Horas] [float] NULL,
	[HorasDisponibles] [int] NULL,
	[HorasTecrent] [float] NULL,
	[Efi_Otros] [float] NULL,
	[KPI_Confiabilidad] [float] NULL,
	[KPI_Daño_Maquinaria] [float] NULL,
	[KPI_MTBD_Equipo] [float] NULL,
	[MTTR_HORAS] [float] NULL,
	[MTBF_HORAS] [numeric](38, 6) NULL,
	[KPI_No_Planeados] [float] NULL,
	[KPI_PMRS] [float] NULL,
	[HorasNODisponibles] [float] NULL,
	[Cant_Casos_Daño_Maquinaria] [int] NULL,
	[Cant_Casos_Correctivo] [int] NULL,
	[ConteoEquipos] [int] NULL,
	[KPI_MTBD_Flota] [numeric](38, 6) NULL,
	[ConteoFrentesXCliente] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[IndSemClienteXFrente]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IndSemClienteXFrente](
	[id_Cliente] [uniqueidentifier] NULL,
	[Frente] [nvarchar](100) NULL,
	[new_calendario] [int] NULL,
	[Periodo] [int] NULL,
	[SemanaZafra] [int] NULL,
	[Efi_Correctivo] [float] NULL,
	[Efi_Correctivo_Kpi] [float] NULL,
	[Efi_Cuchillas] [float] NULL,
	[Efi_Daño_Maquinaria] [float] NULL,
	[Efi_Planificado] [float] NULL,
	[Efi_Predictivo] [float] NULL,
	[Efi_Preventivo] [float] NULL,
	[UtilizacionAcumulada] [numeric](38, 6) NULL,
	[UtilizacionHorasxDia] [numeric](38, 6) NULL,
	[EntregaDiariaCoseChadora] [numeric](38, 6) NULL,
	[IngresoTotal] [numeric](38, 2) NULL,
	[Eficiencia] [numeric](38, 6) NULL,
	[Porc_Utilizacion_Equipos] [float] NULL,
	[Porc_Disponibilidad] [float] NULL,
	[Porc_DispoTecRent] [float] NULL,
	[MetaDisponibilidad] [numeric](2, 2) NULL,
	[UtilizacionProgramada] [numeric](38, 6) NULL,
	[Horas] [float] NULL,
	[HorasDisponibles] [int] NULL,
	[HorasTecrent] [float] NULL,
	[Efi_Otros] [float] NULL,
	[KPI_Confiabilidad] [float] NULL,
	[KPI_Daño_Maquinaria] [float] NULL,
	[KPI_MTBD_Equipo] [float] NULL,
	[MTTR_HORAS] [float] NULL,
	[MTBF_HORAS] [numeric](38, 6) NULL,
	[KPI_No_Planeados] [float] NULL,
	[KPI_PMRS] [float] NULL,
	[HorasNODisponibles] [float] NULL,
	[Cant_Casos_Daño_Maquinaria] [int] NULL,
	[Cant_Casos_Correctivo] [int] NULL,
	[ConteoEquipos] [int] NULL,
	[KPI_MTBD_Flota] [numeric](38, 6) NULL,
	[ConteoFrentesXCliente] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[IndSemClienteXFrenteXFinca]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IndSemClienteXFrenteXFinca](
	[id_Cliente] [uniqueidentifier] NULL,
	[Frente] [nvarchar](100) NULL,
	[id_Finca] [nvarchar](200) NULL,
	[new_calendario] [int] NULL,
	[Periodo] [int] NULL,
	[SemanaZafra] [int] NULL,
	[Efi_Correctivo] [float] NULL,
	[Efi_Correctivo_Kpi] [float] NULL,
	[Efi_Cuchillas] [float] NULL,
	[Efi_Daño_Maquinaria] [float] NULL,
	[Efi_Planificado] [float] NULL,
	[Efi_Predictivo] [float] NULL,
	[Efi_Preventivo] [float] NULL,
	[UtilizacionAcumulada] [numeric](38, 6) NULL,
	[UtilizacionHorasxDia] [numeric](38, 6) NULL,
	[EntregaDiariaCoseChadora] [numeric](38, 6) NULL,
	[IngresoTotal] [numeric](38, 2) NULL,
	[Eficiencia] [numeric](38, 6) NULL,
	[Porc_Utilizacion_Equipos] [float] NULL,
	[Porc_Disponibilidad] [float] NULL,
	[Porc_DispoTecRent] [float] NULL,
	[MetaDisponibilidad] [numeric](2, 2) NULL,
	[UtilizacionProgramada] [numeric](38, 6) NULL,
	[Horas] [float] NULL,
	[HorasDisponibles] [int] NULL,
	[HorasTecrent] [float] NULL,
	[Efi_Otros] [float] NULL,
	[KPI_Confiabilidad] [float] NULL,
	[KPI_Daño_Maquinaria] [float] NULL,
	[KPI_MTBD_Equipo] [float] NULL,
	[MTTR_HORAS] [float] NULL,
	[MTBF_HORAS] [numeric](38, 6) NULL,
	[KPI_No_Planeados] [float] NULL,
	[KPI_PMRS] [float] NULL,
	[HorasNODisponibles] [float] NULL,
	[Cant_Casos_Daño_Maquinaria] [int] NULL,
	[Cant_Casos_Correctivo] [int] NULL,
	[ConteoEquipos] [int] NULL,
	[KPI_MTBD_Flota] [numeric](38, 6) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[IndSemClienteXFrenteXFincaXEquipo]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IndSemClienteXFrenteXFincaXEquipo](
	[id_Cliente] [uniqueidentifier] NULL,
	[Frente] [nvarchar](100) NULL,
	[id_Finca] [nvarchar](200) NULL,
	[Productid] [uniqueidentifier] NULL,
	[new_calendario] [int] NULL,
	[Periodo] [int] NULL,
	[SemanaZafra] [int] NULL,
	[Efi_Correctivo] [float] NULL,
	[Efi_Correctivo_Kpi] [float] NULL,
	[Efi_Cuchillas] [float] NULL,
	[Efi_Daño_Maquinaria] [float] NULL,
	[Efi_Planificado] [float] NULL,
	[Efi_Predictivo] [float] NULL,
	[Efi_Preventivo] [float] NULL,
	[UtilizacionAcumulada] [numeric](38, 6) NULL,
	[UtilizacionHorasxDia] [numeric](38, 6) NULL,
	[EntregaDiariaCoseChadora] [numeric](38, 6) NULL,
	[IngresoTotal] [numeric](38, 2) NULL,
	[Eficiencia] [numeric](38, 6) NULL,
	[Porc_Utilizacion_Equipos] [float] NULL,
	[Porc_Disponibilidad] [float] NULL,
	[Porc_DispoTecRent] [float] NULL,
	[MetaDisponibilidad] [numeric](2, 2) NULL,
	[UtilizacionProgramada] [numeric](38, 6) NULL,
	[Horas] [float] NULL,
	[HorasDisponibles] [int] NULL,
	[HorasTecrent] [float] NULL,
	[Efi_Otros] [float] NULL,
	[KPI_Confiabilidad] [float] NULL,
	[KPI_Daño_Maquinaria] [float] NULL,
	[KPI_MTBD_Equipo] [float] NULL,
	[MTTR_HORAS] [float] NULL,
	[MTBF_HORAS] [numeric](38, 6) NULL,
	[KPI_No_Planeados] [float] NULL,
	[KPI_PMRS] [float] NULL,
	[HorasNODisponibles] [float] NULL,
	[Cant_Casos_Daño_Maquinaria] [int] NULL,
	[Cant_Casos_Correctivo] [int] NULL,
	[ConteoEquipos] [int] NULL,
	[KPI_MTBF_Flota] [numeric](38, 6) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Ingenio]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ingenio](
	[ingenio_id] [uniqueidentifier] NOT NULL,
	[nombre_ingenio] [varchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ingenio_id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Mantenimiento]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Mantenimiento](
	[mantenimiento_id] [int] IDENTITY(1,1) NOT NULL,
	[nombre_mantenimiento] [varchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[mantenimiento_id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Maquina]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Maquina](
	[maquina_id] [uniqueidentifier] NOT NULL,
	[tipo_maquina_id] [uniqueidentifier] NULL,
	[frente_id] [uniqueidentifier] NULL,
	[codi_maquina] [varchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[maquina_id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PeriodoZafra]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PeriodoZafra](
	[new_calendario] [int] NULL,
	[RangoDias] [varchar](9) NULL,
	[Periodo] [int] NULL,
	[SemanaZafra] [int] NULL,
	[FI] [datetime] NULL,
	[FF] [datetime] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Programa_desarrollo]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Programa_desarrollo](
	[programa_desarrollo_id] [int] NOT NULL,
	[nombre_programa_desarrollo] [varchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[programa_desarrollo_id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Registro_app]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Registro_app](
	[registro_app_id] [int] IDENTITY(1,1) NOT NULL,
	[finca_id] [varchar](100) NULL,
	[mantenimiento_id] [int] NULL,
	[operando] [int] NULL,
	[hora_inicio] [varchar](100) NOT NULL,
	[hora_final] [varchar](100) NOT NULL,
	[comentario] [varchar](250) NULL,
	[urlFoto] [varchar](512) NULL,
	[maquina_id] [uniqueidentifier] NULL,
	[ingenio_id] [uniqueidentifier] NULL,
	[frente_id] [uniqueidentifier] NULL,
 CONSTRAINT [PK__Registro__A89FE19EB39C0C8F] PRIMARY KEY CLUSTERED 
(
	[registro_app_id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Rol]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rol](
	[rol_id] [int] IDENTITY(1,1) NOT NULL,
	[nombre_rol] [varchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[rol_id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[nombre_rol] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Telemetria]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Telemetria](
	[telemetria_id] [int] IDENTITY(1,1) NOT NULL,
	[horometro] [decimal](8, 2) NULL,
	[horas_cadena] [int] NULL,
	[tiempo_ralenti] [decimal](8, 2) NULL,
	[consumo_combustible] [decimal](8, 2) NULL,
	[velocidad_dezplazamiento] [int] NULL,
	[autoguidance] [decimal](8, 2) NULL,
	[smart_cruise] [decimal](8, 2) NULL,
	[auto_tracker] [decimal](8, 2) NULL,
	[rpm_extractor_primario] [decimal](8, 2) NULL,
	[presion_cortador_base] [int] NULL,
	[carga_motor] [decimal](8, 2) NULL,
	[maquina_id] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[telemetria_id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tipo_maquina]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tipo_maquina](
	[tipo_maquina_id] [uniqueidentifier] NOT NULL,
	[nombre_tipo_maquina] [varchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[tipo_maquina_id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[usuario_id] [int] IDENTITY(1,1) NOT NULL,
	[rol_id] [int] NULL,
	[programa_desarrollo] [int] NULL,
	[nombre_usuario] [varchar](100) NOT NULL,
	[correo] [varchar](100) NULL,
	[cargo_id] [int] NULL,
	[ingenio_id] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[usuario_id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario_maquina]    Script Date: 23/11/2023 12:00:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario_maquina](
	[usuario_id] [int] NULL,
	[maquina_id] [uniqueidentifier] NULL,
	[frente_id] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Actividad_frente_dia]  WITH CHECK ADD  CONSTRAINT [FK_ActividadFrenteDia] FOREIGN KEY([frente_id])
REFERENCES [dbo].[Frente] ([frente_id])
GO
ALTER TABLE [dbo].[Actividad_frente_dia] CHECK CONSTRAINT [FK_ActividadFrenteDia]
GO
ALTER TABLE [dbo].[Actividad_frente_semana]  WITH CHECK ADD  CONSTRAINT [FK_ActividadFrenteSemana] FOREIGN KEY([frente_id])
REFERENCES [dbo].[Frente] ([frente_id])
GO
ALTER TABLE [dbo].[Actividad_frente_semana] CHECK CONSTRAINT [FK_ActividadFrenteSemana]
GO
ALTER TABLE [dbo].[Actividad_maquina_dia]  WITH CHECK ADD  CONSTRAINT [FK_ActividadMaquinaDia] FOREIGN KEY([maquina_id])
REFERENCES [dbo].[Maquina] ([maquina_id])
GO
ALTER TABLE [dbo].[Actividad_maquina_dia] CHECK CONSTRAINT [FK_ActividadMaquinaDia]
GO
ALTER TABLE [dbo].[Actividad_maquina_semana]  WITH CHECK ADD  CONSTRAINT [FK_ActividadMaquinaSemana] FOREIGN KEY([maquina_id])
REFERENCES [dbo].[Maquina] ([maquina_id])
GO
ALTER TABLE [dbo].[Actividad_maquina_semana] CHECK CONSTRAINT [FK_ActividadMaquinaSemana]
GO
ALTER TABLE [dbo].[Caso]  WITH NOCHECK ADD  CONSTRAINT [FK_CasoMaquina] FOREIGN KEY([maquina_id])
REFERENCES [dbo].[Maquina] ([maquina_id])
GO
ALTER TABLE [dbo].[Caso] CHECK CONSTRAINT [FK_CasoMaquina]
GO
ALTER TABLE [dbo].[Credencial]  WITH CHECK ADD  CONSTRAINT [FK_CredUser] FOREIGN KEY([usuario_id])
REFERENCES [dbo].[Usuario] ([usuario_id])
GO
ALTER TABLE [dbo].[Credencial] CHECK CONSTRAINT [FK_CredUser]
GO
ALTER TABLE [dbo].[DM_Ingenio_Frente]  WITH NOCHECK ADD  CONSTRAINT [FK_DM_Ingenio_Frente_DM_Frente] FOREIGN KEY([Frente])
REFERENCES [dbo].[DM_Frente] ([frente])
GO
ALTER TABLE [dbo].[DM_Ingenio_Frente] CHECK CONSTRAINT [FK_DM_Ingenio_Frente_DM_Frente]
GO
ALTER TABLE [dbo].[DM_Ingenio_Frente]  WITH NOCHECK ADD  CONSTRAINT [FK_DM_Ingenio_Frente_DM_Ingenio] FOREIGN KEY([id_cliente])
REFERENCES [dbo].[DM_Ingenio] ([ingenio_id])
GO
ALTER TABLE [dbo].[DM_Ingenio_Frente] CHECK CONSTRAINT [FK_DM_Ingenio_Frente_DM_Ingenio]
GO
ALTER TABLE [dbo].[DM_Ingenio_Frente_Finca]  WITH NOCHECK ADD  CONSTRAINT [FK_DM_Ingenio_Frente_Finca_DM_Finca] FOREIGN KEY([id_Finca])
REFERENCES [dbo].[DM_Finca] ([id_Finca])
GO
ALTER TABLE [dbo].[DM_Ingenio_Frente_Finca] CHECK CONSTRAINT [FK_DM_Ingenio_Frente_Finca_DM_Finca]
GO
ALTER TABLE [dbo].[DM_Ingenio_Frente_Finca]  WITH NOCHECK ADD  CONSTRAINT [FK_DM_Ingenio_Frente_Finca_DM_Frente] FOREIGN KEY([Frente])
REFERENCES [dbo].[DM_Frente] ([frente])
GO
ALTER TABLE [dbo].[DM_Ingenio_Frente_Finca] CHECK CONSTRAINT [FK_DM_Ingenio_Frente_Finca_DM_Frente]
GO
ALTER TABLE [dbo].[DM_Ingenio_Frente_Finca]  WITH NOCHECK ADD  CONSTRAINT [FK_DM_Ingenio_Frente_Finca_DM_Ingenio] FOREIGN KEY([id_cliente])
REFERENCES [dbo].[DM_Ingenio] ([ingenio_id])
GO
ALTER TABLE [dbo].[DM_Ingenio_Frente_Finca] CHECK CONSTRAINT [FK_DM_Ingenio_Frente_Finca_DM_Ingenio]
GO
ALTER TABLE [dbo].[DM_Ingenio_Frente_Finca_Equipo]  WITH CHECK ADD  CONSTRAINT [FK_DM_Ingenio_Frente_Finca_Equipo_DM_Finca] FOREIGN KEY([id_Finca])
REFERENCES [dbo].[DM_Finca] ([id_Finca])
GO
ALTER TABLE [dbo].[DM_Ingenio_Frente_Finca_Equipo] CHECK CONSTRAINT [FK_DM_Ingenio_Frente_Finca_Equipo_DM_Finca]
GO
ALTER TABLE [dbo].[DM_Ingenio_Frente_Finca_Equipo]  WITH CHECK ADD  CONSTRAINT [FK_DM_Ingenio_Frente_Finca_Equipo_DM_Frente] FOREIGN KEY([Frente])
REFERENCES [dbo].[DM_Frente] ([frente])
GO
ALTER TABLE [dbo].[DM_Ingenio_Frente_Finca_Equipo] CHECK CONSTRAINT [FK_DM_Ingenio_Frente_Finca_Equipo_DM_Frente]
GO
ALTER TABLE [dbo].[DM_Ingenio_Frente_Finca_Equipo]  WITH CHECK ADD  CONSTRAINT [FK_DM_Ingenio_Frente_Finca_Equipo_DM_Ingenio] FOREIGN KEY([id_cliente])
REFERENCES [dbo].[DM_Ingenio] ([ingenio_id])
GO
ALTER TABLE [dbo].[DM_Ingenio_Frente_Finca_Equipo] CHECK CONSTRAINT [FK_DM_Ingenio_Frente_Finca_Equipo_DM_Ingenio]
GO
ALTER TABLE [dbo].[DM_Ingenio_Frente_Finca_Equipo]  WITH CHECK ADD  CONSTRAINT [FK_DM_Ingenio_Frente_Finca_Equipo_DM_Maquina] FOREIGN KEY([productid])
REFERENCES [dbo].[DM_Maquina] ([productid])
GO
ALTER TABLE [dbo].[DM_Ingenio_Frente_Finca_Equipo] CHECK CONSTRAINT [FK_DM_Ingenio_Frente_Finca_Equipo_DM_Maquina]
GO
ALTER TABLE [dbo].[Finca]  WITH NOCHECK ADD  CONSTRAINT [FK_finca_Ingenio] FOREIGN KEY([ingenio_id])
REFERENCES [dbo].[Ingenio] ([ingenio_id])
GO
ALTER TABLE [dbo].[Finca] CHECK CONSTRAINT [FK_finca_Ingenio]
GO
ALTER TABLE [dbo].[Frente]  WITH CHECK ADD  CONSTRAINT [FK_IngenioFrente] FOREIGN KEY([ingenio_id])
REFERENCES [dbo].[Ingenio] ([ingenio_id])
GO
ALTER TABLE [dbo].[Frente] CHECK CONSTRAINT [FK_IngenioFrente]
GO
ALTER TABLE [dbo].[IndDiariosCliente]  WITH CHECK ADD  CONSTRAINT [FK_IndDiariosCliente_DM_Ingenio] FOREIGN KEY([id_Cliente])
REFERENCES [dbo].[DM_Ingenio] ([ingenio_id])
GO
ALTER TABLE [dbo].[IndDiariosCliente] CHECK CONSTRAINT [FK_IndDiariosCliente_DM_Ingenio]
GO
ALTER TABLE [dbo].[IndDiariosClienteXFrente]  WITH CHECK ADD  CONSTRAINT [FK_IndDiariosClienteXFrente_DM_Frente] FOREIGN KEY([Frente])
REFERENCES [dbo].[DM_Frente] ([frente])
GO
ALTER TABLE [dbo].[IndDiariosClienteXFrente] CHECK CONSTRAINT [FK_IndDiariosClienteXFrente_DM_Frente]
GO
ALTER TABLE [dbo].[IndDiariosClienteXFrente]  WITH CHECK ADD  CONSTRAINT [FK_IndDiariosClienteXFrente_DM_Ingenio] FOREIGN KEY([id_Cliente])
REFERENCES [dbo].[DM_Ingenio] ([ingenio_id])
GO
ALTER TABLE [dbo].[IndDiariosClienteXFrente] CHECK CONSTRAINT [FK_IndDiariosClienteXFrente_DM_Ingenio]
GO
ALTER TABLE [dbo].[IndDiariosClienteXFrenteXFinca]  WITH CHECK ADD  CONSTRAINT [FK_IndDiariosClienteXFrenteXFinca_DM_Finca] FOREIGN KEY([id_Finca])
REFERENCES [dbo].[DM_Finca] ([id_Finca])
GO
ALTER TABLE [dbo].[IndDiariosClienteXFrenteXFinca] CHECK CONSTRAINT [FK_IndDiariosClienteXFrenteXFinca_DM_Finca]
GO
ALTER TABLE [dbo].[IndDiariosClienteXFrenteXFinca]  WITH CHECK ADD  CONSTRAINT [FK_IndDiariosClienteXFrenteXFinca_DM_Frente] FOREIGN KEY([Frente])
REFERENCES [dbo].[DM_Frente] ([frente])
GO
ALTER TABLE [dbo].[IndDiariosClienteXFrenteXFinca] CHECK CONSTRAINT [FK_IndDiariosClienteXFrenteXFinca_DM_Frente]
GO
ALTER TABLE [dbo].[IndDiariosClienteXFrenteXFinca]  WITH CHECK ADD  CONSTRAINT [FK_IndDiariosClienteXFrenteXFinca_DM_Ingenio] FOREIGN KEY([id_Cliente])
REFERENCES [dbo].[DM_Ingenio] ([ingenio_id])
GO
ALTER TABLE [dbo].[IndDiariosClienteXFrenteXFinca] CHECK CONSTRAINT [FK_IndDiariosClienteXFrenteXFinca_DM_Ingenio]
GO
ALTER TABLE [dbo].[IndDiariosClienteXFrenteXFincaXEquipo]  WITH CHECK ADD  CONSTRAINT [FK_IndDiariosClienteXFrenteXFincaXEquipo_DM_Finca] FOREIGN KEY([id_Finca])
REFERENCES [dbo].[DM_Finca] ([id_Finca])
GO
ALTER TABLE [dbo].[IndDiariosClienteXFrenteXFincaXEquipo] CHECK CONSTRAINT [FK_IndDiariosClienteXFrenteXFincaXEquipo_DM_Finca]
GO
ALTER TABLE [dbo].[IndDiariosClienteXFrenteXFincaXEquipo]  WITH CHECK ADD  CONSTRAINT [FK_IndDiariosClienteXFrenteXFincaXEquipo_DM_Frente] FOREIGN KEY([Frente])
REFERENCES [dbo].[DM_Frente] ([frente])
GO
ALTER TABLE [dbo].[IndDiariosClienteXFrenteXFincaXEquipo] CHECK CONSTRAINT [FK_IndDiariosClienteXFrenteXFincaXEquipo_DM_Frente]
GO
ALTER TABLE [dbo].[IndDiariosClienteXFrenteXFincaXEquipo]  WITH CHECK ADD  CONSTRAINT [FK_IndDiariosClienteXFrenteXFincaXEquipo_DM_Ingenio] FOREIGN KEY([id_Cliente])
REFERENCES [dbo].[DM_Ingenio] ([ingenio_id])
GO
ALTER TABLE [dbo].[IndDiariosClienteXFrenteXFincaXEquipo] CHECK CONSTRAINT [FK_IndDiariosClienteXFrenteXFincaXEquipo_DM_Ingenio]
GO
ALTER TABLE [dbo].[IndDiariosClienteXFrenteXFincaXEquipo]  WITH CHECK ADD  CONSTRAINT [FK_IndDiariosClienteXFrenteXFincaXEquipo_DM_Maquina] FOREIGN KEY([Productid])
REFERENCES [dbo].[DM_Maquina] ([productid])
GO
ALTER TABLE [dbo].[IndDiariosClienteXFrenteXFincaXEquipo] CHECK CONSTRAINT [FK_IndDiariosClienteXFrenteXFincaXEquipo_DM_Maquina]
GO
ALTER TABLE [dbo].[IndSemCal_Cliente]  WITH CHECK ADD  CONSTRAINT [FK_IndSemCal_Cliente_DM_Ingenio] FOREIGN KEY([id_Cliente])
REFERENCES [dbo].[DM_Ingenio] ([ingenio_id])
GO
ALTER TABLE [dbo].[IndSemCal_Cliente] CHECK CONSTRAINT [FK_IndSemCal_Cliente_DM_Ingenio]
GO
ALTER TABLE [dbo].[IndSemCal_ClienteXFrente]  WITH CHECK ADD  CONSTRAINT [FK_IndSemCal_ClienteXFrente_DM_Frente] FOREIGN KEY([Frente])
REFERENCES [dbo].[DM_Frente] ([frente])
GO
ALTER TABLE [dbo].[IndSemCal_ClienteXFrente] CHECK CONSTRAINT [FK_IndSemCal_ClienteXFrente_DM_Frente]
GO
ALTER TABLE [dbo].[IndSemCal_ClienteXFrente]  WITH CHECK ADD  CONSTRAINT [FK_IndSemCal_ClienteXFrente_DM_Ingenio] FOREIGN KEY([id_Cliente])
REFERENCES [dbo].[DM_Ingenio] ([ingenio_id])
GO
ALTER TABLE [dbo].[IndSemCal_ClienteXFrente] CHECK CONSTRAINT [FK_IndSemCal_ClienteXFrente_DM_Ingenio]
GO
ALTER TABLE [dbo].[IndSemCal_ClienteXFrenteXFinca]  WITH CHECK ADD  CONSTRAINT [FK_IndSemCal_ClienteXFrenteXFinca_DM_Finca] FOREIGN KEY([id_Finca])
REFERENCES [dbo].[DM_Finca] ([id_Finca])
GO
ALTER TABLE [dbo].[IndSemCal_ClienteXFrenteXFinca] CHECK CONSTRAINT [FK_IndSemCal_ClienteXFrenteXFinca_DM_Finca]
GO
ALTER TABLE [dbo].[IndSemCal_ClienteXFrenteXFinca]  WITH CHECK ADD  CONSTRAINT [FK_IndSemCal_ClienteXFrenteXFinca_DM_Frente] FOREIGN KEY([Frente])
REFERENCES [dbo].[DM_Frente] ([frente])
GO
ALTER TABLE [dbo].[IndSemCal_ClienteXFrenteXFinca] CHECK CONSTRAINT [FK_IndSemCal_ClienteXFrenteXFinca_DM_Frente]
GO
ALTER TABLE [dbo].[IndSemCal_ClienteXFrenteXFinca]  WITH CHECK ADD  CONSTRAINT [FK_IndSemCal_ClienteXFrenteXFinca_DM_Ingenio] FOREIGN KEY([id_Cliente])
REFERENCES [dbo].[DM_Ingenio] ([ingenio_id])
GO
ALTER TABLE [dbo].[IndSemCal_ClienteXFrenteXFinca] CHECK CONSTRAINT [FK_IndSemCal_ClienteXFrenteXFinca_DM_Ingenio]
GO
ALTER TABLE [dbo].[IndSemCal_ClienteXFrenteXFincaXEquipo]  WITH CHECK ADD  CONSTRAINT [FK_IndSemCal_ClienteXFrenteXFincaXEquipo_DM_Finca] FOREIGN KEY([id_Finca])
REFERENCES [dbo].[DM_Finca] ([id_Finca])
GO
ALTER TABLE [dbo].[IndSemCal_ClienteXFrenteXFincaXEquipo] CHECK CONSTRAINT [FK_IndSemCal_ClienteXFrenteXFincaXEquipo_DM_Finca]
GO
ALTER TABLE [dbo].[IndSemCal_ClienteXFrenteXFincaXEquipo]  WITH CHECK ADD  CONSTRAINT [FK_IndSemCal_ClienteXFrenteXFincaXEquipo_DM_Frente] FOREIGN KEY([Frente])
REFERENCES [dbo].[DM_Frente] ([frente])
GO
ALTER TABLE [dbo].[IndSemCal_ClienteXFrenteXFincaXEquipo] CHECK CONSTRAINT [FK_IndSemCal_ClienteXFrenteXFincaXEquipo_DM_Frente]
GO
ALTER TABLE [dbo].[IndSemCal_ClienteXFrenteXFincaXEquipo]  WITH CHECK ADD  CONSTRAINT [FK_IndSemCal_ClienteXFrenteXFincaXEquipo_DM_Ingenio] FOREIGN KEY([id_Cliente])
REFERENCES [dbo].[DM_Ingenio] ([ingenio_id])
GO
ALTER TABLE [dbo].[IndSemCal_ClienteXFrenteXFincaXEquipo] CHECK CONSTRAINT [FK_IndSemCal_ClienteXFrenteXFincaXEquipo_DM_Ingenio]
GO
ALTER TABLE [dbo].[IndSemCal_ClienteXFrenteXFincaXEquipo]  WITH CHECK ADD  CONSTRAINT [FK_IndSemCal_ClienteXFrenteXFincaXEquipo_DM_Maquina] FOREIGN KEY([Productid])
REFERENCES [dbo].[DM_Maquina] ([productid])
GO
ALTER TABLE [dbo].[IndSemCal_ClienteXFrenteXFincaXEquipo] CHECK CONSTRAINT [FK_IndSemCal_ClienteXFrenteXFincaXEquipo_DM_Maquina]
GO
ALTER TABLE [dbo].[IndSemCliente]  WITH CHECK ADD  CONSTRAINT [FK_IndSemCliente_DM_Ingenio] FOREIGN KEY([id_Cliente])
REFERENCES [dbo].[DM_Ingenio] ([ingenio_id])
GO
ALTER TABLE [dbo].[IndSemCliente] CHECK CONSTRAINT [FK_IndSemCliente_DM_Ingenio]
GO
ALTER TABLE [dbo].[IndSemClienteXFrente]  WITH CHECK ADD  CONSTRAINT [FK_IndSemClienteXFrente_DM_Frente] FOREIGN KEY([Frente])
REFERENCES [dbo].[DM_Frente] ([frente])
GO
ALTER TABLE [dbo].[IndSemClienteXFrente] CHECK CONSTRAINT [FK_IndSemClienteXFrente_DM_Frente]
GO
ALTER TABLE [dbo].[IndSemClienteXFrente]  WITH CHECK ADD  CONSTRAINT [FK_IndSemClienteXFrente_DM_Ingenio] FOREIGN KEY([id_Cliente])
REFERENCES [dbo].[DM_Ingenio] ([ingenio_id])
GO
ALTER TABLE [dbo].[IndSemClienteXFrente] CHECK CONSTRAINT [FK_IndSemClienteXFrente_DM_Ingenio]
GO
ALTER TABLE [dbo].[IndSemClienteXFrenteXFinca]  WITH CHECK ADD  CONSTRAINT [FK_IndSemClienteXFrenteXFinca_DM_Finca] FOREIGN KEY([id_Finca])
REFERENCES [dbo].[DM_Finca] ([id_Finca])
GO
ALTER TABLE [dbo].[IndSemClienteXFrenteXFinca] CHECK CONSTRAINT [FK_IndSemClienteXFrenteXFinca_DM_Finca]
GO
ALTER TABLE [dbo].[IndSemClienteXFrenteXFinca]  WITH CHECK ADD  CONSTRAINT [FK_IndSemClienteXFrenteXFinca_DM_Frente] FOREIGN KEY([Frente])
REFERENCES [dbo].[DM_Frente] ([frente])
GO
ALTER TABLE [dbo].[IndSemClienteXFrenteXFinca] CHECK CONSTRAINT [FK_IndSemClienteXFrenteXFinca_DM_Frente]
GO
ALTER TABLE [dbo].[IndSemClienteXFrenteXFinca]  WITH CHECK ADD  CONSTRAINT [FK_IndSemClienteXFrenteXFinca_DM_Ingenio] FOREIGN KEY([id_Cliente])
REFERENCES [dbo].[DM_Ingenio] ([ingenio_id])
GO
ALTER TABLE [dbo].[IndSemClienteXFrenteXFinca] CHECK CONSTRAINT [FK_IndSemClienteXFrenteXFinca_DM_Ingenio]
GO
ALTER TABLE [dbo].[IndSemClienteXFrenteXFincaXEquipo]  WITH CHECK ADD  CONSTRAINT [FK_IndSemClienteXFrenteXFincaXEquipo_DM_Finca] FOREIGN KEY([id_Finca])
REFERENCES [dbo].[DM_Finca] ([id_Finca])
GO
ALTER TABLE [dbo].[IndSemClienteXFrenteXFincaXEquipo] CHECK CONSTRAINT [FK_IndSemClienteXFrenteXFincaXEquipo_DM_Finca]
GO
ALTER TABLE [dbo].[IndSemClienteXFrenteXFincaXEquipo]  WITH CHECK ADD  CONSTRAINT [FK_IndSemClienteXFrenteXFincaXEquipo_DM_Frente] FOREIGN KEY([Frente])
REFERENCES [dbo].[DM_Frente] ([frente])
GO
ALTER TABLE [dbo].[IndSemClienteXFrenteXFincaXEquipo] CHECK CONSTRAINT [FK_IndSemClienteXFrenteXFincaXEquipo_DM_Frente]
GO
ALTER TABLE [dbo].[IndSemClienteXFrenteXFincaXEquipo]  WITH CHECK ADD  CONSTRAINT [FK_IndSemClienteXFrenteXFincaXEquipo_DM_Ingenio] FOREIGN KEY([id_Cliente])
REFERENCES [dbo].[DM_Ingenio] ([ingenio_id])
GO
ALTER TABLE [dbo].[IndSemClienteXFrenteXFincaXEquipo] CHECK CONSTRAINT [FK_IndSemClienteXFrenteXFincaXEquipo_DM_Ingenio]
GO
ALTER TABLE [dbo].[IndSemClienteXFrenteXFincaXEquipo]  WITH CHECK ADD  CONSTRAINT [FK_IndSemClienteXFrenteXFincaXEquipo_DM_Maquina] FOREIGN KEY([Productid])
REFERENCES [dbo].[DM_Maquina] ([productid])
GO
ALTER TABLE [dbo].[IndSemClienteXFrenteXFincaXEquipo] CHECK CONSTRAINT [FK_IndSemClienteXFrenteXFincaXEquipo_DM_Maquina]
GO
ALTER TABLE [dbo].[Maquina]  WITH CHECK ADD  CONSTRAINT [FK_FrenteMaquina] FOREIGN KEY([frente_id])
REFERENCES [dbo].[Frente] ([frente_id])
GO
ALTER TABLE [dbo].[Maquina] CHECK CONSTRAINT [FK_FrenteMaquina]
GO
ALTER TABLE [dbo].[Registro_app]  WITH CHECK ADD  CONSTRAINT [FK_Registro_app_frente] FOREIGN KEY([frente_id])
REFERENCES [dbo].[Frente] ([frente_id])
GO
ALTER TABLE [dbo].[Registro_app] CHECK CONSTRAINT [FK_Registro_app_frente]
GO
ALTER TABLE [dbo].[Registro_app]  WITH CHECK ADD  CONSTRAINT [FK_Registro_app_Ingenio] FOREIGN KEY([ingenio_id])
REFERENCES [dbo].[Ingenio] ([ingenio_id])
GO
ALTER TABLE [dbo].[Registro_app] CHECK CONSTRAINT [FK_Registro_app_Ingenio]
GO
ALTER TABLE [dbo].[Registro_app]  WITH CHECK ADD  CONSTRAINT [FK_Registro_app_Maquina] FOREIGN KEY([maquina_id])
REFERENCES [dbo].[Maquina] ([maquina_id])
GO
ALTER TABLE [dbo].[Registro_app] CHECK CONSTRAINT [FK_Registro_app_Maquina]
GO
ALTER TABLE [dbo].[Registro_app]  WITH CHECK ADD  CONSTRAINT [FK_RegistroApp3] FOREIGN KEY([finca_id])
REFERENCES [dbo].[Finca] ([finca_id])
GO
ALTER TABLE [dbo].[Registro_app] CHECK CONSTRAINT [FK_RegistroApp3]
GO
ALTER TABLE [dbo].[Registro_app]  WITH CHECK ADD  CONSTRAINT [FK_RegistroApp5] FOREIGN KEY([mantenimiento_id])
REFERENCES [dbo].[Mantenimiento] ([mantenimiento_id])
GO
ALTER TABLE [dbo].[Registro_app] CHECK CONSTRAINT [FK_RegistroApp5]
GO
ALTER TABLE [dbo].[Telemetria]  WITH CHECK ADD  CONSTRAINT [FK_TeleMaquina] FOREIGN KEY([maquina_id])
REFERENCES [dbo].[Maquina] ([maquina_id])
GO
ALTER TABLE [dbo].[Telemetria] CHECK CONSTRAINT [FK_TeleMaquina]
GO
ALTER TABLE [dbo].[Usuario]  WITH CHECK ADD  CONSTRAINT [FK_CargoUsuario] FOREIGN KEY([cargo_id])
REFERENCES [dbo].[Cargo] ([cargo_id])
GO
ALTER TABLE [dbo].[Usuario] CHECK CONSTRAINT [FK_CargoUsuario]
GO
ALTER TABLE [dbo].[Usuario]  WITH CHECK ADD  CONSTRAINT [FK_PrgUsuario] FOREIGN KEY([programa_desarrollo])
REFERENCES [dbo].[Programa_desarrollo] ([programa_desarrollo_id])
GO
ALTER TABLE [dbo].[Usuario] CHECK CONSTRAINT [FK_PrgUsuario]
GO
ALTER TABLE [dbo].[Usuario]  WITH CHECK ADD  CONSTRAINT [FK_RolUsuario] FOREIGN KEY([rol_id])
REFERENCES [dbo].[Rol] ([rol_id])
GO
ALTER TABLE [dbo].[Usuario] CHECK CONSTRAINT [FK_RolUsuario]
GO
ALTER TABLE [dbo].[Usuario]  WITH CHECK ADD  CONSTRAINT [FK_Usuario_Ingenio] FOREIGN KEY([ingenio_id])
REFERENCES [dbo].[Ingenio] ([ingenio_id])
GO
ALTER TABLE [dbo].[Usuario] CHECK CONSTRAINT [FK_Usuario_Ingenio]
GO
ALTER TABLE [dbo].[Usuario_maquina]  WITH CHECK ADD  CONSTRAINT [FK_usuario_maquina_frente] FOREIGN KEY([frente_id])
REFERENCES [dbo].[Frente] ([frente_id])
GO
ALTER TABLE [dbo].[Usuario_maquina] CHECK CONSTRAINT [FK_usuario_maquina_frente]
GO
ALTER TABLE [dbo].[Usuario_maquina]  WITH CHECK ADD  CONSTRAINT [FK_usuario_maquina_Maquina] FOREIGN KEY([maquina_id])
REFERENCES [dbo].[Maquina] ([maquina_id])
GO
ALTER TABLE [dbo].[Usuario_maquina] CHECK CONSTRAINT [FK_usuario_maquina_Maquina]
GO
ALTER TABLE [dbo].[Usuario_maquina]  WITH CHECK ADD  CONSTRAINT [FK_UsuarioMaquina2] FOREIGN KEY([usuario_id])
REFERENCES [dbo].[Usuario] ([usuario_id])
GO
ALTER TABLE [dbo].[Usuario_maquina] CHECK CONSTRAINT [FK_UsuarioMaquina2]
GO
