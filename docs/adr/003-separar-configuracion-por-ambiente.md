# ADR 003 - Separar Configuracion Por Ambiente

## Estado
Aprobado

## Contexto
El frontend actual apunta por defecto a un backend de produccion y no presenta una separacion clara de environments para desarrollo, pruebas y produccion.

Esto incrementa riesgo operativo, complica pruebas y hace mas fragil la entrega continua.

## Decision
Adoptar una estrategia de environments con separacion explicita de configuracion por ambiente:
- `local`
- `dev`
- `test`
- `prod`

Ademas:
- el frontend no debe apuntar a produccion por defecto en desarrollo
- la base URL del backend debe resolverse por ambiente
- los builds deben ser reproducibles y trazables por configuracion

## Consecuencias
Positivas:
- menor riesgo de operar sobre datos reales en desarrollo
- mejor integracion con CI/CD
- comportamiento mas predecible por ambiente

Negativas:
- requiere reorganizar `angular.json`, environments y proceso de build
