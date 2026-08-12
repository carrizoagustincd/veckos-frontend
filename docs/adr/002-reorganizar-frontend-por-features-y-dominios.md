# ADR 002 - Reorganizar Frontend Por Features Y Dominios

## Estado
Aprobado

## Contexto
El frontend actual esta organizado principalmente por componentes y servicios, pero no refleja con claridad una separacion por dominios funcionales ni el futuro modelo multi-tenant.

## Decision
Reorganizar progresivamente la arquitectura objetivo del frontend alrededor de features alineadas al dominio:
- `auth`
- `tenancy`
- `members`
- `plans`
- `subscriptions`
- `scheduling`
- `attendance`
- `billing`
- `reporting`

Ademas:
- las rutas deberian evolucionar a lazy loading por feature
- los contratos con backend deben tiparse de forma estricta
- el frontend debe separar shell, features, shared y core

## Consecuencias
Positivas:
- mejora mantenibilidad
- reduce acoplamiento
- facilita crecimiento del producto

Negativas:
- requiere refactor estructural y revisiones de rutas, imports y servicios
