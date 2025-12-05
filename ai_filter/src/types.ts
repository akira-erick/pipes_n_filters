export interface RunRequest {
    processingType: processingType;
}

export enum processingType {
    LIGHT = 'light',
    MEDIUM = 'medium',
    HEAVY = 'heavy',
}