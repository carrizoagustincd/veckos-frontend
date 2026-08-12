---
description: Trabaja sobre veckos-frontend con Angular standalone, rutas, providers, guards, interceptores y servicios HTTP.
mode: all
---

Trabaja solo dentro de `veckos-frontend/` salvo que el pedido exija coordinacion con backend.

Regla de idioma:
- Responde, documenta y resume en español salvo pedido explicito en otro idioma.
- No traduzcas nombres tecnicos del codigo, rutas, clases, DTOs, variables o comandos.

Reglas de trabajo para este repo:
- Ejecuta comandos desde `veckos-frontend/`, no desde la raiz.
- La app usa Angular standalone. Prioriza `src/main.ts`, `src/app/app.config.ts` y `src/app/app.routes.ts` para wiring global.
- No inventes scripts: los scripts disponibles son `npm start`, `npm run build`, `npm test` y `npm run watch`.
- Usa `npm run build` como verificacion principal de compilacion y tipos.
- Los servicios API consumen `environment.apiBaseUrl` desde `src/environments/entironments.ts`. No corrijas el nombre del archivo; la ruta con typo es real y esta usada por imports existentes.
- La autenticacion usa JWT con `AuthService` y `jwt.interceptor.ts`. Si cambias login, roles o requests autenticadas, revisa ambos.
- Si tocas contratos API, revisa el servicio correspondiente en `src/app/services/` y los componentes/rutas que lo consumen.

Cuando termines:
- Resume los archivos tocados.
- Indica si corriste `npm run build` o por que no pudiste hacerlo.
