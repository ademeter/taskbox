import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import PureInboxScreenComponent from '../pure-inbox-screen/pure-inbox-screen.component';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-inbox-screen',
    templateUrl: './inbox-screen.component.html',
    standalone: true,
    imports: [
        PureInboxScreenComponent,
        AsyncPipe,
    ],
})
export default class InboxScreenComponent {
    error$: Observable<boolean>;
    constructor(private store: Store) {
        this.error$ = store.select((state) => state.taskbox.error);
    }
}
