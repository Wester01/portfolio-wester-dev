import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  HostListener,
  inject,
  signal
} from '@angular/core';

import { enlacesNavegacion } from '../../datos/enlaces.data';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html'
})
export class CabeceraComponent {
  private destroyRef = inject(DestroyRef);
  private entradasSeccion = new Map<string, IntersectionObserverEntry>();

  enlaces = enlacesNavegacion;
  menuAbierto = signal(false);
  enlaceActivo = signal('#inicio');

  textoMenu = computed(() => (this.menuAbierto() ? 'Cerrar menú' : 'Abrir menú'));

  constructor() {
    afterNextRender(() => {
      this.actualizarEnlaceActivoDesdeHash();

      const actualizarHash = () => this.actualizarEnlaceActivoDesdeHash();

      const cerrarEnEscritorio = () => {
        if (window.innerWidth >= 768) {
          this.cerrarMenu();
        }
      };

      const destruirScrollSpy = this.configurarScrollSpy();

      window.addEventListener('hashchange', actualizarHash);
      window.addEventListener('resize', cerrarEnEscritorio);

      this.destroyRef.onDestroy(() => {
        window.removeEventListener('hashchange', actualizarHash);
        window.removeEventListener('resize', cerrarEnEscritorio);
        destruirScrollSpy();
      });
    });
  }

  @HostListener('document:keydown.escape')
  cerrarConEscape(): void {
    this.cerrarMenu();
  }

  alternarMenu(): void {
    this.menuAbierto.update((abierto) => !abierto);
  }

  cerrarMenu(): void {
    this.menuAbierto.set(false);
  }

  seleccionarEnlace(destino: string): void {
    this.enlaceActivo.set(destino);
    this.cerrarMenu();
  }

  estaActivo(destino: string): boolean {
    return this.enlaceActivo() === destino;
  }

  private actualizarEnlaceActivoDesdeHash(): void {
    this.enlaceActivo.set(window.location.hash || '#inicio');
  }

  private configurarScrollSpy(): () => void {
    if (!('IntersectionObserver' in window)) {
      return () => undefined;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          this.entradasSeccion.set(`#${entrada.target.id}`, entrada);
        }

        const entradaActiva = Array.from(this.entradasSeccion.values())
          .filter((entrada) => entrada.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          )[0];

        if (entradaActiva) {
          this.enlaceActivo.set(`#${entradaActiva.target.id}`);
        }
      },
      {
        root: null,
        rootMargin: '-32% 0px -56% 0px',
        threshold: [0, 0.1, 0.25, 0.5]
      }
    );

    for (const enlace of this.enlaces) {
      const id = enlace.destino.replace('#', '');
      const seccion = document.getElementById(id);

      if (seccion) {
        observador.observe(seccion);
      }
    }

    return () => observador.disconnect();
  }
}