
import { applicationConfig, Meta, StoryObj } from '@storybook/angular';

import { moduleMetadata } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { importProvidersFrom } from '@angular/core';
import { NgxsModule, Store } from '@ngxs/store';
import { TasksState } from '../../state/task.state';

import PureInboxScreenComponent from './pure-inbox-screen.component';
import TaskComponent from '../task/task.component';

const meta: Meta<PureInboxScreenComponent> = {
    component: PureInboxScreenComponent,
    title: 'PureInboxScreen',
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [CommonModule, TaskComponent],
        }),
        applicationConfig({
            providers: [Store, importProvidersFrom(NgxsModule.forRoot([TasksState]))],
        }),
    ],
};

export default meta;
type Story = StoryObj<PureInboxScreenComponent>;

export const Default: Story = {};

export const Error: Story = {
    args: {
        error: true,
    },
};
