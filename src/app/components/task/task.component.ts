import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: `./task.component.html`,
    imports: [
        NgIf,
    ],
})
export default class TaskComponent {
    /**
     * The shape of the task object
     */
    @Input() task?: Task;

    @Output()
    onPinTask = new EventEmitter<string>();

    @Output()
    onArchiveTask = new EventEmitter<string>();

    /**
     * @ignore
     * Component method to trigger the onPin event
     * @param id string
     */
    onPin(id: string) {
        this.onPinTask.emit(id);
    }
    /**
     * @ignore
     * Component method to trigger the onArchive event
     * @param id string
     */
    onArchive(id: string) {
        this.onArchiveTask.emit(id);
    }
}
