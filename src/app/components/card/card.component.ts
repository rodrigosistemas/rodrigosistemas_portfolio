import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

import { NzCardModule } from 'ng-zorro-antd/card';

import { Card } from '../../models/card';

@Component({
  selector: 'nz-card-basic',
  imports: [NzCardModule, CommonModule, NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class NzCardBasicComponent {

  cards: Card[] = [
    {
      id: 1,
      title: 'Dashboard en Excel Osiptel',
      image: 'images/thumbnails/desarrollo&data/ExcelDashBoardOsiptel.png',
      description: 'Elaboré un dashboard interactivo en Excel utilizando el dataset "Tráfico de telefonía de larga distancia por tipo y empresa operadora" proporcionado por OSIPTEL recogido de la Plataforma Nacional de Datos Abiertos del Gobierno del Perú.',
      area: 'Desarrollo de Software & Datos'
    },
    {
      id: 2,
      title: 'Análisis de Datos de Ventas Amazon',
      image: 'images/thumbnails/desarrollo&data/AmazonDataAnalysis.png',
      description: 'Realicé un análisis descriptivo de un dataset de dominio público obtenido de la plataforma Kaggle sobre ventas de Amazon. Utilicé SQL Server para la importación y limpieza de datos, generando KPIs clave para la visualización final en POWER BI.',
      area: 'Desarrollo de Software & Datos'
    },
    {
      id: 3,
      title: 'Core Banking System en Java',
      image: 'images/thumbnails/desarrollo&data/JavaCoreBankingSystem.png',
      description: 'Desarrollé una réplica en Java 21 de un core bancario básico, utilizando principios de Programación Orientada a Objetos (POO). Permite gestionar diferentes tipos de cuentas, realizar transacciones (depósitos, retiros y transferencias) por último generar reportes detallados.',
      area: 'Desarrollo de Software & Datos'
    },
    {
      id: 4,
      title: 'Testing de API REST Spring Boot',
      image: 'images/thumbnails/programacionweb/APITestingSpringBoot.png',
      description: 'Evalué el rendimiento y la seguridad de una API REST en Spring Boot. Se realizaron pruebas de carga y estrés para medir su comportamiento bajo alta concurrencia y se validaron vulnerabilidades comunes.',
      area: 'Programación Web'
    },
    {
      id: 5,
      title: 'Pipeline CI/CD en Jenkins para E-commerce',
      image: 'images/thumbnails/programacionweb/Ecommerce-fullstack.png',
      description: 'Implementé un pipeline CI/CD en Jenkins para un e-commerce con Angular y Spring Boot, automatizando la integración, pruebas y despliegue continuo. El enfoque DevOps permitió optimizar tiempos de entrega y asegurar la calidad del software en cada iteración.',
      area: 'Programación Web'
    },
    {
      id: 6,
      title: 'Sistema de Gestión A One Taxi',
      image: 'images/thumbnails/programacionweb/SistemaGestionAOne.png',
      description: 'Desarrollé en equipo una plataforma web para Aone Taxi que centraliza operaciones y finanzas, integrando cobros, pagos de conductores, egresos, inventario, control de usuarios y reportes, reemplazando WhatsApp/Yape con una gestión estructurada para escalar el negocio.',
      area: 'Programación Web'
    },
    {
      id: 7,
      title: 'Sitio web Credithome Inmobiliaria',
      image: 'images/thumbnails/programacionweb/SitiowebCredithome.png',
      description: 'Desarrollé un sitio web corporativo para la inmobiliaria Credithome, orientado a mostrar sus servicios y proyectos de manera profesional. Lo que facilita la comunicación con clientes y la presencia digital de la empresa.',
      area: 'Programación Web'
    },
    {
      id: 8,
      title: 'Hardening de un servidor Linux según CIS',
      image: 'images/thumbnails/ciberseguridad/LinuxCIS.png',
      description: 'Reforcé un servidor Linux aplicando las guías básicas CIS Benchmarks, deshabilitando accesos inseguros, configurando contraseñas robustas, firewall y servicios mínimos, documentando cada ajuste para garantizar seguridad y cumplimiento en entornos productivos.',
      area: 'Ciberseguridad'
    },
    {
      id: 9,
      title: 'Auditoría de Seguridad en WordPress',
      image: 'images/thumbnails/ciberseguridad/AuditoriaSeguridadWordpress.png',
      description: 'Este proyecto consistió en realizar una auditoría de seguridad sobre un sitio WordPress utilizando herramientas como WPScan. El objetivo fue identificar vulnerabilidades en plugins, temas y demás configuraciones, evaluando la exposición a ataques comunes.',
      area: 'Ciberseguridad'
    },
    {
      id: 10,
      title: 'Ataque y Defensa de una Red Corporativa',
      image: 'images/thumbnails/ciberseguridad/SimulacionAtaqueDefensa.png',
      description: 'Implementé una réplica de una red corporativa en AWS utilizando Terraform para aprovisionar una DMZ con VLANs, firewall pfSense y zonas segmentadas. Realicé pruebas de validación de controles de red (firewall, IDS, VLANs) para confirmar su efectividad en escenarios de riesgo.',
      area: 'Ciberseguridad'
    },

  ];


}


