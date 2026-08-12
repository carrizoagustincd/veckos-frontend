# Documentacion Tecnica Frontend

## Proposito
Esta carpeta centraliza la documentacion tecnica de `veckos-frontend`.

Objetivos:
- documentar la arquitectura objetivo del frontend
- alinear el frontend con el nuevo dominio multi-tenant
- registrar decisiones de diseño y organizacion

## Estructura
- `adr/`
  - decisiones arquitectonicas registradas
- `architecture/`
  - arquitectura objetivo del frontend
- `integration/`
  - alineacion del frontend con backend y contratos principales
- `environments/`
  - estrategia de entornos, builds y despliegue

## Documentos Iniciales
- `adr/001-adoptar-documentacion-tecnica-estructurada.md`
- `adr/002-reorganizar-frontend-por-features-y-dominios.md`
- `adr/003-separar-configuracion-por-ambiente.md`
- `architecture/target-architecture.md`
- `integration/domain-alignment.md`
- `environments/environment-strategy.md`

## Convenciones
- Todo el contenido se redacta en español.
- Nombres tecnicos del codigo, clases, DTOs, rutas, endpoints o comandos se conservan en su idioma original cuando mejora la precision.
- Las decisiones de estructura, autenticacion, integracion con backend y entornos deben registrarse como ADR.
