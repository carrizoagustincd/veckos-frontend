# ADR 001 - Adoptar Documentacion Tecnica Estructurada

## Estado
Aprobado

## Contexto
El frontend no contaba con documentacion tecnica estructurada para registrar arquitectura, decisiones y alineacion con backend.

## Decision
Adoptar una estructura `docs/` con estas categorias iniciales:
- `adr/`
- `architecture/`
- `integration/`

## Consecuencias
Positivas:
- facilita evolucion coordinada con backend
- mejora trazabilidad tecnica
- ayuda a ordenar refactors mayores

Negativas:
- requiere mantener documentacion sincronizada con decisiones reales
