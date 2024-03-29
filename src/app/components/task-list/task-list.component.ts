import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ArchiveTask, PinTask } from '../../state/task.state';
import { Observable } from 'rxjs';
import PureTaskListComponent from '../pure-task-list/pure-task-list.component';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    standalone: true,
    imports: [
        PureTaskListComponent,
        AsyncPipe,
    ],
})
export default class TaskListComponent {
    tasks$?: Observable<any>;

    constructor(private store: Store) {
        this.tasks$ = store.select((state) => state.taskbox.tasks);
    }

    /**
     * Component method to trigger the archiveTask event
     */
    archiveTask(id: string) {
        this.store.dispatch(new ArchiveTask(id));
    }

    /**
     * Component method to trigger the pinTask event
     */
    pinTask(id: string) {
        this.store.dispatch(new PinTask(id));
    }
}
