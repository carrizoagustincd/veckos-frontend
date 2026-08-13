import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotificacionService } from '../services/notification.service';

export const roleGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const notificationService = inject(NotificacionService);
  const requiredRoles = route.data['roles'] as string[];

  if (!authService.isLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }

  if (!requiredRoles || requiredRoles.length === 0) {
    return true;
  }

  if (authService.hasAnyRole(requiredRoles)) {
    return true;
  }

  notificationService.error('No tiene permisos para acceder a esa seccion.');
  router.navigate(['/dashboard']);
  return false;
}
