# Alineacion Del Frontend Con El Nuevo Dominio

## Objetivo
Definir como debe alinearse el frontend con el nuevo backend multi-tenant y su dominio objetivo.

## Mapeo De Conceptos
- `UsuarioSistema` actual -> `StaffUser`
- `Usuario` actual -> `Member`
- `Plan` actual -> `Plan`
- `Inscripcion` actual -> `Subscription`
- `DetalleInscripcion` actual -> `SubscriptionSchedule`
- `Turno` actual -> `ClassTemplate`
- `Clase` actual -> `ClassSession`
- `Cuenta` actual -> `PaymentAccount`
- `Pago` actual -> `Payment`

## Features Objetivo

### Auth
- login
- gestion de sesion
- permisos por rol

### Members
- alta, edicion, detalle, listado y estados administrativos de miembros

### Plans
- catalogo y reglas comerciales

### Subscriptions
- alta, renovacion, pausas, cancelaciones y schedules asociados

### Scheduling
- definicion de plantillas recurrentes (`ClassTemplate`)
- visualizacion de sesiones (`ClassSession`)

### Attendance
- registro y consulta de asistencia con estados explicitamente modelados

### Billing
- cuentas de cobro (`PaymentAccount`)
- cargos (`Charge`)
- pagos (`Payment`)
- asignaciones de pago (`PaymentAllocation`)

### Reporting
- dashboard
- reportes financieros
- reportes operativos

## Contratos API
Principios para la siguiente iteracion:
- no consumir entidades JPA serializadas directamente
- usar DTOs estables de request/response
- versionar cambios importantes si en el futuro hay clientes externos
- no depender de enums ambiguos ni estados mezclados

## Multi-Tenancy En Frontend
- el frontend debe estar preparado para trabajar bajo contexto de tenant
- el contexto de tenant puede resolverse por dominio, subdominio, login o metadata del usuario autenticado
- las vistas y permisos deben responder al tenant activo y al rol del `StaffUser`
