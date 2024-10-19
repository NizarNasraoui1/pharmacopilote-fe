import { Component } from '@angular/core';
import { DataEntryHelperViewComponent } from '../data-entry-helper/data-entry-helper-view.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pharmacopilote-create-data-entry-helper',
  standalone: true,
  imports: [DataEntryHelperViewComponent,InputTextareaModule,ButtonModule],
  templateUrl: './create-data-entry-helper.component.html',
  styleUrl: './create-data-entry-helper.component.scss'
})
export class CreateDataEntryHelperComponent {
    data = {
        "reporter": {
        "function": "consumer or other non health professional",
        "country": "unknown"
        },
        "patient": {
        "initials": "unknown",
        "sex": "F",
        "age": "unknown",
        "ageGroup": "unknown"
        },
        "medicalHistory": [
        {
        "reportedHistory": "Douleurs musculaires",
        "historyCodedWithMedDRA": {
        "llt": "Muscle pain",
        "pt": "Myalgia",
        "soc": "Musculoskeletal and connective tissue disorders"
        },
        "continued": "unknown",
        "dateOfStart": "unknown",
        "dateOfEnd": "unknown"
        }
        ],
        "drugs": {
        "concomitantDrugs": [],
        "suspectDrugs": [
        {
        "substanceName": "Lumirelax",
        "actionTaken": "drug discontinued",
        "drugStartDate": "unknown",
        "drugEndDate": "unknown",
        "durationOfAdministration": "unknown",
        "batchNumber": "unknown",
        "drugForm": "unknown",
        "routeOfAdministration": "unknown",
        "drugDose": "unknown",
        "posology": "as needed"
        }
        ]
        },
        "events": [
        {
        "reportedEventNative": "Problèmes de vision",
        "reportedEventTranslated": "Vision problems",
        "countryOfOccurrence": "unknown",
        "eventCodedWithMedDRA": {
        "llt": "Vision blurred",
        "pt": "Vision blurred",
        "soc": "Eye disorders"
        },
        "outcome": "unknown",
        "eventOnsetDate": "unknown",
        "eventEndDate": "unknown",
        "eventDuration": "unknown",
        "seriousnessCriteria": "unknown"
        },
        {
        "reportedEventNative": "Sécheresse buccale",
        "reportedEventTranslated": "Dry mouth",
        "countryOfOccurrence": "unknown",
        "eventCodedWithMedDRA": {
        "llt": "Dry mouth",
        "pt": "Dry mouth",
        "soc": "Gastrointestinal disorders"
        },
        "outcome": "unknown",
        "eventOnsetDate": "unknown",
        "eventEndDate": "unknown",
        "eventDuration": "unknown",
        "seriousnessCriteria": "unknown"
        },
        {
        "reportedEventNative": "Douleurs dans les jambes",
        "reportedEventTranslated": "Leg pain",
        "countryOfOccurrence": "unknown",
        "eventCodedWithMedDRA": {
        "llt": "Leg pain",
        "pt": "Pain in extremity",
        "soc": "Musculoskeletal and connective tissue disorders"
        },
        "outcome": "unknown",
        "eventOnsetDate": "unknown",
        "eventEndDate": "unknown",
        "eventDuration": "unknown",
        "seriousnessCriteria": "unknown"
        },
        {
        "reportedEventNative": "Douleurs à la tête",
        "reportedEventTranslated": "Headache",
        "countryOfOccurrence": "unknown",
        "eventCodedWithMedDRA": {
        "llt": "Headache",
        "pt": "Headache",
        "soc": "Nervous system disorders"
        },
        "outcome": "unknown",
        "eventOnsetDate": "unknown",
        "eventEndDate": "unknown",
        "eventDuration": "unknown",
        "seriousnessCriteria": "unknown"
        },
        {
        "reportedEventNative": "Coupé les forces",
        "reportedEventTranslated": "Loss of strength",
        "countryOfOccurrence": "unknown",
        "eventCodedWithMedDRA": {
        "llt": "Loss of strength",
        "pt": "Asthenia",
        "soc": "General disorders and administration site conditions"
        },
        "outcome": "unknown",
        "eventOnsetDate": "unknown",
        "eventEndDate": "unknown",
        "eventDuration": "unknown",
        "seriousnessCriteria": "unknown"
        }
        ],
        "labTests": []
        };

        constructor(private router:Router,private activedRoute:ActivatedRoute){}

        submit() {
            this.router.navigate(['/data-entry-helper/view'], { state: { data: this.data } });
        }
}
