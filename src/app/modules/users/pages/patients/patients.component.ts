import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({ opacity: 1, transform: 'scale(1, 1)' })),
      state('closed', style({ opacity: 0, transform: 'scale(0.95, 0.95)' })),
      transition('open => closed', [animate('100ms ease-in')]),
      transition('closed => open', [animate('200ms ease-out')]),
    ]),
  ]
})
export class PatientsComponent implements OnInit {

  patients = [
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },{
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },{
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    },
    {
      id: 1,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Belaiouer',
      surname: 'mohamed',
      birthDate: new Date(1983, 8, 16),
      phone: '+07 456 890 678',
      email: 'Belaiouer@gmail.com',
      status: 'inactif'
    }
  ]

  searchForm: FormGroup = this.fb.group({
    search: ['', Validators.required]
  })

  filters = {
    perPage: 10,
  }

  perPage: number = 10;
  activity: "actif" | "inactif" = "actif";

  perPageRange: number[] = [10, 20, 30, 40, 50];
  activitiesRange: string[] = ["actif", "inactif"];

  search!: string;

  loading: boolean = true;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    setTimeout(() => this.loading = !this.loading, 3000);
  }

  chang() {
    console.log(this.searchForm.getRawValue());
    console.log(this.activity);
    console.log(this.perPage);
  }

  onPageChange(value: number) {
    this.filters = Object.assign({}, {...this.filters, perPage: this.perPage})
    console.log(this.filters);
    console.log(this.patients.length);
  }

  handlePageSizeChange(event: any): void {
    this.filters = Object.assign(
      {},
      { ...this.filters, per_page: event.target.value, page: 1 }
    );
    console.log(this.filters);
  }

}
