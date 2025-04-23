declare const form: HTMLFormElement | null;
declare const emailInput: HTMLInputElement | null;
declare const telefonoInput: HTMLInputElement | null;
declare const emailError: HTMLElement | null;
declare const telefonoError: HTMLElement | null;
declare const notificacion: HTMLElement | null;
declare function clearError(error: HTMLElement): void;
declare function showEmailError(emailInput: HTMLInputElement, emailError: HTMLElement): void;
declare function showTelefonoError(telefonoInput: HTMLInputElement, telefonoError: HTMLElement): void;
