import {OnDestroy} from '@angular/core';

export interface IUIBase extends OnDestroy{
    ngOnDestroy(): void
}