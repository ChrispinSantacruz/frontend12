import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ContentService } from '../content.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  formData: any = {
    type: 'movie', // Valor inicial por defecto
    title: '',
    poster_url: '',
    trailer_url: '',
    duration_minutes: null,
    num_episodes: null
  };

  constructor(private contentService: ContentService, private router: Router) {}

  onSubmit() {
    this.contentService.createContent(this.formData).subscribe(
      (response: any) => {
        console.log('Content created successfully:', response);
        // Redirige a la página deseada después de la creación exitosa
        this.router.navigateByUrl('/contents'); // Ejemplo: redirige a la lista de contenidos
      },
      (error: any) => {
        console.error('Error creating content:', error);
        // Aquí puedes manejar el error según tus necesidades, por ejemplo, mostrar un mensaje de error al usuario
      }
    );
  }
}
