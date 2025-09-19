import { Component } from '@angular/core';

import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import type { IconDefinition } from '@ant-design/icons-angular';
import { InstagramOutline, GithubOutline, LinkedinOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [InstagramOutline, GithubOutline, LinkedinOutline];

@Component({
  selector: 'app-footer',
  imports: [NzIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  providers: [{ provide: NZ_ICONS, useValue: icons }]
})

export class FooterComponent {

}
