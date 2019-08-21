import "bootstrap/dist/css/bootstrap.min.css"
import '../dist/style.css'

import './util'
import { add } from "./util";
import { interval } from 'rxjs'
import { pipe, take, map } from 'rxjs/operators'

console.log('Application started')

add.title('Simple Demo')
add.footer('Copyrights @ Code-Hooks')
add.line();

interval(1000)
    .pipe(
        take(10),
        map(v => v + 74)
    ).subscribe(add.circle)