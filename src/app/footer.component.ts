import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template:
    `
    <footer>
        Crafted with <i class="fa fa-heart" aria-hidden="true"></i> & <i class="fa fa-coffee" aria-hidden="true"></i>
        <br>
        <a href="{{url}}" target="_blank">{{name}}</a>
    </footer>
    `
})

export class FooterComponent{
    name = 'Anson Cheung';
    url = 'https://www.linkedin.com/in/anson-cheung-576b006b';
}