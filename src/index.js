import "bootstrap/dist/css/bootstrap.min.css"
import '../dist/style.css'

import './util'
import { add } from "./util";
import { interval } from 'rxjs'
import { pipe, take, map, tap } from 'rxjs/operators'

console.log('Application started')

let width = 10;

add.title('Simple Demo')
add.footer('Copyrights @ Code-Hooks')
add.line({
    x1: 20,
    x2: 500,
    y1: 50,
    y2: 50,
    stroke: 'black',
    strokeWidth: 2
});

add.line({
    x1: 20,
    x2: 500,
    y1: 100,
    y2: 100,
    stroke: 'black',
    strokeWidth: 2
});

interval(1000)
    .pipe(
        take(10),
        tap( v => {
            console.log(v)
            add.circle({
                value: v,
                cx: v,
                cy: 50,
                r: 10,
                stroke: 'black',
                fill: 'white',
                width: width
            })
        }),
        map( v => v * 10)
    ).subscribe( v => {
        add.circle({
            cx: v/10,
            cy: 100,
            r: 10,
            stroke: 'black',
            fill: 'white',
            value: v,
            width: width
        })
    })