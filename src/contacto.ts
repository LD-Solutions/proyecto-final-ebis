const form = document.querySelector("form") as HTMLFormElement | null;
const emailInput = document.getElementById("email") as HTMLInputElement | null;
const telefonoInput = document.getElementById(
  "telefono"
) as HTMLInputElement | null;
const emailError = document.querySelector(
  "#email + span.error"
) as HTMLElement | null;
const telefonoError = document.querySelector(
  "#telefono + span.error"
) as HTMLElement | null;
const notificacion = document.getElementById("notificacion") as HTMLElement | null;

function clearError(error: HTMLElement) {
  error.textContent = "";
  error.classList.remove("active");
}

function showEmailError(emailInput: HTMLInputElement, emailError: HTMLElement) {
  if (emailInput.validity.valueMissing) {
    emailError.textContent = "Necesitas poner un correo válido.";
  } else if (emailInput.validity.typeMismatch) {
    emailError.textContent =
      "El valor introducido no es un correo electrónico.";
  } else if (emailInput.validity.tooShort) {
    emailError.textContent = `El email debe tener al menos ${emailInput.minLength} caracteres; has introducido ${emailInput.value.length}.`;
  }
  emailError.classList.add("active");
}

function showTelefonoError(telefonoInput: HTMLInputElement, telefonoError: HTMLElement) {
  if (telefonoInput.validity.valueMissing) {
    telefonoError.textContent = "El teléfono es obligatorio.";
  } else if (telefonoInput.validity.patternMismatch) {
    telefonoError.textContent =
      "Solo se permiten números y el símbolo '+' al principio.";
  } else if (telefonoInput.value.replace(/\D/g, "").length < 9) {
    telefonoError.textContent = "El teléfono debe tener al menos 9 dígitos.";
  }
  telefonoError.classList.add("active");
}

if (form && emailInput && telefonoInput && emailError && telefonoError) {
  emailInput.addEventListener("input", () => {
    emailInput.validity.valid ? clearError(emailError) : showEmailError(emailInput, emailError);
  });

  telefonoInput.addEventListener("input", () => {
    telefonoInput.validity.valid
      ? clearError(telefonoError)
      : showTelefonoError(telefonoInput, telefonoError);
  });

  form.addEventListener("submit", (event) => {
    let valid = true;

    if (!emailInput.validity.valid) {
      showEmailError(emailInput, emailError);
      valid = false;
    }

    if (!telefonoInput.validity.valid) {
      showTelefonoError(telefonoInput, telefonoError);
      valid = false;
    }

    if (!valid) event.preventDefault();

    if (emailInput.validity.valid && telefonoInput.validity.valid) {
      window.alert("Formulario enviado correctamente.");
    }
  });
}
