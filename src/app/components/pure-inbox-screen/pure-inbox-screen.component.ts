import { Component, Input } from '@angular/core';
import TaskListComponent from '../task-list/task-list.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-pure-inbox-screen',
    templateUrl: './pure-inbox-screen.component.html',
    standalone: true,
    imports: [
        TaskListComponent,
        NgIf,
    ],
})
export default class PureInboxScreenComponent {
    @Input() error: any;
}
