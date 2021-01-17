export default function PostTitle({ children }) {
  return (
    <h1 className="text-6xl md:text-7xl lg:font-sans tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-center">
      {children}
    </h1>
  )
}
