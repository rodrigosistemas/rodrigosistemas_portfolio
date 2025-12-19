import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import type { IconDefinition } from '@ant-design/icons-angular';
import { InstagramOutline, GithubOutline, LinkedinOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [InstagramOutline, GithubOutline, LinkedinOutline];

@Component({
  selector: 'app-footer',
  imports: [NzIconModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  providers: [{ provide: NZ_ICONS, useValue: icons }]
})

export class FooterComponent {

}
