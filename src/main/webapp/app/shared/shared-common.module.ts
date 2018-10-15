import { NgModule } from '@angular/core';

import { EnigmagieSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [EnigmagieSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [EnigmagieSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class EnigmagieSharedCommonModule {}
