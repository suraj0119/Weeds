interface FormContainerProps {
  title: string
  formUrl: string
  description?: string
  minHeight?: string
  className?: string
}

export default function FormContainer({
  title,
  formUrl,
  description,
  minHeight = "600px",
  className = "",
}: FormContainerProps) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
      <h3 className="text-xl font-bold font-heading text-[#3C3B6E] mb-4 text-center">{title}</h3>
      {description && <p className="text-gray-700 text-center mb-6">{description}</p>}
      <div className="w-full overflow-hidden rounded-lg">
        <iframe
          src={formUrl}
          style={{
            border: 0,
            minHeight,
            width: "100%",
          }}
          className="w-full transition-all duration-300"
          title={title}
        >
          Loading…
        </iframe>
      </div>
    </div>
  )
}
