import { ValidationState } from '../../lib/actions'

export const ErrorMessage = (props: {
  fieldId: keyof NonNullable<ValidationState['errors']>
  validationState: ValidationState
}) => {
  const { fieldId, validationState } = props
  if (!validationState.errors?.[fieldId]) {
    return null
  }

  return (
    <div id="customer-error" aria-live="polite" aria-atomic="true">
      {validationState.errors[fieldId].map(errorMessage => (
        <p className="mt-2 text-sm text-red-500" key={errorMessage}>
          {errorMessage}
        </p>
      ))}
    </div>
  )
}
