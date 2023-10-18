import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'technical-test-angular'
    fact: string = ""
    imageUrl: string = ""

    ngOnInit() {
        this.fetchFact()
    }

    fetchFact() {
        fetch('https://catfact.ninja/fact')
            .then(res => res.json())
            .then(data => {
                const {fact} = data
                this.fact = fact
                this.fetchImage(this.fact)
            })
    }

    fetchImage(fact: string) {
        const firstWord = fact.split(' ', 3).join(' ');
        fetch(`https://cataas.com/cat/says/${firstWord}`)
            .then(response => {
                const {url} = response
                this.imageUrl = url
            })
    }
}
