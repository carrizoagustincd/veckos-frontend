---
description: Verifica el frontend Angular con la compilacion real del proyecto.
agent: frontend-angular
---

Verifica el frontend de este repo.

Pasos:
1. Revisa si el pedido del usuario menciona archivos o areas especificas dentro de `veckos-frontend/`.
2. Ejecuta la verificacion desde `veckos-frontend/` usando `npm run build`.
3. Si falla, identifica el error relevante y explica que archivo o contrato parece roto.
4. Si el usuario pidio cambios antes de verificar, implementalos y luego corre la build.

Contexto adicional del repo:
- No existe script de lint separado.
- `ng build` es la mejor verificacion disponible para compilacion/tipos.

Pedido adicional del usuario: $ARGUMENTS
