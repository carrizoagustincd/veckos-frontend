# Estrategia De Entornos Frontend

## Objetivo
Definir como debe configurarse y desplegarse `veckos-frontend` en `local`, `dev`, `test` y `prod`.

## Principios
- configuracion separada por ambiente
- no apuntar a produccion en desarrollo local
- builds reproducibles
- contratos backend alineados con el ambiente activo

## Ambientes

### local
Uso:
- desarrollo individual
- pruebas manuales locales

Caracteristicas recomendadas:
- backend local o dev segun necesidad
- source maps habilitados
- configuracion de debugging activa

### dev
Uso:
- ambiente compartido para QA temprana e integracion

Caracteristicas recomendadas:
- apunta al backend `dev`
- build estable para pruebas funcionales
- observabilidad web basica si se incorpora mas adelante

### test
Uso:
- validaciones automatizadas y pipelines

Caracteristicas recomendadas:
- configuracion dedicada para CI
- endpoints controlados para pruebas automatizadas
- flags que faciliten ejecucion de tests de UI si se agregan en el futuro

### prod
Uso:
- aplicacion productiva publicada

Caracteristicas recomendadas:
- optimizaciones activadas
- source maps segun politica operativa
- backend `prod`
- configuracion endurecida y controlada

## Estructura Recomendada De Environments
Se recomienda evolucionar desde el esquema actual a una estructura explicita como:
- `src/environments/environment.local.ts`
- `src/environments/environment.dev.ts`
- `src/environments/environment.test.ts`
- `src/environments/environment.prod.ts`

Notas:
- mientras exista el archivo historico `entironments.ts`, debe planificarse una migracion ordenada para corregir el typo sin romper imports intermedios
- esa correccion deberia tratarse como una tarea tecnica controlada, no como cambio incidental

## Configuracion Minima Por Ambiente
Campos recomendados:
- `production`
- `apiBaseUrl`
- `appName`
- `enableDebugTools`
- `logLevel` si luego se necesita

## Angular Build Y Deploy

### Recomendacion
- mapear configuraciones de `angular.json` a `local`, `dev`, `test` y `prod`
- usar reemplazo de archivo de environment por configuracion

### Pipeline minimo recomendado
1. instalar dependencias
2. compilar con configuracion del ambiente objetivo
3. correr tests unitarios
4. publicar artefacto estatico

## Integracion Con Backend
- `local` apunta hoy por defecto a `http://localhost:8080` y debe mantenerse asi hasta formalizar la estrategia completa de environments
- `dev` debe apuntar al backend `dev`
- `test` debe apuntar al backend de pruebas o entorno controlado del pipeline
- `prod` debe apuntar solo al backend de produccion

## Seguridad De Cliente
- no persistir configuracion sensible en el frontend
- no asumir permisos solo por UI; el backend sigue siendo autoridad final
- el `jwt.interceptor` debe limitar envio de tokens al host/API esperados

## Calidad
- agregar tests unitarios para guards, interceptores y auth como minimo
- evitar `any` y contratos debiles en servicios
- usar `HttpParams` para requests con query params
