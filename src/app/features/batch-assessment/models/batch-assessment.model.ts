export interface BatchAssesment{
    id: string;
    country: string;
    authorityReference: string;
    seriousnessOfCase: string;
    event: null | string;
    productName: string;
    substanceName: string;
    dosageForm: string;
    administrationRoute: string;
    narrative: null | string;
    outcome: string;
}
