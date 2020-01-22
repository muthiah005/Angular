import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { EventManagerService } from './services/EventManagerService';
import { LoadingBarService } from './services/LoadingBarService';
import { TaskApp } from './TaskApp';
import { DataService } from './services/DataService';
import { HomeComponent } from './components/HomeComponent';
import { DashBoardComponent } from './components/DashBoardComponent';
import { ProductConfigComponent } from './components/ProductConfigComponent';
import { UserAccountsComponent } from './components/UserAccountsComponent';
import { LogComponent } from './components/LogComponent';
import { MoreComponent } from './components/MoreComponent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabComponent } from './components/TabComponent';
import { TaskAppHeader } from './components/TaskAppHeader';
import { TabService } from './services/TabService';
import { DirectAccessGuard } from './services/DirectAccessGuard';

@NgModule({
  declarations: [
    TaskApp,
    TaskAppHeader,
    HomeComponent,
    DashBoardComponent,
    ProductConfigComponent,
    UserAccountsComponent,
    LogComponent,
    MoreComponent,
    TabComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    EventManagerService,
    LoadingBarService,
    DirectAccessGuard,
    TabService,
    DataService
  ],
  bootstrap: [TaskApp]
})
export class AppModule { }
