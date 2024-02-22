import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../../models/task.model';
import TaskComponent from '../task/task.component';
import { NgForOf, NgIf } from '@angular/common';

@Component({
    selector: 'app-pure-task-list',
    standalone: true,
    templateUrl: './pure-task-list.component.html',
    imports: [
        NgIf,
        NgForOf,
        TaskComponent,
    ],
})
export default class PureTaskListComponent {

    /**
     * @ignore
     * Component property to define ordering of tasks
     */
    tasksInOrder: Task[] = [];

    @Input() loading = false;

    // tslint:disable-next-line: no-output-on-prefix
    @Output() onPinTask: EventEmitter<string> = new EventEmitter();

    // tslint:disable-next-line: no-output-on-prefix
    @Output() onArchiveTask: EventEmitter<string> = new EventEmitter();

    @Input()
    set tasks(arr: Task[]) {
        const initialTasks = [
            ...arr.filter(t => t.state === 'TASK_PINNED'),
            ...arr.filter(t => t.state !== 'TASK_PINNED'),
        ];
        const filteredTasks = initialTasks.filter(
            t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
        );
        this.tasksInOrder = filteredTasks.filter(
            t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
        );
    }
}
