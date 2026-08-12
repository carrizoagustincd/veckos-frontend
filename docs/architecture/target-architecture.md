# Arquitectura Objetivo Frontend

## Objetivo
Definir la arquitectura objetivo de `veckos-frontend` para acompañar el nuevo modelo de dominio multi-tenant y mejorar mantenibilidad, legibilidad y escalabilidad.

## Principios
- organizacion por feature y dominio
- tipado estricto de contratos API
- rutas lazy loaded por feature cuando aplique
- separacion clara entre infraestructura, shell y features
- estado local por feature y shared services solo cuando exista una necesidad real

## Estructura Objetivo
- `core/`
  - auth
  - interceptors
  - guards
  - layout global
  - configuracion global
- `shared/`
  - componentes reutilizables
  - pipes/directives reutilizables
  - utilidades comunes
- `features/`
  - `tenancy/`
  - `auth/`
  - `members/`
  - `plans/`
  - `subscriptions/`
  - `scheduling/`
  - `attendance/`
  - `billing/`
  - `reporting/`

## Reglas Arquitectonicas
- cada feature debe encapsular sus componentes, rutas, servicios API y modelos de UI cuando corresponda
- evitar `any` en servicios y componentes
- usar `HttpParams` para query params
- separar DTOs de API de modelos de presentacion cuando diverjan
- el `jwt.interceptor` debe enviar credenciales solo al backend propio
- guards y shell deben depender de un modelo de sesion robusto

## Auth Y Navegacion
- `AuthService` debe validar expiracion del JWT o depender de una estrategia de session refresh clara
- `roleGuard` y `authGuard` deben ser consistentes con las reglas reales del backend
- el menu debe renderizar segun permisos reales y no solo segun autenticacion general

## Testing Objetivo
- tests unitarios de guards, interceptores y auth
- tests de formularios criticos
- tests de componentes feature principales
