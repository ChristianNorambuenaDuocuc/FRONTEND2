function CampoFormulario({
  nombre,
  etiqueta,
  valor,
  alCambiar,
  error,
  placeholder,
  tipoInput = 'text',
minimo
}) {
  return (
    <div>
      <label htmlFor={nombre} className="mb-2 block font-medium">
        {etiqueta}
      </label>

      <input
        id={nombre}
        type={tipoInput}
        min={minimo}
        name={nombre}
        value={valor}
        onChange={alCambiar}
        required
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${nombre}-error` : undefined}
        className="w-full rounded-lg border border-gray-300 p-3"
        placeholder={placeholder}
      />

      {error && (
        <p id={`${nombre}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

export default CampoFormulario