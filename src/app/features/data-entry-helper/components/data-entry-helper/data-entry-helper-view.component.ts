import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'pharmacopilote-view-data-entry-helper',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './data-entry-helper-view.component.html',
  styleUrl: './data-entry-helper-view.component.scss'
})
export class DataEntryHelperViewComponent implements OnInit{
    data;
    ngOnInit(): void {
        this.data = history.state.data;
      }
}
